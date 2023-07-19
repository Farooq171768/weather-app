import React from 'react'
import { useState,useEffect } from 'react';
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

export const Weather = ({ weatherData }) => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData= async()=>{
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
        })
       await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dac06a6a08b63e3df3419bfdc2ae5b85`)
       .then(res=>res.json())
       .then(result => {
        setData(result)
        console.log(result);
       })
    }
       fetchData()
    }, [lat, long]);
   return(
    <div className='weather-container' id='weather1'>
          <div>
            <h2>Current Location Weather Details:</h2>
        </div>
           <div>
        <label><i class='fas fa-map-marker-alt'></i> Location: <b>{data.name} </b>   </label>
        </div>
         <div>
            <i class='fas fa-temperature-high'></i> Temperature:<b>{data.main?(data.main.temp):null} K</b>
        </div> 
         <div>
            <i class='fas fa-cloud'></i>  Weather:<b>{data.weather[0].description}</b>
        </div>
         <div>
            <i class='fal fa-humidity'></i>
           Humidity:  <b>{data.main.humidity}%</b>
        </div>
        <div>
            <i class="fa-solid fa-wind"></i> Wind speed:<b>{data.wind.speed}m/s</b>
        </div>         
    </div>
   
  
   )
}
