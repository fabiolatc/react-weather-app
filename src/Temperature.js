import React, { useState } from "react";

export default function Temperature(props) {

    const [unit, setUnit] = useState("celcius");
    
    function changeFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")

    }

    function convertoCelcius(event) {
event.preventDefault();
setUnit("celcius")


    }

if (unit === "celcius") {

    return (
        <div className="temperaturediv">
        <p className="temperature"> <span className="temperature-shown">{props.metric}</span>°</p>
  <small><a href="#temperature-values" id="celcius"className="celcius" onClick={convertoCelcius}>C |</a>
   <a href="#" id="farh" className= "farh" onClick={changeFahrenheit}>F</a></small>
   </div>
    );
} 
else {

    let fahrenheit = (props.metric  * 9 / 5) + 32;

return (
    <div className="temperaturediv">
    <p className="temperature"> <span className="temperature-shown">{Math.round(fahrenheit)}</span>°</p>
<small><a href="#temperature-values" id="celcius"className="celcius" onClick={convertoCelcius}>C |</a>
<a href="#" id="farh" className= "farh" onClick={changeFahrenheit}>F</a></small>
</div>
)
}
}