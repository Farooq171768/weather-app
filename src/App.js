
import Snowflake from 'react-snowfall/lib/Snowflake';
import './App.css';
import  Weather  from './components/Weather';
import { WeatherTwo } from './components/WeatherTwo';
import './WeatherApp.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Snowfall from 'react-snowfall';
import ReactRainAnimation from 'react-rain-animation'





function App() {
  return (
    <div className="App" >
      <Snowfall color='white' snowflakeCount={70} snowflakeZIndex={20}/>
      <WeatherTwo/>
      <Weather />
      {<hr></hr>}
      <div className='foot'>
      Designed by Farooq2367
      </div>
     
    </div>
  );
}

export default App;
