import React from "react";
/** Icons Import */
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-4">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-m font-light p-1 w-full shadow-l focus:outline-none capitalize placeholder:lowercase"
          placeholder="Enter Your Location"
        />
        <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        <UilMapMarker size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-l text-white font-normal">&deg;C</button>
        <p className="text-xl text-white mx-2">|</p>
        <button name="imperial" className="text-l text-white font-normal">&deg;F</button>
      </div>
    </div>
  );
};

export default Inputs;
