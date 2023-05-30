import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
        <div className="flex items-center justify-start mt-3">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2 " />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
            alt=""
            className="w-10 my-0.5"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
            alt=""
            className="w-10 my-0.5"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
            alt=""
            className="w-10 my-0.5"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
            alt=""
            className="w-10 my-0.5"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
            alt=""
            className="w-10 my-0.5"
          />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast