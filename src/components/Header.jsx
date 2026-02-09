import { Link } from "react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function Header({ isDesktop }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isDesktop) {
      setHidden(false);
    }
  }, [isDesktop]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY;

    // If scroll position is less than 50px, always show header
    if (latest < 50) {
      setHidden(false);
    }
    // If scrolling down, hide header
    else if (latest > previous && latest > 100 && isDesktop) {
      setHidden(true);
    }
    // If scrolling up, show header
    else if (latest < previous) {
      setHidden(false);
    }

    setLastScrollY(latest);
  });

  return (
    <header
      className={`fixed top-10 left-1/2 -translate-x-1/2 z-500 w-[90%] ${
        hidden ? "hidden" : "block"
      }`}
    >
      <div
        className="bg-white/95 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl"
        style={{ padding: "10px 20px" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-gray-900 text-2xl font-bold">
              <span className=" font-bold text-lg">B Spoke</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              SERVICES
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              PORTFOLIO
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              ABOUT
            </a>
            <a
              href="#faqs"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              FAQs
            </a>
            <a
              href="#blogs"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              BLOGS
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              CONTACT US
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            {isDesktop ? (
              <motion.button
                className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-base"
                style={{ padding: "15px 20px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.button>
            ) : (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {!isDesktop && mobileMenuOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                PORTFOLIO
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="#faqs"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </a>
              <a
                href="#blogs"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOGS
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </a>
              <button
                className="bg-black text-white px-6 py-2.5 rounded-lg font-semibold text-base w-full mt-2"
                style={{ padding: "15px 20px" }}
              >
                Book Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
