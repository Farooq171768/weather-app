import React, { useState } from 'react'
import axios from 'axios'
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

export const WeatherTwo = () => {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)


    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city.trim() !== '') {
            fetchWeatherData();
        }
    };

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dac06a6a08b63e3df3419bfdc2ae5b85`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
        }
    };
    const reset = () => {
        setWeatherData(null)
    }
    return (
        <div className='weather-container' id='weather2'>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <div><input type='text' value={city} onChange={handleChange} placeholder='Enter City' /></div>
                <div>
                <button type='submit'>Get weather details</button>
                <button onClick={reset}>Reset</button>
                </div>
                
            </form>
            {weatherData && (
                <div className='container'>
                    <div className='div'>
                    <i class='fas fa-temperature-high'></i>
                        <b> Temperature</b>
                        <p>{weatherData.main.temp} K</p>
                    </div>
                    <div className='div'>
                    <i class='fas fa-cloud'></i>
                        <b>Weather</b>
                        <p>{weatherData.weather[0].description}</p>
                    </div>
                    <div className='div'>
                        <i class='fal fa-humidity'></i>
                        <b>Humidity</b>
                        <p>{weatherData.main.humidity}%</p>
                    </div>
                    <div className='div'>
                    <i class="fa-solid fa-gauge-high"></i>
                        <b>Pressure</b>
                        <p>{weatherData.main.pressure} hPa</p>
                    </div>
                    <div className='div'>
                    <i class="fa-solid fa-wind"></i>
                        <b>Wind Speed</b>
                        <p>{weatherData.wind.speed} m/s</p>
                    </div>
                </div>
            )}
        </div>
    )
}
