import Image from "next/image";

const HomeBannerCN = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:basis-4/12 basis-full bg-teal-950 pb-24 text-slate-100">
        <p className="font-extrabold text-5xl pt-24 text-center mx-12">
          WORK WITH CLOUD NATIVES
        </p>
        <p className="font-extralight p-12 text-center mx-12">
          We empower enterprise clients not only to migrate into the cloud but
          to use it in a value-generating way.
        </p>
      </div>
      <div className="basis-full lg:basis-8/12 relative">
        <Image
          src="/images/misc/m2.jpeg"
          alt="cloud native banner"
          layout="fill" // Use layout="fill" for next/image to work properly
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HomeBannerCN;
