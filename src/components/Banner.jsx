import React from "react";

const Banner = ({ bgcolor, orange, darkorange, gray,setIsopen,safed,kala,dark}) => {
  //   const BannerData = [{
  //     id:1,
  //     image: <img src="" alt="" />,
  //     title: "70% off on all products sale",
  //     discription:"hjjajbssja his shus sihsi sihisis gjof fifjf dfifjdi fdijfidj dfodjd"
  //   },
  //   {id:2,
  //     image : <img src="" alt="" />,
  //     title:"30% off on all deals",
  //     discription: " hiii hellloooo yellloooo pilloooo gilllooooo"
  //   },
  //   {
  //     id:3,
  //     image : <img src="" alt="" />,
  //     title : "20% off your first order",
  //     discription: " hiii this deals only for girlssssss not for boysss"
  //   }
  // ]

  return (
    <div
      className="relative overflow-hidden  flex justify-around items-center h-[600px] max-w-[100vw]"
      style={{ backgroundColor: gray }}
    >
      <div className="relative z-100 flex justify-around items-center gap-6 w-[90%] max-sm:flex-col-reverse max-sm:h-[90%] max-sm:gap-2">


        <div className="flex flex-col justify-center gap-6 " style={{color:dark ? kala : safed}}>
          <h1 className="font-bold text-5xl">70% off only all Products sale</h1>
          <p className="pt-[20px] pb-[20px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus{" "}
            <br />
            natus consequatur, nam optio earum atque impedit .
          </p>
           
             

                <button

                onClick={() => setIsopen(true)}
              
                className="h-[30px] w-[100px] rounded-3xl cursor-pointer "
               style={{ backgroundColor: darkorange, color: "white" }} > Order Now </button>
           

        </div>



        <div className="w-[40%] h-[50%] flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/050/817/775/small_2x/pretty-young-man-posing-with-shopping-bags-full-length-side-view-isolate-on-transparent-background-png.png"
            alt=""
          />
        </div>
      </div>

      <div className="h-[700px] w-[700px]  absolute -top-1/2 right-0 transform rotate-45 rounded-3xl" style={{backgroundColor:orange}}></div>
    </div>
  );
};

export default Banner;
