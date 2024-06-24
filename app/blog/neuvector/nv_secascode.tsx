import React from 'react'
import Image from 'next/image'
const NvSecascode = () => {
  return (
    <div className='p-12'>

<h1 className='text-6xl font-black'>
Supply Chain Security
</h1>
<div className='relative min-h-screen '>
  a
<Image
              src="/images/suse/secaas.png"
              alt="aws-sap"
      
              fill={true} 
              
              >
      </Image>
      </div>

<p>
For organizations shifting left, security practices that keep pace with accelerated software development and deployment are critical. NeuVector is the only container security platform to enable Security as Code, the easiest way to streamline the incorporation of security policies into the development process. Eliminate tension between development and security. Speed the CI/CD pipeline. Bake security into your DevOps team’s process. Security as Code can supercharge security in your DevOps transformation. Here’s how:

Supply Chain Security

No known vulnerabilities, check against 17 vulnerability databases.​
Compliance with PCI, GDPR, HIPAA, NIST.​
Control which containers get admitted into your cluster.​
Security as Code for DevOps and DevSecOps
As DevOps teams integrate their toolchain to enable automated deployment of container-based applications, one aspect has always slowed down a modern cloud-native pipeline: security. And while automated vulnerability scanning is now standard practice, creating the security policies to protect application workloads in production has largely been a manual process. The use of Kubernetes custom resources to capture and declare an application security policy early in the pipeline now solves this problem.

In order to ‘shift left’ security, developers can take the initial task of creating not only the application deployment manifest but the security manifest. The images are built and automated vulnerability scanning is completed and reviewed by DevOps. Once those steps are passed, DevOps can test both the deployment manifest and the security manifest and provide feedback to developers on the results.
</p>
    </div>
  )
}

export default NvSecascode