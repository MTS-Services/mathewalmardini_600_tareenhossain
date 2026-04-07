import { motion } from "motion/react";
import { Link } from "react-router";
import { Phone, Image } from "lucide-react";
import FeaturesGrid from "../homePage/components/FeaturesGrid";
import CTASection from "../homePage/components/CTASection";
import PhotoGallery from "../homePage/components/PhotoGallery";
import { useRef } from "react";
import FeatureMediaSection from "../homePage/components/FeatureMediaSection";
import usePageMeta from "../../hooks/usePageMeta";

function BathroomRenovation() {
  usePageMeta(
    "Bathroom Renovation Melbourne | Modern Bathrooms",
    "Bathroom renovation Melbourne with modern design, tiling, fixtures and complete upgrades. Trusted bathroom builders in Melbourne."
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
        "We make your bathroom remodel as comfortable as possible by making it affordable to achieve the new bathroom space you want.",
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
              // src="/Our_services/modern-bathroom-interior-with-freestanding-tub-and-2025-12-17-15-15-24-utc.mp4.mp4"
              src="https://dc3v08iv2c2ou.cloudfront.net/Our_services/modern-bathroom-interior-with-freestanding-tub-and-2025-12-17-15-15-24-utc.mp4.mp4"
              // type="video/mp4"
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
              Bathroom Renovation
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Transforming your bathroom into a space of refined elegance and
              everyday luxury
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
                The smallest details shape the entire experience of a space. But
                only a true professional knows how to curate those details with
                intention, precision, and style. At Bespoke Designs and
                Construction, we bring every element together seamlessly
                crafting spaces that feel cohesive, refined, and unmistakably
                tailored to you.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Bathroom renovations are one of the most popular upgrades among
                our clients, and it's easy to see why. Even though bathrooms are
                often smaller spaces, they offer endless opportunities for
                creativity, smart design, and meaningful transformation. No
                matter the size, our team brings fresh, thoughtful ideas that
                make every bathroom both highly functional and beautifully
                crafted.
              </motion.p>
            </motion.div>

            {/* Bathroom Image 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative overflow-hidden rounded-xl shadow-xl aspect-[4/3] group cursor-pointer"
            >
              <img
                // src="/bathroom_renovation/Bathroom_1.jpg"
                src="https://dc3v08iv2c2ou.cloudfront.net/bathroom_renovation/Bathroom_1.jpg"
                alt="Bathroom Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2D6B7A]/0 group-hover:bg-[#2D6B7A]/10 transition-all duration-300"></div>
            </motion.div>
          </div>

          {/* Second Row - Reversed Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before & After Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative overflow-hidden rounded-xl shadow-xl aspect-[4/3] group cursor-pointer order-2 lg:order-1"
            >
              <img
                // src="/bathroom_renovation/Before_and_after 1.jpg"
                src="https://dc3v08iv2c2ou.cloudfront.net/bathroom_renovation/Before_and_after+1.jpg"
                alt="Before and After Bathroom Renovation"
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
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                At Bespoke Designs and Construction, we take the time to
                understand your vision and the way you want your space to feel.
                From the first concept to the final finishes, we provide a
                seamless end-to-end service that turns your ideas into a space
                that's refined, practical, and uniquely yours.
              </motion.p>
            </motion.div>
          </div>

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

      {/* Add Photo Gallery Section */}
      <PhotoGallery />

      {/* Bringing Your Project to Life Section */}
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
              Bringing Your Project to Life
            </motion.h2>
            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              At Bespoke Designs and Construction, our clients benefit from
              years of specialised expertise and a commitment to exceptional
              craftsmanship. Whether you're planning a full bathroom renovation
              or a smaller remodel, we handle every detail with precision, care,
              and a deep understanding of what makes a space truly work.
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

      {/* New Bathroom Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              New Bathroom
            </motion.h2>
            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed max-w-5xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Our clients benefit from years of specialised expertise and a
              dedication to exceptional craftsmanship. Whether you're
              undertaking a full bathroom renovation or a smaller remodel, we
              manage every detail with precision, care, and a deep understanding
              of how to make a space truly functional and beautifully resolved.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <FeaturesGrid features={features} />

      {/* add Featured Media Section */}
      <FeatureMediaSection />

      <CTASection
        heading="Ready to Transform Your Bathroom?"
        description="Let's bring your vision to life with our expert craftsmanship and personalized service."
      />
    </div>
  );
}

export default BathroomRenovation;
