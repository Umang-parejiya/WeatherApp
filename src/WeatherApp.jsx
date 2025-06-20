import SearchBox from './searchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]= useState({
        city:"Delhi",
        feelsLike: 37.69,
        humidity: 11,
        temp: 40.51,
        tempMax: 40.51,
        tempMin: 40.51,
        weather:"overcast clouds"
    });

    let updateInfo = (newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style ={{textAlign:"center"}}>
            <h2>Weather App by umang</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info ={weatherInfo}/>


        </div>
    )
}