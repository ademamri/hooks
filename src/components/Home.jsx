import React, { useState } from 'react'
import Navbar from './Navbar'
import Listemovies from './Listemovies'

const Home = () => {
    const [search, setsearch] = useState("")

  return (
    <div>
      <Navbar setsearch={setsearch} />
       <Listemovies search={search} />
    </div>
  )
}

export default Home
