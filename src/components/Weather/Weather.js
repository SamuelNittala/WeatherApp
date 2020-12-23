import React, { useState, useEffect } from 'react';
import SetWeather from '../SetWeather/SetWeather'

import './Weather.css'
const Weather = () => {
    const [weather, setWeather] = useState({lat: null ,lng: null})
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(pos => {
            setWeather({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
         })
    },[])
    if(weather.lat == null || weather.lng == null) return <h1 className="loading-state"> Loading... </h1>
    else return <SetWeather className ="loading-state" lat={weather.lat} lng = {weather.lng} />
}

export default Weather