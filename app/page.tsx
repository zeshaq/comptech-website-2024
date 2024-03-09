import Image from "next/image";
import CarouselComp from "./components/CarouselComp";
import ThreeCards from "./components/ThreeCards";
import OneCardRow from "./components/OneCardRow";
import HeroOne from "./components/HeroOne";
import OurClients from "./components/OurClients";
import FooterComp from "./components/FooterComp";
import NavMenu from "./components/NavMenu";
import OurStats from "./components/OurStats";
import HomeBannerCN from "./components/HomeBannerCN";
import HBJoin from "./components/HBJoin";
import WhatWeDo from "./components/WhatWeDo";
import Clients from "./components/clients";
import Oems from "./components/oems";
import Industries from "./components/industries";
import ContactForm from "./components/contact_form";

export default function Home() {
  return (
 <main>



 

 
<CarouselComp/>

<OurStats></OurStats>
<HomeBannerCN></HomeBannerCN>
<WhatWeDo></WhatWeDo>
<Oems></Oems>

<Industries></Industries>
<Clients></Clients>
 

 
 
<HBJoin></HBJoin>

 
 </main>
  );
}
