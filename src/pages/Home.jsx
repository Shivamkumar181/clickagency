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
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
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

// Chat Card Component - Larger Size
const ChatCard = ({ icon: Icon, title, message, delay, rotation, position, color }) => {
  return (
    <motion.div
      className="absolute"
      style={position}
      initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: rotation,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: {
          duration: 4,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        className="bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-56 shadow-2xl hover:border-amber-400/40 transition-all duration-300"
        whileHover={{ 
          scale: 1.08,
          rotate: 0,
          borderColor: "rgba(251, 191, 36, 0.4)",
          boxShadow: "0 20px 60px -15px rgba(251, 191, 36, 0.15)",
        }}
      >
        <div className="flex items-center gap-2.5 mb-2">
          <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}>
            <Icon className="w-4 h-4 text-black" />
          </div>
          <span className="text-white text-xs font-semibold">{title}</span>
        </div>
        <p className="text-gray-200 text-sm leading-relaxed">{message}</p>
        <div className="flex items-center gap-1.5 mt-2">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-[10px] text-gray-500 font-medium">Online</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Animated Curly Wires SVG
const CurlyWires = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
      <defs>
        <linearGradient id="wireGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="wireGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="wireGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="wireGradient4" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Curly Wire 1 - Top Left to Bottom Right */}
      <motion.path
        d="M 25% 15% C 35% 5%, 45% 35%, 55% 25% C 65% 15%, 70% 50%, 80% 40% C 85% 35%, 75% 60%, 85% 70%"
        stroke="url(#wireGradient1)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />

      {/* Curly Wire 2 - Top Right to Bottom Left */}
      <motion.path
        d="M 75% 20% C 65% 10%, 55% 40%, 45% 30% C 35% 20%, 30% 55%, 20% 45% C 15% 40%, 25% 65%, 15% 75%"
        stroke="url(#wireGradient2)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
      />

      {/* Curly Wire 3 - Left to Right */}
      <motion.path
        d="M 10% 50% C 20% 35%, 35% 65%, 50% 50% C 65% 35%, 80% 65%, 90% 50%"
        stroke="url(#wireGradient3)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
      />

      {/* Curly Wire 4 - Center spiral */}
      <motion.path
        d="M 50% 30% C 40% 20%, 30% 40%, 40% 55% C 50% 70%, 65% 60%, 70% 50% C 75% 40%, 60% 30%, 50% 35%"
        stroke="url(#wireGradient4)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, delay: 1.2, ease: "easeInOut" }}
      />

      {/* Animated dots on wires */}
      <motion.circle
        cx="25%"
        cy="15%"
        r="3"
        fill="#FBBF24"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="85%"
        cy="70%"
        r="3"
        fill="#F59E0B"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />
      <motion.circle
        cx="75%"
        cy="20%"
        r="3"
        fill="#FBBF24"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
      />
      <motion.circle
        cx="15%"
        cy="75%"
        r="3"
        fill="#F59E0B"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1.8 }}
      />
    </svg>
  );
};

// Rotating Chat Cards Container with Wires
const RotatingChatCards = () => {
  const cards = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      message: "Do you offer cash on delivery?",
      rotation: -4,
      position: { top: "5%", left: "3%" },
      delay: 0,
      color: "bg-gradient-to-br from-amber-400 to-yellow-300",
    },
    {
      icon: Bot,
      title: "AI Support",
      message: "yes, Cash On Delivery is available.",
      rotation: 3,
      position: { bottom: "8%", right: "3%" },
      delay: 0.3,
      color: "bg-gradient-to-br from-amber-400 to-orange-300",
    },
    {
      icon: Headphones,
      title: "24/7 Help",
      message: "How can I track my order?",
      rotation: -3,
      position: { top: "25%", right: "2%" },
      delay: 0.6,
      color: "bg-gradient-to-br from-amber-400 to-yellow-400",
    },
    {
      icon: Star,
      title: "Rating",
      message: "★ 4.9/5 • Excellent service!",
      rotation: 4,
      position: { bottom: "25%", left: "2%" },
      delay: 0.9,
      color: "bg-gradient-to-br from-amber-400 to-yellow-200",
    },
  ];

  return (
    <div className="relative w-full h-[480px] sm:h-[520px]">
      <CurlyWires />
      {cards.map((card, index) => (
        <ChatCard key={index} {...card} />
      ))}
    </div>
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
      
      {/* Hero Section - Final Perfect Version */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.03) 0%, transparent 60%),
                             radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.02) 0%, transparent 60%)`,
          }} />
        </div>

        {/* Grid Pattern - Very Subtle */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Small Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-amber-400/5 border border-amber-400/10 rounded-full px-3.5 py-1.5 mb-5"
              >
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-[11px] text-amber-400/80 font-medium tracking-[0.15em] uppercase">AI Powered</span>
              </motion.div>

              {/* Heading - Clean Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.08] tracking-tight"
              >
                <span className="text-white">Marketing</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  with AI
                </span>
              </motion.h1>

              {/* Description - Clean Font */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-sm sm:text-base mb-7 max-w-md mx-auto lg:mx-0 leading-relaxed"
              >
                Automate campaigns, optimize ad spend, and scale your business with intelligent AI solutions.
              </motion.p>

              {/* CTA Buttons - Only Start Free Trial */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
              >
                <button
                  onClick={handleStartTrial}
                  className="group inline-flex items-center justify-center px-7 py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold text-sm rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Trust Indicators - New Attractive Stats */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">500+</p>
                    <p className="text-gray-500 text-[10px]">Happy Clients</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">284%</p>
                    <p className="text-gray-500 text-[10px]">Avg. ROI</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">50+</p>
                    <p className="text-gray-500 text-[10px]">Countries</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Rotating Chat Cards with Wires */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <RotatingChatCards />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Minimal */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border border-white/10 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-amber-400/40 rounded-full mt-1.5 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Promise Section */}
      <section className="py-16 bg-slate-950/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-10 text-white"
          >
            Our <span className="text-amber-400">Promise</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {promisePoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <p.icon className="text-amber-400/60 min-w-5" size={18} />
                <div>
                  <h3 className="font-semibold text-white text-xs mb-0.5">{p.title}</h3>
                  <p className="text-gray-500 text-[11px]">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative py-16 overflow-hidden bg-black/50 border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #F59E0B 0%, transparent 50%)`,
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-10 text-white"
          >
            Why <span className="text-amber-400">Click Agency?</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <card.icon className="mx-auto text-amber-400/60 mb-2" size={24} />
                <h3 className="font-semibold text-white text-xs mb-1">{card.title}</h3>
                <p className="text-gray-500 text-[10px]">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-950/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-10 text-white"
          >
            FAQs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <HelpCircle className="text-amber-400/60 min-w-4" size={16} />
                <div>
                  <h3 className="font-semibold text-white text-xs mb-0.5">{faq.q}</h3>
                  <p className="text-gray-500 text-[11px]">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-10 text-white"
          >
            Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`p-4 rounded-xl border ${
                  t.cta ? "border-amber-400/20 bg-amber-400/5" : "border-white/5 hover:border-white/10"
                } transition-all duration-300`}
              >
                <p className="text-gray-300 text-xs italic mb-2">"{t.text}"</p>
                <p className="text-amber-400 font-medium text-xs">— {t.name}</p>
                {t.cta && (
                  <div className="mt-2">
                    <span className="text-[9px] bg-amber-400/10 text-amber-400/70 px-2 py-0.5 rounded-full border border-amber-400/10">
                      🎉 Exclusive
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-5 rounded-xl border border-amber-400/10 bg-amber-400/5"
          >
            <p className="text-sm font-bold text-amber-400">🚀 First Client - 50% Off!</p>
            <p className="text-xs text-gray-400 mt-1">Free speed optimization (₹25,000 value)</p>
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



