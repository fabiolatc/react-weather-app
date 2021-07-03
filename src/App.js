import React, { useState } from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Currentcity from './Currentcity'




function App() {
 

  return (
    <div className="App">
      <div className="container">
     
        <Currentcity defaultcity="Madrid"/>

      </div>
    </div>
  );
}

export default App;
