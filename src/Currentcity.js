import React, { useState } from "react";
import './Currentcity.css'
import Weatherinfo from './Weatherinfo'
import axios from 'axios'; 



export default function Currentcity(props) {
 


let [weatherData, setWeatherData] = useState({ready:false})
let [city, setCity] = useState(props.defaultcity)


function handleResponse(response) {

setWeatherData ({

    ready:true,
    image: "http://openweathermap.org/img/wn/02d@2x.png",
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    humidity:response.data.main.humidity,
    wind:Math.round(response.data.wind.speed),
    icon: response.data.weather[0].icon,
    date: new Date(response.data.dt * 1000),
    city: response.data.name,
})

}

function search() {

    let APIkey = "3c7e72471b038017abb118fddfa1d953";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(url).then(handleResponse);
}

function updateCity(event) {
    event.preventDefault();
    search()

}

function saveCity(event) {
    setCity(event.target.value);
}

if (weatherData.ready) {
return(
        <div className="Currentcity">
<form id="search-city" onSubmit={updateCity}>
         <div className="row">
             <div className="col-9">
                 <input type="text" id="searched-city" className="form-control" placeholder="Type a city..." onChange={saveCity} ></input>
            </div>
            <div className="col-3">
                <input type="submit" id="search-button" value = "Search" className="btn btn-primary" ></input>
            </div>
        </div>
    </form>
    <Weatherinfo data={weatherData} city={city} />
</div>)

}

else {
    search();
    return "Loading..."
    
}

;

}