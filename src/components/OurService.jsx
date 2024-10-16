import { FaArrowCircleRight } from "react-icons/fa";
const OurService = () => {
  const ourServiceData = [
    {
      id: 1,
      image: "/ourService/serviceImg1.png",
      title: "Trade",
      description: "Udhaar",
    },
    {
      id: 2,
      image: "/ourService/serviceImg2.png",
      title: "Trade",
      description: "GetDistributors.com",
    },
    {
      id: 3,
      image: "/ourService/serviceImg3.png",
      title: "Trade",
      description: "Shows",
    },
    {
      id: 4,
      image: "/ourService/serviceImg4.png",
      title: "Trade",
      description: "Khata",
    },
  ];
  return (
    <section>
      <h1 className="lg:text-4xl text-4xl font-semibold my-20 text-center">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {ourServiceData.map((data, idx) => (
          <div
            key={idx}
            className="flex justify-between flex-col p-5 rounded-xl lg:h-80 h-60 object-contain text-white"
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <div>
              <p>{data.title}</p>
              <p className="text-2xl font-semibold">{data.description}</p>
            </div>
            <div className="font-light flex items-center justify-start gap-2">
              <p>Learn More</p>
              <p>
                <FaArrowCircleRight />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
