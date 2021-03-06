import React, { useState } from "react";
import './Currentcity.css'
import axios from 'axios'; 


export default function Currentcity(props) {
    let [text, changeText] = useState(props.city);

    let APIkey = "3c7e72471b038017abb118fddfa1d953";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${APIkey}&units=metric`;
axios.get(url).then(defaultTemperature);

    let [temperature, changeTemperature] = useState("");  
    let [description, changeDescription] = useState("");  
    let [humidity, changeHumidity] = useState("");  
    let [wind, changeWind] = useState("");  
   

function defaultTemperature(response) { 
    changeTemperature(Math.round(response.data.main.temp));
    changeDescription(response.data.weather[0].description);
    changeHumidity(response.data.main.humidity);
    changeWind(response.data.wind.speed);



}

let [city, cityAnswer] = useState(`${text}`);  

function updateCity(event) {
cityAnswer(event.target.value);
  
}

  function searchCity(event) {

    let APIkey = "3c7e72471b038017abb118fddfa1d953";
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
   axios.get(url).then(cityTemperature);
    event.preventDefault();
}

  function cityTemperature(response) {
      changeText(`${city}`)
   changeTemperature(Math.round(response.data.main.temp));
   changeDescription(response.data.weather[0].description);
   changeHumidity(response.data.main.humidity);
   changeWind(response.data.wind.speed);
   
    }
    return (
        <div className="Currentcity">

<form id="search-city" onSubmit={searchCity}>
         <div class="row">
             <div class="col-9">
                 <input type="text" id="searched-city" className="form-control" placeholder="Type a city..." onChange={updateCity}></input>
            </div>
            <div class="col-3">
                <input type="submit" id="search-button" value = "Search" className="btn btn-primary" ></input>
            </div>
        </div>
    </form>
    
    <p className="city" id="city">{text}</p>
    <ul>
    <li>8h00 Sunday  | </li>
    <li>January 17th 2021</li>
    </ul>

    <div className="row">
    <div className="col-7">
    <div className="temp-info">
    <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="cloudy" border="0" id="icon"></img>
    <p className="temperature"> <span className="temperature-shown">{temperature}</span>??</p>
    <small><a href="#temperature-values" id="celcius"clasName="celcius">C |</a>
     <a href="#" id="farh" className= "farh">F</a></small>
    </div>
    </div>

    <div className="col-5">
   <ul>
   <li className="description">{description} </li>
   <li>????  Humidity: <span  className="humidity-list">{humidity}%</span></li>
   <li >???? Wind speed: <span className="wind-list">{wind}km/h</span></li>
   </ul>
</div>
    </div>
</div>
);
}