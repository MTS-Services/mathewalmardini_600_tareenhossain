import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import usePageMeta from "../../hooks/usePageMeta";

const Contact = () => {
  usePageMeta(
    "Contact B-Spoke | Melbourne Renovation Experts",
    "Contact B-Spoke for kitchen, bathroom, laundry or home renovations in Melbourne. Get a quote or speak with renovation specialists."
  );
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative h-[50vh] min-h-[600px] w-full overflow-hidden">
        <img
          // src="/contact_us/Contact_us.jpg"
          src="https://dc3v08iv2c2ou.cloudfront.net/contact_us/Contact_us.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Contact Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-gray-600 mb-3">
              Contact us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in touch
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-12">
              We're happy to answer any questions you may have. Can't find what
              you need in our FAQs pages? Get in touch with us.
            </p>

            {/* Contact Details */}
            <div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:0432661176"
                    className="text-[#2D6B7A] hover:underline text-base"
                  >
                    0432661176
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-start gap-4"
                style={{ marginTop: "40px" }}
              >
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:info@b-spoke.com.au"
                    className="text-[#2D6B7A] hover:underline text-base"
                  >
                    info@b-spoke.com.au
                  </a>
                </div>
              </div>

              {/* Location */}
              <div
                className="flex items-start gap-4"
                style={{ marginTop: "40px" }}
              >
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Location
                  </h3>
                  <p className="text-[#2D6B7A] text-base">Settlers Way, Sunbury</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.8908547!2d144.39!3d-37.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6fd8d3b3b3b3b3b3%3A0x0!2s80%20Settlers%20Way%2C%20Sunbury%20VIC%203429!5e0!3m2!1sen!2s!4v1709510400000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="80 Settlers Way Sunbury Location Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
