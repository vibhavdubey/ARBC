import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="min-h-screen flex justify-center items-center mx-10">
        <form className="lg:w-2/5 md:w-1/2 w-full p-5 rounded-xl flex flex-col justify-center items-center bg-white shadow-2xl">
          <h1 className="text-4xl font-semibold my-10 ">Login</h1>

          <input
            type="text"
            placeholder="Enter your Email or Phone No."
            className="w-full border-2 p-3 rounded-xl font-medium"
          />
          <input
            type="password"
            placeholder="Enter your Password..."
            className="w-full border-2 p-3 rounded-xl my-5 font-medium"
          />
          <div className="flex items-center justify-between w-full mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold my-5"
          >
            Login
          </button>
          <div className="mt-2 w-full">
            Not registered yet?
            <span
              className="text-blue-600  pl-2 hover:underline cursor-pointer"
              onClick={() => navigate("/sign-up")}
            >
              Create an Account?
            </span>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
