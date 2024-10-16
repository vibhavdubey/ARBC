import SideBanner1 from "../assets/banner-side1.png";
import SideBanner2 from "../assets/banner-side2.png";
import BannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-5 my-5">
      {/* Main Banner */}
      <div className="md:w-2/3 w-full ">
        <img
          src={BannerImg}
          alt="Main promotional banner"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
      </div>

      {/* Side Banners */}
      <div className="flex flex-col justify-between w-full md:w-1/3 gap-5">
        {/* First Side */}
        <div className="relative w-full h-56 md:h-1/2 rounded-3xl overflow-hidden">
          <img
            src={SideBanner1}
            alt="Side banner 1"
            className="w-full h-full object-cover shadow-2xl"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4 rounded-3xl">
            <div>
              <p className="text-lg font-bold">Looking for a Product?</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600">
                Post Buy Requirement
              </button>
            </div>
          </div>
        </div>

        {/* Second Side Banner*/}
        <div className="relative w-full h-56 md:h-1/2 rounded-3xl overflow-hidden">
          <img
            src={SideBanner2}
            alt="Side banner 2"
            className="w-full h-full object-cover shadow-2xl"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4 rounded-3xl">
            <div>
              <p className="text-lg font-bold">Grow Your Business 10X Faster</p>
              <button className="mt-2 px-4 py-2 bg-green-500 rounded-xl text-white hover:bg-green-600">
                Sell on TradeIndia
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
