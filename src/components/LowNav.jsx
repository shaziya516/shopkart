import React from "react";

const LowNav = ({bgcolor,orange, darkorange,safed}) => {
  return (
    <nav className="h-[40px]  flex flex-row justify-center shadow-md pb-2 max-sm:hidden " style={{backgroundColor:bgcolor}}>


      <div className="sm: flex  items-center gap-14  " style={{color:safed}}>

        <a href="">Home</a>
        <a href="">Top Rated</a>
        <a href="">Kids Wears</a>
        <a href="">Mens Wears</a>
        <a href="">Electronics</a>
          <a>
          <select id="options">
            <option value="">trending items</option>
            <option value="option1">Footwears</option>
            <option value="option2">Toys</option>
            <option value="option3">Jwellery</option>
          </select></a>
           
      </div>
    </nav>
  );
};

export default LowNav;
