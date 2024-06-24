import CarouselComp from "./components/CarouselComp";
import HBJoin from "./components/HBJoin";
import HomeBannerCN from "./components/HomeBannerCN";
import OurStats from "./components/OurStats";
import WhatWeDo from "./components/WhatWeDo";
import Clients from "./components/clients";
import Industries from "./components/industries";
import Oems from "./components/oems";

export default function Home() {
  return (
    <main>
      <CarouselComp />

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
