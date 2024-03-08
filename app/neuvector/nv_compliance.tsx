import React from 'react'

const NvCompliance = () => {
  return (
    <div className='p-12'>

<h1 className='text-6xl font-black'>Compliance with NeuVector by SUSE</h1>

<p className='my-12 font-2xl'>
Compliance is top-of-mind for most organizations. Maintaining compliance in container environments is a new challenge that requires special consideration. NeuVector can help you navigate the maze of compliance regulations and ensure that you meet or exceed expectations for common standards like PCI-DSS, HIPAA, and GDPR.

</p>


<h1 className='text-4xl font-black'>NeuVector is uniquely positioned to help organizations enforce major compliance standards.</h1>

<div className='grid grid-cols-3 gap-12 mt-12'>
    <div className=''>
    Pre-configured compliance templates to identify issues and generate audit reports
    </div>

    <div>Unique network segmentation and
         container firewall technology to detect threats, block attacks, and capture forensic network data.</div>
    <div>CIS Benchmarks and custom checks to prevent misconfigurations of container infrastructures.</div>    
    <div>Configuration auditing and compliance with standards based</div>  
    <div>A vulnerability and compliance management tool to identify and remediate the most critical risks.</div>  
    <div>End-to-end vulnerability scanning in the CI/CD pipeline and into production.</div>  
 
</div>


<h1>Payment Card Industry Data Security Standard (PCI DSS)</h1>
<p className='my-6'>

Enterprises seeking to leverage containers and microservices in compliance with the Payment Card Industry Data Security Standard (PCI DSS) will find some advantageous synergies between the regulations and the technologies – but also some aspects that require particularly careful attention.

Container environments raise PCI DSS compliance challenges in the areas of monitoring, establishing security controls, and limiting the scope of the Cardholder Data Environment (CDE) with network segmentation. Because of containers’ ephemeral nature – spinning up and down quickly and dynamically, and often only existing for a number of minutes – monitoring and security solutions must be active in real-time and able to automatically respond to rapidly transforming attacks.

Because most container traffic is internal “east-west” communication between containers, traditional firewalls and security systems designed to vet north-south traffic are blind to nefarious threats that may escalate within the container environment. And, the use of containers can actually increase the CDE, requiring critical protections for the entire microservices environment unless limited by a container firewall, like that in NeuVector, able to fully visualize and tightly control its scope.
</p>

    </div>
  )
}

export default NvCompliance