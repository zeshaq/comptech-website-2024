const FooterComp = () => {
  return (
    <div className="  bg-cyan-950 text-slate-50 p-12 pt-40">
      <div className=" basis-full">
        <h1 className="font-black text-3xl">
          CompTech Network System (PVT) Ltd
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 ">
        <div className="basis-3/12">
          <h2 className="font-bold mt-6">Corporate Office</h2>
          <p>Richmond Concord Level 7</p>
          <p>68 Gulshan Avenue Dhaka 1212 Bangladesh</p>

          <h2>info@comptech.com.bd</h2>

          <h2>+88 01916-277170</h2>
          <h2>+88 01958-501206</h2>
        </div>

        <div className="basis-3/12">
          <h1 className="font-bold mt-6"> Head Office </h1>
          <h2>Pinaki Group</h2>
          29, Gareb-Newaz Avenue
          <p>Sector 11, Uttara </p>
          Dhaka 1230
          <h2>Phone +88-02-8931996</h2>
          <h2>Email : info@pinakigroup.com</h2>
        </div>

        <div className="3/12"></div>
      </div>
    </div>
  );
};

export default FooterComp;
