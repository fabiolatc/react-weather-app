import React, { useState } from "react";
import './Search.css'

export default function Search() {

    let [city, cityAnswer] = useState("");
    
    function updateCity(event) {
        cityAnswer(event.target.value);
       console.log(city)
      }

    return (
        <form id="search-city">
         <div class="row">
             <div class="col-9">
                 <input type="text" id="searched-city" className="form-control" placeholder="Type a city..." onChange={updateCity}></input>
            </div>
            <div class="col-3">
                <input type="submit" id="search-button" value = "Search" className="btn btn-primary"></input>
            </div>
        </div>
    </form>
    )
}