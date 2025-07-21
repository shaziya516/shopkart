import React from 'react'
import { FaShopify } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = ({darkorange}) => {
  return (
    <div className='flex flex-row text-white max-sm:flex-col max-sm:items-start   max-sm:gap-5  ' style={{backgroundColor:"#161515ff", padding:"20px", justifyContent:"space-evenly"}}>
        <div>
            <div className='flex flex-row gap-2 max-sm:flex-row max-sm:items-center max-sm:gap-2'>
                <div> <FaShopify className="  text-3xl" style={{color:darkorange}}  /></div>
                <h1 className='font-bold text-2xl'>ShopKart</h1>


            </div>


            <div>Lorem ipsum dolor sit amet consectetur ure <br />
             adipisicing elit Facerequisquam amet quidem  <br />
              illo tenetur quibusdam consequuntur debitis.</div>
        </div>
    
        
       <div className='flex flex-row gap-20 max-sm:flex-row max-sm:items-center max-sm:gap-35'>

        <div>
            <h1 className='font-bold text-lg'>Important Links</h1>
            <div className='flex flex-col gap-2'>
                <a href="">home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
            </div>
        </div>



        <div>
            <h1 className='font-bold text-lg'> Links</h1>
            <div className='flex flex-col gap-2'>
                <a href="">home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
            </div>
        </div>


        </div>


        <div>
            <div className='flex flex-row gap-2 text-xl mb-1'>
                <div><IoLogoInstagram /></div>
                <div><FaFacebook /></div>
                <div><FaLinkedin /></div>
            
            </div>



            <div  className='flex flex-row gap-2 mb-2'>
                <div><FaLocationArrow className='text-xl'/></div>
                <div className='text-white'>Moradabad,Uttar Pradesh</div>
            </div>

            
            <div  className='flex flex-row gap-2 '>
                <div>< IoMdPhonePortrait className='text-xl' /></div>
                <div className='text-white'>+91 9923448564</div>
            </div>


        </div>
    </div>
  )
}

export default Footer