import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full sticky top-0 z-10 bg-[#f7ecd8]">
      <nav className="mx-10 flex mt-5 justify-between items-center py-3 bg-[#2D3941] text-white px-3 rounded-xl ">
        <div>
          <Link to="./ARBC/">
            {/* <img src={Logo} alt="logo" className="w-24" /> */}
            <h1 className="text-5xl font-semibold font-mono ">ARBC</h1>
          </Link>
        </div>
        <div className="w-1/3 flex relative ">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Product & Services"
            className="border-2 px-4 py-2 w-full rounded-lg"
          />
          <button className="absolute w-16 right-0 h-full rounded-lg border-2 px-4 py-2 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white">
            <CiSearch className="" />
          </button>
        </div>
        <div className="w-1/3 md:flex justify-center items-center gap-3 hidden">
          <button
            onClick={() => navigate("/login")}
            className="border-2 px-3 py-2 capitalize rounded-2xl"
          >
            login
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="border-2 px-3 py-2 text-white capitalize rounded-2xl bg-blue-600 hover:bg-blue-700"
          >
            sign up
          </button>
          <button className="border-2 px-3 py-2 capitalize rounded-2xl">
            list your business
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
