import React from 'react'

const RancherBanner = () => {
  return (
    <div className="bg-contain  py-40  bg-[right_top_2rem] bg-no-repeat bg-[#DDDDDD]" 
    style={{backgroundImage: 'url("/images/suse/rancher.png")'}}>
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    
  
     
      <div className="mt-5 max-w-2xl text-center ">
        <h1 className=" text-left  block font-black text-black text-8xl 
         dark:text-gray-200">
       Rancher
      
        </h1>
      </div>
    
  
      <div className="mt-5 max-w-3xl text-left">
        <p className="text-4xl font-bold text-black">
          

     World’s most popular multi-cluster Kubernetes management solution.
          </p>
      </div>
  
     
 
    </div>
  </div>
  )
}

export default RancherBanner