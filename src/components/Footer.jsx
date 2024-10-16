import ListIterator from "./ListIterator";

const Footer = () => {
  const customerSupport = [
    {
      link: "",
      title: "Help Center",
    },
    {
      link: "",
      title: "User Guide",
    },
    {
      link: "",
      title: "Return & Cancellation Policy",
    },
    {
      link: "",
      title: "Shipping & Delivery Policy",
    },
  ];
  const aboutUs = [
    {
      link: "",
      title: "About Our Company",
    },
    {
      link: "",
      title: "Success Stories",
    },
    {
      link: "",
      title: "ARBC Blog",
    },
    {
      link: "",
      title: "ARBC in News",
    },
    {
      link: "",
      title: "Jobs & Careers",
    },
    {
      link: "",
      title: "Contact Us",
    },
    {
      link: "",
      title: "Partner with Us",
    },
    {
      link: "",
      title: "Make a Payment",
    },
    {
      link: "",
      title: "Weekly Newsletter",
    },
  ];
  const ourServices = [
    {
      link: "",
      title: "Advertise with Us",
    },
    {
      link: "",
      title: "Book Domains",
    },
    {
      link: "",
      title: "TI Pay",
    },
    {
      link: "",
      title: "ARBC khata",
    },
    {
      link: "",
      title: "ARBC Udhaar",
    },
  ];
  const forSellers = [
    {
      link: "",
      title: "Display New Products",
    },
    {
      link: "",
      title: "Buy ARBC Leads",
    },
    {
      link: "",
      title: "Subscribe Buy ARBC Alerts",
    },
  ];
  const forBuyers = [
    {
      link: "",
      title: "Post Your Requirement",
    },
    {
      link: "",
      title: "Browse Suppliers",
    },
    {
      link: "",
      title: "Subscribe sell ARBC Alerts",
    },
  ];
  const directory = [
    {
      link: "",
      title: "Manufacturers",
    },
    {
      link: "",
      title: "Business Services",
    },
    {
      link: "",
      title: "Service Providers",
    },
    {
      link: "",
      title: "Industry Hubs",
    },
    {
      link: "",
      title: "Country Suppliers",
    },
    {
      link: "",
      title: "Featured Products",
    },
    {
      link: "",
      title: "Sitemap",
    },
  ];

  return (
    <>
      <footer className=" bg-[#2D3941] mx-10  p-5 rounded-2xl ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <ListIterator heading="Customer Support" lists={customerSupport} />
          <ListIterator heading="About Us" lists={aboutUs} />
          <ListIterator heading="Our Services" lists={ourServices} />
          <ListIterator heading="For Sellers" lists={forSellers} />
          <ListIterator heading="For Buyers" lists={forBuyers} />
          <ListIterator heading="Directory" lists={directory} />
        </div>
        <div className=" border-t-2 border-b-2 py-5 flex justify-between items-center flex-wrap text-[#B7BBBE]">
          <ul className="flex flex-wrap gap-5">
            <li className="border-r-2 px-2 p-1">Japan</li>
            <li className="border-r-2 px-2 p-1">China</li>
            <li className="border-r-2 px-2 p-1">Taiwan</li>
            <li className="border-r-2 px-2 p-1">ThaiLand</li>
            <li className="border-r-2 px-2 p-1">Malaysia</li>
            <li className="border-r-2 px-2 p-1">Indonesia</li>
            <li className="border-r-2 px-2 p-1">UAE</li>
            <li className="border-r-2 px-2 p-1">Soudi Arabia</li>
            <li className="border-r-2 px-2 p-1">USA</li>
            <li className="border-r-2 px-2 p-1">Iran</li>
          </ul>
          <div className="flex gap-10 max-lg:my-5">
            <p>Privacy Policy</p>
            <p>Term & Conditions</p>
          </div>
        </div>
        <div className="flex justify-center items-center py-4 text-[#B7BBBE]">
          <p>
            © 1999-2024 Infocom Network Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
      <div className="h-5"></div>
    </>
  );
};

export default Footer;
