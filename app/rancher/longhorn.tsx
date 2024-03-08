import React from 'react'
import Image from 'next/image'
const Longhorn = () => {
  return (
    <div className='p-12'>
<h1 className='text-6xl font-black my-6'>
Longhorn


</h1>

        <h1 className='text-4xl font-black my-6'>
        Cloud native distributed block storage for Kubernetes
  
        </h1>

        <p className='text-2xl font-black'>

self-managing, self-scaling, self-healing storage services. It automates the tasks of a storage administrator: deployment, bootstrapping, configuration, provisioning, scaling, upgrading, migration, disaster recovery, monitoring, and resource management.
        </p>

        <div className='relative h-screen'>
             <Image
               src="/images/suse/longhorn.svg"
               alt="aws-sap"
       
               fill={true} 
             >
            
            </Image>
 
 
        </div>

<div className='grid grid-cols-2 gap-12'>

    <div>
        <h1 className='text-3xl font-black my-4'>
        Highly available persistent storage for Kubernetes


        </h1>
        <p className='text-2xl '>
        In the past, ITOps and DevOps have found it hard to add replicated storage to Kubernetes clusters. As a result many non-cloud-hosted Kubernetes clusters don’t support persistent storage. External storage arrays are non-portable and can be extremely expensive.

Longhorn delivers simplified, easy to deploy and upgrade, 100% open source, 
cloud-native persistent block storage without the cost overhead of open core or proprietary alternatives.

        </p>
    </div>

    <div>
        <h1 className='text-3xl font-black my-4'>
        Easy incremental snapshots and backups


        </h1>
        <p className='text-2xl '>

        Longhorn’s built-in incremental snapshot and backup features keep the volume data safe in or out of the Kubernetes cluster.

Scheduled backups of persistent storage volumes in Kubernetes clusters is simplified with Longhorn’s intuitive, free management UI.
        </p>
    </div>

    <div>
        <h1 className='text-3xl font-black my-4'>
        Cross-cluster disaster recovery


        </h1>
        <p className='text-2xl '>

        External replication solutions will recover from a disk failure by re-replicating the entire data store. This can take days, during which time the cluster performs poorly and has a higher risk of failure.

Using Longhorn, you can control the granularity to the maximum, easily create a disaster recovery volume in another Kubernetes cluster and fail over to it in the event of an emergency.

If your main cluster fails, you can bring up the app in the DR cluster quickly with a defined RPO and RTO.
        </p>
    </div>

    <div>
        <h1 className='text-3xl font-black my-4'>
        Replication Auto Balancing


        </h1>
        <p className='text-2xl '>
        When replicas are scheduled unevenly on nodes or zones, Longhorn Replica Auto Balance 
        setting enables the replicas for automatic balancing when a new node is available to the cluster.

        </p>
    </div>



    <div>
        <h1 className='text-3xl font-black my-4'>
        Kubernetes Cluster Autoscaler Support
        </h1>
        <p className='text-2xl '>
Automatic creation , deletion , resizing of persistent volumes as per Autoscaling policy.

        </p>
    </div>





    <div>
        <h1 className='text-3xl font-black my-4'>
        Encryption at Rest
  


        </h1>
        <p className='text-2xl '>

        safeguard sensitive information and prevent unauthorized access in case the storage device is lost, stolen, or accessed by malicious actors. 
        </p>
    </div>

  </div> 

  <div className='relative h-screen'>

    <h1 className='text-3xl font-black mt-12'>
    Built-In Data Locality and Affinity Features
    </h1>

    <p className='text-2xl '>Longhorn supports data locality to try and keep the data and the workload in the same node to improve performance. 
        It also supports volume and node affinity/anti-affinity policies for advanced volume scheduling.</p>
             <Image
               src="/images/suse/datalocal.png"
               alt="aws-sap"
               layout="fill"
             objectFit="contain"
       
               
             >
            
            </Image>
 
 
    </div>




    </div> //parent div 
  )
}

export default Longhorn