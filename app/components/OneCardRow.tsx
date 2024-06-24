

import React from 'react'
import Image from 'next/image'

 

const OneCardRow = () => {
  return (
 

<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
 
 <div className="grid sm:grid-cols-2 sm:items-center gap-8">
   <div className="sm:order-2">
     <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">

     <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
           src="/images/image-1.jpg"
           width="40"
           height="40"
           alt="Image Description"></Image>

 </div>
   </div>
  

   <div className="sm:order-1">
     <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
       Business insight
     </p>

     <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
       <a className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
         How to get buy-in and budget for direct hiring
       </a>
     </h2>

     <div className="mt-6 sm:mt-10 flex items-center">
  

       <div className="ms-3 sm:ms-4">
         <p className="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
           Louise Donadieu
         </p>
         <p className="text-xs text-gray-500">
           Strategic Marketing Consultant
         </p>
       </div>
     </div>
    

     <div className="mt-5">
       <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
         Read more
         <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
       </a>
     </div>
   </div>
  
 </div>
 
</div>


  )
}

export default OneCardRow
