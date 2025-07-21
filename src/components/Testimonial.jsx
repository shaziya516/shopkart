import React from 'react'
import TestimonialCard from '../productCard/TestimonialCard'

const Testimonial = ({bgcolor,orange,darkorange,gray,safed}) => {
  return (
    <div className='flex flex-col items-center max-sm:items-center max-sm:pl-10 max-sm:pr-10' style={{backgroundColor:bgcolor}}>
        <div className='flex flex-col items-center pb-10'>
            <h3 className='font-bold  text-orange-300' style={{color:orange}} >What Our Customer Say</h3>
            <h1 className='font-bold text-3xl ' style={{color:safed}}>Testimonial</h1>
            <p  style={{color:safed}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, accusamus quod odfugiat voluptate.</p>

        </div>


        <div className='flex flex-row flex-wrap gap-10 justify-center max-sm:flex-col '>
            <TestimonialCard  orange={orange} safed={safed}/>
            <TestimonialCard orange={orange} safed={safed}/>
            <TestimonialCard orange={orange} safed={safed}/>

        </div>
    </div>
  )
}

export default Testimonial