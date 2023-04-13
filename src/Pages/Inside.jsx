import React from 'react'
import { useLocation } from 'react-router-dom';

const Inside = () => {
  const loc = useLocation()
  console.log(loc.state);
  return (
    <div>
      <img src= {loc.state.img} style={{height:"250px",width:"250px",borderRadius:"8px",marginLeft:"38%",marginTop:"3%"}}/>
      <h5 style={{textAlign:"center"}}>{loc.state.title}</h5>
      <p style={{fontSize:"18px",width:"70%",marginLeft:"15%"}}>{loc.state.article}</p>
    </div>
  )
}

export default Inside