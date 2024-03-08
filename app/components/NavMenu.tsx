import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavdropServices from './nav_drop_services'
import NavdropSolutions from './nav_drop_solutions'
const NavMenu = () => {
  return (

    <header className="fixed flex flex-wrap md:justify-start md:flex-nowrap
     z-50 w-full bg-white text-sm py-3 md:py-0
      dark:bg-gray-800">
    <nav className="w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
      <div className="relative md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl 
           dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 rounded-none	" 
          href="/" aria-label="Brand">
            
           <span className='font-black'>CompTech</span>
            
            </a>
          <div className="md:hidden">
            <button type="button" className="hs-collapse-toggle flex 
            justify-center items-center size-9 text-sm font-semibold 
            rounded-lg border border-gray-200 text-gray-800
             hover:bg-gray-100 disabled:opacity-50 
             disabled:pointer-events-none dark:text-white
              dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none 
              dark:focus:ring-1 dark:focus:ring-gray-600" 
              data-hs-collapse="#navbar-collapse-with-animation" 
              aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
  
        <div id="navbar-collapse-with-animation" 
        className="hs-collapse hidden overflow-hidden 
        transition-all duration-300 basis-full grow md:block">
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
            <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
              <a className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500 
              dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
              href="/contact" aria-current="page">
                Contact
                </a>
  
              <a className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6
               dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none 
               dark:focus:ring-1 dark:focus:ring-gray-600" href="/about_us">
                About Us
              </a>
  
<NavdropServices></NavdropServices>
<NavdropSolutions></NavdropSolutions>
  
              <a className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/blog">
 Blog
 </a>
  
 <a className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/join_us">
 Careers
 </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>


  )
}

export default NavMenu