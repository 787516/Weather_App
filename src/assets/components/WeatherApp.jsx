import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';

export default function WeatherApp() {
  const [weatherInfo , setWeatherInfo] = useState({

    city: "Delhi",
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    feelslike: 24.84,
    weather: "haze",

  });

  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
    
  };
  return (
    <div>
         
        <div style={{textAlign: "center"}}>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
         
        </div>    
    </div>
  )
}
