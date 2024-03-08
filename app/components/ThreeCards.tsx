import React from 'react'
import Image from 'next/image'
const ThreeCards = () => {
  return (
    
 
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
     
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Insights</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Stay in the know with insights from industry experts.</p>
      </div>
    
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
        <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
           src="/images/image-1.jpg"
          width="100"
            height="100"
            alt="Image Description"></Image>
            <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
              Sponsored
            </span>
          </div>
    
          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
              Studio by Preline
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
              Produce professional, reliable streams easily leveraging Prelin innovative broadcast studio
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </div>
        </a>
     
        <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
            src="/images/image-1.jpg"
            width="100"
            height="100"
            alt="Image Description"></Image>


     </div>
    
          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
              Onsite
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
              Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </div>
        </a>
  
    
        <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
            src="/images/image-1.jpg"
            width="40"
            height="40"
            alt="Image Description"></Image>


     </div>
    
          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
              Onsite
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
              Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </div>
        </a>
     
     
      </div>
   
    </div>
   
 


  ) //end of return 
}

export default ThreeCards