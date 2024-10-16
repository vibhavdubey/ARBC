// import axios from "axios";
// import { useEffect, useState } from "react";
import { LuSend } from "react-icons/lu";

const ProductCard = () => {
  const datas = [
    {
      id: 1,
      image: "./productCard/img1.png",
      title: "High Performance Automatic Potato Plants ",
      price: "Unit/Units",
      name: "M/S JANDU AGRICULTURE",
    },
    {
      id: 2,
      image: "./productCard/img2.png",
      title: "Rust Free Round Dowel Pins ",
      price: "Piece/Pieces",
      name: "MECHCON ENGINEERING",
    },
    {
      id: 3,
      image: "./productCard/img3.png",
      title: "Eco-Friendly 99.9% Pure A Grade Ammonium Carbonate… ",
      price: "Kilograms/Kilograms",
      name: "DESTINY CHEMICALS",
    },
    {
      id: 4,
      image: "./productCard/img1.png",
      title: "Designer Printed Bandhani Suit Material -  Application: Baby… ",
      price: "Piece/Pieces",
      name: "M/S JANDU AGRICULTURE",
    },
    {
      id: 5,
      image: "./productCard/img2.png",
      title: "C Type Power Press Machine 300000.00 INR (Approx.)",
      price: "Piece/Pieces",
      name: "JAY SHAKTI MACHINE TOOLS",
    },
    {
      id: 6,
      image: "./productCard/img3.png",
      title: "Polyelectrolyte Flocculant Chemical",
      price: "Kilograms/Kilograms",
      name: "CHEMTEX SPECIALITY LTD.",
    },
  ];

  //   const [productCards, setProductCards] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("")
  //       .then((result) => setProductCards(result.data))
  //       .catch((error) => console.log(error));
  //   }, [productCards]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {datas.map((data, idx) => (
        <div
          key={idx}
          className="rounded-lg flex flex-col justify-between shadow-lg hover:shadow-2xl border p-4 bg-white"
        >
          <div>
            <div className="w-full flex justify-center items-center my-4">
              <img src={data.image} alt="" className="h-40" />
            </div>
            <p className="text-xl font-medium my-2">{data.title}</p>
            <p>{data.price}</p>
          </div>

          <div>
            <p className="my-5 font-normal">{data.name}</p>
            <button className="w-full flex justify-center items-center gap-2 rounded-lg p-2 bg-blue-600 hover:bg-blue-700 text-white ">
              Send Inquiry{" "}
              <span>
                <LuSend />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
