import React from 'react'
import africaQueen from "../assets/images/people/africa-queen.jpeg";
import { queens } from '../assets/constants';

const Queens = () => {
  return (
    <>
     
                { queens.map((queen)=>(
                    <div className="flex content-center justify-center  mt-16  gap-5 m-auto  ">
                   
                      <img
                        src={queen.imgURL}
                        className=" h-44 w-[50rem] rounded-lg"
                      />
                    
                    <div className=" w-[200rem] text-center ">
                      <h2 className=" font-extrabold text-5xl">
                      {queen.name}
  
  
                      </h2>
                      <p className="m-4"> {queen.desc}
   </p>
                      
                    </div>
                  </div>
                ))

                }

             
      
    </>
  )
}

export default Queens
