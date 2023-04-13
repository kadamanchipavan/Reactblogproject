import React from 'react'
import { Outlet,NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='header'>
    <h2><span>THE</span>SIREN</h2>
    </div>
    <nav>
       <div className="nav-item">
        
          <ul>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/bollywood'>BollyWood</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/technology'>Technology</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/hollywood'>Hollywood</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/fitness'>Fitness</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/food'>Food</NavLink></li>
           
           
          </ul>
       </div>
       <hr />
    </nav>
   
    <Outlet />
    </>
  )
}

export default Navbar