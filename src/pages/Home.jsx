// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import ServiceCard from "../components/ServiceCard";
// import ContactForm from "../components/ContactForm";
// import SEO from "../components/SEO";
// import { pageSEO } from "../utils/seo";
// import {
//   BarChart3,
//   TrendingUp,
//   Megaphone,
//   Globe,
//   MailOpen,
//   Bot,
//   ShieldCheck,
//   Gauge,
//   Zap,
//   Users,
//   Clock,
//   Handshake,
//   HelpCircle,
// } from "lucide-react";

// const services = [
//   {
//     icon: BarChart3,
//     title: "SEO",
//     description: "Organic growth with technical audits & local SEO.",
//     slug: "seo",
//   },
//   {
//     icon: TrendingUp,
//     title: "Performance Marketing",
//     description: "Google Ads, Meta ads with ROI focus.",
//     slug: "performance-marketing",
//   },
//   {
//     icon: Megaphone,
//     title: "Social Media Management",
//     description: "Content, engagement & growth strategies.",
//     slug: "social-media",
//   },
//   {
//     icon: Globe,
//     title: "Web Development & CRO",
//     description: "High-speed custom sites + conversion optimization.",
//     slug: "web-development",
//   },
//   {
//     icon: MailOpen,
//     title: "Email & Automation",
//     description: "Klaviyo, Mailchimp, drip campaigns.",
//     slug: "email-automation",
//   },
//   {
//     icon: Bot,
//     title: "AI Chatbots for Business",
//     description: "Lead gen & support automation.",
//     slug: "ai-chatbots",
//   },
// ];

// const promisePoints = [
//   {
//     icon: ShieldCheck,
//     title: "Transparent Reporting & Real-Time Dashboards",
//     desc: "Live data access, no black-box reporting.",
//   },
//   {
//     icon: Gauge,
//     title: "Custom-Coded High-Performance Websites",
//     desc: "No bloated themes, 95+ PageSpeed scores.",
//   },
//   {
//     icon: Zap,
//     title: "AI-Powered Lead Generation Systems",
//     desc: "Smart chatbots & automation workflows.",
//   },
//   {
//     icon: BarChart3,
//     title: "Data-Driven SEO with Technical Audits",
//     desc: "Actionable insights, not just keywords.",
//   },
//   {
//     icon: Clock,
//     title: "24-48 Hour Response Time",
//     desc: "We value your business urgency.",
//   },
//   {
//     icon: Handshake,
//     title: "Zero Lock-In Contracts for First 3 Months",
//     desc: "Try risk-free, leave anytime.",
//   },
// ];

// const whyCards = [
//   {
//     icon: Globe,
//     title: "Full-Stack Marketing + Development",
//     text: "We code and market — no handoff delays.",
//   },
//   {
//     icon: MapPin,
//     title: "Bangalore Local Market Expertise",
//     text: "We know local consumer behavior deeply.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Proven ROI Framework",
//     text: "Data-backed strategies that scale.",
//   },
//   {
//     icon: Users,
//     title: "Single Point of Contact",
//     text: "No runaround, just one expert for everything.",
//   },
// ];

// const faqs = [
//   {
//     q: "What makes you different from a regular agency?",
//     a: "We are developer-founders who build high-performance sites and then drive traffic — integrated approach.",
//   },
//   {
//     q: "How fast can I see results?",
//     a: "SEO: 3-6 months, PPC: immediate traffic, Web dev: 2-4 weeks live.",
//   },
//   {
//     q: "Do you offer month-to-month contracts?",
//     a: "Yes, first 3 months zero lock-in, then monthly.",
//   },
//   {
//     q: "Can you fix my slow website?",
//     a: "Absolutely, we do technical audits and core web vital fixes.",
//   },
//   {
//     q: "What industries do you specialize in?",
//     a: "E-commerce, real estate, SaaS, local services in Bangalore.",
//   },
// ];

// const testimonials = [
//   {
//     name: "First Client Spot",
//     text: "Be our first client and get 50% off first month + free website speed optimization!",
//     cta: true,
//   },
//   {
//     name: "Placeholder Client",
//     text: "Click transformed our digital presence — can’t wait to see real results!",
//   },
//   {
//     name: "Future Partner",
//     text: "Their tech-first approach is exactly what we need.",
//   },
// ];

// const Home = () => {
//   return (
//     <>
//       <SEO
//         title={pageSEO.home.title}
//         description={pageSEO.home.description}
//         keywords={pageSEO.home.keywords}
//         url="https://clickagency.vercel.app/"
//         type="website"
//       />
      
//       {/* Hero */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
//         {/* Background Image - Full Screen */}
//         <div
//           className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('images/image.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* Dark Overlay Gradient */}
//         <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-4xl md:text-6xl font-bold mb-4"
//           >
//             Your Success, <span className="text-yellow-200">Our Mission</span>
//           </motion.h1>
//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
//           >
//             Performance marketing + custom dev + AI automation - all under one
//             roof.
//           </motion.p>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </section>
//       {/* Promise Section */}
//       <section className="py-20 bg-white/5">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             OUR PROMISE & WHAT WE OFFER
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {promisePoints.map((p, i) => (
//               <div key={i} className="flex gap-4 items-start">
//                 <p.icon className="text-yellow-400 min-w-8 ml-6" />
//                 <div>
//                   <h3 className="font-bold">{p.title}</h3>
//                   <p className="text-gray-400 text-sm ml-2">{p.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Section */}
//       <section className="relative py-20 overflow-hidden">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage:
//               "url('/images/vitaly-gariev-d80Nf1ptTfY-unsplash.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed",
//           }}
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 z-0 bg-black/76"></div>

//         {/* Decorative Elements */}
//         <div className="absolute inset-0 z-0 opacity-20">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Why <span className="text-yellow-200">Click Agency?</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {whyCards.map((card, i) => (
//               <div
//                 key={i}
//                 className="bg-black/40 p-6 rounded-xl text-center hover:scale-105 hover:border-yellow-400 border border-white/10 transition-all duration-300"
//               >
//                 <card.icon className="mx-auto text-yellow-400 mb-3" size={40} />
//                 <h3 className="font-bold mb-2">{card.title}</h3>
//                 <p className="text-gray-400 text-sm">{card.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Carousel Section with Background */}
//       <section className="relative py-20 overflow-hidden">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage:
//               "url('/images/skytech-aviation-CO76VQZWeTw-unsplash.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed",
//           }}
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 z-0 bg-black/76"></div>

//         {/* Decorative Elements */}
//         <div className="absolute inset-0 z-0 opacity-30">
//           <div className="absolute top-40 right-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Click Marketing <span className="text-yellow-200">FAQs</span>
//           </h2>
//           <div className="overflow-x-auto custom-scrollbar pb-4">
//             <div className="flex gap-5 w-max">
//               {faqs.map((faq, i) => (
//                 <div
//                   key={i}
//                   className="w-80 bg-black/40 p-5 rounded-xl border border-yellow-400/30 flex-shrink-0 hover:scale-105 transition-all duration-300"
//                 >
//                   <HelpCircle className="text-yellow-400 mb-2" size={28} />
//                   <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
//                   <p className="text-gray-300 text-sm">{faq.a}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials + First Client Banner */}
//       <section className="py-20 bg-gradient-to-r from-yellow-900/20 to-black">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             What Our Customers Say About Click Agency
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             {testimonials.map((t, i) => (
//               <div
//                 key={i}
//                 className={`bg-black border ${t.cta ? "border-yellow-400 shadow-xl" : "border-white/20"} p-6 rounded-xl`}
//               >
//                 <p className="italic text-gray-300">"{t.text}"</p>
//                 <p className="mt-4 text-yellow-400 font-semibold">— {t.name}</p>
//                 {t.cta && (
//                   <div className="mt-4 text-center">
//                     <span className="bg-yellow-200/50 text-black px-4 py-2 inline-block rounded-full text-sm font-bold">
//                       🎉50% off + Free Speed Fix for First Client!🎉
//                     </span>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="text-center bg-yellow-200/60 text-black p-8 rounded-2xl">
//             <p className="text-2xl font-bold">
//               🚀 Be My First Client - Exclusive Launch Discount 🚀
//             </p>
//             <p className="mt-2">
//               Get 50% off first month + free website speed optimization (value
//               ₹25,000). Limited to first paying client.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <div id="contact-form-section">
//         <ContactForm />
//       </div>
//     </>
//   );
// };

// // Added missing MapPin import for whyCards
// import { MapPin } from "lucide-react";
// export default Home;

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";
import { pageSEO } from "../utils/seo";
import {
  BarChart3,
  TrendingUp,
  Megaphone,
  Globe,
  MailOpen,
  Bot,
  ShieldCheck,
  Gauge,
  Zap,
  Users,
  Clock,
  Handshake,
  HelpCircle,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  Brain,
  CheckCircle2,
  ArrowRight,
  Play,
  MessageCircle,
  Send,
  Headphones,
  ThumbsUp,
  Clock as ClockIcon,
  Star,
  MessageSquare,
  Check,
  Phone,
  Mail,
  User,
  Crown,
  Award,
  Flame,
  Gem,
  Layers,
  Code,
  Smartphone,
  CreditCard,
  LifeBuoy,
  Radio,
  Settings,
  Cpu,
  Network,
  Server,
  Database,
  Cloud,
} from "lucide-react";

const services = [
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

const promisePoints = [
  {
    icon: ShieldCheck,
    title: "Transparent Reporting & Real-Time Dashboards",
    desc: "Live data access, no black-box reporting.",
  },
  {
    icon: Gauge,
    title: "Custom-Coded High-Performance Websites",
    desc: "No bloated themes, 95+ PageSpeed scores.",
  },
  {
    icon: Zap,
    title: "AI-Powered Lead Generation Systems",
    desc: "Smart chatbots & automation workflows.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven SEO with Technical Audits",
    desc: "Actionable insights, not just keywords.",
  },
  {
    icon: Clock,
    title: "24-48 Hour Response Time",
    desc: "We value your business urgency.",
  },
  {
    icon: Handshake,
    title: "Zero Lock-In Contracts for First 3 Months",
    desc: "Try risk-free, leave anytime.",
  },
];

const whyCards = [
  {
    icon: Globe,
    title: "Full-Stack Marketing + Development",
    text: "We code and market — no handoff delays.",
  },
  {
    icon: MapPin,
    title: "Bangalore Local Market Expertise",
    text: "We know local consumer behavior deeply.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI Framework",
    text: "Data-backed strategies that scale.",
  },
  {
    icon: Users,
    title: "Single Point of Contact",
    text: "No runaround, just one expert for everything.",
  },
];

const faqs = [
  {
    q: "What makes you different from a regular agency?",
    a: "We are developer-founders who build high-performance sites and then drive traffic — integrated approach.",
  },
  {
    q: "How fast can I see results?",
    a: "SEO: 3-6 months, PPC: immediate traffic, Web dev: 2-4 weeks live.",
  },
  {
    q: "Do you offer month-to-month contracts?",
    a: "Yes, first 3 months zero lock-in, then monthly.",
  },
  {
    q: "Can you fix my slow website?",
    a: "Absolutely, we do technical audits and core web vital fixes.",
  },
  {
    q: "What industries do you specialize in?",
    a: "E-commerce, real estate, SaaS, local services in Bangalore.",
  },
];

const testimonials = [
  {
    name: "First Client Spot",
    text: "Be our first client and get 50% off first month + free website speed optimization!",
    cta: true,
  },
  {
    name: "Placeholder Client",
    text: "Click transformed our digital presence — can't wait to see real results!",
  },
  {
    name: "Future Partner",
    text: "Their tech-first approach is exactly what we need.",
  },
];

// Modern Chat Preview Card - Completely New Design
const ChatPreviewCard = ({ onStartTrial }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 rounded-3xl blur-2xl" />
      
      {/* Main Card with Minimal Design */}
      <div className="relative bg-gradient-to-br from-slate-900 to-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Top Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />

        {/* Status Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px] text-gray-400 font-medium">Live Chat</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-500">•</span>
            <span className="text-[10px] text-gray-400">AI Powered</span>
          </div>
        </div>

        {/* Chat Messages - Clean Design */}
        <div className="p-5 space-y-4 min-h-[220px]">
          {/* Welcome Message */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-400/20">
              <Bot className="w-4 h-4 text-black" />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[75%]">
              <p className="text-gray-300 text-sm">👋 Hi! How can I help?</p>
              <span className="text-[10px] text-gray-600 mt-1 block">10:30 AM</span>
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-gradient-to-r from-amber-400 to-yellow-300 rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[75%] shadow-lg shadow-amber-400/10">
              <p className="text-black text-sm font-medium">Do you offer cash on delivery?</p>
              <span className="text-[10px] text-black/50 mt-1 block text-right">10:31 AM</span>
            </div>
          </div>

          {/* Agent Response */}
          <motion.div
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-400/20">
              <Check className="w-4 h-4 text-black" />
            </div>
            <div className="bg-gradient-to-r from-amber-400/10 to-yellow-300/5 border border-amber-400/20 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[75%]">
              <p className="text-white text-sm font-medium">yes, Cash On Delivery is available.</p>
              <span className="text-[10px] text-gray-500 mt-1 block">10:31 AM</span>
            </div>
          </motion.div>

          {/* Quick Reply Suggestions */}
          <div className="flex gap-2 pt-2">
            {["Payment", "Shipping", "Returns"].map((label) => (
              <button
                key={label}
                className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1 text-gray-400 hover:text-white transition-all duration-300"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="px-5 pb-4">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
              disabled
            />
            <button className="p-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-300 text-black hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300">
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer - CTA */}
        <div className="px-5 pb-5">
          <button
            onClick={onStartTrial}
            className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-amber-400/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm group"
          >
            <Rocket className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-400/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-300/5 rounded-full blur-2xl" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-yellow-300 text-black text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg"
        animate={{ 
          y: [0, -3, 0],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          24/7
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -left-2 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center gap-1.5">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-white text-[10px] font-medium">4.9</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const handleStartTrial = () => {
    window.open('https://your-ai-chatbot-system.com/trial', '_blank');
  };

  return (
    <>
      <SEO
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        url="https://clickagency.vercel.app/"
        type="website"
      />
      
      {/* Hero Section - Minimal Modern */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-amber-400/30 rounded-full"
              animate={{
                y: [0, -200, 0],
                x: [0, 30, -30, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-6"
              >
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-xs text-amber-400 font-medium">AI-Powered Platform</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">Marketing</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Evolved with AI
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Automate, optimize, and scale your marketing with intelligent AI solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <button
                  onClick={handleStartTrial}
                  className="group inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-amber-400/50 text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/5"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Explore
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm"
              >
                <div className="flex items-center gap-2 text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <ClockIcon className="w-4 h-4 text-amber-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Gauge className="w-4 h-4 text-amber-400" />
                  <span>Fast Performance</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Chat Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <ChatPreviewCard onStartTrial={handleStartTrial} />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-9 border-2 border-white/10 rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-amber-400 rounded-full mt-1.5 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Promise Section - Clean Cards */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Our <span className="text-amber-400">Promise</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promisePoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-6 transition-all duration-300"
              >
                <p.icon className="text-amber-400 mb-3" size={28} />
                <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative py-20 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #F59E0B 0%, transparent 50%),
                             radial-gradient(circle at 70% 50%, #FCD34D 0%, transparent 50%)`,
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Why <span className="text-amber-400">Click Agency?</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-6 text-center transition-all duration-300"
              >
                <card.icon className="mx-auto text-amber-400 mb-3" size={32} />
                <h3 className="font-bold text-white text-sm mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Frequently Asked <span className="text-amber-400">Questions</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-bold text-white text-sm mb-2">{faq.q}</h3>
                    <p className="text-gray-400 text-sm">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            What Our <span className="text-amber-400">Customers Say</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white/5 border ${
                  t.cta ? "border-amber-400/50 shadow-xl shadow-amber-400/5" : "border-white/10"
                } rounded-xl p-6 hover:border-amber-400/30 transition-all duration-300`}
              >
                <p className="text-gray-300 text-sm italic mb-4">"{t.text}"</p>
                <p className="text-amber-400 font-semibold text-sm">— {t.name}</p>
                {t.cta && (
                  <div className="mt-4">
                    <span className="bg-amber-400/20 text-amber-300 text-xs font-medium px-3 py-1 rounded-full border border-amber-400/20">
                      🎉 Exclusive Offer
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center bg-gradient-to-r from-amber-400/10 to-yellow-300/5 border border-amber-400/20 rounded-2xl p-8"
          >
            <p className="text-xl font-bold text-amber-400">
              🚀 Be Our First Client - Exclusive Launch Discount 🚀
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              Get 50% off first month + free website speed optimization (value ₹25,000)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact-form-section">
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
