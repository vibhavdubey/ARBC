import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SocialLink from "./components/SocialLink";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <section className="">
      <NavBar />
      <Routes>
        <Route path="/ARBC/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <SocialLink />
      <Footer />
    </section>
  );
};

export default App;
