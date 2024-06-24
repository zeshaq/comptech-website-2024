import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className='p-12'>


      <h1 className='text-6xl font-black p-12 text-center'>Blog</h1>


     <div className='grid grid-cols-4 gap-12'>
 

     <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/blog/neuvector">
      <div className="relative pt-[50%] sm:pt-[70%] overflow-hidden">
        <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 
        transition-transform duration-500 ease-in-out " 
        src="/images/blog/nv.jpg" 
        alt="Image Description"
        width={1110}
        height={1180}
        >
          </Image>
     
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          SUSE Neuvector
        </h3>
        <p className="mt-3 text-gray-800 dark:text-gray-200">
        NeuVector is the only Kubernetes-native container security platform that delivers complete container security
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 
        group-hover:underline font-medium">
          Read more
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
      



    <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/blog/neuvectordocs">
      <div className="relative pt-[50%] sm:pt-[70%] overflow-hidden">
        <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 
        transition-transform duration-500 ease-in-out " 
        src="/images/blog/nv.jpg" 
        alt="Image Description"
        width={1110}
        height={1180}
        >
          </Image>
     
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Neuvector Brochures
        </h3>
        <p className="mt-3 text-gray-800 dark:text-gray-200">
        NeuVector is the only Kubernetes-native container security platform that delivers complete container security
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 
        group-hover:underline font-medium">
          Read more
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>


      
    </div> 

      
      
    </div>
  )
}

export default Blog