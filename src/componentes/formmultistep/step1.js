import React from 'react';
import CenteredTabs from '../tab/tab';
import { useState, useRef } from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [inputValue, setInputValue] = useState('');
  const [latLng, setLatLng] = useState({ lat: 40.030501, lng: -3.604052 });

  const qrRef = useRef(null);
  const [inputType, setInputType] = useState('url');
  const [selectedFormat, setSelectedFormat] = useState('png');
    return (
        <>
        <div className="contenidoqr">
        <p className="grupo1">Contenido del QR</p>
                <br />
                 <div className="tabStyle">
         <CenteredTabs 
          inputValue={inputValue} 
          setInputValue={setInputValue} 
          latLng={latLng} 
          setLatLng={setLatLng} 
          setInputType={setInputType}
        /> 
        </div> 
        </div>
        <button onClick={nextStep}>Next</button>

        </>
    );
};

export default Step1;