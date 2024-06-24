import NVBanner from "./nv_banner";
import Image from "next/image";
import Neuvector from "./neuvector";
import NeuvectorDlp from "./neuvector_dlp";
import Nvkeyfeatures from "./nv_keyfeatures";
import NvSecascode from "./nv_secascode";
import NvCompliance from "./nv_compliance";
import Nvautomation from "./nv_automation";
import Neuvectorcrd from "./neuvector_crd";
import Nvheader from "./nvheader";
export default function NeuvectorPage() {
    return (
 <div>
 
 <Nvheader></Nvheader>

<Nvkeyfeatures></Nvkeyfeatures>


<div className='relative min-h-screen '>
  a
<Image
              src="/images/suse/nvarch.png"
              alt="aws-sap"
      
              fill={true} 
              
              >
      </Image>
      </div>

<Neuvector></Neuvector>

<Neuvectorcrd></Neuvectorcrd>
<NeuvectorDlp></NeuvectorDlp>

<NvSecascode></NvSecascode>
<NvCompliance></NvCompliance>
<Nvautomation></Nvautomation>

 </div>
    );
  }