import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  postcode: "",
  propertyType: "free-standing",
  services: [],
  bathrooms: "",
  timeline: "2-3-months",
  contactTime: "morning",
  details: "",
};

const serviceOptions = [
  "Bathroom Renovation",
  "Kitchen Renovation",
  "Laundry Renovation",
  "Shop Fit-out",
];

const timelineOptions = [
  {
    value: "2-3-months",
    label: "Looking to get my project completed in the next 2-3 months",
  },
  { value: "asap", label: "Looking to get my project completed asap" },
  { value: "other", label: "Other" },
];

const contactOptions = [
  { value: "morning", label: "Morning 9am-12pm" },
  { value: "afternoon", label: "Afternoon 12pm-3pm" },
  { value: "evening", label: "Evening 3pm-6pm" },
];

export default function BookConsultation() {
  const [formData, setFormData] = useState(initialState);
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleCheckbox = (service) => (e) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const services = exists
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      // EmailJS Configuration
      // Get your credentials from https://www.emailjs.com/
      const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
      const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID
      const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key

      // Prepare template parameters
      const templateParams = {
        to_email: "your-business-email@example.com", // Replace with your business email
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        address: formData.address,
        postcode: formData.postcode,
        property_type:
          formData.propertyType === "free-standing"
            ? "Free standing house"
            : "Town house/Unit",
        services: formData.services.join(", ") || "None selected",
        bathrooms: formData.bathrooms || "Not specified",
        timeline:
          timelineOptions.find((opt) => opt.value === formData.timeline)
            ?.label || formData.timeline,
        contact_time:
          contactOptions.find((opt) => opt.value === formData.contactTime)
            ?.label || formData.contactTime,
        details: formData.details || "No additional details provided",
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success
      setSubmitStatus({ loading: false, success: true, error: null });
      setFormData(initialState); // Reset form

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus({
        loading: false,
        success: false,
        error:
          "Failed to send consultation request. Please try again or call us directly at 0432661176.",
      });
    }
  };

  return (
    <div
      className=""
      style={{ paddingTop: 48, paddingBottom: 48, marginTop: 120 }}
    >
      <div
        className="max-w-5xl"
        style={{ margin: "0 auto", padding: "0 20px" }}
      >
        <div style={{ marginBottom: 32 }}>
          <h1
            className="text-3xl sm:text-4xl font-bold text-gray-900"
            style={{ marginTop: 8 }}
          >
            Book consultation form
          </h1>
          <p className="text-gray-600 max-w-2xl" style={{ marginTop: 12 }}>
            Tell us a few details about your project and we will be in touch to
            organise your consultation.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus.success && (
          <div
            className="rounded-lg border border-green-200 bg-green-50 shadow-sm"
            style={{ padding: "16px 20px", marginBottom: 24 }}
          >
            <div style={{ display: "flex", alignItems: "start", gap: 12 }}>
              <svg
                className="text-green-600"
                style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <h3
                  className="text-sm font-semibold text-green-900"
                  style={{ marginBottom: 4 }}
                >
                  Consultation request sent successfully!
                </h3>
                <p className="text-sm text-green-700">
                  Thank you for your interest. We'll contact you soon to
                  schedule your consultation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus.error && (
          <div
            className="rounded-lg border border-red-200 bg-red-50 shadow-sm"
            style={{ padding: "16px 20px", marginBottom: 24 }}
          >
            <div style={{ display: "flex", alignItems: "start", gap: 12 }}>
              <svg
                className="text-red-600"
                style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <div>
                <h3
                  className="text-sm font-semibold text-red-900"
                  style={{ marginBottom: 4 }}
                >
                  Error sending request
                </h3>
                <p className="text-sm text-red-700">{submitStatus.error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "24px 24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}
            >
              <LabeledInput
                label="Name"
                id="name"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="Your full name"
                required
              />
              <LabeledInput
                label="Email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                placeholder="you@example.com"
                required
              />
              <LabeledInput
                label="Phone"
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange("phone")}
                placeholder="04xx xxx xxx"
                required
              />
              <LabeledInput
                label="Address"
                id="address"
                value={formData.address}
                onChange={handleChange("address")}
                placeholder="Street, suburb"
              />
              <LabeledInput
                label="Postcode"
                id="postcode"
                value={formData.postcode}
                onChange={handleChange("postcode")}
                placeholder="3000"
              />
            </div>

            <Divider title="Property Type" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              <RadioCard
                label="Free standing house"
                name="propertyType"
                value="free-standing"
                checked={formData.propertyType === "free-standing"}
                onChange={handleChange("propertyType")}
              />
              <RadioCard
                label="Town house/Unit"
                name="propertyType"
                value="townhouse"
                checked={formData.propertyType === "townhouse"}
                onChange={handleChange("propertyType")}
              />
            </div>

            <Divider title="I'm looking for" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              {serviceOptions.map((service) => (
                <CheckboxCard
                  key={service}
                  label={service}
                  checked={formData.services.includes(service)}
                  onChange={handleCheckbox(service)}
                />
              ))}
            </div>

            <Divider title="Number of bathrooms (only if bathroom renovation)" />
            <LabeledInput
              label="Number of bathrooms"
              id="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange("bathrooms")}
              placeholder="e.g. 1, 2, 3"
            />

            <Divider title="I am" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {timelineOptions.map((option) => (
                <RadioInline
                  key={option.value}
                  name="timeline"
                  value={option.value}
                  label={option.label}
                  checked={formData.timeline === option.value}
                  onChange={handleChange("timeline")}
                />
              ))}
            </div>

            <Divider title="Best time to contact" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactOptions.map((option) => (
                <RadioInline
                  key={option.value}
                  name="contactTime"
                  value={option.value}
                  label={option.label}
                  checked={formData.contactTime === option.value}
                  onChange={handleChange("contactTime")}
                />
              ))}
            </div>

            <Divider title="Other details" />
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-semibold text-gray-800"
                style={{ marginBottom: 8 }}
              >
                Other details
              </label>
              <textarea
                id="details"
                rows="4"
                value={formData.details}
                onChange={handleChange("details")}
                placeholder="Tell us about your project, inspiration, or any must-haves"
                className="w-full rounded-md border border-gray-200 bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                style={{ padding: "12px 14px", minHeight: 140, marginTop: 4 }}
              />
            </div>

            <div style={{ paddingTop: 8 }}>
              <button
                type="submit"
                disabled={submitStatus.loading}
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  padding: "12px 20px",
                  backgroundColor: "var(--color-primary)",
                }}
              >
                {submitStatus.loading ? (
                  <>
                    <svg
                      className="animate-spin"
                      style={{ width: 16, height: 16, marginRight: 8 }}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Submit consultation request"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Divider({ title }) {
  return (
    <div className="border-t border-gray-200" style={{ paddingTop: 8 }}>
      <p
        className="text-sm font-semibold text-gray-900 bg-gray-50 inline-block"
        style={{ padding: "4px 8px", marginTop: -12 }}
      >
        {title}
      </p>
    </div>
  );
}

function LabeledInput({ label, id, type = "text", ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-800"
        style={{ marginBottom: 8 }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full rounded-md border border-gray-200 bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        style={{ padding: "12px 14px" }}
        {...props}
      />
    </div>
  );
}

function RadioCard({ label, name, value, checked, onChange }) {
  return (
    <label
      className={`flex items-center justify-between rounded-lg border ${
        checked ? "border-amber-500 bg-amber-50" : "border-gray-200 bg-gray-50"
      } cursor-pointer shadow-sm transition hover:border-amber-300`}
      style={{ padding: "12px 14px" }}
    >
      <span className="text-sm font-semibold text-gray-900">{label}</span>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-amber-600 border-gray-300 focus:ring-amber-500"
      />
    </label>
  );
}

function CheckboxCard({ label, checked, onChange }) {
  return (
    <label
      className={`flex items-center justify-between rounded-lg border ${
        checked ? "border-amber-500 bg-amber-50" : "border-gray-200 bg-gray-50"
      } cursor-pointer shadow-sm transition hover:border-amber-300`}
      style={{ padding: "12px 14px" }}
    >
      <span className="text-sm font-semibold text-gray-900">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-amber-600 border-gray-300 focus:ring-amber-500"
      />
    </label>
  );
}

function RadioInline({ label, name, value, checked, onChange }) {
  return (
    <label
      className="flex items-center text-sm text-gray-900"
      style={{ gap: 12 }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-amber-600 border-gray-300 focus:ring-amber-500"
      />
      <span>{label}</span>
    </label>
  );
}
