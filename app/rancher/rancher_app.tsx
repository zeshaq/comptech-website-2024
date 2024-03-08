import React from 'react'

const RancherApp = () => {
  return (
    <div className='p-12'>
<h1 className='text-6xl font-black my-6'>
            Rancher Prime Application Development Engine
</h1>

<div className='grid grid-cols-2 gap-12'>

    <div>
        <h1 className='text-3xl font-black my-4'>
        Simplified Kubernetes for developers
        </h1>
        <p className='text-2xl '>

        Powered by Epinio, simplify Kubernetes complexity for developers, enable them to focus on application development, not infrastructure operations.
        </p>
    </div>

    <div>
        <h1 className='text-3xl font-black my-4'>

        Enhanced Application Development
        </h1>
        <p className='text-2xl '>
        Accelerate time-to-market by automating application build and deployment on Kubernetes, optimizing development workflows. 

        </p>
    </div>

    <div>
        <h1 className='text-3xl font-black my-4'>
        Improved collaboration
        </h1>
        <p className='text-2xl '>

        Promote cross-functional collaboration with developer-friendly features, reducing communication gaps and enhancing code quality.
        </p>
    </div>

    <div>
        <h1 className='text-3xl font-black my-4'>
        Resource Optimization
        </h1>
        <p className='text-2xl '>
        Develop applications on Kubernetes as needed to optimize resource utilization, minimize costs, and maximize infrastructure ROI.

        </p>
    </div>
</div>
    </div>
  )
}

export default RancherApp