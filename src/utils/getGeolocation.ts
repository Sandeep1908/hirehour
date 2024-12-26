import axios from "axios";

export const fetchGeoLocation = async () => {
    const respons = await axios.get('http://ipinfo.io/json?token=04aa7fcebf1581');
    return respons.data;
  };