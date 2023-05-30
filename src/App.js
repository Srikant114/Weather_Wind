import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import TempretureDetails from "./components/TempretureDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

import { useEffect, useState } from "react";

/** React Toaster */

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "Bengaluru" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "Current Location.";

      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Sucessfully fetched Weather for ${data.name},${data.country}`
        );
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "bg-gradient-to-b from-amber-200 via-violet-600 to-sky-900";
    const threshold = units === "metric" ? 25 : 60;
    if (weather.temp <= threshold) return "bg-gradient-to-l from-sky-400 to-indigo-900";

    return "bg-gradient-to-r from-yellow-600 to-red-600";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md py-2 mt-1.5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <TempretureDetails weather={weather} />
          <Forecast title="Hourly Forecast" items={weather.hourly} />
          <Forecast title="Daily Forecast" items={weather.daily} />
        </div>
      )}
      <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
