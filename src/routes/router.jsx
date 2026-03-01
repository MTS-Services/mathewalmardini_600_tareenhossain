import { Routes, Route } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/homePage/Home";
import About from "../pages/about/About";
import FAQ from "../pages/faq/FAQ";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import BlogPost from "../pages/blog/BlogPost";
import BookConsultation from "../pages/book_consultation/BookConsultation";
import BathroomRenovation from "../pages/bathroom_renovation/BathroomRenovation";
import KitchenRenovation from "../pages/kitchen_renovation/KitchenRenovation";
import LaundryRenovation from "../pages/laundry_renovation/LaundryRenovation";
import ShopFitouts from "../pages/shop_fitouts/ShopFitouts";
import BathroomPortfolio from "../pages/bathroom_portfolio/BathroomPortfolio";
import KitchenPortfolio from "../pages/kitchen_portfolio/KitchenPortfolio";
import LaundryPortfolio from "../pages/laundry_portfolio/LaundryPortfolio";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="/bathroom-renovation" element={<BathroomRenovation />} />
        <Route path="/kitchen-renovation" element={<KitchenRenovation />} />
        <Route path="/laundry-renovation" element={<LaundryRenovation />} />
        <Route path="/shop-fitouts" element={<ShopFitouts />} />
        <Route path="/bathroom-portfolio" element={<BathroomPortfolio />} />
        <Route path="/kitchen-portfolio" element={<KitchenPortfolio />} />
        <Route path="/laundry-portfolio" element={<LaundryPortfolio />} />

        {/* Add more routes here - they will all have Header and Footer */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
