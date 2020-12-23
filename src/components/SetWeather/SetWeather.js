import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

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
    if(data == null) return <h1> Loading data.. </h1>
    else {
        {
            name = data["name"] 
            temp = data["main"].temp
            img = data["weather"][0].icon
        }
        return(
            <div className= "tempCard">
                <h1> Name : {name} </h1>
                <h1> Temperature(celsius) : {temp} </h1>
                <img src={img} alt="temp-pic"/>
            </div>
        )
    }
}

export default SetWeather