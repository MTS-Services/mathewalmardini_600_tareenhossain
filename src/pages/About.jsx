import { motion } from "motion/react";
import ProcessSection from "../pages/homePage/components/ProcessSection";

function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2D6B7A] to-[#1e5562] min-h-[50vh] flex items-center justify-center py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white  py-6 px-8 inline-block">
              About us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Professional Team Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We Are a Qualified And Professional Team
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At Bespoke we understand that your property is your investment,
                so we take pride in providing the best quality workmanship
                sharing your passion for results.
              </p>
              <p>
                With nearly 15 years of experience, a highly lauded team, and an
                extremely diverse portfolio of projects, no project is too big
                for us to handle with precision, quality, and care.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-colors duration-300 shadow-lg"
            >
              Book A Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <ProcessSection />
    </div>
  );
}

export default About;
