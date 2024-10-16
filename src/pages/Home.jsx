import Banner from "../components/Banner";
import Card from "../components/Card";
import OurService from "../components/OurService";
import ProductCard from "../components/ProductCard";
import TopCategories from "../components/TopCategories";
import TrendingCategories from "../components/TrendingCategories";

const Home = () => {
  const machinaryData = [
    {
      image: "./productCard/img2.png",
      heading: "Construction Machinery",
      lists: [
        "Earth Compactor",
        "Screed Vibrator",
        "Sand Crusher Machine",
        "Concrete Buckets",
      ],
    },
    {
      image: "./productCard/img1.png",
      heading: "Bag Packaging Machines",
      lists: [
        "Jumbo Bag Filling Machine",
        "Silage Bag Packing Machine",
        "Sand Packing Machine",
        "Semi Automatic Bagging Machine",
      ],
    },
    {
      image: "./productCard/img3.png",
      heading: "Laser Cutting Machines",
      lists: [
        "CO2 Laser Cutting Machine",
        "Wood Laser Engraving Machine",
        "Fractional Laser Machine",
        "Laser Sawing Machine",
      ],
    },
    {
      image: "./productCard/img1.png",
      heading: "Grinding & Milling Machinery",
      lists: ["Hammer Mill", "Jaw Crusher", "VSI Crusher", "Colloid Mill"],
    },
    {
      image: "./productCard/img2.png",
      heading: "Packaging Machine",
      lists: [
        "Confectionery Packaging Machine",
        "Corrugated Packaging Machine",
        "Cement Packing Machine",
        "Scrubber Packaging Machine",
      ],
    },
    {
      image: "./productCard/img2.png",
      heading: "Polish & Polishing Material/Machinery",
      lists: [
        "Spectro Polishing Machine",
        "Diamond Polishing Tools",
        "Hand Polishing Machine",
        "Bean Polishing Machine",
      ],
    },
  ];
  const industrialSuppliesData = [
    {
      image: "./productCard/img1.png",
      heading: "Material Handling Equipment",
      lists: [
        "Hydraulic Lifter",
        "Full Electric Stackerr",
        "Hydraulic Lifting Trolley",
        "Lifting Trolley",
      ],
    },
    {
      image: "./productCard/img3.png",
      heading: "Cranes",
      lists: [
        "Crane Spare Parts",
        "Hydra Crane",
        "Fixed Tower Crane",
        "Zip Cranes",
      ],
    },
    {
      image: "./productCard/img2.png",
      heading: "Bright Bars",
      lists: [
        "MS Bright Bars",
        "Mild Steel Bright Bars",
        "Square Bright Bar",
        "Cold Drawn Bright Bar",
      ],
    },
    {
      image: "./productCard/img1.png",
      heading: "Laboratory Glassware & Equipment",
      lists: [
        "Laminar Air Flow",
        "Glove Boxes",
        "Dispensing Booth",
        "Humidity Chamber",
      ],
    },
    {
      image: "./productCard/img3.png",
      heading: "Conveyor & Conveyor/Industrial Belts",
      lists: [
        "Packing Belt Conveyor",
        "Slat Conveyor",
        "Bag Loading Conveyor",
        "Truck Loading Conveyors",
      ],
    },
    {
      image: "./productCard/img2.png",
      heading: "Pumps & Pumping Equipment",
      lists: [
        "Triplex Plunger Pumps",
        "Auto Oil Pump",
        "Pool Filter Pumps",
        "ETP Pump",
      ],
    },
  ];
  const constructionRealEstateData = [
    {
      image: "./productCard/img1.png",
      heading: "Portable Cabins",
      lists: [
        "FRP Mobile Toilet",
        "Portable Site Cabin",
        "Portable Kitchen",
        "Sandwich Panel Cabin",
      ],
    },
    {
      image: "./productCard/img2.png",
      heading: "Bathroom & Toilet Accessories/Fittings",
      lists: [
        "Plastic Water Tap",
        "Plastic Soap Dish",
        "Plastic Bathroom Set",
        "Drainage Spout",
      ],
    },
    {
      image: "./productCard/img3.png",
      heading: "Bricks",
      lists: [
        "Matt Paver Blocks",
        "HFK Insulation Bricks",
        "Porosint Bricks",
        "Cupola Bricks",
      ],
    },
    {
      image: "./productCard/img2.png",
      heading: "Builders & Construction Hardware",
      lists: [
        "Galvanized Angle",
        "Shuttering Material",
        "Ceiling Channel",
        "Wood Composite Panels",
      ],
    },
    {
      image: "./productCard/img1.png",
      heading: "Prefabricated & Portable Buildings",
      lists: [
        "Prefabricated Cabin",
        "Portable Site Office",
        "Prefabricated Telecom Shelter",
        "Prefabricated Panels",
      ],
    },
    {
      image: "./productCard/img3.png",
      heading: "Building & Construction Material & Supplies",
      lists: ["RCC Wall", "Construction Stone", "Cement Wall", "Ledger Plate"],
    },
  ];

  return (
    <section className="min-h-screen mx-10">
      <Banner />
      <TopCategories />
      <TrendingCategories />
      <section className=" flex flex-col items-center">
        <h1 className="lg:text-4xl text-4xl font-semibold mb-20">
          Featured Product
        </h1>
        <ProductCard />
      </section>
      <OurService />
      <section className=" flex flex-col items-center my-5">
        <h1 className="lg:text-4xl text-4xl font-semibold my-20">Machinery</h1>
        <Card datas={machinaryData} />
      </section>
      <section className=" flex flex-col items-center my-5">
        <h1 className="lg:text-4xl text-4xl font-semibold my-20">
          Industrial Supplies
        </h1>
        <Card datas={industrialSuppliesData} />
      </section>
      <section className=" flex flex-col items-center my-5">
        <h1 className="lg:text-4xl text-4xl font-semibold my-20">
          Construction & Real Estate
        </h1>
        <Card datas={constructionRealEstateData} />
      </section>
    </section>
  );
};

export default Home;
