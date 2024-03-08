import React from 'react'

const JoinUsBanner = () => {
  return (
    <div className="bg-cover bg-left p-24 bg-no-repeat bg-black"
     style={{backgroundImage: 'url("/images/joinbg.png")'}}>
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    
  
     
      <div className="mt-5 max-w-2xl text-center mx-auto">
        <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
       JOIN US
      
        </h1>
      </div>
    
  
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-50 dark:text-gray-400">
          

        HashiCorp is driven by our people and our principles, 
        which have been the foundation of everything we do since 
        the company was founded in 2012. Join us on our journey as we
         work to support the world&apos;s most innovative companies as they transition to cloud infrastructure through simple yet powerful workflows and automation.
          </p>
      </div>
  
     
      
   
  
 
    </div>
  </div>
  )
}

export default JoinUsBanner