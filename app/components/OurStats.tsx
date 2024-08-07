const OurStats = () => {
  return (
    <div className="bg-sky-950	text-center">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" text-slate-100 pt-16 pb-16 sm:px-4 text-3xl ">
          Driven by the highest delivery culture and dedicated to local presence
          we take our clients to the next big step in their digital evolution.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  text-center sm:py-4 sm:px-4">
          <div>
            <div className=" text-cyan-400">
              <p className="p-6 text-7xl font-extrabold text-center">150+</p>
              <p className="font-extrabold">EMPLOYEES</p>
            </div>
          </div>

          <div>
            <div className=" text-cyan-400">
              <p className="p-6 text-7xl font-extrabold text-center">50+</p>
              <p className="font-extrabold">CERTIFIED ENGINEERS</p>
            </div>
          </div>

          <div>
            <div className=" text-cyan-400">
              <p className="p-6 text-7xl font-extrabold text-center">200+</p>
              <p className="font-extrabold">PROJECT COMPLETIONS</p>
            </div>
          </div>
        </div>

        <p className="p-2 lg:p-12 text-slate-100 text-3xl pb-40">
          Comptech is a leading tech company with a strong technical vision and
          cutting-edge solution approach to customer needs. We are your trusted
          partner for all things cloud native, offering a one-stop solution for
          your cloud needs. Our proven methodologies and extensive team of
          certified experts ensure that your cloud journey is efficient, secure,
          following best practices and tailored to your business goals.
        </p>
      </div>
    </div>
  );
};

export default OurStats;
