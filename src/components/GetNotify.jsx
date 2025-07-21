import React from 'react'

const GetNotify = ({bgcolor,orange,darkorange,gray}) => {
  return (
    <div className='h-[200px] w-full  flex flex-col justify-center items-center max-sm:items-center max-sm:pl-10 max-sm:pr-10' style={{backgroundColor:darkorange}}>
        <div><h1 className='text-4xl text-white font-bold'>Get Notified About New Products</h1></div>
        <div className='pt-5'>
            <input className='h-[30px] w-[70%] bg-white pl-2' type="text" placeholder='Enter Your Email' />
        </div>
    </div>
  )
}

export default GetNotify