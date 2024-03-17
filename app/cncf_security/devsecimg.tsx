import React from 'react'
import Image from 'next/image'
const Devsecimg = () => {
  return (

    <div className='flex flex-row p-12'>

        <div className='basis-4/12'>
<h1 className='text-2xl font-black'>
Transition from DevOps to DevSecOps
</h1>

<h2 className='text-lg font-black mt-6' >
Threat modelling, monitoring, and end-to-end risk assessments
</h2>


<h2 className='text-lg font-black mt-6' >
Merging Security into DevOps

</h2>


<h2 className='text-lg font-black mt-6' >
Continuous monitoring of any security concerns during different development stages
</h2>

 



        </div>
    <div className=' basis-8/12 relative  h-96'>

<Image
               src="/images/devopsimg.jpeg"
               alt="aws-sap"
       
               fill={true} 
               className='object-contain'
               
               >
            
 </Image>

    </div>
    </div>
  )
}

export default Devsecimg