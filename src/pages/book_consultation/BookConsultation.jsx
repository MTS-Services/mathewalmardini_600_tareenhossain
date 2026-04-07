import React, { useState } from "react";
import { useNavigate } from "react-router";
import usePageMeta from "../../hooks/usePageMeta";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  postcode: "",
  propertyType: "",
  services: [],
  bathrooms: "",
  timeline: "",
  timelineDetails: "",
  contactTime: "",
  details: "",
};

const serviceOptions = [
  "Bathroom Renovation",
  "Kitchen Renovation",
  "Laundry Renovation",
  "Shop Fit-out",
  "Full Home Renovation",
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

function transformToAPI(data) {
  const contactTimeMap = {
    morning: "9:00 AM",
    afternoon: "12:00 PM",
    evening: "3:00 PM",
  };

  const address = String(data.address || "").trim();
  const bathroom = String(data.bathrooms || "").trim();

  return {
    name: data.name,
    email: data.email,
    phone: data.phone,
    address,
    postcode: data.postcode || "",
    propertyType: data.propertyType || "",
    service: data.services.join(", "),
    // Send both singular and plural keys for backend/template compatibility.
    bathroom,
    bathrooms: bathroom,
    message: data.details,
    timeline: data.timeline || "",
    timelineDetails: data.timelineDetails || "",
    preferredDate: "",
    preferredTime: contactTimeMap[data.contactTime] || "Not specified",
  };
}

export default function BookConsultation() {
  usePageMeta(
    "Book Renovation Consultation Melbourne | B-Spoke",
    "Book a consultation with Melbourne renovation experts for kitchen, bathroom, laundry or home renovation planning and quotes."
  );
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // Postcode: allow only digits and limit to 4 characters
  const handlePostcodeChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
    setFormData((prev) => ({ ...prev, postcode: digits }));
  };

  // Bathrooms: allow only digits
  const handleBathroomsChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, bathrooms: digits }));
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

    // Validation
    if (!formData.name.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please enter your name",
      });
      return;
    }
    if (!formData.email.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please enter your email",
      });
      return;
    }
    if (!formData.phone.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please enter your phone number",
      });
      return;
    }
    if (!formData.address.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please enter your address",
      });
      return;
    }
    if (!formData.postcode.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please enter your postcode",
      });
      return;
    }
    if (
      formData.postcode.trim().length !== 4 ||
      !/^\d{4}$/.test(formData.postcode)
    ) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Postcode must be exactly 4 digits",
      });
      return;
    }
    if (!formData.propertyType) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please select a property type",
      });
      return;
    }
    if (formData.services.length === 0) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please select at least one service",
      });
      return;
    }
    if (!formData.timeline) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please select a timeline",
      });
      return;
    }
    if (formData.timeline === "other" && !formData.timelineDetails.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please enter your project timeline",
      });
      return;
    }
    if (!formData.contactTime) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please select a preferred contact time",
      });
      return;
    }
    if (!formData.bathrooms.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please enter the number of bathrooms",
      });
      return;
    }

    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      const apiPayload = transformToAPI(formData);

      console.log("Sending to API:", apiPayload);

      const response = await fetch(`${apiUrl}/book-consultation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit consultation request");
      }

      // Success - Navigate to thank you page
      console.log("Success! Confirmation email sent to:", data.data.userEmail);
      console.log("Confirmation link:", data.data.confirmLink);
      setFormData(initialState); // Reset form
      navigate("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        loading: false,
        success: false,
        error: error.message || "Failed to submit consultation request. Please try again or call us directly at 0432661176.",
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
                required
              />
              <LabeledInput
                label="Postcode"
                id="postcode"
                type="text"
                inputMode="numeric"
                value={formData.postcode}
                onChange={handlePostcodeChange}
                placeholder="4000"
                maxLength="4"
                required
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

            
            <LabeledInput
              label="Number of bathrooms"
              id="bathrooms"
              type="text"
              inputMode="numeric"
              value={formData.bathrooms}
              onChange={handleBathroomsChange}
              placeholder="e.g. 1, 2, 3"
              required
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

            {/* Conditional input for "Other" timeline */}
            {formData.timeline === "other" && (
              <div>
                <label
                  htmlFor="timelineDetails"
                  className="block text-sm font-semibold text-gray-800"
                  style={{ marginBottom: 8 }}
                >
                  Please tell us your project timeline
                </label>
                <input
                  id="timelineDetails"
                  type="text"
                  value={formData.timelineDetails}
                  onChange={handleChange("timelineDetails")}
                  placeholder="e.g., 6 months, after summer, etc."
                  className="w-full rounded-md border border-gray-200 bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D6B7A] focus:border-[#2D6B7A]"
                  style={{ padding: "12px 14px" }}
                  required
                />
              </div>
            )}

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
                className="w-full rounded-md border border-gray-200 bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D6B7A] focus:border-[#2D6B7A]"
                style={{ padding: "12px 14px", minHeight: 140, marginTop: 4 }}
              />
            </div>

            <div style={{ paddingTop: 8 }}>
              <button
                type="submit"
                disabled={submitStatus.loading}
                className="w-full sm:w-auto flex items-center justify-center rounded-md text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#2D6B7A] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
        className="w-full rounded-md border border-gray-200 bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D6B7A] focus:border-[#2D6B7A]"
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
        checked
          ? "border-[#2D6B7A] bg-[#2D6B7A]/10"
          : "border-gray-200 bg-gray-50"
      } cursor-pointer shadow-sm transition hover:border-[#2D6B7A]/50`}
      style={{ padding: "12px 14px" }}
    >
      <span className="text-sm font-semibold text-gray-900">{label}</span>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-[#2D6B7A] border-gray-300 focus:ring-[#2D6B7A]"
      />
    </label>
  );
}

function CheckboxCard({ label, checked, onChange }) {
  return (
    <label
      className={`flex items-center justify-between rounded-lg border ${
        checked
          ? "border-[#2D6B7A] bg-[#2D6B7A]/10"
          : "border-gray-200 bg-gray-50"
      } cursor-pointer shadow-sm transition hover:border-[#2D6B7A]/50`}
      style={{ padding: "12px 14px" }}
    >
      <span className="text-sm font-semibold text-gray-900">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-[#2D6B7A] border-gray-300 focus:ring-[#2D6B7A]"
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
        className="h-4 w-4 text-[#2D6B7A] border-gray-300 focus:ring-[#2D6B7A]"
      />
      <span>{label}</span>
    </label>
  );
}
