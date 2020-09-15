import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Weather from "./weatherapp/weather";
import FormInput from "./weatherapp/FormInput";

const API_key = "429736441cf3572838aa10530929f7cd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeid: undefined,
      icon: undefined,
      min: undefined,
      max: undefined,
      description: "",
      error: false,
    };

    this.weathericon = {
      Thunderstrom: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-shower",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }
  get_weatherIcon(icons, rangeid) {
    switch (true) {
      case rangeid >= 200 && rangeid <= 232:
        this.setState({ icon: this.weathericon.Thunderstrom });
        break;
      case rangeid >= 300 && rangeid <= 321:
        this.setState({ icon: this.weathericon.Drizzle });
        break;
      case rangeid >= 500 && rangeid <= 531:
        this.setState({ icon: this.weathericon.Rain });
        break;
      case rangeid >= 600 && rangeid <= 622:
        this.setState({ icon: this.weathericon.Snow });
        break;
      case rangeid >= 701 && rangeid <= 781:
        this.setState({ icon: this.weathericon.Atmosphere });
        break;
      case rangeid === 800:
        this.setState({ icon: this.weathericon.Clear });
        break;

      case rangeid >= 801 && rangeid <= 804:
        this.setState(
          { icon: this.weathericon.Clouds },
          // console.log("801=", this.icon)
        );

        break;
      default:
        this.setState({ icon: this.weathericon.clouds });
    }
  }

  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    console.log("city===", city);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
      )
      .then((response) => {
        console.log(response);
        this.setState({
          // api: response.data,
          city: response.data.name,
          country: response.data.sys.country,
          rangeid: response.data.weather[0].id,

          celsus: Math.floor(response.data.main.temp - 273.15),
          description: response.data.weather[0].description,
          min: Math.floor(response.data.main.temp_min - 273.15),
          max: Math.floor(response.data.main.temp_max - 273.15),
        });

        this.get_weatherIcon(this.weathericon, response.data.weather[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <FormInput loadweather={this.getweather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          celsus={this.state.celsus}
          min={this.state.min}
          max={this.state.max}
          description={this.state.description}
          weathericon={
            // () => {
            // this.get_weatherIcon(
            this.state.icon
          }
          // }}
        />
        {console.log("object", this.icon)}
      </div>
    );
  }
}

export default App;
