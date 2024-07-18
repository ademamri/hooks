import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = ({setsearch}) => {
  const Navigate=useNavigate()
  return (
    <div className='nav'>
      <h1>MOVIES </h1>
<div className='se'>
  <div className='box'>
    <input  onChange={(e)=>setsearch(e.target.value)}  type="text" placeholder='search...'/>
    <a href="a">
      <i className='search'></i>
      <img src="" alt="" />
      </a>
    </div>  
   <div className='but'> <input  type="button" value="add movies" />
    <input onClick={()=>Navigate("/")} type="button" value="log out" /></div>
</div>
    </div>
  )
}

export default Navbar
