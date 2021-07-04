import React, { useState } from "react";
import FormatedDate from './FormatedDate'
import './Weatherinfo.css';
import Temperature from './Temperature'



export default function Weatherinfo(props) {
    return (
        <div clasName="Weatherinfo">
        <div className="row">
  <p className="city" id="city">{props.data.city}</p>
  <ul>
  <li>   <FormatedDate date={props.data.date} /> </li>
  </ul>

  <div className="row">
  <div className="col-7">
  <div className="temp-info">
  <img src={props.data.icon} alt="cloudy" border="0" id="icon"></img>
  <Temperature metric={props.data.temperature}/>
  </div>
  </div>

  <div className="col-5">
 <ul>
 <li className="description">{props.data.description}</li>
 <li>💦  Humidity: <span  className="humidity-list">{props.data.humidity}%</span></li>
 <li >💨 Wind speed: <span className="wind-list">{props.data.wind} km/h</span></li>
 </ul>
</div>
  </div>
  </div>
  </div>
)}