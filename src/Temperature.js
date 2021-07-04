import React from "react";

export default function Temperature(props) {

    return (
        <div className="temperaturediv">
        <p className="temperature"> <span className="temperature-shown">{props.metric}</span>°</p>
  <small><a href="#temperature-values" id="celcius"className="celcius">C |</a>
   <a href="#" id="farh" className= "farh">F</a></small>
   </div>
    );
}