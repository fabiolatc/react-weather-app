import './Currenttemperature.css';

export default function Currenttemperature() {
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