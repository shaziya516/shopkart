import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

const TopselingCard = ({bgcolor,orange,safed}) => {
  return (

    
    

   <div className="flex flex-col gap-3  items-start h-[300px] w-[200px] rounded-t-xl mr-5  " > 
      <div className="h-[70%] w-full bg-violet-400 rounded-xl overflow-hidden flex justify-center shadow-[inset_-10px_-10px_65px_rgba(0,0,0,0.4)]">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/050/817/775/small_2x/pretty-young-man-posing-with-shopping-bags-full-length-side-view-isolate-on-transparent-background-png.png"
          alt=""
          className="scale-[1.4] h-full mt-10 p-2 "
        />
      </div>
      <div className="w-full flex flex-col" style={{color :safed}}>
        <h1 className="font-bold text-lg" >Mens Ethnic</h1>
        <h3 className="font-sm" >White</h3>
        <h3 className="text-black flex gap-2 items-center text-lg ">
          <span className='text-orange-500'>
            <TiStarFullOutline />
          </span>
          
        </h3>
      </div>
    </div>

   
  )
}

export default TopselingCard