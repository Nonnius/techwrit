import React from 'react'
import WritBody from './WritBody'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import binary from '../assets/binary.jpg';

const Writ = () => {
  return (
    <>
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${binary})` }} />
  
          <div className="relative z-10">
            <Navbar />
            <WritBody />
            <Footer />
          </div>
        </div>

    </>
  )
}

export default Writ