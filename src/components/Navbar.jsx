import React from 'react'

const Navbar = ({setsearch}) => {
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
    <input  type="button" value="add movies" />
</div>
    </div>
  )
}

export default Navbar
