import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in name, email, and phone fields");
      setLoading(false);
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        budget: formData.budget || "Not specified",
        service: formData.service || "Not specified",
        to_email: "clickcontact00@gmail.com",
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (result.status === 200) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          service: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError("Failed to send message. Please email directly- clickcontact00@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMsg = `Hi,  I'm ${formData.name || "interested"}. Looking for ${formData.service || "marketing help"}. My budget: ${formData.budget || "flexible"}. Let's talk!`;

  return (
    <section className="relative py-20 overflow-hidden" id="contact">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/images/vitaly-gariev-jEpZNyFSQwQ-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/77"></div>

      {/* Content - Exactly the same */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Get in touch</h2>
        <p className="text-center text-gray-400 mb-8">
          Let's discuss how I can help your business grow
        </p>

        {submitted && (
          <div className="bg-green-600/20 border border-green-500 text-green-400 p-4 rounded-lg mb-6 flex items-center gap-2">
            <CheckCircle size={20} />
            <span>Thanks! I'll reply within 1 business hour on WhatsApp.</span>
          </div>
        )}

        {error && (
          <div className="bg-red-600/20 border border-red-500 text-red-400 p-4 rounded-lg mb-6 flex items-center gap-2">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number * (WhatsApp enabled)"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition"
          />
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition"
          >
            <option value="" className="bg-black text-white">
              Select Budget Per Month (Optional)
            </option>
            <option className="bg-black text-white">Less than ₹25k</option>
            <option className="bg-black text-white">₹25k - ₹50k</option>
            <option className="bg-black text-white">₹50k - ₹1L</option>
            <option className="bg-black text-white">₹1L+</option>
          </select>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition"
          >
            <option value="" className="bg-black text-white">
              Select Service (Optional)
            </option>
            <option className="bg-black text-white">SEO</option>
            <option className="bg-black text-white">
              Social Media Marketing
            </option>
            <option className="bg-black text-white">Website Design</option>
            <option className="bg-black text-white">PPC Advertising</option>
            <option className="bg-black text-white">Content Marketing</option>
            <option className="bg-black text-white">
              Not sure - advise me
            </option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-yellow-400 text-black p-3 rounded-lg font-bold transition ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 hover:bg-yellow-500"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm mb-3">
            Get a free strategy call & audit. I'll reply on WhatsApp within 1
            business hour.
          </p>
          <div className="flex justify-center items-center gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 underline hover:text-yellow-300 transition"
            >
              Or click to send WhatsApp message directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
