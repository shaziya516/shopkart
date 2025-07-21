import React from "react";

const OrderCrausal = ({isopen,setIsopen}) => {
  return (
    <div onClick={()=>setIsopen(false)} className="flex justify-center items-center h-screen w-full backdrop-blur-md bg-white/30 fixed top-0 left-0 z-500">


      <div  className="h-[300px] w-[300px] bg-white flex flex-col p-5 gap-5   m-20 rounded-2xl border-1 border-gary-500 " onClick={(e)=>e.stopPropagation()} >

        
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Order Now</h1>
          <h1 onClick={()=>setIsopen(false)} style={{cursor:"pointer"}}>X</h1>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="h-[40px] w-[90%] border-1 border-gray-500 rounded-2xl pl-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-[40px] w-[90%] border-1 border-gray-500 rounded-2xl pl-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="h-[40px] w-[90%] border-1 border-gray-500 rounded-2xl pl-2"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="h-[40px] w-[100px] bg-[#FF8400] rounded-3xl text-white ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCrausal;
