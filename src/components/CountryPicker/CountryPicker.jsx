import React, { useState, useEffect } from 'react';
import { FormControl, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { fetchCountries } from '../../api';

// import styles from './CountryPicker.module.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Countries = ({ handleCountryChange }) => {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Country</InputLabel>
      <Select
        defaultValue=""
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <MenuItem value="">Global</MenuItem>
        {countries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default Countries;
