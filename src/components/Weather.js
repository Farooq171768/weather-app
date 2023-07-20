import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

const Weather = ({ weatherData }) => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        
        const fetchData= async()=>{
            try{
                navigator.geolocation.getCurrentPosition(function (position) {
                    setLat(position.coords.latitude);
                    setLong(position.coords.longitude);
                  });
          
                  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                    params: {
                      lat: lat,
                      lon: long,
                      appid: 'dac06a6a08b63e3df3419bfdc2ae5b85'
                    }
                  });
          
                  setData(response.data);
                  console.log(response.data);
                }
                catch(error) {
                    console.error('Error', error);
                  }
                }; 
                fetchData()
    }, [lat, long])
    

   return(
    <div className='weather-container' id='weather1'>
            <div>
            <h2>Current Location Weather:</h2>
        </div>
        {data && (
        <>
          <div>
            <label>
              <i className='fas fa-map-marker-alt'></i> Location: <b>{data.name} </b>{' '}
            </label>
          </div>
          <div>
            <i className='fas fa-temperature-high'></i> Temperature:
            <b>{data.main ? ((data.main.temp - 273).toFixed()) : null} °C</b>
          </div>
          <div>
            <i className='fas fa-cloud'></i> Weather:<b>{data.weather[0] ? data.weather[0].description : null}</b>
          </div>
          <div>
            <i className='fas fa-tint'></i> Humidity: <b>{data.main ? `${data.main.humidity}%` : null}</b>
          </div>
           <div>
           <i className='fas fa-wind'></i> Wind speed:<b>{data.wind ? `${data.wind.speed} m/s` : null}</b>
         </div>
       </>
     )}
   </div>
 );
};
export default Weather;    
