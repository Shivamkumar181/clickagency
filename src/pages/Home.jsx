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
  ChevronDown,
  Headphones,
  ThumbsUp,
  Clock as ClockIcon,
  Star,
  MessageSquare,
  Circle,
  Check,
  X,
  Phone,
  Mail,
  User,
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

// Stylish Chat Preview Card Component
const ChatPreviewCard = ({ onStartTrial }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    { type: "user", text: "Do you offer cash on delivery?" },
    { type: "agent", text: "yes, Cash On Delivery is available." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 border border-yellow-400/20 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-400/5 backdrop-blur-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400/15 to-yellow-500/5 px-5 py-4 border-b border-yellow-400/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/20">
                  <MessageCircle className="w-5 h-5 text-black" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Live Chat Preview</h3>
                <p className="text-yellow-400/60 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                  Online • Usually replies instantly
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-yellow-400/30 rounded-full hover:bg-yellow-400/50 transition-colors cursor-pointer" />
              <div className="w-2 h-2 bg-yellow-400/30 rounded-full hover:bg-yellow-400/50 transition-colors cursor-pointer" />
              <div className="w-2 h-2 bg-yellow-400/30 rounded-full hover:bg-yellow-400/50 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="p-5 space-y-4 min-h-[180px]">
          {/* Agent Info */}
          <motion.div
            className="flex items-center gap-2.5 bg-yellow-400/5 border border-yellow-400/10 rounded-xl p-2.5"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-black" />
            </div>
            <div>
              <p className="text-white text-xs font-medium">AI Support Agent</p>
              <p className="text-yellow-400/50 text-[10px]">Online • 24/7</p>
            </div>
            <div className="ml-auto flex gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            </div>
          </motion.div>

          {/* Messages */}
          <div className="space-y-3">
            {/* User Message */}
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0, scale: 0.95, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]">
                <p className="text-gray-200 text-sm">Do you offer cash on delivery?</p>
                <span className="text-[10px] text-gray-500 mt-1 block">10:30 AM</span>
              </div>
            </motion.div>

            {/* Agent Response with Animation */}
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              animate={{ 
                opacity: isVisible ? 1 : 0.5,
                scale: isVisible ? 1 : 0.98,
                x: 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 border border-yellow-400/30 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%] shadow-lg shadow-yellow-400/5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-yellow-400 text-xs font-medium">AI Response</span>
                </div>
                <p className="text-white text-sm font-medium">
                  yes, Cash On Delivery is available.
                </p>
                <span className="text-[10px] text-yellow-400/50 mt-1 block">10:31 AM</span>
              </div>
            </motion.div>

            {/* Typing Indicator */}
            <motion.div
              className="flex justify-start"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-gray-800/50 border border-gray-700/30 rounded-2xl rounded-bl-md px-4 py-2.5">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-5 pb-3 grid grid-cols-3 gap-2">
          <button className="bg-yellow-400/5 hover:bg-yellow-400/10 border border-yellow-400/10 rounded-lg px-3 py-1.5 text-[10px] text-yellow-400/70 hover:text-yellow-400 transition-all duration-300 flex items-center justify-center gap-1.5">
            <Phone className="w-3 h-3" />
            Call
          </button>
          <button className="bg-yellow-400/5 hover:bg-yellow-400/10 border border-yellow-400/10 rounded-lg px-3 py-1.5 text-[10px] text-yellow-400/70 hover:text-yellow-400 transition-all duration-300 flex items-center justify-center gap-1.5">
            <Mail className="w-3 h-3" />
            Email
          </button>
          <button className="bg-yellow-400/5 hover:bg-yellow-400/10 border border-yellow-400/10 rounded-lg px-3 py-1.5 text-[10px] text-yellow-400/70 hover:text-yellow-400 transition-all duration-300 flex items-center justify-center gap-1.5">
            <User className="w-3 h-3" />
            Agent
          </button>
        </div>

        {/* CTA Button */}
        <div className="p-3 bg-gradient-to-r from-yellow-400/5 to-transparent border-t border-yellow-400/10">
          <motion.button
            onClick={onStartTrial}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-2.5 rounded-xl hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageSquare className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Start Free Trial - AI Support</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl" />
      </div>

      {/* Floating Badge */}
      <motion.div
        className="absolute -top-3 -right-3 bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-yellow-400/20"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, -2, 2, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          24/7 Support
        </div>
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const handleStartTrial = () => {
    // Replace with your actual AI Customer Support link
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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #FBBF24 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, #FBBF24 0%, transparent 50%)`,
            backgroundSize: '100% 100%',
          }} />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 26%, transparent 27%, transparent 100%),
                             linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 26%, transparent 27%, transparent 100%)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-xs sm:text-sm text-yellow-200 font-medium">
                  AI-Powered Marketing Automation
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              >
                <span className="text-white">Smart Marketing</span>
                <br />
                <span className="text-yellow-400">Powered by AI</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-gray-300 mb-6 max-w-lg lg:max-w-md mx-auto lg:mx-0"
              >
                Automate campaigns, optimize ad spend, and scale your business 
                with intelligent AI-driven marketing solutions.
              </motion.p>

              {/* Key Features List */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
              >
                {[
                  "AI Ad Optimization",
                  "Smart Cost Management",
                  "Automated Campaigns",
                  "Real-time Analytics",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={handleStartTrial}
                  className="group inline-flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 border border-yellow-400/30 hover:border-yellow-400 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-yellow-400/10"
                >
                  <Play className="w-4 h-4 mr-2" />
                  See How It Works
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-xs sm:text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-yellow-400" />
                  <span>No Lock-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 text-yellow-400" />
                  <span>24/7 AI Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-yellow-400" />
                  <span>95+ PageSpeed</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Chat Preview */}
            <div className="order-1 lg:order-2 flex justify-center">
              <ChatPreviewCard onStartTrial={handleStartTrial} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-9 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-yellow-400 rounded-full mt-1.5 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Promise Section */}
      <section className="py-16 sm:py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
            OUR PROMISE & WHAT WE OFFER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promisePoints.map((p, i) => (
              <div key={i} className="flex gap-4 items-start">
                <p.icon className="text-yellow-400 min-w-8 ml-4 sm:ml-6" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">{p.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm ml-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/images/vitaly-gariev-d80Nf1ptTfY-unsplash.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 z-0 bg-black/80"></div>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
            Why <span className="text-yellow-200">Click Agency?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyCards.map((card, i) => (
              <div
                key={i}
                className="bg-black/40 p-5 sm:p-6 rounded-xl text-center hover:scale-105 hover:border-yellow-400 border border-white/10 transition-all duration-300"
              >
                <card.icon className="mx-auto text-yellow-400 mb-3" size={36} />
                <h3 className="font-bold text-sm sm:text-base mb-2">{card.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/images/skytech-aviation-CO76VQZWeTw-unsplash.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 z-0 bg-black/80"></div>
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-40 right-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
            Click Marketing <span className="text-yellow-200">FAQs</span>
          </h2>
          <div className="overflow-x-auto custom-scrollbar pb-4">
            <div className="flex gap-4 sm:gap-5 w-max px-1">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="w-72 sm:w-80 bg-black/40 p-4 sm:p-5 rounded-xl border border-yellow-400/30 flex-shrink-0 hover:scale-105 transition-all duration-300"
                >
                  <HelpCircle className="text-yellow-400 mb-2" size={24} />
                  <h3 className="font-bold text-base sm:text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-yellow-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-black border ${
                  t.cta ? "border-yellow-400 shadow-xl shadow-yellow-400/10" : "border-white/20"
                } p-5 sm:p-6 rounded-xl`}
              >
                <p className="italic text-gray-300 text-sm sm:text-base">"{t.text}"</p>
                <p className="mt-4 text-yellow-400 font-semibold text-sm sm:text-base">— {t.name}</p>
                {t.cta && (
                  <div className="mt-4 text-center">
                    <span className="bg-yellow-200/50 text-black px-3 py-1.5 inline-block rounded-full text-xs sm:text-sm font-bold">
                      🎉 50% off + Free Speed Fix
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center bg-yellow-200/60 text-black p-6 sm:p-8 rounded-2xl">
            <p className="text-lg sm:text-2xl font-bold">
              🚀 Be Our First Client - Exclusive Launch Discount 🚀
            </p>
            <p className="mt-2 text-sm sm:text-base">
              Get 50% off first month + free website speed optimization (value ₹25,000). 
              Limited to first paying client.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div id="contact-form-section">
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
