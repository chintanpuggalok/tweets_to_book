import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center items-center text-xl font-medium rounded-lg h-10  sm:h-15 sm:text-2xl ' style={{backgroundColor:"#F5F402"}}>
      Tweets to book
    <div className='flex min-w-[10%]  h-10  rounded-lg absolute right-0 text-white sm:h-15' style={{backgroundColor:"#5D7883"}}>
        <button className="w-full rounded-lg text-sm sm:text-lg ">About</button>
    </div>
    </div>
  )
} 

export default Navbar
// <div className='flex-grow'><div className='flex justify-center ' style={{border:"solid black 0px",fontFamily:"Roboto"}}></div></div>