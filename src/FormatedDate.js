import React from "react";

export default function FormatedDate(props) {



    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];

      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let year = props.date.getYear() + 1900
      let date = props.date.getDate();
      let month = months[props.date.getMonth()];
      let day = days[props.date.getDay()];
      let hours = props.date.getHours();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      
      let minutes = props.date.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      
      }
      return (
        <div>

<ul>
<li>{day} {hours}:{minutes} | </li>
<li> {month}  {date} {year}</li>
</ul>
        </div>
      );

}