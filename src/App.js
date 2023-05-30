import "./App.css";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeLocation from "./components/TimeLocation";
import TempretureDetails from "./components/TempretureDetails";
import Forecast from "./components/Forecast"; 
import getFormattedWeatherData from "./services/weatherService";

function App() {


  const fetchWeather = async()=>{
    const data = await getFormattedWeatherData({q:"delhi"})
    console.log(data);
  }
  console.log(fetchWeather());
  
  return (
    <div className="mx-auto max-w-screen-md py-2 mt-1.5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Inputs/>

      <TimeLocation/>
      <TempretureDetails/>
      <Forecast title="Hourly Forecast"/>
      <Forecast title="Daily Forecast"/>
    </div>
  );
}

export default App;
