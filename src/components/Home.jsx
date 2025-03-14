import React from 'react'
import Listing from './Listing'
import Sidebar from './Sidebar'
import './Home.css'
const Home = () => {
  return (
    <div className='home-cont'>
      <Sidebar/>
      <Listing/>
    </div>
  )
}

export default Home
