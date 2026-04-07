import { motion } from "motion/react";
import { Link } from "react-router";
import { Phone, Image } from "lucide-react";
import ProcessSection from "../homePage/components/ProcessSection";
import FeaturesGrid from "../homePage/components/FeaturesGrid";
import CTASection from "../homePage/components/CTASection";
import { useRef } from "react";
import PhotoGallery from "../homePage/components/PhotoGallery";
import FeatureMediaSection from "../homePage/components/FeatureMediaSection";
import usePageMeta from "../../hooks/usePageMeta";

function KitchenRenovation() {
  usePageMeta(
    "Kitchen Renovation Melbourne | Custom Kitchens",
    "Kitchen renovation Melbourne with custom designs, modern layouts and quality finishes. Upgrade your kitchen with expert builders."
  );
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
        "We make your kitchen remodel as comfortable as possible by making it affordable to achieve the new kitchen space you want.",
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
              // src="/public/Our_services/modern-and-spacious-wooden-kitchen-room-2025-12-17-06-34-17-utc.mp4"
              src="https://dc3v08iv2c2ou.cloudfront.net/Our_services/modern-and-spacious-wooden-kitchen-room-2025-12-17-06-34-17-utc.mp4"
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
              Kitchen Renovation
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              The heart of your home deserves exceptional craftsmanship and
              thoughtful design
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
                From the moment we explore your kitchen ideas through design,
                planning, material selection, and the full construction phase, a
                kitchen renovation with Bespoke Designs and Construction is
                supported by comprehensive warranties on both labour and
                materials. You can rely on exceptional craftsmanship,
                uncompromising quality, and meticulous attention to detail at
                every stage.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                With clear, consistent communication and a fully transparent
                process, we deliver a seamless experience and a beautifully
                finished kitchen, all while respecting your budget.
              </motion.p>
            </motion.div>

            {/* Kitchen Image 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative overflow-hidden rounded-xl shadow-xl aspect-4/3 group cursor-pointer"
            >
              <img
                // src="/public/protfollio/kitchen/Kitchen_Sunbury_2.jpg"
                src="https://dc3v08iv2c2ou.cloudfront.net/kitchen_renovation/Kitchen_Sunbury_2.jpg"
                alt="Kitchen Design"
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
            {/* Kitchen Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative overflow-hidden rounded-xl shadow-xl aspect-4/3 group cursor-pointer order-2 lg:order-1"
            >
              <img
                // src="/kitchen_renovation/image_2.JPG"
                src="https://dc3v08iv2c2ou.cloudfront.net/kitchen_renovation/image_2.JPG"
                alt="Kitchen Example"
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
                The kitchen is often considered the heart of the home — a place
                where families gather, meals are shared, and everyday moments
                become lasting memories. Real estate experts note that a
                well-designed kitchen can account for up to 15% of your home's
                value, making it one of the most rewarding spaces to invest in.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                If your current kitchen no longer inspires you, we can help
                transform it into the space you've always imagined. With
                thoughtful design, quality craftsmanship, and a commitment to
                bringing your vision to life, we create kitchens that feel
                functional, beautiful, and truly personal.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Design & Planning Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed mb-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We work closely with you to create a remodeling plan that enhances
              your daily life and elevates the beauty of your home. By drawing
              inspiration from your personality and design preferences, we help
              unlock your kitchen's full potential. Through a guided,
              step-by-step process, we support you in selecting cabinetry,
              fixtures, and finishes that will make your kitchen a warm,
              inviting, and highly functional space.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Bespoke Section */}
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
              From the simplest breakfast to the most lavish dinner, your
              kitchen should bring joy to every moment spent cooking. Give
              yourself the space, tools, and thoughtful design you need to prep,
              cook, and enjoy with ease. A well-crafted kitchen doesn't just
              support your daily routine, it elevates it.
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

      {/* Feature Media Section */}
      <FeatureMediaSection />

      {/* Bottom CTA Section */}
      <CTASection
        heading="Ready to Transform Your Kitchen?"
        description="Let's bring your vision to life with our expert craftsmanship and personalized service."
      />
    </div>
  );
}

export default KitchenRenovation;
