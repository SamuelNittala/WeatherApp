import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

import './SetWeather.css'

const SetWeather = props => {
    const lat = props.lat, lng = props.lng
    var name,temp,img
    const [data, setData] = useState(null)
    const dataUrl = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lng}`
    useEffect(()=>{
        axios.get(dataUrl).then(res => {
            setData(res.data)
        })
    },[dataUrl])
    if(data == null) return <h1 className={props.className}> Loading data.. </h1>
    else {
        {
            name = data["name"] 
            temp = data["main"].temp
            img = data["weather"][0].icon
        }
        return(
            <div className= "temp-card">
                <h1> Name : {name} </h1>
                <h1> Temperature: {temp}<span>&#8451;</span></h1>
                <span><img src={img} alt="temp-pic"/></span>
            </div>
        )
    }
}

export default SetWeather