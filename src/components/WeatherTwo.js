import React, { useState } from 'react'
import axios from 'axios'
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

export const WeatherTwo = () => {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)


    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (city.trim() !== '') {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dac06a6a08b63e3df3419bfdc2ae5b85`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setWeatherData(null);
            }
        }
    };

    const reset = () => {
        setWeatherData(null);
        setCity('')
    };
    return (
        <div className='weather-container' id='weather2'>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <input type='text' value={city} onChange={handleChange} placeholder='Enter City' style={{ width: '600px' }}/>
                </div> 
            </form>
            <div class='button-container'>
                    <button type='submit' onClick={handleSubmit}>Get weather details</button>
                    <button type='button' onClick={reset}>Reset</button>
            </div>
            {weatherData && weatherData.sys && (
                <div class='container'>
                    <div class='div'>
                        <i class="fas fa-sun"></i>
                        <b>Sunrise</b>
                        <p>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                    </div>
                    <div class='div'>
                        <i class='fas fa-temperature-high'></i>
                        <b> Temperature</b>
                        <p>{((weatherData.main.temp) - 273).toFixed()} °C</p>
                    </div>
                    <div class='div'>
                        <i class='fas fa-cloud'></i>
                        <b>Weather</b>
                        <p>{weatherData.weather[0].description}</p>
                    </div>
                    <div class='div'>
                        <i class="fa-solid fa-droplet"></i>
                        <b>Humidity</b>
                        <p>{weatherData.main.humidity}%</p>
                    </div>
                    <div class='div'>
                        <i class="fa-solid fa-gauge-high"></i>
                        <b>Pressure</b>
                        <p>{weatherData.main.pressure} hPa</p>
                    </div>
                    <div class='div'>
                        <i class="fa-solid fa-wind"></i>
                        <b>Wind Speed</b>
                        <p>{weatherData.wind.speed} m/s</p>
                    </div>
                    <div class='div'>
                        <i class="fas fa-sun"></i>
                        <b>Sunset</b>
                        <p>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} </p>
                    </div>
                </div>
            )}
        </div>
    )
}
