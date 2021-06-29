import React, { useState } from "react";
import './Currentcity.css'
import Search from './Search'


export default function Currentcity(props) {

let defaultcity = props.city

    return (
    <div className="Currentcity">
    <p className="city" id="city">{defaultcity}</p>
    <ul>
    <li>8h00 Sunday  | </li>
    <li>January 17th 2021</li>
    </ul>

</div>
    );
}