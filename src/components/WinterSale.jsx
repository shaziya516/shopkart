import React from "react";
import { IoLockClosedOutline } from "react-icons/io5";

const WinterSale = ({ bgcolor, orange, darkorange, gray ,safed}) => {
  return (
    <div className="flex flex-row justify-evenly  pb-30 max-sm:flex-col max-sm:items-center max-sm:gap-6" style={{ backgroundColor: bgcolor }}>
      <div
        className="max-h-[400px] max-w-[400px] rounded-2xl flex justify-center items-center "
        style={{ backgroundColor: darkorange }}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/050/817/775/small_2x/pretty-young-man-posing-with-shopping-bags-full-length-side-view-isolate-on-transparent-background-png.png"
          alt=""
        />
      </div>

      <div className="max-sm:ml-15 max-sm:pl-10 max-sm:pr-10" style={{color: safed}}>
        <h1 className="font-bold text-3xl">Winter sale up to 50% off</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.dhusijisjo{" "}
          <br /> Exercitationem, sjhsjjnk tempore officiis illum ad alias
          nostrum!
        </p>
        <div className="pt-5">
          <div className="flex flex-row  items-center gap-4 mb-4">
            <div className="h-[50px] w-[50px] bg-pink-300 rounded-full flex justify-center items-center">
              <IoLockClosedOutline className="text-2xl" />
            </div>
            <div>Quality Products</div>
          </div>


          <div className="flex flex-row  items-center gap-4 mb-4">
            <div className="h-[50px] w-[50px] bg-orange-300 rounded-full flex justify-center items-center">
              <IoLockClosedOutline className="text-2xl" />
            </div>
            <div>Fast Delivery</div>
          </div>


          <div className="flex flex-row  items-center gap-4 mb-4">
            <div className="h-[50px] w-[50px] bg-green-300 rounded-full flex justify-center items-center">
              <IoLockClosedOutline className="text-2xl" />
            </div>
            <div>Easy Payment Method</div>
          </div>


          <div className="flex flex-row  items-center gap-4 mb-4">
            <div className="h-[50px] w-[50px] bg-yellow-300 rounded-full flex justify-center items-center">
              <IoLockClosedOutline className="text-2xl" />
            </div>
            <div>Get Offers</div>
          </div>

          
        </div>



      </div>
    </div>
  );
};

export default WinterSale;
