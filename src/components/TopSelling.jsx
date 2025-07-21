import React from "react";
import TopselingCard from "../productCard/TopselingCard";

const TopSelling = ({ bgcolor, orange, darkorange, gray,safed }) => {
  return (
    <div className="flex flex-col justify-center gap-5 " style={{backgroundColor:bgcolor}}>
      <div className="flex flex-col max-w-[100vw] items-center justify-center max-sm:items-center max-sm:pl-[20px] max-sm:gap-2 max-sm:pr-[20px]" style={{backgroundColor:bgcolor}}>
        <p style={{ color: orange }} className="font-semibold pt-[20px] ">
          Top Selling Product for you
        </p>
        <h1 className="text-4xl font-bold pt-[20px] pb-[20px]" style={{color :safed}}>
          Top Selling Products
        </h1>
        <p style={{color :safed}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          quaerat deleniti quam magnam
        </p>
      </div>

      <div className="flex  justify-evenly items-center w-full w-[90%] overflow-hidden max-sm:flex-wrap">
        
        <TopselingCard bgcolor={bgcolor}  orange={orange} safed={safed}/>
        <TopselingCard bgcolor={bgcolor}  orange={orange} safed={safed}/>
        <TopselingCard bgcolor={bgcolor}  orange={orange} safed={safed}/>
        <TopselingCard bgcolor={bgcolor}  orange={orange} safed={safed}/>
        <TopselingCard bgcolor={bgcolor}  orange={orange} safed={safed}/>
      </div>

      <div className="flex justify-center items-center pt-10  pb-20">
        <button className="cursor-pointer h-[30px] w-[150px] rounded " style={{backgroundColor:darkorange , color:"white"}}>View All Products</button>
      </div>

     

     
       

        

      
    </div>
  );
};

export default TopSelling;
