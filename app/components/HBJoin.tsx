const HBJoin = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className="basis-4/12 relative bg-cover bg-center "
        style={{ backgroundImage: 'url("/images/bg1.png")' }}
      ></div>

      <div className="basis-8/12 bg-sky-950 text-slate-100">
        <p className="font-extrabold lg:text-7xl text-4xl text-center lg:p-24 p-4 ">
          BECOME A PART OF COMPTECH
        </p>

        <p className="px-4 lg:px-24 pb-24 text-3xl text-center">
          Create fresh ideas and shape the digital transformation of our
          enterprise customers sustainably surrounded by inspiring colleagues.
          Sounds like a match to you?
          <a href="/join_us" className="block">
            <button
              type="button"
              className="py-5 px-7 mt-12 text-2xl
                inline-flex items-center gap-x-2  font-semibold 
                rounded-full border border-transparent bg-blue-600
                 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none
                  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Join Us
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default HBJoin;
