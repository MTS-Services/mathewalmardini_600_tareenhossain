import { motion } from "motion/react";
import { Link } from "react-router";
import { Phone, CheckCircle } from "lucide-react";
import FeaturesGrid from "../homePage/components/FeaturesGrid";
import CTASection from "../homePage/components/CTASection";
import ProcessSection from "../homePage/components/ProcessSection";

function ShopFitouts() {
  const features = [
    {
      title: "Custom Joinery",
      description:
        "Tailored cabinetry and fixtures designed specifically for your space and operational needs.",
    },
    {
      title: "Lighting Design",
      description:
        "Strategic lighting solutions that enhance atmosphere, functionality, and brand presentation.",
    },
    {
      title: "Signage & Branding",
      description:
        "Professional installation of signage and brand elements that make your business stand out.",
    },
    {
      title: "Quality Finishes",
      description:
        "Premium materials and finishes selected for durability, aesthetics, and long-term performance.",
    },
    {
      title: "Layout Planning",
      description:
        "Intuitive space planning that optimises flow, efficiency, and customer experience.",
    },
    {
      title: "Project Management",
      description:
        "End-to-end coordination from design through completion, ensuring on-time delivery.",
    },
  ];
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[100dvh] md:h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dv18awr10/image/upload/v1772779550/envato-labs-image-edit_oosbcv.png')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Shop Fit-outs
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Precision commercial renovations that elevate your business and
              enhance customer experience
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              From supermarkets to offices and retail spaces of every scale and
              budget, we manage the entire process from feasibility and design
              through to construction, ensuring every project is executed with
              precision and efficiency. Whether you're refreshing a single space
              or undertaking a full commercial transformation, we tailor our
              approach to suit your operational needs, brand standards, and
              project goals, delivering results that elevate your business and
              enhance the customer experience.
            </motion.p>
          </motion.div>

          {/* Call Us Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <motion.a
              href="tel:+61432661176"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(45, 107, 122, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-colors duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              CALL US: 0432661176
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our Approach
            </motion.h2>
            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              What sets us apart is the way our team works, hands-on,
              detail-driven, and deeply invested in the outcome of every
              project. Our staff bring a blend of technical expertise and
              practical insight, ensuring each fit-out is thoughtfully planned
              and executed with care. With a streamlined process and direct
              communication at every stage, we make complex commercial
              renovations feel organised, transparent, and confidently managed.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center"
          >
            <Link to="/book-consultation">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(45, 107, 122, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-colors duration-300 shadow-lg"
              >
                Book A Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Creating Cohesive Spaces
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                A successful shop fit-out is about more than installing
                fixtures, it's about creating a space that reflects your brand,
                supports your staff, and guides your customers intuitively
                through the experience you want them to have. We take the time
                to understand how your business operates day-to-day, ensuring
                the layout, materials, and detailing all work together to create
                a space that feels cohesive, functional, and unmistakably yours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Built for Performance
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our team also understands the fast-paced nature of retail and
                the importance of delivering a fit-out that is both durable and
                adaptable. From custom joinery and lighting design to signage,
                finishes, and specialist installations, we coordinate every
                element with precision. The result is a polished,
                high-performing retail environment built to stand up to daily
                use while elevating the way your customers interact with your
                brand.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <FeaturesGrid features={features} title="What We Deliver" />

      {/* Industries We Serve Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Industries We Serve
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Retail Stores",
              "Supermarkets",
              "Office Spaces",
              "Restaurants & Cafes",
              "Medical Centers",
              "Salons & Spas",
              "Showrooms",
              "Specialty Shops",
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle className="w-6 h-6 text-[#2D6B7A] shrink-0" />
                <span className="text-lg md:text-xl font-semibold text-gray-900">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Whether you're launching a new retail space, refreshing an
              existing store, or transforming your office environment, we bring
              the expertise, attention to detail, and commitment needed to
              deliver a space that truly works for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="tel:+61432661176"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(45, 107, 122, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-colors duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                CALL US: 0432661176
              </motion.a>
              <Link to="/book-consultation">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(45, 107, 122, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-[#2D6B7A] text-[#2D6B7A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2D6B7A] hover:text-white transition-colors duration-300"
                >
                  Book A Consultation
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection
        heading="Ready to Transform Your Commercial Space?"
        description="Let's discuss your project and create a space that elevates your business and delights your customers."
      />
    </div>
  );
}

export default ShopFitouts;
