import React from "react";
import { FaShopify } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({bgcolor , orange, darkorange , dark , setDark}) => {
  return (
    <nav className=" h-[60px] flex flex-row justify-between pr-30 pl-30 max-sm:shadow-lg " style={{backgroundColor:orange}}>


      <div className="flex flex-row pt-4 gap-1" >
        <FaShopify className=" text-3xl max-sm:text-[#A53860]"  style={{color:darkorange}}/>
        <h3 className="font-bold text-lg ">Shopsy</h3>
      </div>

      <div className="flex flex-row gap-5 mt-4">
        <div>
          <input className="h-[30px] w-[200px] bg-white text-gray-600 rounded-xl pl-2 border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-300" type="text" placeholder="Search" />
        </div>
        <div>
          <button className="w-[50px] h-[30px] rounded-xl pl-3" style={{backgroundColor:darkorange}}>
            <CiShoppingCart className="text-white text-2xl"  />
          </button>
        </div>
        <div>
          <button onClick={()=>setDark(!dark)} className="cursor-pointer w-[30px] h-[30px]  bg-gradient-to-r from-white  to-black rounded-full border-1 max-sm:hidden " ></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
