import React from "react";

const TopButtons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Bhubaneswar",
    },
    {
      id: 4,
      title: "Bangalore",
    },
    {
      id: 5,
      title: "Kolkata",
    },
  ];
  return (
    <div className="flex items-center justify-around my-1">
      {cities.map(({ id, title }) => (
        <button className="text-white text-sm font-medium" key={id} onClick={()=> setQuery({q: title})}>
          {title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
