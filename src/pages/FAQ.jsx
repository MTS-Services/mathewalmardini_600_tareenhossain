import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqData = [
  {
    id: 1,
    question: "How much does a kitchen renovation in Melbourne cost?",
    answer: (
      <>
        <p className="mb-4">
          Kitchen renovation costs in Melbourne can vary depending on the scope
          of work and your vision! Here are some variables that are considered:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The size of your kitchen.</li>
          <li>
            The finish levels required. From either a budget or a luxury
            renovation.
          </li>
          <li>
            The scope of work. What is your vision? Does the work require
            changing the floor plan, including moving walls and utilities? Do
            you need to move your kitchen to a different part of the house? Or
            is this project about a light refresh by replacing fixtures and
            finishes?
          </li>
        </ul>
        <p className="mb-4">
          For a full renovation (without layout changes) of a medium-sized
          kitchen, with basic general contracting services, here's what you can
          expect starting costs for your project to look like in NYC:
        </p>
        <p className="mb-2">
          <strong>Budget kitchen renovation costs:</strong> Starting at $25,000
        </p>
        <p className="mb-2">
          <strong>
            Kitchen renovation including new kitchen layout costs:
          </strong>{" "}
          Starting at $35,000
        </p>
        <p>
          <strong>
            High-end kitchen renovation including new kitchen layout costs:
          </strong>{" "}
          Starting at $45,000
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: "How much does a bathroom renovation in Melbourne cost?",
    answer: (
      <>
        <p className="mb-4">
          Bathroom renovation costs in New York can vary greatly depending on
          the scope of work similarly to kitchen renovations detailed in the
          previous question. Very much like for a kitchen renovation, precise
          estimates and accurate timelines are taken into consideration while
          simultaneously incorporating the following variables:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The size of your bathroom.</li>
          <li>The finish levels.</li>
          <li>
            The scope of work. Are you planning to relocate any of the plumbing
            fixtures?
          </li>
        </ul>
        <p className="mb-4">
          For a full renovation (without layout changes) of a standard-sized
          bathroom, with basic general contracting services, here's what you can
          expect starting costs for your project to look like in NYC:
        </p>
        <p className="mb-2">
          <strong>Budget bathroom renovation costs:</strong> Starting at $17,000
        </p>
        <p className="mb-2">
          <strong>Bathroom renovation with plumbing relocation costs:</strong>{" "}
          Starting at $25,000
        </p>
        <p>
          <strong>
            High-end bathroom renovation with plumbing relocation costs:
          </strong>{" "}
          Starting at $35,000
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: "How long does an average renovation take?",
    answer: (
      <>
        <p className="mb-4">
          The renovation timeline is tightly linked to the scope of work.
        </p>
        <p>
          For a kitchen remodel project, upgrading cabinets, countertops, and/or
          fixtures might take 4-6 weeks. On the other hand, if you decide to
          completely renovate your kitchen, a 6 to 10 weeks timeline would be
          estimated for the active build phase, and total of 10-12 weeks from
          planning to completion.
        </p>
      </>
    ),
  },
  {
    id: 4,
    question: "How long does an average renovation take?",
    answer: (
      <>
        <p>
          When it comes to bathroom renovations, the construction time would be
          around 4 weeks. This means that when considering the planning and
          designing phases, the total renovation process would be around 8 weeks
          months total.
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
          If you live on concrete slab, it is important to keep in mind that
          there are some major obstacles to making layout changes.
        </p>
        <p>
          That said, like for any project, the best way to assess your options
          is to take the first step and discuss your vision. We can guide you
          and advise you on the best scenario for your scope of work and vision.
          Together, we will be able to find the solution that will allow your
          dream apartment to come to reality.
        </p>
      </>
    ),
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative h-[50vh] min-h-[600px] w-full overflow-hidden">
        <img
          src="/faq/FAQ.jpg"
          alt="Frequently Asked Questions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                    ?
                  </div>
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
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
