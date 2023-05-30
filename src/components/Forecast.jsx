import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

const Forecast = ({ title, items }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-3">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2 " />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item,i) => (
          <div className="flex flex-col items-center justify-center" key={i}>
            <p className="font-light text-sm">{item.title}</p>
            <img
         
              src={iconUrlFromCode(item.icon)}
              alt=""
              className="w-10 my-0.5"
            />
            <p className="font-medium">{`${item.temp.toFixed()}`}&deg;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
