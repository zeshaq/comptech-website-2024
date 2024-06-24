import React from 'react'

const AMBanner = () => {
  return (

    <div className="bg-contain   py-20 bg-right-top  bg-no-repeat bg-black" 
    style={{backgroundImage: 'url("/images/pamhead.svg")'}}>
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    
  
     
      <div className="mt-5 max-w-3xl text-center ">
        <h1 className=" text-left  block font-black text-7xl text-slate-50 ">
        Application Modernization Services   
        </h1>
      </div>
    
  
      <div className="mt-5 max-w-3xl text-left">
        <p className="text-2xl font-bold text-gray-50">
          
        Reengineer your app with cutting-edge technologies to embrace agility, innovation, and resilience.
          </p>
      </div>
  
     
 
    </div>
  </div>
 
  )
}

export default AMBanner