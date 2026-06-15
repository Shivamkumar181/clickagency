import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Calendar,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Award,
} from "lucide-react";

const serviceData = {
  seo: {
    name: "SEO",
    price: "Starting at ₹15,000/month",
    includes: [
      "Technical Audit",
      "Keyword Research",
      "On-page SEO",
      "Local SEO",
      "Monthly Reporting",
      "Competitor Analysis",
      "Backlink Building",
    ],
    desc: "We drive organic traffic with white-hat strategies and technical excellence.",
    benefits: [
      "Increase organic traffic by 50-100%",
      "Rank higher on Google",
      "Target local Bangalore customers",
      "Long-term sustainable growth",
    ],
    timeline: "Results start showing in 3-6 months",
    bestFor: "Businesses wanting long-term organic growth",
  },
  "performance-marketing": {
    name: "Performance Marketing",
    price: "₹10,000 + ad spend",
    includes: [
      "Google Ads",
      "Meta Ads",
      "Retargeting",
      "A/B Testing",
      "Daily Optimizations",
      "Landing Page Design",
      "Conversion Tracking",
    ],
    desc: "ROI-focused ad campaigns with full transparency.",
    benefits: [
      "Immediate traffic and leads",
      "Pay only for performance",
      "Detailed analytics dashboard",
      "Scale campaigns based on ROI",
    ],
    timeline: "Results within first week",
    bestFor: "Businesses needing quick leads and sales",
  },
  "social-media": {
    name: "Social Media Management",
    price: "₹12,000/month",
    includes: [
      "Content Calendar",
      "Engagement",
      "Paid Social",
      "Influencer Outreach",
      "Monthly Analytics",
      "Community Management",
      "Hashtag Strategy",
    ],
    desc: "Build a community and convert followers into customers.",
    benefits: [
      "Grow brand awareness",
      "Build loyal community",
      "Generate leads from social",
      "Consistent brand presence",
    ],
    timeline: "Engagement growth in 1-2 months",
    bestFor: "Brands wanting social media presence",
  },
  "web-development": {
    name: "Web Development & CRO",
    price: "₹50,000 one-time + hosting",
    includes: [
      "Custom React/Next.js",
      "Speed Optimization",
      "CRO Audit",
      "Analytics Setup",
      "Mobile Responsive",
      "SEO Friendly Structure",
      "Free Hosting Setup",
    ],
    desc: "Lightning-fast websites that convert visitors into leads.",
    benefits: [
      "95+ PageSpeed score",
      "Higher conversion rates",
      "Better user experience",
      "Mobile-first design",
    ],
    timeline: "Website ready in 2-4 weeks",
    bestFor: "Businesses needing a new website or redesign",
  },
  "email-automation": {
    name: "Email & Automation",
    price: "₹8,000/month",
    includes: [
      "Welcome Flows",
      "Abandoned Cart",
      "Newsletters",
      "SMS Integration",
      "Segmentation",
      "A/B Testing",
      "Analytics Dashboard",
    ],
    desc: "Automated nurture sequences that drive repeat sales.",
    benefits: [
      "Increase customer retention",
      "Automated follow-ups",
      "Higher repeat purchases",
      "Personalized customer journey",
    ],
    timeline: "Setup in 1 week, results in 1 month",
    bestFor: "E-commerce and service businesses with repeat customers",
  },
  "ai-chatbots": {
    name: "AI Chatbots for Business",
    price: "₹25,000 one-time",
    includes: [
      "Custom Trained Bot",
      "WhatsApp Integration",
      "Lead Qualification",
      "24/7 Support",
      "CRM Integration",
      "Analytics Dashboard",
      "Monthly Maintenance",
    ],
    desc: "Never miss a lead with AI-powered conversations.",
    benefits: [
      "Capture leads 24/7",
      "Reduce response time",
      "Qualify leads automatically",
      "Save on customer support costs",
    ],
    timeline: "Bot live in 1-2 weeks",
    bestFor: "Businesses getting high volume of inquiries",
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service)
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 text-center py-20">
          <h1 className="text-4xl font-bold text-yellow-400">
            Service not found
          </h1>
          <Link
            to="/services"
            className="text-white underline mt-4 inline-block"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/images/christina-wocintechchat-com-m-Q80LYxv_Tbs-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 py-20 max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition mb-6"
          >
            ← Back to Services
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.name}
          </h1>
          <p className="text-gray-300 text-lg mb-8">{service.desc}</p>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-black/40  p-6 rounded-xl mb-8 border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
            <CheckCircle size={24} /> What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.includes.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300">
                <CheckCircle
                  size={16}
                  className="text-yellow-400 flex-shrink-0"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/40 p-6 rounded-xl mb-8 border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
            <Award size={24} /> Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300">
                <Zap size={16} className="text-yellow-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline & Best For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-black/40 p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Clock size={24} className="text-yellow-400" />
              <h3 className="font-semibold text-lg">Expected Timeline</h3>
            </div>
            <p className="text-gray-300">{service.timeline}</p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Users size={24} className="text-yellow-400" />
              <h3 className="font-semibold text-lg">Best For</h3>
            </div>
            <p className="text-gray-300">{service.bestFor}</p>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-black/20 from-yellow-200/20 to-yellow-500/10 border-2 border-yellow-200 p-8 rounded-xl text-center"
        >
          <p className="text-3xl md:text-4xl font-bold text-yellow-200">
            {service.price}
          </p>
          <p className="text-sm mt-2 text-gray-300">
            Affordable for small businesses
          </p>
          <p className="text-xs text-gray-400 mt-4">
            No long-term contracts • Transparent pricing • Free audit included
          </p>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 bg-black/40 p-6 rounded-xl border border-white/10"
        >
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-white">
                How long does it take to see results?
              </p>
              <p className="text-gray-400 text-sm">{service.timeline}</p>
            </div>
            <div>
              <p className="font-semibold text-white">
                Is there any setup fee?
              </p>
              <p className="text-gray-400 text-sm">
                No setup fees for most services. Custom development projects may
                have a one-time fee.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Can I cancel anytime?</p>
              <p className="text-gray-400 text-sm">
                Yes! First 3 months with zero lock-in contract. Month-to-month
                after that.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
