const TrendingCategories = () => {
  const datas = [
    {
      id: 1,
      image: "./trendingCategories/T1.png",
      title: "Common Medicines & Drugs",
    },
    {
      id: 1,
      image: "./trendingCategories/T2.png",
      title: "Medical, Diagnostic & Hospital",
    },
    {
      id: 1,
      image: "./trendingCategories/T3.png",
      title: "Personal Care Products",
    },
    {
      id: 1,
      image: "./trendingCategories/T4.png",
      title: "Solar Panels",
    },
    {
      id: 1,
      image: "./trendingCategories/T5.png",
      title: "Human Hair & Accessories",
    },
    {
      id: 1,
      image: "./trendingCategories/T6.png",
      title: "Jackets",
    },
  ];
  return (
    <section className="w-full flex flex-col justify-center items-center my-5 border-t-2 border-b-2 py-10">
      <h1 className="lg:text-4xl text-4xl font-semibold mb-10">
        Trending Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
        {datas.map((data, idx) => (
          <div
            key={idx}
            className=" rounded-lg shadow-lg hover:shadow-2xl border p-2 bg-white flex flex-col justify-between items-center"
          >
            <div className="w-full flex justify-center items-center my-4">
              <img src={data.image} alt="" className="h-40" />
            </div>
            <p className="border-t-2 p-2 font-medium w-full text-center">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
