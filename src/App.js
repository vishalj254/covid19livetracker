import React, { useState, useEffect } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/index';
import styles from './App.module.css';

import image from './images/image.png';
import SocialLink from './components/Social/SocialLink';

function App() {
  const [data, setdata] = useState({});
  const [country, setcountry] = useState('');

  const readAllData = async () => {
    const result = await fetchData();
    setdata(result);
  };

  useEffect(() => {
    readAllData();
  }, []);

  const handleCountryChange = async (con) => {
    const result = await fetchData(con);

    setcountry(con);
    setdata(result);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
      <SocialLink />
    </div>
  );
}

export default App;
