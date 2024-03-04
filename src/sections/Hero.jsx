import React from 'react'
import heroBackground from '../assets/images/hero-bg.jpg'

const Hero = () => {
  return (
    <>
    

    <div className="hero min-h-screen bg-hero" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-7xl font-bold z-0">The Queendom</h1>
      <h3 className="mb-5 text-3xl">Uplifiting women to Fearlessly Create Lives Of More Than Enough</h3>
     
    </div>
  </div>
</div>
    {/* <div className=' bg-hero'>
      <div className='  py-96  font-extrabold  text-center flex content-center text-5xl gap-6 text-[#1d1308]	flex-col   flex-wrap'>
      <h2>The Queendom</h2>
<p>Uplifiting women to Fearlessly Create Lives Of More Than Enough
</p>

      </div>

     
      
    </div> */}
    </>
  )
}

export default Hero
