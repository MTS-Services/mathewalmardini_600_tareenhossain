import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PhotoGallery from "../homePage/components/PhotoGallery";
import usePageMeta from "../../hooks/usePageMeta";

const faqData = [
  {
    id: 1,
    question: "How much does a kitchen renovation in Melbourne cost?",
    answer: (
      <>
        <p className="mb-4">
          Kitchen renovation costs in Melbourne can vary widely depending on the
          size of your space, the level of finish you're aiming for, and the
          complexity of the work involved. Several key factors influence the
          final price, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Kitchen size:</strong> larger kitchens require more
            materials and labour.
          </li>
          <li>
            <strong>Finish level:</strong> budget, midrange, or luxury
            selections significantly affect cost.
          </li>
          <li>
            <strong>Scope of work:</strong> whether you're keeping the existing
            layout or making structural changes such as moving walls, plumbing,
            or electrical.
          </li>
          <li>
            <strong>Materials and appliances:</strong> premium cabinetry, stone
            benchtops, and highend appliances increase overall spend.
          </li>
        </ul>

        <h4 className="font-bold text-lg mb-3 mt-6">
          Typical Melbourne Kitchen Renovation Price Ranges
        </h4>
        <p className="mb-4">
          Based on current industry guides and Melbournespecific cost data,
          here's what you can generally expect:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full min-w-[600px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  Renovation Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  Typical Starting Cost
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Budget kitchen renovation
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Minimum $25,000
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Cosmetic upgrades, basic finishes, minimal layout changes.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  Midrange kitchen renovation
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  From $25,000–$50,000
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  New cabinetry, benchtops, and improved functionality.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Highend / luxury kitchen renovation
                </td>
                <td className="border border-gray-300 px-4 py-2">$50,000+</td>
                <td className="border border-gray-300 px-4 py-2">
                  Premium materials, custom joinery, structural changes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4">
          Most Melbourne homeowners spend around $35,000 for a full kitchen
          remodel, depending on selections and scope.
        </p>

        <h4 className="font-bold text-lg mb-3">
          What affects the cost the most?
        </h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Changing the layout (moving plumbing, electrical, or walls)</li>
          <li>Custom cabinetry and premium materials</li>
          <li>Site access</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    question: "How much does a bathroom renovation in Melbourne cost?",
    answer: (
      <>
        <p className="mb-4">
          Bathroom renovation costs in Melbourne can vary significantly
          depending on the size of your space, the level of finish you choose,
          and the complexity of the work involved. Just like kitchen
          renovations, accurate pricing depends on a clear understanding of your
          vision and the scope of work required. Key factors that influence cost
          include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Bathroom size:</strong> smaller bathrooms cost less overall
            but may have higher cost per square meter.
          </li>
          <li>
            <strong>Finish level:</strong> midrange, or luxury selections.
          </li>
          <li>
            <strong>Scope of work:</strong> whether plumbing fixtures remain in
            place or are being relocated.
          </li>
          <li>
            <strong>Materials and fittings:</strong> tiles, vanities, tapware,
            shower screens, and waterproofing requirements.
          </li>
        </ul>

        <h4 className="font-bold text-lg mb-3 mt-6">
          Typical Melbourne Bathroom Renovation Price Ranges
        </h4>
        <p className="mb-4">
          Based on current Melbourne industry data, here's what you can
          generally expect:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full min-w-[600px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  Renovation Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  Typical Cost Range
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Midrange / standard renovation
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  $20,000–$35,000
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Updated fixtures, tiling, waterproofing, improved
                  functionality.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  Highend / luxury renovation
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  $35,000–$49,000+
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Premium materials, custom joinery, designer fittings, possible
                  layout changes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4">
          The average bathroom renovation cost in Australia is around $26,000,
          according to the Housing Industry Association, though Melbourne
          projects often sit higher depending on finishes and labour
          requirements.
        </p>

        <h4 className="font-bold text-lg mb-3">
          What impacts the cost the most?
        </h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Relocating plumbing (toilets, showers, vanities)</li>
          <li>Fullheight tiling and premium tile selections</li>
          <li>Custom cabinetry and stone benchtops</li>
          <li>Structural changes or upgrades</li>
          <li>
            Labour and trades, which typically make up around 75% of total cost
            in Melbourne
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    question: "How long does an average kitchen renovation take?",
    answer: (
      <>
        <p className="mb-4">
          The duration of a kitchen renovation depends on the scope of work, but
          most projects follow clear timeframes.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Light to midrange upgrades:</strong> around 4–6 weeks of
            onsite work.
          </li>
          <li>
            <strong>Full kitchen renovation:</strong> typically 6–10 weeks for
            construction.
          </li>
          <li>
            <strong>Planning to completion:</strong> usually 10–12 weeks
            including design, selections, and ordering materials.
          </li>
        </ul>
        <p>
          Factors like layout changes, custom cabinetry, structural work, and
          material lead times can extend the schedule, but a wellcoordinated
          team keeps the process running smoothly.
        </p>
      </>
    ),
  },
  {
    id: 4,
    question: "How long does an average bathroom renovation take?",
    answer: (
      <>
        <p className="mb-4">
          Most bathroom renovations in Melbourne take around 4 weeks for the
          onsite construction phase. This includes demolition, plumbing and
          electrical work, waterproofing, tiling, and installation of fixtures.
        </p>
        <p>
          When you factor in planning, design, product selections, and ordering
          materials, the full process typically spans 6–8 weeks from start to
          finish.
        </p>
        <p className="mt-4">
          Timelines can extend if plumbing is relocated, custom joinery is
          required, or structural issues are uncovered during demolition but
          clear planning keeps the build moving efficiently.
        </p>
      </>
    ),
  },
  {
    id: 5,
    question: "Can I relocate my kitchen?",
    answer: (
      <>
        <p className="mb-4">
          Yes — in many cases, you can relocate your kitchen, but the
          feasibility depends on your property's structure and services. If your
          home is built on a concrete slab, there may be additional challenges,
          particularly around moving plumbing and electrical services, which can
          affect both cost and complexity.
        </p>
        <p>
          That said, every project is different. The best way to understand your
          options is to start with a conversation about your vision. We'll
          assess your space, explain what's possible, and guide you toward the
          most practical and costeffective solution. Together, we'll find an
          approach that brings your ideal layout to life.
        </p>
      </>
    ),
  },
  {
    id: 6,
    question: "Can I live in my home during the renovation?",
    answer: (
      <>
        <p>
          In many cases, yes — especially for singleroom renovations. For larger
          projects or fullhome renovations, temporary accommodation may be more
          comfortable. We'll advise you based on your specific project.
        </p>
      </>
    ),
  },
];

const FAQ = () => {
  usePageMeta(
    "Renovation FAQs Melbourne | B-Spoke Builders",
    "Answers to common renovation questions on cost, timeline and process for kitchen, bathroom and home renovations in Melbourne."
  );
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <motion.div
        className="relative h-[50vh] min-h-[600px] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          // src="/faq/FAQ.jpg"
          src="https://dc3v08iv2c2ou.cloudfront.net/faq/FAQ.jpg"
          alt="Frequently Asked Questions"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2D6B7A] text-white flex items-center justify-center text-sm font-bold"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    ?
                  </motion.div>
                  <span className="font-semibold text-base lg:text-lg pr-4">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-200"
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Any Other Questions Section */}
        <motion.div
          className="mt-16 lg:mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Any Other Questions?
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            If you'd like more information or need guidance on your project,
            we're always here to help. Feel free to reach out as our team is
            ready to assist with whatever you need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(45, 107, 122, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2D6B7A] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-colors duration-300 shadow-lg"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Photo Gallery Section - Full Width */}
      <PhotoGallery />
    </div>
  );
};

export default FAQ;
