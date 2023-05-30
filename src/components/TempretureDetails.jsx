import React from 'react'

/** import icons */
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";

const TempretureDetails = () => {
  return (
    <div>
         <div className="flex items-center justify-center py-3 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-2 pl-5">
        <img
          src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
          alt=""
          className="w-16"
        />
        <p className="text-4xl ml-10"> 34°</p>

        <div className="flex flex-col space-y-1 -mt-1">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real Feel:
            <span className="font-medium ml-1 ">32°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={17} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1 ">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={17} className="mr-1" />
            Wind:
            <span className="font-medium ml-1 ">11km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm pt">
        <UilSun />
        <p className="font-light">
          Rise:
          <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set:
          <span className="font-medium ml-1">07:35 PM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">40°</span>
        </p>
      </div>
    </div>
  )
}

export default TempretureDetails