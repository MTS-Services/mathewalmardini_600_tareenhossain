import { Link } from "react-router";
import { motion } from "motion/react";
import { Globe } from "lucide-react";

function Header() {
  return (
    <motion.header
      className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[80%]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="bg-white/95 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl"
        style={{ padding: "15px 20px" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-pink-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900">elementor</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#products"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
            >
              Products
            </a>
            <a
              href="#agency"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
            >
              Agency
            </a>
            <a
              href="#enterprise"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
            >
              Enterprise
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
            >
              Pricing
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              <span>En</span>
              <Globe className="w-4 h-4" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              Log in
            </button>
            <motion.button
              className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
