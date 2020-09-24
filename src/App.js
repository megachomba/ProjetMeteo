import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect  } from 'react';
import axios from 'axios';
import DropDown from "./dropdown";
import MeteoComp from "./meteoComp"
function App() {
  const [city, setCity] = useState("PARIS");
  const [data, setData] = useState({});
  const url = {
    "PARIS":
      "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f",
    "LONDON":
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f",
    "BANGKOK":
      "https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f",
  };
  //const [value, setValue] = useState(items[0].value);
  const handleChange = (event) => {
    //event.stopPropagation();
    console.log("my event targer", event.target.attributes.getNamedItem('value').value)
      setCity(event.target.attributes.getNamedItem('value').value)
    }
  async function fetchData() {
    const res = await fetch(url[city]);
    res
      .json()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log("error fetching"));
  }
  useEffect(() => {
    fetchData();
  }, [city]);
  useEffect(() => {
    console.log(data.weather);
    (data.weather && data.weather.main && data.weather.main =="Rain") ? document.body.className='pluie' : document.body.className='soleil' 
  });
  return <div className="rainy">
    <div className="meteoBlock">
      <div className="meteo">
        Météo
      </div>
      <div className="meteocoor">
        {data.coord ?  `( ${data.coord.lon} ; ${data.coord.lat} )` : ""}
      </div>
    </div>
    <div className="city">
      {city}
    </div>
    <div className="temp">
      { (data.main && data.main.temp) ? `${Math.round(((data.main.temp - 273.15) + Number.EPSILON) * 10) / 10}°C` : ""}
    </div>
    <div className="dateBlock">
      <div className="datePrevious">
        {"< Jeudi"}
      </div>
      <div className="dateToday">
        {"Vendredi 10 septembre"}
      </div>
      <div className="dateNext">
        {"Samedi >"}
      </div>
    </div>
    <div className="dataBlocks">
      <MeteoComp
      unit="m/s"
      value={(data.wind && data.wind.speed) ? data.wind.speed : null }
      icon="fleche"
      text="Vitesse du vent">
      </MeteoComp>

      <MeteoComp
      unit="deg"
      value={(data.wind && data.wind.deg) ? data.wind.deg : null }
      icon="fleche"
      text="direction du vent">
      </MeteoComp>
      <MeteoComp
      unit="%"
      value={(data.main && data.main.humidity) ? data.main.humidity : null }
      icon="pluie"
      text="humidite">
      </MeteoComp>
      <MeteoComp
      unit="Pa"
      value={(data.main && data.main.pressure) ? data.main.pressure : null }
      icon="pluie"
      text="Pression atmospherique">
      </MeteoComp>
      
    </div>
    <div className="dropDownBlock">
      <DropDown
      value = {city} 
      onChange={handleChange} />
    </div>
  </div>;
}

export default App;
