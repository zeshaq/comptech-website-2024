import React from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Camera } from 'lucide-react';


import CNCFBanner from './CNCFBanner'
import Blockone from './blockone';
import Blocktwo from './blocktwo';
import Blockthree from './blockthree';
import Blockfour from './blockfour';
import Devsecimg from './devsecimg';

const CNCFSecurity = () => {
  return (
    <div>
<CNCFBanner></CNCFBanner>


<h1 className='font-black text-4xl py-20 px-12 '>


As a leading Cloud Security provider, we specialize in delivering robust, end-to-end solutions to protect your 
assets in the ever-evolving landscape of cloud computing.
</h1>

<Blockone></Blockone>

<Blocktwo></Blocktwo>


 <Blockthree></Blockthree>

 <Blockfour></Blockfour>


<Devsecimg></Devsecimg> 



    </div>  //end of main div
  )
}

export default CNCFSecurity