import React from 'react'
import Image from 'next/image'

const Nvautomation = () => {
  return (
    <div className='p-12'>

        <h1 className='text-6xl font-black'>NeuVector Workflow</h1>

        <h2 className='text-3xl font-black my-4'>NeuVector Integration into CI/CD Workflow</h2>
        <p>
        NeuVector supports the entire CI/CD process and can be easily integrated into the
         workflow to provide security throughout the development and deployment process.
        </p>

<div className=' bg-slate-400'>
    <h2 className='text-3xl font-black' >Dev and Continuous Integration Workflow</h2>
    <p className='my-6'>
    NeuVector can be integrated into the Dev and CI processes to automate vulnerability scanning. The use of the NeuVector Jenkins plug-in and Registry scanning functions enable image scanning during this phase.
  </p>

  <p className='my-6'>In addition, NeuVector can be used during automated application testing to analyze network connections
     and container behavior to anticipate any issues in staging or production.</p>
    <div className='relative min-h-screen '>
  a
<Image
              src="/images/suse/ci_workflow.png"
              alt="aws-sap"
      
              fill={true} 
              
              >
      </Image>
      </div>
 
</div>


<div className=' bg-orange-50'>
<h2 className='text-3xl font-black' >Dev and Continuous Integration Workflow</h2>
NeuVector can conduct pre-deployment compliance testing and security auditing prior to production as well as in production.
The multi-vector security platform is able to combine network security, container inspections, and host security to protect containers at run-time.

<div className='relative min-h-screen '>
  a
<Image
              src="/images/suse/cd_workflow.png"
              alt="aws-sap"
      
              fill={true} 
              
              >
      </Image>
      </div>


</div>

    </div>
  )
}

export default Nvautomation