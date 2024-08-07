import React from 'react'
import Image from 'next/image'

const NavdropServices = () => {
  return (
    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
    <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      Services
      <svg className="flex-shrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </button>

    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col mx-1 md:mx-0">
          <a className="group flex gap-x-5 hover:bg-gray-100 p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/sap">
            <svg className="flex-shrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            <div className="grow">
              <p className="font-medium text-gray-800 dark:text-gray-200">SAP Solutions on Cloud</p>
              <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
              Reinvent and upgrade your SAP workloads on AWS, Google and Azure 
                </p>
            </div>
          </a>

          <a className="group flex gap-x-5 hover:bg-gray-100 p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="app_modernization">
            <svg className="flex-shrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
            <div className="grow">
              <p className="font-medium text-gray-800 dark:text-gray-200">App Modernization</p>
              <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
              Reengineer your app with cutting-edge technologies to embrace agility, innovation, and resilience.

Get started

                </p>
            </div>
          </a>

          <a className="group flex gap-x-5 hover:bg-gray-100  p-4 dark:text-gray-200
           dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1
            dark:focus:ring-gray-600" href="/cncf_security">
            <svg className="flex-shrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
            <div className="grow">
              <p className="font-medium text-gray-800 dark:text-gray-200">Cloud Native Security </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                
                Cloud Native Security Solutions  
                </p>
            </div>
          </a>
        </div>

        <div className="flex flex-col mx-1 md:mx-0">
          <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/microservice">
            <svg className="flex-shrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            <div className="grow">
              <p className="font-medium text-gray-800 dark:text-gray-200">Microservice Consulting</p>
              <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                Boost your business agility by migrating from legacy to modern architecture. 
                </p>
            </div>
          </a>

          <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/kubernetes">
            <svg className="flex-shrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
            <div className="grow">
              <p className="font-medium text-gray-800 dark:text-gray-200">Kubernetes Implementation & Operation</p>
              <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                From Technology selection to implementation and operation. We got you covered. 
                
                </p>
            </div>
          </a>

          <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/openstack">
            <svg className="flex-shrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <div className="grow">
              <p className="font-medium text-gray-800 dark:text-gray-200">OpenStack Solutions</p>
              <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                
                On Prem and Managed Cloud services with world&apos;s most popular cloud platform - OpenStack
                
                </p>
            </div>
          </a>
        </div>

        <div className="flex flex-col pt-4 px-20 ">
      

       <h1 className='font-black text-4xl dark:text-gray-200'>30 Years</h1>
    
            
            <div className="grow">
              <p className=" text-2xl font-extralight mt-2 dark:text-gray-200">
           Of relentless pursuit of perfection. 
              </p>
 
            </div>
        
       
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavdropServices