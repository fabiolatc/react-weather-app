import React, { useState } from "react";
import FormatedDate from './FormatedDate'
import axios from 'axios'; 



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
  <p className="temperature"> <span className="temperature-shown">{props.data.temperature}</span>°</p>
  <small><a href="#temperature-values" id="celcius"className="celcius">C |</a>
   <a href="#" id="farh" className= "farh">F</a></small>
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