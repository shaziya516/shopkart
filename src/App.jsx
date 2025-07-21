import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import LowNav from './components/LowNav'
import Banner from './components/Banner'
import TopSelling from './components/TopSelling'
import TopRatedPro from './components/TopRatedPro'
import WinterSale from './components/WinterSale'
import GetNotify from './components/GetNotify'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import OrderCrausal from './components/OrderCrausal'

const App = () => {

  const black = " #252525";
  const lightblue =" #9CAC54";
   const blue = "#345C32";
  const grayblue= "#0B0F08";
  const kala = "#FBFBFB";

  const [bgcolor,setBgcolor] = useState("#FED2E2");
  const [orange , setOrange] = useState("#E9A5F1");
  const[darkorange , setDarkorange]= useState("#C68EFD")
  const [gray ,setGray]= useState("#8F87F1")
  const [safed , setSafed] = useState("#090909ff")
 





  const[isopen, setIsopen] = useState(false);

  const[dark, setDark] = useState(false);
  

  useEffect(() => {

    setBgcolor(dark ? black : "#FED2E2");
    setOrange(dark ? lightblue : "#E9A5F1");
    setDarkorange(dark ? blue : "#C68EFD");
    setGray(dark ? grayblue : "#8F87F1");
    setSafed(dark ? kala : "#090909ff");
  }, [dark]);

  

 



  return (
    <div>
      <Navbar  bgcolor={bgcolor}  orange={orange} darkorange={darkorange} dark={dark} setDark={setDark} safed={safed}/>
      <LowNav bgcolor={bgcolor}  orange={orange} darkorange={darkorange} safed={safed}  />
      <Banner bgcolor={bgcolor}  orange={orange} darkorange={darkorange} gray={gray} setIsopen={setIsopen}  safed={safed} kala={kala} dark={dark} />     
      <TopSelling bgcolor={bgcolor}  orange={orange} darkorange={darkorange} gray={gray}  safed={safed}/>
      <TopRatedPro bgcolor={bgcolor}  orange={orange} darkorange={darkorange} gray={gray}  safed={safed} setIsopen={setIsopen}/>
      <WinterSale bgcolor={bgcolor}  orange={orange} darkorange={darkorange} gray={gray}  safed={safed}/>
      <GetNotify bgcolor={bgcolor}  orange={orange} darkorange={darkorange} gray={gray}  safed={safed}/>
       <TopSelling bgcolor={bgcolor}  orange={orange} darkorange={darkorange} gray={gray}  safed={safed}/>
       <Testimonial bgcolor={bgcolor}  orange={orange} darkorange={darkorange} gray={gray}  safed={safed}/>
       <Footer darkorange={darkorange}  />
       { isopen && <OrderCrausal isopen={isopen} setIsopen={setIsopen}/>}  
    </div>  
  )
}

export default App