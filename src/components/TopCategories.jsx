const TopCategories = () => {
  const datas = [
    {
      id: 1,
      logo: "",
      title: "Health & Beauty",
    },
    {
      id: 2,
      logo: "",
      title: "Apparel & Fashion",
    },
    {
      id: 3,
      logo: "",
      title: "Chemicals",
    },
    {
      id: 4,
      logo: "",
      title: "Machinery",
    },
    {
      id: 5,
      logo: "",
      title: "Construction & Real Estate",
    },
    {
      id: 6,
      logo: "",
      title: "Electronics & Electrical Sup",
    },
    {
      id: 7,
      logo: "",
      title: "Hospital & Medical Supplies",
    },
    {
      id: 8,
      logo: "",
      title: "Gifts & Crafts",
    },
    {
      id: 9,
      logo: "",
      title: "Packaging & Paper",
    },
    {
      id: 10,
      logo: "",
      title: "Agriculture",
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <h1 className="lg:text-4xl text-4xl font-semibold my-5">
        Top Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-10 gap-5">
        {datas.map((data, idx) => (
          <div
            key={idx}
            className="p-5 flex justify-center items-center rounded-3xl  text-white bg-blue-600 hover:bg-blue-700  shadow-lg"
          >
            <div>{data.logo}</div>
            <p className="lg:text-lg md:text-base">{data.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
