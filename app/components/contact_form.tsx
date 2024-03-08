"use client"

import React from 'react'


const ContactForm = () => {
  return (
   

 <div >

    <div className='flex flex-row mt-36 gap-32'>
        <div className='basis-5/12'>
           <h1 className='text-6xl font-black'> Reach Out </h1>
           <p className='mt-12 text-2xl'>
         <span className='font-black'>Do you have a question, a challenge, or maybe a concern? </span>  
         
         <div className='mt-4'>         
           We are more than happy to have a chat about anything cloud-native.</div>  

         <span>  Give us a call, or leave a note, and we will get back to you.</span>  
           </p>
        </div>

        <div className='basis-7/12'>

            <div className='flex flex-row gap-11'>

                <div className='basis-2/4'>
                <label  className="block text-sm font-medium mb-2 dark:text-white">First Name</label>
                <input type="text" id="input-fn" 
                className="py-3 px-4 block w-full border-b-2 border-b-black text-sm
                 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"   />
                </div>

                <div className='basis-2/4'>
                <label  className="block text-sm font-medium mb-2 dark:text-white">Last Name</label>
                <input type="text" id="input-ln" className="py-3 px-4 block w-full border-b-2 border-b-black text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />
                </div>
            

            </div>


          
            <div className='flex flex-row gap-11 mt-12'>


                <div className='basis-full'>
                <label  className="block text-sm font-medium mb-2 dark:text-white">Company Information</label>
                <input type="text" id="input-cmp" className="py-3 px-4 block w-full border-b-2 border-b-black text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"   />
                </div>
 
            

            </div>
            
    

 
  





            <div className='flex flex-row gap-11 mt-12'>

                <div className='basis-2/4'>
                <label   className="block text-sm font-medium mb-2 dark:text-white">Email</label>
                <input type="email" id="input-email" className="py-3 px-4 block w-full border-b-2 border-b-black text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"   />
                </div>

                <div className='basis-2/4'>
                <label className="block text-sm font-medium mb-2 dark:text-white">Phone</label>
                <input type="phone" id="input-label" className="py-3 px-4 block w-full border-b-2 border-b-black text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"   />
                </div>

            </div>



            <div className='flex flex-row gap-11 mt-12'>

            <div className='basis-full'>

            <label className="block text-sm font-medium mb-2 dark:text-white">Comment</label>
            <textarea id="textarea-comm" 
            class="py-3 px-4 border-b-2 border-b-black block w-full border-gray-200  
            text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
            disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700
             dark:text-gray-400 dark:focus:ring-gray-600"    ></textarea>

            <button type="button" className="mt-8 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <a href="/form_submitted">Submit</a>  
            </button>
            </div>
            </div>

 
   </div>
    </div>


 </div>
 
 
 
  )
}

export default ContactForm