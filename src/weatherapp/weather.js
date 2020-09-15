import React from "react";

const Weather = (props) => {
  return (
    <div className="container ">
      {/* <h1> Weather App</h1> */}
      <h1>
        {props.city} ,{props.country}
      </h1>
      <h3 className="py-2">
        <i className={`wi ${props.weathericon} display-3`}></i>
      </h3>
      <h1 className="py-2">{props.celsus}&deg;</h1>
      {minmaxtemp(props.min, props.max)}
      <h2 className="sy-4"> {props.description}</h2>
    </div>
  );
  function minmaxtemp(min, max) {
    return (
      <h1>
        <span className="py-2 px-4">{min}&deg; </span>
        <span className="py-2">{max}&deg;</span>
      </h1>
    );
  }
};
export default Weather;
