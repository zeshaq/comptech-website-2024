import React from 'react'
import Image  from 'next/image'

const HomeBannerCN = () => {
  return (
    <div className="flex flex-row">

        <div className="basis-4/12">
            <p className="font-extrabold text-7xl text-center p-24 bg-sky-950 text-slate-100">
              
              WORK WITH CLOUD NATIVES</p>
        </div>
        <div className="basis-8/12 relative">
            
            <Image
             
             
             
             src="/images/bn1.jpeg"
             alt="cloud native banner"
             fill={true }
             className="size-fit"


             
             >

            </Image>
        </div>
    </div>
  )
}

export default HomeBannerCN