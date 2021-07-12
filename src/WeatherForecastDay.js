import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecastDay(props) {

function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon","Tue", "Wed","Thur", "Fri","Sat"];
    return days[day];

}

    return (
    <div className="WeatherForecast">
     <div className="row">
        <div className="col">
<div className="Forecast-day">{day()}</div>
<WeatherIcon code={props.data.weather[0].icon} size={35}/>
<div className="Forecast-temp">
 <span className="forecast-temperature-min">{Math.round(props.data.temp.min)}º |</span>   
 <span className="forecast-temperature-max"> {Math.round(props.data.temp.max)}º</span>     
    </div>
        </div>   
     </div>
    </div>

)
}