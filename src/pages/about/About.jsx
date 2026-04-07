import { motion } from "motion/react";
import ProcessSection from "../homePage/components/ProcessSection";
import PhotoGallery from "../homePage/components/PhotoGallery";
import usePageMeta from "../../hooks/usePageMeta";

function About() {
  usePageMeta(
    "About B-Spoke | Melbourne Renovation Builders",
    "B-Spoke is a Melbourne renovation company delivering kitchen, bathroom and full home renovations with expert craftsmanship and service."
  );
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2D6B7A] to-[#1e5562] h-[50vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white py-6 px-8 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              About us
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Professional Team Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We Are a Qualified, Licensed and a Professional Team
            </motion.h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-left">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                At Bespoke Designs and Construction, we understand that your
                property is one of your most significant investments and it
                deserves to be treated with care, respect, and craftsmanship.
                That's why we take pride in delivering exceptional workmanship
                while sharing your passion for achieving outstanding results.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                With nearly 15 years of experience, a highly regarded team, and
                a diverse portfolio of successful projects, we bring the
                expertise needed to handle projects of any scale or complexity.
                Every project is approached with precision, quality, and genuine
                attention to detail, ensuring the finished space not only meets
                your expectations but elevates the way you live.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                What truly sets us apart is our personalised process. When you
                work with Bespoke Designs and Construction, you work directly
                with the people who design, manage, and deliver your renovation.
                This ownerled approach means faster decisions, tailored
                solutions, and a level of care that larger companies simply
                can't replicate. We take the time to understand your lifestyle,
                your goals, and the way you use your space, ensuring every
                detail is intentionally designed to support the way you live and
                work.
              </motion.p>
            </div>

            {/* Team Images Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  // src="/about/20240508_165231.jpg"
                  src="https://dc3v08iv2c2ou.cloudfront.net/about/20240508_165231.jpg"
                  alt="Quality craftsmanship"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  // src="/about/20240508_165327.jpg"
                  src="https://dc3v08iv2c2ou.cloudfront.net/about/20240508_165327.jpg"
                  alt="Professional construction work"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(45, 107, 122, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-colors duration-300 shadow-lg"
            >
              Book A Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery (full container width) */}
      <section className="w-full">
        <PhotoGallery />
      </section>

      {/* Our Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Vision
            </motion.h2>

            {/* Vision Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                // src="/about/20240625_102239.jpg"
                src="https://dc3v08iv2c2ou.cloudfront.net/about/20240625_102239.jpg"
                alt="Our vision for quality construction"
                className="w-full h-96 object-cover"
              />
            </motion.div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Our vision is to redefine what a building and renovation
                experience should feel like - seamless, collaborative, and
                grounded in genuine professionalism. We aim to create spaces
                that are not only built or renovated to the highest standard,
                but thoughtfully designed to support the people, businesses, and
                communities that use them every day. By combining technical
                expertise, quality craftsmanship, and a commitment to
                excellence, we strive to set a new benchmark for construction
                and renovation built on trust, transparency, and longterm value.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We envision a process where clients feel supported, informed,
                and confident from the first conversation to project completion.
                Whether we're delivering a commercial fitout, a structural
                build, or a bespoke renovation, our goal is to ensure the
                journey is as strong and rewarding as the final result. Every
                project is an opportunity to elevate the built environment,
                creating spaces that function beautifully, perform reliably, and
                reflect the unique needs of the people they serve.
              </motion.p>
            </div>
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a
                href="tel:0432661176"
                className="inline-flex items-center gap-3 bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 20px 40px rgba(45, 107, 122, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.902 1.007c.5 1.563 2.334 3.75 3.9 4.85l1.007-1.902a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.693C7.258 17.8 2.5 12.442 2.5 6.5V3z" />
                </svg>
                CALL US: 0432661176
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </motion.h2>

            {/* Mission Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <div className="rounded-lg overflow-hidden shadow-lg w-full ">
                <img
                  // src="/about/20240716_171144.jpg"
                  src="https://dc3v08iv2c2ou.cloudfront.net/about/20240716_171144.jpg"
                  alt="Expert construction execution"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Our mission is to deliver construction and renovation projects
                that are thoughtfully planned, expertly executed, and tailored
                to the unique needs of every client. We are committed to
                combining technical skill with genuine craftsmanship, ensuring
                each project whether residential or commercial is completed to
                the highest standard of quality, safety, and durability.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We focus on creating a building experience that feels organised,
                transparent, and collaborative. From the first consultation to
                the final walkthrough, we prioritise clear communication,
                reliable timelines, and a handson approach that keeps clients
                informed and confident at every stage. Our goal is to remove
                complexity, minimise disruption, and deliver outcomes that
                exceed expectations.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                At the heart of our mission is a dedication to building longterm
                relationships. We take the time to understand how each space
                will be used, who it will serve, and what matters most to the
                people behind the project. This allows us to create environments
                that are functional, enduring, and aligned with the vision and
                values of our clients whether we're constructing from the ground
                up or transforming an existing space.
              </motion.p>
            </div>
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Values
            </motion.h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Craftsmanship
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe in doing things properly. Every project large or
                  small is delivered with care, precision, and a commitment to
                  quality that stands the test of time.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Integrity
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Honesty and transparency guide every decision we make. We
                  communicate clearly, set realistic expectations, and follow
                  through on our promises.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Collaboration
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We see every project as a partnership. By working closely with
                  our clients, consultants, and trades, we ensure the process is
                  smooth, informed, and aligned with the shared vision.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We embrace new ideas, smarter methods, and modern building
                  practices that improve efficiency, performance, and longterm
                  value.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Respect
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We treat every property, every client, and every team member
                  with respect. From maintaining clean worksites to minimising
                  disruption, professionalism is at the core of how we operate.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.a
                href="tel:0432661176"
                className="inline-flex items-center gap-3 bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 20px 40px rgba(45, 107, 122, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.902 1.007c.5 1.563 2.334 3.75 3.9 4.85l1.007-1.902a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.693C7.258 17.8 2.5 12.442 2.5 6.5V3z" />
                </svg>
                CALL US: 0432661176
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us
            </motion.h2>

            {/* Featured Project Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  // src="/about/20240829_154458.jpg"
                  src="https://dc3v08iv2c2ou.cloudfront.net/about/20240829_154458.jpg"
                  alt="Completed project showcase"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  // src="/about/20250917_171419.jpg"
                  src="https://dc3v08iv2c2ou.cloudfront.net/about/20250917_171419.jpg"
                  alt="Professional renovation work"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Choosing Bespoke Designs and Construction means choosing a team
                that genuinely cares about the outcome of your project. We
                combine technical expertise with a personalised, handson
                approach that ensures every detail is considered and every
                challenge is managed with confidence. You work directly with
                experienced professionals who understand construction, value
                communication, and take pride in delivering exceptional results.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Our ability to handle both renovations and new builds across
                residential and commercial sectors gives us the versatility to
                adapt to any brief, any site, and any level of complexity. We
                plan thoroughly, coordinate seamlessly, and execute with
                precision, ensuring your project is delivered on time, on
                budget, and to a standard that reflects the quality of your
                investment.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                With Bespoke Designs and Construction, you're not just hiring a
                builder, You're partnering with a team committed to creating
                spaces that perform beautifully, look exceptional, and serve the
                people who use them every day.
              </motion.p>
            </div>
            <motion.div
              className="mt-10 text-center flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <motion.a
                  href="tel:0432661176"
                  className="inline-flex items-center gap-3 bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-all duration-300 shadow-lg whitespace-nowrap"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 20px 40px rgba(45, 107, 122, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.902 1.007c.5 1.563 2.334 3.75 3.9 4.85l1.007-1.902a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.693C7.258 17.8 2.5 12.442 2.5 6.5V3z" />
                  </svg>
                  CALL US: 0432661176
                </motion.a>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(45, 107, 122, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-colors duration-300 shadow-lg"
              >
                Book A Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      {/* <ProcessSection /> */}
    </div>
  );
}

export default About;
