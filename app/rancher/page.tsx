 
import Image from "next/image";
import MostSecure from "./most_secure"
import WhyRancher from "./why_rancher"
import RancherApp from "./rancher_app";
import Longhorn from "./longhorn";
import RancherInfra from "./rancher_infra";

import RancherBanner from "./rancher_banner";
export default function RancherPage() {
    return (
 <div> <RancherBanner></RancherBanner>
<div className="p-12">

 

 <div className="flex flex-row gap-4">

  <div className="basis-1/2 relative">
  <Image
               src="/images/suse/rc.svg"
               alt="aws-sap"
       
               fill={true} 
               
               >
            
 </Image>

  </div>
  <div className="basis-1/2 py-40 px-12">

<h3 className="text-6xl font-black">RUN KUBERNETES EVERYWHERE™</h3>
    <p className="text-2xl pt-12 text-left">
    Rancher is the unified cloud-native platform helping teams manage their Kubernetes from infrastructure 
    to applications.  

    </p>
    <p className="text-2xl pt-12 text-left">
    Rancher streamlines cluster deployment, offering centralized authentication, 
    access control and observability across your deployments anywhere from bare metal, private clouds,
     public clouds or vSphere. 

     </p>
     <p className="text-2xl pt-12 text-left">
     Get more value out of Rancher and start optimizing infrastructure workflows, maintain
     application reliability, and fortify your organization's cloud-native environments with Rancher Prime.
    </p>
  </div>

 </div>


  
 

  <div>


  </div>

</div>

 
<MostSecure></MostSecure>

<WhyRancher></WhyRancher>

<RancherApp></RancherApp>
<RancherInfra></RancherInfra>

<Longhorn></Longhorn>
</div>
    );
  }