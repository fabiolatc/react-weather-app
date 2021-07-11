import React from "react"
import "./WeatherForecast.css"


export default function WeatherForecast(props) {
return (

    <div classNam="WeatherForecast">
     <div className="row">
        <div className="col">
<div className="Forecast-day">Day</div>
<div className="Forecast-temp">
 <span className="forecast-temperature-min">30º |</span>   
 <span className="forecast-temperature-max"> 30º</span>     
    </div>
        </div>   



     </div>
    </div>
)


}