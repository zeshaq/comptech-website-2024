import React from 'react'

const Neuvectorcrd = () => {
  return (
    <div className='p-12'>

<h2 className="text-2xl font-black">NeuVector CRD for Policy As Code</h2>
            NeuVector custom resource definitions (CRDs) can be used by various teams to automatically define security policies in the NeuVector container security platform. Developers, DevOps, DevSecOps, and Security teams can collaborate to automate security policies for new or updated applications deployed to production. CRDs can also be used to enforce global security policies across multiple Kubernetes clusters.

            <div>
<h2 className="text-2xl font-bold">        
CRDs can be used to support many use cases and workflows:</h2>
<ul>
<li>Define security policy during application development, to push into production.</li>
<li>Learn behavior using NeuVector and export the CRD for review before pushing into production.</li>
<li>Migrate security policies from staging to production clusters.</li>
<li>Replicate rules across multiple replicated clusters in hybrid or multi-clouds.</li>
<li>Enforce global security policies (see examples for this at bottom).</li>
</ul>
        </div>


        <div>
        CRD&apos;s bring many benefits, including:

Define / declare the security policy, as code.
Version and track the security policies the same as application deployment manifests.
Define the allowed behavior of any application including network, file and process behavior.

        </div>


        <div>
            <h2 className='text-2xl'>
            NeuVector supports two kinds of custom resource definitions.
            </h2>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    
                    <h2 className='text-2xl font-bold'>NvSecurityRule</h2>

                    NvClusterSecurityRule is scoped at the cluster level. Either of the resource types can be configured in a yaml file and can be created during deployment, as shown in the deployment instructions and examples for NeuVector.

The significance of the NvSecurityRule resource type with a scope of namespace lies in the enforcement of the configured domain of the target group, which must match the configured namespace in the NeuVector’s CRD security policy. This provides enforcement to prevent unwanted cross-namespace policy creation which affect a Target-Group policy rule.
                
                </div>
                <div>

                <h2 className='text-2xl font-bold'>NvClusterSecurityRule</h2>

                <p>
                For the NvClusterSecurityRule custom resource definition, this has a cluster level scope, and therefore, does not enforce any namespace boundary on a defined target. However, the user-context that is used for importing the CRD-yaml file must have the necessary permissions to access or reside in the same namespace as the one configured in the CRD-yaml file, or the import will be rejected.
                </p>


                </div>
            </div>
        </div>


    </div>
  )
}

export default Neuvectorcrd