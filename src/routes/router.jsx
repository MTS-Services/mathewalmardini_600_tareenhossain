import { Routes, Route } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/homePage/Home";
import About from "../pages/about/About";
import FAQ from "../pages/faq/FAQ";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import BlogPost from "../pages/blog/BlogPost";
import BookConsultation from "../pages/book_consultation/BookConsultation";

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

        {/* Add more routes here - they will all have Header and Footer */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
