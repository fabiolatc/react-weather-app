import React, { useState } from "react";
import "./Temperature.css"
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
        <div className="row">
        <div className="temperaturediv">
        <p className="temperatureinfo"> <span className="temperature-shown">{props.metric}°</span></p>
        </div>
   </div>
    );
} 
else {

    let fahrenheit = (props.metric  * 9 / 5) + 32;

return ("Loading"
)
}
}