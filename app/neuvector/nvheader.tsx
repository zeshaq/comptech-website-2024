import React from 'react'
import Image from 'next/image'

const Nvheader = () => {
  return (
    <div className='flex flex-row '>

<div className='basis-1/2'>
 
<h1 className='text-6xl font-black p-12'>
    Neuvector
</h1>
</div>
<div className='basis-1/2 relative'>


<Image
               src="/images/bg/openstack-sm.jpg"
               alt="aws-sap"
       
               fill={true} 
               object-fit= "contain"
               
               >
            
 </Image>
</div>

    </div>
  )
}

export default Nvheader