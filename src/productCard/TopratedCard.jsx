import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const TopratedCard = ({darkorange,safed,orange,setIsopen}) => {
  return (

    
    <div className="flex flex-col gap-3   w-[250px] rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_4px_8px_rgba(0,0,0,0.1)] items-center mb-20 relative hover:bg-purple-300 cursor-pointer " >


      <div className="h-[60%] w-[60%]   rounded-xl  absolute top-[-25%] left-[50%] translate-x-[-50%] z-200">                           
        <img src="https://pngimg.com/d/dress_shirt_PNG8068.png"   alt="" />
      </div>

      
      <div className="flex flex-col items-center relative mt-[50%]   ">
        <span className="text-orange-500 flex flex-row absolute-top-[-20]" >
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
        </span>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold" style={{color:safed}}>Casual Wear</h2>
          <p style={{color:safed}}>Lorem ipsum dolor sit, amet consectetur adipi</p>
        </div>

        <div className="pb-10 pt-1"><button onClick={() => setIsopen(true)} className="cursor-pointer h-[30px] w-[100px]  text-white rounded-2xl" style={{backgroundColor:darkorange}}>Order Now</button></div>
      </div>
    </div>
  
  );
};

export default TopratedCard;
