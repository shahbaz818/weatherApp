
import React from "react";
import Weather from "./Components/Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;




//import React, { useEffect, useState } from 'react'
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import Weather from './Components/Weather.jsx';
//import axios from 'axios';
//
//function App() {
//  const [city, setCity]=useState([]);
//  const [search, setSearch]=useState([]);
//
//  useEffect(()=>{
//    const fetchData= async()=>{
//      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4915963b947b0eefd65e5f8e0f99a117&units=metric`;
//      const res=await fetch(url)
//      const response=await res.json();
//      console.log(response);
//
//
//    }
//    fetchData();
//
//  },[]);
//  return (
//    <>
//    <div className='main'>
//    <h1 className='heading'>Weather App</h1>
//    <input type="search" placeholder='Enter city name' className="input" onChange={e=>{setCity(e.target.value)}}/>
//    <Button variant="primary" className='button' type="submit">Primary</Button>
//    <Weather/>
//    </div>
//    </>
//  )
//}
//
//export default App