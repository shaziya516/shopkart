import React from 'react'

const TestimonialCard = ({orange,safed}) => {


  const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];
  return (
    <div className='h-[200px] w-[350px] bg-[#ffd092ff] mb-20 flex flex-col items-center justify-center rounded-3xl' style={{backgroundColor:orange}} >
        <div className='h-[60px] w-[60px] rounded-full bg-pink-300' ></div>
        <h1 style={{color:safed}}>Sachin Tendulkar</h1>
        <p style={{color:safed}}>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Esse, quem quam velit or <br /> praesentium  nbusnesci Iusto,!</p>
    </div>
  )
}

export default TestimonialCard