import React from 'react'

const SapBanner = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/images/bg/sap-bg.jpg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    
    
     
      <div className="mt-5 max-w-2xl text-center mx-auto">
      <h1 className="block text-8xl font-black text-white">
            
           SAP on CLOUD
          </h1>
      </div>
    
  
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-50 dark:text-gray-400">
          
        Cloud4C is an Azure Expert Managed Services Provider (MSP) and, with its team of experts, adds value to your SAP workloads on Azure Cloud. We bring Azure’s innovation, automation, speed, scalability, and optimized cost - and merge it with Cloud4C’s deep knowledge and expertise in handling mission-critical, complex and large SAP landscapes. 
  
          </p>
      </div>
  
 
    </div>
  </div>
  )
}

export default SapBanner