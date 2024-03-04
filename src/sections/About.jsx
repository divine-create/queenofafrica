import React from 'react'
import topDark from '../assets/images/top_dark-1520x77.webp'
import Knight from '../assets/images/kinght.webp'
import queenImage from '../assets/images/people/queen-image.jpeg'
import africaQueen from '../assets/images/people/africa-queen.jpeg'
import ipadaImage from '../assets/images/ipada/cultural.jpeg'
import { FaCrown, FaStar, FaArrowRight } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";


const About = () => {
  return (
    <>
        <div className=' bg-[#F2E0C8] p-36 ' >
            {/* <img src={topDark} className='  w-full' alt="" /> */}
            <div className=' flex gap-40 '>
                <div className='artboard artboard-horizontal phone-1'>
                    <img src={queenImage} className=' rounded-lg  h-96 w-full max-w-full  ' alt="" />
                </div>
                <div>
                  <div className='flex gap-4 items-center mt-10 text-2xl text-[#BF8F50]'>
                  <FaCrown /> <h2 className=' text-4xl font-extrabold font-Spectral '>Our Vision</h2>         
                  </div>
                  <ul className=' text-[#281906] '>
                    <li className='flex gap-4 items-center '> <span><FaStar /></span> 
  The unification of Africa worldwide</li>
                    <li className='flex gap-4 items-center '> <span><FaStar /></span> The Restoration Of Africa Lost Glory</li>
                    <li className='flex gap-4 items-center '> <span><FaStar /></span> Long term positive impact that a visionary – queen could have on the continent.</li>
                    <li className='flex gap-4 items-center '> <span><FaStar /></span> 
                    Return to Motherland through Ipada the Return</li>
                    <li className='flex gap-4 items-center '> <span><FaStar /></span>Alignment of the Queen's vision to the aspiration of the people</li>
                    <li className='flex gap-4 items-center '> <span><FaStar /></span>Alignment of the Queen's vision to the aspiration of the people</li>
  
                  </ul>
                  <div className='flex gap-4 items-center mt-10 text-4xl text-[#BF8F50]'>
                  <FaCrown /> <h2 className=' font-extrabold font-Spectral '>Our Mission</h2>          
                  </div>
                  <p className='  '>Actualization and Implementations of the vision</p>
                  

                </div>

            </div>
            <div className='flex mt-20 relative gap-48 text-[#281906]  '>
              <div className=' z-10 grid place-content-center text-center '>
                <h2 className=' font-extrabold text-5xl font-Spectral'>Embracing A Queendom </h2>
                <p className='m-4 '>See How Establishing a Queendom can change society</p>
                <Link to="/queendom"
                  onClick={() => {
                    window.scroll(0, 0);}}
                ><button className="btn text-white bg-[#281906] btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-[#281906]">View Here <span> <FaArrowRight />
</span></button></Link>
                

              </div>
              <div className='absolute top-0 left-96 z-0' >
                <img src={Knight} alt="" />

              </div>
              <div className='z-10 artboard artboard-horizontal phone-2'>

                <img src={africaQueen} className='rounded-lg h-96 w-full' />

              </div>


            </div>

            <div className='flex  mt-40 gap-32'>
            <div className='z-10 artboard artboard-horizontal phone-1'>

<img src={ipadaImage} className=' h-96 w-full rounded-lg' />

</div>
<div className=' z-10 grid place-content-center text-center '>
                <h2 className=' font-extrabold text-5xl'>Ipada Carnival </h2>
                <p className='m-4'>Explore The Rich Cultural Display Of Ipada Carnival</p>
                <Link to='/ipada'  onClick={() => {
                    window.scroll(0, 0);}}>
                <button className="btn text-white bg-[#281906] btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-[#281906]">View Here <span> <FaArrowRight />
</span></button></Link>
               

              </div>

            </div>

        </div>
      
      
    </>
  )
}

export default About
