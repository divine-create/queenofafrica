import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Divider from '../assets/images/toplight.webp'
import { images } from '../assets/images/ipada';



const Ipada = () => {
  return (
    <> 
    <Navbar />
    <section className='relative'>
    <div className="hero min-h-screen bg-ipada" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-7xl font-bold z-0">IPADA 
</h1>
    
     
    </div>
  </div>
</div>
        <div className=" absolute  top-[35rem] right-0 ">
          <img src={Divider} alt="" className="w-full" />
        </div>
        <div className=" bg-[#F2E0C8] w-full px-28 py-20 ">
        <div className="mt-8">
              <h2 className="font-Spectral font-bold text-4xl text-center">
              IPADA (THE RETURN) Carnival              </h2>
              <p className=' mt-6 font-bold text-2xl'>Ipada Carnival, Ipada means the return. An annual carnival dedicated to the return of people of African ancestry to motherland. Ipada carnival showcases a vibrant blend of culture and creativity. It features a Carnival, fashion shows, live music performances, art exhibitions, and culinary experiences from 54 countries in Africa and 5 countries in the Caribbean. Ipada Carnival holds at La Campagne Tropicana Beach Resort, Lagos, Nigeria from 26th Nov to 3rd Dec, annually, and attracts visitors from around the world seeking an immersive African experience.
</p>
              </div>
              <div className='flex mt-8  flex-wrap'>
              <div className="carousel rounded-box">
                {
                  images.map((image)=>(

                    <div className="carousel-item">
                    <img src={image.imgURL} className=' w-72 h-30' alt="Burger" />
                  </div>
                  ))
                }
  
  
</div>
              </div>
              
          </div>

          


    </section>
    <Footer />
    
    
    </>
    
  )
}

export default Ipada
