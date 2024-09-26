import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Mapad from '../mapa/mapa';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function CenteredTabs({ inputValue, setInputValue, latLng, setLatLng, setInputType }) {
  const [value, setValue] = React.useState(0);

  const handleLatChange = (event) => {
    const newLat = parseFloat(event.target.value);
    if (!isNaN(newLat)) {
      setLatLng((prev) => ({ ...prev, lat: newLat }));
    }
  };

  const handleLngChange = (event) => {
    const newLng = parseFloat(event.target.value);
    if (!isNaN(newLng)) {
      setLatLng((prev) => ({ ...prev, lng: newLng }));
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const inputTypes = ['url', 'text', 'coordinates'];
    setInputType(inputTypes[newValue]);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
  return (
  
    <Box sx={{ width: '100%', bg: 'linear-gradient(0deg, rgba(98,95,95,1) 0%, rgba(101,83,77,1) 5%, rgba(175,172,172,1) 58%, rgba(207,204,204,1) 75%);' }}>
      <Tabs value={value} onChange={handleChange} centered textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example">
        <Tab label="URL" />
        <Tab label="Texto" />
        <Tab label="Lugar" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h3>Introduce tu URL:</h3>
        <input type="text" value={inputValue} onChange={handleInputChange} className='inputtabs'/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>Introduce tu Texto:</h3>
        <input type="text" value={inputValue} onChange={handleInputChange} className='inputtabs' />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>Introduce tus Coordenadas: (Latitud, Longitud)</h3>
        <label>
          Latitud:
          <input type="number" value={latLng.lat} onChange={handleLatChange} />
        </label>
        <label>
          Longitud:
          <input type="number" value={latLng.lng} onChange={handleLngChange} />
        </label>
        <Mapad setLatLng={setLatLng} />
        {/* <p> Latitud: {latLng.lat}, Longitud: {latLng.lng}</p> */}
      </TabPanel>
    </Box>
  );
}