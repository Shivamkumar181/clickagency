import React from "react";
import ServiceCard from "../components/ServiceCard";
import {
  BarChart3,
  TrendingUp,
  Megaphone,
  Globe,
  MailOpen,
  Bot,
} from "lucide-react";

const servicesList = [
  {
    icon: BarChart3,
    title: "SEO",
    description: "Organic growth with technical audits & local SEO.",
    slug: "seo",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Google Ads, Meta ads with ROI focus.",
    slug: "performance-marketing",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description: "Content, engagement & growth strategies.",
    slug: "social-media",
  },
  {
    icon: Globe,
    title: "Web Development & CRO",
    description: "High-speed custom sites + conversion optimization.",
    slug: "web-development",
  },
  {
    icon: MailOpen,
    title: "Email & Automation",
    description: "Klaviyo, Mailchimp, drip campaigns.",
    slug: "email-automation",
  },
  {
    icon: Bot,
    title: "AI Chatbots for Business",
    description: "Lead gen & support automation.",
    slug: "ai-chatbots",
  },
];

const Services = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Full Large Size */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/pexels-photo.avif')",
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
      <div className="absolute inset-0 z-0 bg-black/76 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mt-30">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-yellow-200">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
