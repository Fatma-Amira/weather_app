import React from 'react'

function weatherbox({weather,dateBuilder,weatherdetail,Error,value}) {
 
  const minmaxtemp= (min,max)=>{

  if (max && min) {
      return(
    <h3>
        <span >{min}°c | {max}°c</span>
      </h3>
    )
  }
}
// weather detail view

const detail =
( 
 <div className= "container" >
<div className="location-box">
<div className="date">{dateBuilder(new Date())}</div>
 <h4>{weather.time} </h4>
 <h5  className="location">{weather.city}</h5>
 </div>
 <div className="weather-box">
<div className="temp">              
 <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather icon" />
<h4 className="weather" >
{weather.description}
</h4> 
 {weather.celsius ? (<h1 >{weather.celsius}°C</h1> ) : null} 
 <h2 className="tempminmax">{minmaxtemp(weather.temp_min , weather.temp_max)}</h2>  
 </div>   
 </div> 
</div>
)
// not found view
const found =
(
  <div className= "container weather-box"> :( City is not found 
  </div>
)
    
    return (
      <>
      <div>{weatherdetail && value!==""  ? detail :null}</div>
      <div>{Error  && value!=="" ? found  :null}</div>
</>

    )
}

export default weatherbox
