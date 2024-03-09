import React from 'react'

const KubBanner = () => {
  return (
    <div className="bg-cover  bg-no-repeat bg-black bg-right px-24 py-24 "
    
    style={{backgroundImage: 'url("/images/bg/bg8.svg")'}}>
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    
  
     
      <div className="mt-5 max-w-2xl text-center mx-auto">
        <h1 className="block font-black text-white text-8xl ">
        Kubernetes Implementation & Operation
      
        </h1>
      </div>
    
  
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-3xl font-black text-slate-50">
          
        Modernize your IT systems with flexible, reliable and independent microservices applications.


          </p>
      </div>
  
     
 
   
  
    </div>
  </div>
  )
}

export default KubBanner