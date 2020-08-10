import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Select, MenuItem, FormHelperText, makeStyles} from "@material-ui/core";
import { fetchCountries } from "../api";



const CountryPicker = ({ handleCountryChange }) => {
    
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className='col-4 offset-4 mb-5' style={{ border: '1px solid #abc',  borderRadius: '9px', padding: 'auto 5px'  }}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
        <option value="">Global</option>
        {fetchedCountries.map((country, key) => (
          <option key={key} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
