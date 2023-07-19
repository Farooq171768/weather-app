
import Snowflake from 'react-snowfall/lib/Snowflake';
import './App.css';
import { Weather } from './components/Weather';
import { WeatherTwo } from './components/WeatherTwo';
import './WeatherApp.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Snowfall from 'react-snowfall';



function App() {
  return (
    <div className="App" >
      <Snowfall color='white' snowflakeCount={200} snowflakeZIndex={10}/>
      <Weather />
      <WeatherTwo/>
    </div>
  );
}

export default App;
