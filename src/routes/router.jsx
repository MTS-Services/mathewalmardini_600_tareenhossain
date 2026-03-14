import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

const Layout = lazy(() => import("../layout/Layout"));
const Home = lazy(() => import("../pages/homePage/Home"));
const About = lazy(() => import("../pages/about/About"));
const FAQ = lazy(() => import("../pages/faq/FAQ"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const BlogPost = lazy(() => import("../pages/blog/BlogPost"));
const BookConsultation = lazy(
  () => import("../pages/book_consultation/BookConsultation"),
);
const BathroomRenovation = lazy(
  () => import("../pages/bathroom_renovation/BathroomRenovation"),
);
const KitchenRenovation = lazy(
  () => import("../pages/kitchen_renovation/KitchenRenovation"),
);
const LaundryRenovation = lazy(
  () => import("../pages/laundry_renovation/LaundryRenovation"),
);
const ShopFitouts = lazy(() => import("../pages/shop_fitouts/ShopFitouts"));
const Portfolio = lazy(() => import("../pages/portfolio/Portfolio"));
const BathroomPortfolio = lazy(
  () => import("../pages/bathroom_portfolio/BathroomPortfolio"),
);
const KitchenPortfolio = lazy(
  () => import("../pages/kitchen_portfolio/KitchenPortfolio"),
);
const LaundryPortfolio = lazy(
  () => import("../pages/laundry_portfolio/LaundryPortfolio"),
);
const ThankYou = lazy(() => import("../pages/thank_you/ThankYou"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        {/* Thank You page without header/footer */}
        <Route path="/thank-you" element={<ThankYou />} />

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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/bathroom-portfolio" element={<BathroomPortfolio />} />
          <Route path="/kitchen-portfolio" element={<KitchenPortfolio />} />
          <Route path="/laundry-portfolio" element={<LaundryPortfolio />} />

          {/* Add more routes here - they will all have Header and Footer */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
