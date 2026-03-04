import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle, Phone, Mail, Clock, ArrowLeft } from "lucide-react";

function ThankYou() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header Section with Gradient Background */}
          <div className="relative bg-linear-to-r from-[#2D6B7A] to-[#1e5562] px-6 py-12 sm:px-12 sm:py-16">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="relative flex justify-center mb-6"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-[#2D6B7A]" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
            >
              Thank You!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative text-base sm:text-lg text-white/90 text-center max-w-2xl mx-auto"
            >
              Your consultation request has been successfully submitted
            </motion.p>
          </div>

          {/* Content Section */}
          <div className="px-6 py-8 sm:px-12 sm:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              {/* What's Next Section */}
              <div className="bg-linear-to-br from-[#2D6B7A]/5 to-[#1e5562]/5 rounded-xl p-6 border border-[#2D6B7A]/10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  What Happens Next?
                </h2>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-8 h-8 bg-[#2D6B7A] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Confirmation Email
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        You'll receive a confirmation email shortly with your
                        request details.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-8 h-8 bg-[#2D6B7A] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        We'll Contact You
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Our team will reach out during your preferred contact
                        time.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-8 h-8 bg-[#2D6B7A] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Consultation Scheduled
                      </h3>
                      <p className="text-gray-600 text-sm">
                        We'll arrange a convenient time to discuss your project
                        in detail.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link to="/" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2D6B7A] text-white px-6 py-4 rounded-lg font-semibold text-base hover:bg-[#1e5562] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                  </motion.button>
                </Link>
                <Link to="/portfolio" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white border-2 border-[#2D6B7A] text-[#2D6B7A] px-6 py-4 rounded-lg font-semibold text-base hover:bg-[#2D6B7A] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    View Our Work
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ThankYou;
