 import React from 'react'
 import Image from 'next/image'
 
 const MostSecure = () => {
   return (
     <div className='p-12  '>


        <h1 className='text-6xl font-black' >Secure By Default</h1>
        <p className='my-6 text-2xl'>
        It is a fully conformant Kubernetes distribution that 
        focuses on security and compliance within the U.S. Federal Government sector.
        </p>


<div className='grid grid-cols-2 gap-20'>
    
  

            <div className='relative'> 
                
               <h2 className='text-4xl font-black'> DISA STIG compliance</h2>
                
            </div>


            <div className='relative'> 
            
            <h2 className='text-4xl font-black'>   FIPS 140-2 compliance</h2>
            </div>

            <div className='relative'>
            <h2 className='text-4xl font-black'>   CIS Kubernetes Benchmark by default </h2>
            </div>

            <div>
            <h2 className='text-4xl font-black'>    SOC 2 Compliance </h2>

            </div>


</div>        



     </div>
   )
 }
 
 export default MostSecure