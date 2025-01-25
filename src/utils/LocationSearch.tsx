import React, { useState } from 'react';
import axios from 'axios';
import Select, { SingleValue } from 'react-select';

// Define types for location data
type LocationValue = {
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
};

type OptionType = {
  value: LocationValue;
  label: string;
};

type LocationProps = {
  setSelectedLocation: (e: LocationValue | null) => void;
  selectedValue?: string;
};

type Feature = {
  properties: {
    city: string;
    state: string;
    country: string;
  };
  geometry: {
    coordinates: [number, number]; // Longitude, Latitude
  };
};

const LocationSearch: React.FC<LocationProps> = ({ setSelectedLocation, selectedValue }) => {
  // State definitions
  const [query, setQuery] = useState<string>('');
  const [options, setOptions] = useState<OptionType[]>([]);
  const [isTyped, setIsTyped] = useState(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch locations from Photon API
  const getLocation = async () => {
    if (!query.trim()) {
      setError('Please enter a valid search query');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://photon.komoot.io/api/', {
        params: {
          q: query,
          limit: 20, // Fetch up to 20 results
        },
      });

      if (response.data && response.data.features.length > 0) {
        const formattedOptions: OptionType[] = response.data.features.map((feature: Feature) => {
          const { city, state, country } = feature.properties;

          // Dynamically build the label based on available fields
          const label = [city, state, country].filter(Boolean).join(', ');

          return {
            value: {
              city: city || '',
              state: state || '',
              country: country || '',
              latitude: feature.geometry.coordinates[1],
              longitude: feature.geometry.coordinates[0],
            },
            label,
          };
        });

        setOptions(formattedOptions);
      } else {
        setError('No matching locations found');
      }
    } catch (err) {
      console.error('Error fetching locations:', (err as Error).message);
      setError('Failed to fetch locations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes in react-select
  const handleInputChange = (inputValue: string) => {
    setQuery(inputValue);
    if (inputValue.trim().length > 2) {
      getLocation(); // Fetch locations after typing at least 3 characters
    }
  };

  // Handle selection
  const handleSelection = (selectedOption: SingleValue<OptionType>) => {
    setSelectedLocation(selectedOption?.value || null);
  };

  return (
    <div className="w-full">
      {selectedValue && !isTyped ? (
        <input
          type="text"
          value={selectedValue}
          className="text-sm w-full border p-2 rounded-md"
          onChange={() => setIsTyped(true)}
        />
      ) : (
        <Select
          options={options}
          onInputChange={handleInputChange}
          onChange={handleSelection}
          placeholder="Enter location"
          isLoading={loading}
          noOptionsMessage={() => (error ? error : 'Start typing to search')}
          className="react-select-container text-xs"
          classNamePrefix="react-select"
        />
      )}
    </div>
  );
};

export default LocationSearch;
