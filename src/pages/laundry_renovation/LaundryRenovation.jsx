import { motion } from "motion/react";
import { Link } from "react-router";
import { Phone, Image } from "lucide-react";
import { useRef } from "react";
import FeaturesGrid from "../homePage/components/FeaturesGrid";
import CTASection from "../homePage/components/CTASection";

function LaundryRenovation() {
  const videoRef = useRef(null);

  const features = [
    {
      title: "Experience",
      description:
        "With many years of experience, we know precisely how to handle any project for a finished space you will love.",
    },
    {
      title: "Friendly Customer Service",
      description:
        "We believe that quality work begins with a quality communication. That's why we bring in the finest people to handle all our services.",
    },
    {
      title: "Trusted Professionals",
      description:
        "We are qualified and licensed to handle every aspect of your project, so you can count on our team to give you the certainty you need.",
    },
    {
      title: "Reasonable Prices",
      description:
        "We make your laundry remodel as comfortable as possible by making it affordable to achieve the new laundry space you want.",
    },
    {
      title: "Great Solutions",
      description:
        "Home owners can find outstanding solutions and hear amazing ideas that they never thought possible. And it is all outlined in a free, no-obligation quote.",
    },
    {
      title: "Quality Materials",
      description:
        "We stand behind the incredible work that our team provide and we use only the best materials. That is how we get the most quality out of every finished project.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Video */}
      <section className="relative min-h-[100dvh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              // src="/banner_video/3d-rendering-laundry-room-on-ground-floor-washing-2025-12-17-11-02-47-utc.mov"
              src="https://res.cloudinary.com/dv18awr10/video/upload/v1772777948/3d-rendering-laundry-room-on-ground-floor-washing-2025-12-17-11-02-47-utc_k7rn6d.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Laundry Renovation
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              A functional, efficient space designed to make your daily tasks
              easier
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed"
            >
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                We're here to guide you through every stage of your laundry
                renovation. From thoughtful planning and smart design to the
                installation of all plumbing fixtures, Bespoke Designs and
                Construction ensures your project is completed with precision
                and care.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                You can trust that every detail will be handled correctly,
                resulting in a functional, efficient, and beautifully finished
                space that truly supports your home.
              </motion.p>
            </motion.div>

            {/* Laundry Image 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative overflow-hidden rounded-xl shadow-xl aspect-[4/3] group cursor-pointer"
            >
              <img
                // src="/laundry_renovation/laundry_1.jpg"
                src="https://res.cloudinary.com/dv18awr10/image/upload/v1772786386/laundry_1_u7nqno.jpg"
                alt="Laundry Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2D6B7A]/0 group-hover:bg-[#2D6B7A]/10 transition-all duration-300"></div>
            </motion.div>
          </div>

          {/* Call Us Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center mb-16"
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

          {/* Second Row - Reversed Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Laundry Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative overflow-hidden rounded-xl shadow-xl aspect-[4/3] group cursor-pointer order-2 lg:order-1"
            >
              <img
                // src="/laundry_renovation/laundry_2.jpg"
                src="https://res.cloudinary.com/dv18awr10/image/upload/v1772786387/laundry_2_mdryxn.jpg"
                alt="Laundry Example"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2D6B7A]/0 group-hover:bg-[#2D6B7A]/10 transition-all duration-300"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed order-1 lg:order-2"
            >
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Your laundry should be a space that complements your lifestyle.
                At Bespoke Designs and Construction, we transform laundry rooms
                to maximise every inch of available space and make the room
                truly work for you.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Whether it's expanding cabinetry, increasing storage, or
                introducing more natural light and refined lighting design, we
                enhance your laundry in ways that elevate both function and
                comfort. The result is a space that feels efficient, bright, and
                beautifully tailored to your needs.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
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
          </motion.div>
        </div>
      </section>

      <FeaturesGrid features={features} />

      {/* Final Message Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Beyond improving functionality, we also focus on creating a
              laundry that feels calm, organised, and enjoyable to use.
              Thoughtful layout planning, durable materials, and smart design
              choices ensure your laundry not only looks beautiful but also
              stands up to everyday demands. With Bespoke, you receive a space
              that's practical, efficient, and crafted to enhance the rhythm of
              your home.
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
        heading="Ready to Transform Your Laundry?"
        description="Let's bring your vision to life with our expert craftsmanship and personalized service."
      />
    </div>
  );
}

export default LaundryRenovation;
