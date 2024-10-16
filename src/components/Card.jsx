// import axios from "axios";
// import { useEffect, useState } from "react";

const Card = (props) => {
  //   const [datas, setDatas] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("")
  //       .then((result) => setDatas(result.data))
  //       .catch((error) => console.log(error));
  //   }, [datas]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {props.datas.map((data, idx) => (
        <div
          key={idx}
          className="rounded-lg shadow-lg hover:shadow-2xl border p-4 flex flex-col justify-between bg-white"
        >
          <div className="w-full">
            <div className="w-full flex justify-center items-center ">
              <img src={data.image} alt="" className="h-40" />
            </div>
            <h2 className="text-xl my-3 font-semibold">{data.heading}</h2>
          </div>
          <div>
            <ul className="mt-8">
              {data.lists.map((list, idx) => (
                <li key={idx} className="border-t-2 py-2">
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
