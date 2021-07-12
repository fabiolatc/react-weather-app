import React , { useState, useEffect }  from "react"
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {

let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
  }, [props.longitude]);

function handleResponse(response) {
   setForecast(response.data.daily);
   setLoaded(true)
}



if(loaded) {
   

return (
<div className="row">
<div className="col"> <WeatherForecastDay data={forecast[0]}/></div>
<div className="col"> <WeatherForecastDay data={forecast[1]}/></div>
<div className="col"> <WeatherForecastDay data={forecast[2]}/></div>
<div className="col"> <WeatherForecastDay data={forecast[3]}/></div>

</div>
)

}

else 
{
    let APIkey = "3c7e72471b038017abb118fddfa1d953";
    let lon = props.longitude
    let lat = props.latitude
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIkey}&units=metric`;
    axios.get(forecastUrl).then(handleResponse)
    
    return null}



}