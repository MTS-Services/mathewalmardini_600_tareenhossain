import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

function FeaturesGrid({
  features,
  title = "Why Bespoke Designs and Construction",
}) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -10,
                borderColor: "#2D6B7A",
              }}
              className="bg-gray-50 p-8 rounded-xl border border-[#2D6B7A] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-[#2D6B7A] shrink-0 mt-1" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
