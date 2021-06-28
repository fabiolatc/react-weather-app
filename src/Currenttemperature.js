import './Currenttemperature.css';
import axios from 'axios';

export default function Currenttemperature() {
    let city = "Madrid";
    let apiKey = "3c7e72471b038017abb118fddfa1d953";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(displayForecast);

    function displayForecast(response) {
        let temperature = Math.round(response.data.main.temp)
        let humidity = Math.round(response.data.main.humidity)
        console.log(humidity)
    }


    return (
 <div className="row">
     <div className="col-7">
     <div className="temp-info">
     <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="cloudy" border="0" id="icon"></img>
     <p className="temperature"> <span className="temperature-shown">30</span>°</p>
     <small><a href="#temperature-values" id="celcius"clasName="celcius">C |</a>
     <a href="#" id="farh" className= "farh"
        >F</a></small>

     </div>

     </div>
     <div className="col-5">
   <ul>
   <li className="description">  light intensity drizzle </li>
   <li>💦  Humidity: <span  className="humidity-list">50%</span></li>
   <li >💨 Wind speed: <span className="wind-list">4 km/h</span></li>
   </ul>
</div>
   
   
</div>
    );
}