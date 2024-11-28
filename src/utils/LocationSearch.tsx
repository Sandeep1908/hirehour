import React, { useState } from 'react';
import axios from 'axios';
import Select, { SingleValue } from 'react-select';

// Define the types for location data

type OptionType = {
  value: LocationValue;
  label: string;
};

type LocationProps = {
  setSelectedLocation: (e: LocationValue | null) => void;
};


type Feature ={
  properties: {
    name: string;
    city: string;
    state: string;
    country: string;
  };
  geometry: {
    coordinates: [number, number]; // Longitude, Latitude
  };
}

const LocationSearch: React.FC<LocationProps> = ({ setSelectedLocation }) => {
  // State definitions
  const [query, setQuery] = useState<string>('');
  const [options, setOptions] = useState<OptionType[]>([]);

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch locations from Photon API
  const getLocation = async () => {
    if (!query.trim()) {
      setError('Query parameter "q" is required');
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
        
        const formattedOptions: OptionType[] = response.data.features.map((feature:Feature) => ({
          value: {
            place: feature.properties.name || 'Unknown',
            city: feature.properties.city || 'N/A',
            state: feature.properties.state || 'N/A',
            country: feature.properties.country || 'N/A',
            latitude: feature.geometry.coordinates[1],
            longitude: feature.geometry.coordinates[0],
          },
          label: `${feature.properties.name || 'Unknown'}, ${
            feature.properties.city || 'N/A'
          }, ${feature.properties.state || 'N/A'}, ${feature.properties.country || 'N/A'}`,
        }));

        setOptions(formattedOptions);
      } else {
        setError('No matching locations found');
      }
    } catch (err) {
      console.error('Error fetching locations:', (err as Error).message);
      setError('Internal Server Error');
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
       
      <Select
        options={options}
        onInputChange={handleInputChange}
        onChange={handleSelection}
        placeholder="Enter location"
        isLoading={loading}
        noOptionsMessage={() => (error ? error : 'Start typing to search')}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default LocationSearch;
