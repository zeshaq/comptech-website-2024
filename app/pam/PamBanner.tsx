import React from 'react'

const PamBanner = () => {
  return (
    <div className="bg-contain  bg-no-repeat bg-black" style={{backgroundImage: 'url("/images/pamhead.svg")'}}>
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    
  
     
      <div className="mt-5 max-w-2xl text-center mx-auto">
        <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
        Privileged Access Management
      
        </h1>
      </div>
    
  
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-50 dark:text-gray-400">
          
        Secure Access. Simplified


          </p>
      </div>
  
     
      <div className="mt-8 gap-3 flex justify-center">
        <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
          Get started
          <svg className="flex-shrink-0 size-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
        <button type="button" className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          $ npm i preline
          <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-gray-700 dark:text-gray-400">
            <svg className="flex-shrink-0 size-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
          </span>
        </button>
      </div>
   
  
      <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
        <span className="text-sm text-gray-600 dark:text-gray-400">Package Manager:</span>
        <span className="text-sm font-bold text-gray-900 dark:text-white">npm</span>
        <svg className="size-5 text-gray-300 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"/>
        </svg>
        <a className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="#">
          Installation Guide
          <svg className="flex-shrink-0 size-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export default PamBanner