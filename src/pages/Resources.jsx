import React, { useState } from "react";
import { FileText, Users, Briefcase, BookOpen } from "lucide-react";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("success");
  const tabs = [
    { id: "success", label: "Success Stories", icon: FileText },
    { id: "careers", label: "Careers", icon: Briefcase },
    { id: "guides", label: "Guides", icon: BookOpen },
  ];
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Full Large Size */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('images/photo.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transform: "scale(1)",
          width: "100%",
          height: "100%",
        }}
      />
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/76"></div>

      {/* Content - Exactly the same */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-yellow-500/20 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition ${activeTab === tab.id ? "bg-yellow-400 text-black" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-black/60 p-6 rounded-xl">
          {activeTab === "success" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Sample Projections</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-200 pl-4">
                  <h3>
                    Case Study: Real Estate Client → 30% Conversion Lift
                    (Projected)
                  </h3>
                  <p>
                    Based on our SEO + funnel strategy, we project 30% more
                    leads in 3 months.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h3>Local Bakery → 50% Footfall Increase (Simulation)</h3>
                  <p>
                    Hyperlocal ads + Google Maps optimization can double
                    walk-ins.
                  </p>
                </div>
                <p className="text-gray-400 mt-4">
                  *Be our first client to make these real results!
                </p>
              </div>
            </div>
          )}
          {activeTab === "careers" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Join Our Freelance Network
              </h2>
              <p className="mb-4">
                We're looking for interns and freelance specialists in SEO,
                content, and design. Remote-friendly, flexible hours.
              </p>
              <p>
                <strong>Send your CV to - </strong>{" "}
                <a href="mailto:careers@click.com" className="text-yellow-400">
                  clickcontact00@gmail.com
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Culture: We value curiosity, ownership, and growth mindset.
              </p>
            </div>
          )}
          {activeTab === "guides" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Free Marketing Tools & Guides
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a href="#" className="text-white">
                    The Ultimate Local SEO Checklist for Bangalore
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    How to Audit Your Website Speed (Guide)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    10 WhatsApp Automation Ideas for Small Business
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Coming Soon: AI Chatbot Template
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
