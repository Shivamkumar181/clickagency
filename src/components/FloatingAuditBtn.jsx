import React from "react";
import { Target } from "lucide-react";

const FloatingAuditBtn = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form-section");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 left-6 bg-yellow-200 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition z-40 text-sm font-semibold"
    >
      <Target size={18} /> Get Free Audit
    </button>
  );
};

export default FloatingAuditBtn;
