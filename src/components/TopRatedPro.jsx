import React from 'react'
import TopratedCard from '../productCard/TopratedCard'

const TopRatedPro = ({ bgcolor, orange, darkorange, gray,safed,setIsopen}) => {
  return (
    <div className="flex flex-col justify-center gap-5 w-full items-center" style={{backgroundColor:bgcolor}}>
        <div className='flex flex-col w-full  items-center justify-center'>  

            <h3 style={{ color: orange }} className="font-semibold pt-[20px] ">Trending Products</h3>
            <h1  className="text-4xl font-bold pt-[20px] pb-[20px]" style={{color:safed}}>Top Rated products</h1>
            <p style={{color:safed ,textAlign:"center" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          quaerat deleniti <br /> quam magnam dsjhja shkak siwidid diiwdid </p>

        </div>

        <div className='flex flex-row gap-10 items-center justify-evenly flex-wrap  w-[80%]  max-sm:flex-wrap relative mt-20 '>
            <TopratedCard safed={safed} darkorange={darkorange} orange={orange}  setIsopen={setIsopen}  />
            <TopratedCard safed={safed} darkorange={darkorange} orange={orange}  setIsopen={setIsopen} />
            <TopratedCard safed={safed} darkorange={darkorange} orange={orange}  setIsopen={setIsopen} />

        </div>
    </div>
  )
}

export default TopRatedPro