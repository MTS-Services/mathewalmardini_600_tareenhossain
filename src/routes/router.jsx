import { Routes, Route } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/homePage/Home";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here - they will all have Header and Footer */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
