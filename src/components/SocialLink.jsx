import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiLinkedin, FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.png";
const SocialLink = () => {
  return (
    <section className=" mx-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-5 flex justify-between items-center p-5 border rounded-2xl bg-white shadow-md my-10">
      <div>
        {/* <img src={Logo} alt="" className="h-14" /> */}
        <h1 className="text-5xl font-semibold font-mono text-[#142f3c]">
          ARBC
        </h1>
      </div>
      <div className="flex max-sm:flex-col items-center md:gap-8 gap-3 text-lg">
        <p>Follow us on</p>
        <div className="flex gap-2 max-sm:my-3">
          <Link to="">
            <FaFacebookF />
          </Link>
          <Link to="">
            <FiLinkedin />
          </Link>
          <Link to="">
            <BsTwitterX />
          </Link>
          <Link to="">
            <FiYoutube />
          </Link>
        </div>
        <button className="border-2 px-3 py-2 text-white capitalize rounded-2xl bg-blue-600 hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default SocialLink;
