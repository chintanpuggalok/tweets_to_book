import React from 'react'

function Form() {
  return (
    <div className='flex flex-col items-center  '>
        <div><input type="text" alt='twitter handle' placeholder='@yourtwitterhandle' className='rounded-lg'  /> </div>
        <div> <button className='ring-4 divide-white rounded-lg mt-5'  style={{color:"#B7B9BA"}} > Turn my tweets into a Book </button> </div>
        </div>
  )
}

export default Form