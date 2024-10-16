import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [notARobot, setNotARobot] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("https://your-api-url.com/signup", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password,
        agree_to_terms: agreeToTerms,
      });

      if (response.status === 200) {
        alert("Signup successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center mx-10">
      <div className="lg:w-2/5 md:w-1/2 w-full p-5 space-y-6 bg-white rounded-xl shadow-2xl my-20">
        <h1 className="text-4xl font-semibold text-center my-10">Sign Up</h1>
        <p className="text-center text-gray-500">
          Enter your details to create your ARBC account:
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex max-sm:flex-col gap-4">
            <div className="w-1/2 max-sm:w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full border-2 p-3 rounded-xl font-medium"
              />
            </div>
            <div className="w-1/2 max-sm:w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full border-2 p-3 rounded-xl font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border-2 p-3 rounded-xl font-medium"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="flex w-full max-sm:flex-col gap-4">
              <select className="border p-3 rounded-md">
                <option>India +91</option>
              </select>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="w-full border-2 p-3 rounded-xl font-medium"
              />
            </div>
          </div>

          <div className="flex max-sm:flex-col gap-4">
            <div className="w-1/2 max-sm:w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border-2 p-3 rounded-xl font-medium"
              />
            </div>
            <div className="w-1/2 max-sm:w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full border-2 p-3 rounded-xl font-medium"
              />
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-1"
            />
            <label className="text-sm text-gray-700">
              I agree with ARBC’s{" "}
              <a href="#" className="text-blue-600">
                User Agreement
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={notARobot}
              onChange={(e) => setNotARobot(e.target.checked)}
              className="mt-1"
            />
            <label className="text-sm text-gray-700">I am not a robot.</label>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Sign Up
          </button>

          <div className="text-center">
            <p className="text-gray-500">
              Already have an ARBC Account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Log In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
