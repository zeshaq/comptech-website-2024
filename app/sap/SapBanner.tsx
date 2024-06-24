import React from 'react'

const SapBanner = () => {
  return (

    <div className="bg-cover  bg-no-repeat bg-black sm:basis-12" 
    style={{backgroundImage: 'url("/images/bg/sap-bg.jpg")'}}>
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    
  
     
      <div className="mt-5 max-w-2xl text-center ">
        <h1 className=" text-left  block font-black text-7xl text-slate-50 ">
SAP Workloads on AWS Cloud      
        </h1>
      </div>
    
  
      <div className="mt-5 max-w-3xl text-left">
        <p className="text-2xl font-bold text-gray-50">
            Combine AWS innovation, automation, speed, scalability, and optimized cost - 
            and merge it with our expertise in handling mission-critical, 
            complex and large SAP landscapes. 
          </p>
      </div>
  
     
 
    </div>
  </div>
 
  )
}

export default SapBanner