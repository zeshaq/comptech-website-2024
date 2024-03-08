import React from 'react'
import Image from 'next/image'

const WhySapUS = () => {
  return (
    <div className="">
 

 <div className="flex flex-row items-center content-center">

<div className="basis-1/4 content-center">
<Image
              src="/images/sapcertified.jpg"
              alt="aws-sap"
              width="100"
              height="100"
              className="w-48 content-center"
              
              >
      </Image>

</div>
<div className="basis-1/4 content-center">
<Image
              src="/images/aws2.jpg"
              alt="aws-sap"
              width="100"
              height="100"
              className="w-48"
              
              >
      </Image>

</div>


<div className="basis-2/4 p-8 text-slate-500 hover:text-blue-600">        Cloud4C is a trusted AWS MSP and a premium SAP partner across the globe. With the intelligent migration factory approach, Cloud4C has successfully migrated multiple SAP workloads to AWS cloud. Avail Zero-friction Cloud4C’s Onboarding, Migration, and Service Delivery frameworks. Our SAP on AWS experts have thought through, tested & delivered optimized architectures like Multiple Components One System (MCOS), Multiple Components in One Database (MCOD), Multitenant Database Containers (MDC), etc.
</div>

</div>



    </div>
  )
}

export default WhySapUS