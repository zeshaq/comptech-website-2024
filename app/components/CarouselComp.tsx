import Image from "next/image";

const CarouselComp = () => {
  return (
    <div
      data-hs-carousel='{
    "loadingclassNamees": "opacity-0",
    "isAutoPlay": false
  }'
      className="relative "
    >
      <div className="hs-carousel relative overflow-hidden w-full min-h-[650px] h-auto sm:h-[500px] md:h-[300px] bg-white">
        <div
          className="hs-carousel-body absolute top-0 bottom-0 start-0 flex 
      flex-nowrap transition-transform duration-700 opacity-0"
        >
          <div
            className="hs-carousel-slide bg-cover bg-right-top bg-no-repeat"
            style={{ backgroundImage: 'url("/images/bg/bg8.png")' }}
          >
            <div className="text-left pt-60 py-40 px-4 sm:px-6 lg:px-8">
              <h1 className="block text-4xl font-black text-white">
                CLOUD DRIVEN
              </h1>
              <h1 className="block text-8xl font-black text-white">CHANGE</h1>
              <p className="mt-3 font-black text-white">
                Future-proof cloud driven solutions to keep your enterprise
                ahead of the curve.
              </p>
            </div>
          </div>
          <div
            className="hs-carousel-slide bg-cover"
            style={{ backgroundImage: 'url("/images/bg2.png")' }}
          >
            <div className="text-center py-40 px-4 sm:px-6 lg:px-8">
              <h1 className="block text-4xl font-black text-white">
                WE LOVE YOUR
              </h1>
              <h1 className="block text-8xl font-black text-white">BUSINESS</h1>
              <p className="mt-3 font-black text-white">
                We are passionate about the value creation of our customers. We
                understand their culture and are on the spot – almost 24h per
                day.
              </p>
              <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                <a
                  className="w-full sm:w-auto py-3 px-4 inline-flex 
              justify-center items-center gap-x-2 text-sm font-semibold 
              rounded-lg border border-transparent bg-white text-gray-800
              hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none 
              dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div
            className="hs-carousel-slide bg-cover"
            style={{ backgroundImage: 'url("/images/bg3.png")' }}
          >
            <div className="text-center py-40 px-4 sm:px-6 lg:px-8">
              <h1 className="block text-4xl font-black text-white">
                YOUR CLOUD JOURNEY
              </h1>
              <h1 className="block text-8xl font-black text-white">
                SIMPLIFIED
              </h1>
              <p className="mt-3 text-lg text-gray-300">
                We are your trusted partner backed by certified expertise. We
                empower our clients in developing and growing their cloud
                strategy.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-4">
                <div className="relative">
                  <Image
                    src="/images/awslogo.svg"
                    alt="cloud native banner"
                    fill={true}
                    className="size-full"
                  ></Image>
                </div>
                <div className="relative p-16">
                  <Image
                    src="/images/gcplogo.svg"
                    alt="cloud native banner"
                    fill={true}
                    className="size-fit"
                  ></Image>
                </div>
                <div className="relative">
                  <Image
                    src="/images/azurelogo.svg"
                    alt="cloud native banner"
                    fill={true}
                    className="size-fit"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
      </div>
    </div>
  );
};

export default CarouselComp;
