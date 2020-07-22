import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Select, MenuItem, FormHelperText, makeStyles} from "@material-ui/core";
import { fetchCountries } from "../api";

const styles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '50%',
    minWidth: 248,
  },
  formHelperText: {
    textAlign: 'center',
  },
}));

const CountryPicker = ({ handleCountryChange }) => {
    const classes = styles();
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, key) => (
          <option key={key} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
      <FormHelperText className={classes.formHelperText}>
        Select Country
      </FormHelperText>
    </FormControl>
  );
};

export default CountryPicker;
