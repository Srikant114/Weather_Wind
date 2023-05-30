import React, { useState } from "react";
/** Icons Import */
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import { toast } from 'react-toastify';

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    console.log()
    if (city !== "" ){
      setQuery({ q: city })
    }else{
      toast.warning("Sorry,Please Enter a Valid Location.☹️")
    }
  };

  

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching Users Location.")
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location Fetched!😉")
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row justify-center my-4">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-m font-light p-1 w-full shadow-l focus:outline-none capitalize placeholder:lowercase"
          placeholder="Enter Your Location"
        />
        <UilSearch
          size={25}
          onClick={handleSearchClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilMapMarker
          size={25}
          onClick={handleLocationClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          onClick={handleUnitChange}
          className="text-l text-white font-normal transition ease-out hover:scale-125"
        >
          &deg;C
        </button>
        <p className="text-xl text-white mx-2">|</p>
        <button
          name="imperial"
          onClick={handleUnitChange}
          className="text-l text-white font-normal transition ease-out hover:scale-125"
        >
          &deg;F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
