import React from 'react'

function Navbar() {
  return (
    <div className='flex lg:h-15 sm:h-10 justify-center text-2xl font-medium rounded-lg' style={{backgroundColor:"#F5F402"}}>
      Tweets to books
    
    <div className='flex min-w-[10%] lg:h-15 sm:h-10  rounded-lg absolute right-0 text-white' style={{backgroundColor:"#5D7883"}}>
        <button className="w-full rounded-lg text-lg ">About</button>
    </div>
    </div>
  )
} 

export default Navbar
// <div className='flex-grow'><div className='flex justify-center ' style={{border:"solid black 0px",fontFamily:"Roboto"}}></div></div>