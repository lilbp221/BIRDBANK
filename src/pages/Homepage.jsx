import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <div className="flex gap-2 justify-around" >
    <Card/> 
    <Card/> 
    <Card/> 
    </div>
    <Footer/>
    
    </>
  )
}

export default Homepage