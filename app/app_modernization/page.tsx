import React from 'react'
import Image from 'next/image'
import AMBanner from './AMBanner'
import Amblocktwo from './amblocktwo'
import Amblockthree from './amblockthree'

const AppModernization = () => {
  return (
    <div>
<AMBanner></AMBanner>


<div className='p-12'>

  <p className=' text-left font-semibold text-2xl pb-20 pt-20'>
  Is your application hindering your business processes due to its aging, redundant, and poor architecture? Obsolete products lead to operational inefficiencies, siloed data, and an inability to adapt to changing market dynamics. This disconnect not only hinders growth but puts your organization at a competitive disadvantage.
 

  </p>

</div>


 
<Amblocktwo></Amblocktwo>


<Amblockthree></Amblockthree>

    </div>
  )
}

export default AppModernization