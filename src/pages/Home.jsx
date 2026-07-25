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

// Chat Card Component
const ChatCard = ({ icon: Icon, title, message, delay, rotation, position, color, index }) => {
  return (
    <motion.div
      className="absolute"
      style={position}
      initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: rotation,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: {
          duration: 3 + (index * 0.3),
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        className="bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 w-48 sm:w-52 shadow-2xl hover:border-amber-400/40 transition-all duration-300"
        whileHover={{ 
          scale: 1.08,
          rotate: 0,
          borderColor: "rgba(251, 191, 36, 0.5)",
          boxShadow: "0 20px 60px -15px rgba(251, 191, 36, 0.2)",
        }}
      >
        <div className="flex items-center gap-2.5 mb-2">
          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
          </div>
          <span className="text-white text-[10px] sm:text-xs font-semibold">{title}</span>
        </div>
        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">{message}</p>
        <div className="flex items-center gap-1.5 mt-2">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-[8px] sm:text-[10px] text-gray-500 font-medium">Online</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Animated Curly Wires - Circular Connection
const CurlyWires = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
      <defs>
        <linearGradient id="wireGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="wireGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="wireGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="wireGradient4" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="wireGradient5" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="wireGradient6" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Circular Wire Connections - Connecting all cards in a circle */}
      
      {/* Top to Top-Right */}
      <motion.path
        d="M 25% 12% C 35% 5%, 45% 8%, 55% 12% C 65% 16%, 72% 12%, 78% 15%"
        stroke="url(#wireGradient1)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
      />

      {/* Top-Right to Bottom-Right */}
      <motion.path
        d="M 82% 18% C 88% 28%, 85% 38%, 82% 48% C 79% 58%, 85% 62%, 82% 68%"
        stroke="url(#wireGradient2)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.6, ease: "easeInOut" }}
      />

      {/* Bottom-Right to Bottom-Left */}
      <motion.path
        d="M 78% 72% C 68% 78%, 58% 75%, 48% 72% C 38% 69%, 32% 75%, 25% 72%"
        stroke="url(#wireGradient3)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.8, delay: 0.9, ease: "easeInOut" }}
      />

      {/* Bottom-Left to Top-Left */}
      <motion.path
        d="M 22% 68% C 16% 58%, 18% 48%, 22% 38% C 26% 28%, 20% 22%, 22% 18%"
        stroke="url(#wireGradient4)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 1.2, ease: "easeInOut" }}
      />

      {/* Center to Top */}
      <motion.path
        d="M 50% 35% C 45% 25%, 40% 18%, 38% 12%"
        stroke="url(#wireGradient5)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut" }}
      />

      {/* Center to Right */}
      <motion.path
        d="M 65% 35% C 72% 28%, 78% 25%, 82% 22%"
        stroke="url(#wireGradient6)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.7, ease: "easeInOut" }}
      />

      {/* Center to Bottom */}
      <motion.path
        d="M 50% 65% C 45% 75%, 40% 78%, 38% 82%"
        stroke="url(#wireGradient5)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.6, delay: 1.0, ease: "easeInOut" }}
      />

      {/* Center to Left */}
      <motion.path
        d="M 35% 35% C 28% 28%, 22% 25%, 18% 22%"
        stroke="url(#wireGradient6)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.8, delay: 1.3, ease: "easeInOut" }}
      />

      {/* Animated dots on wires - Circular motion */}
      <motion.circle
        cx="25%"
        cy="12%"
        r="3"
        fill="#FBBF24"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.circle
        cx="78%"
        cy="15%"
        r="3"
        fill="#F59E0B"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
      />
      <motion.circle
        cx="82%"
        cy="68%"
        r="3"
        fill="#FBBF24"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.9 }}
      />
      <motion.circle
        cx="22%"
        cy="68%"
        r="3"
        fill="#F59E0B"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
      />
      
      {/* Center pulsing circle */}
      <motion.circle
        cx="50%"
        cy="50%"
        r="4"
        fill="#FBBF24"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="50%"
        cy="50%"
        r="8"
        fill="none"
        stroke="#FBBF24"
        strokeWidth="1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 2, 0], opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="50%"
        cy="50%"
        r="12"
        fill="none"
        stroke="#FBBF24"
        strokeWidth="0.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 3, 0], opacity: [0, 0.3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      />
    </svg>
  );
};

// Rotating Chat Cards Container - 6 Cards Circular
const RotatingChatCards = () => {
  const cards = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      message: "Do you offer cash on delivery?",
      rotation: -5,
      position: { top: "2%", left: "2%" },
      delay: 0,
      color: "bg-gradient-to-br from-amber-400 to-yellow-300",
      index: 0,
    },
    {
      icon: Bot,
      title: "AI Support",
      message: "yes, Cash On Delivery is available.",
      rotation: 4,
      position: { top: "2%", right: "2%" },
      delay: 0.3,
      color: "bg-gradient-to-br from-amber-400 to-orange-300",
      index: 1,
    },
    {
      icon: Headphones,
      title: "24/7 Help",
      message: "How can I track my order?",
      rotation: -3,
      position: { bottom: "2%", right: "2%" },
      delay: 0.6,
      color: "bg-gradient-to-br from-amber-400 to-yellow-400",
      index: 2,
    },
    {
      icon: Star,
      title: "Rating",
      message: "★ 4.9/5 • Excellent service!",
      rotation: 3,
      position: { bottom: "2%", left: "2%" },
      delay: 0.9,
      color: "bg-gradient-to-br from-amber-400 to-yellow-200",
      index: 3,
    },
    {
      icon: ThumbsUp,
      title: "Feedback",
      message: "Great experience! Will recommend.",
      rotation: -2,
      position: { top: "22%", left: "8%" },
      delay: 0.4,
      color: "bg-gradient-to-br from-amber-400 to-yellow-100",
      index: 4,
    },
    {
      icon: Rocket,
      title: "Fast Response",
      message: "Usually replies within seconds.",
      rotation: 2,
      position: { bottom: "22%", right: "8%" },
      delay: 0.7,
      color: "bg-gradient-to-br from-amber-400 to-orange-200",
      index: 5,
    },
  ];

  return (
    <div className="relative w-full max-w-md sm:max-w-full h-[420px] sm:h-[480px] md:h-[500px] lg:h-[540px] mx-auto">
      <CurlyWires />
      <div className="relative w-full h-full">
        {cards.map((card, index) => (
          <ChatCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const handleStartTrial = () => {
    window.open('https://ai-customer-support-chat-alpha.vercel.app/', '_blank');
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
      
      {/* Hero Section - Fixed Mobile Navbar Issue */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16 sm:pt-0">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.03) 0%, transparent 60%),
                             radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.02) 0%, transparent 60%)`,
          }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-amber-400/5 border border-amber-400/10 rounded-full px-3 py-1.5 mb-4 sm:mb-5"
              >
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-[10px] sm:text-[11px] text-amber-400/80 font-medium tracking-[0.15em] uppercase">AI Powered</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-[1.1] tracking-tight"
              >
                <span className="text-white">Marketing</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  with AI
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-7 max-w-md mx-auto lg:mx-0 leading-relaxed"
              >
                Automate campaigns, optimize ad spend, and scale your business with intelligent AI solutions.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center lg:justify-start mb-6 sm:mb-8"
              >
                <button
                  onClick={handleStartTrial}
                  className="group inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold text-xs sm:text-sm rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Start Free Trial
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">500+</p>
                    <p className="text-gray-500 text-[8px] sm:text-[10px]">Happy Clients</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">284%</p>
                    <p className="text-gray-500 text-[8px] sm:text-[10px]">Avg. ROI</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">50+</p>
                    <p className="text-gray-500 text-[8px] sm:text-[10px]">Countries</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Chat Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="order-1 lg:order-2 flex justify-center w-full"
            >
              <RotatingChatCards />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-4 h-7 sm:w-5 sm:h-8 border border-white/10 rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 sm:h-2 bg-amber-400/40 rounded-full mt-1.5 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Promise Section */}
      <section className="py-12 sm:py-16 bg-slate-950/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 text-white"
          >
            Our <span className="text-amber-400">Promise</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {promisePoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-amber-400/10"
              >
                <p.icon className="text-amber-400/60 min-w-4 sm:min-w-5" size={16} />
                <div>
                  <h3 className="font-semibold text-white text-[10px] sm:text-xs mb-0.5">{p.title}</h3>
                  <p className="text-gray-500 text-[10px] sm:text-[11px]">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden bg-black/50 border-t border-white/5">
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
            className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 text-white"
          >
            Why <span className="text-amber-400">Click Agency?</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-center p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-amber-400/10"
              >
                <card.icon className="mx-auto text-amber-400/60 mb-2" size={20} />
                <h3 className="font-semibold text-white text-[10px] sm:text-xs mb-1">{card.title}</h3>
                <p className="text-gray-500 text-[9px] sm:text-[10px]">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-slate-950/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 text-white"
          >
            FAQs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-amber-400/10"
              >
                <HelpCircle className="text-amber-400/60 min-w-3 sm:min-w-4" size={14} />
                <div>
                  <h3 className="font-semibold text-white text-[10px] sm:text-xs mb-0.5">{faq.q}</h3>
                  <p className="text-gray-500 text-[10px] sm:text-[11px]">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 text-white"
          >
            Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`p-3 sm:p-4 rounded-xl border ${
                  t.cta ? "border-amber-400/20 bg-amber-400/5" : "border-white/5 hover:border-white/10"
                } transition-all duration-300`}
              >
                <p className="text-gray-300 text-[10px] sm:text-xs italic mb-2">"{t.text}"</p>
                <p className="text-amber-400 font-medium text-[10px] sm:text-xs">— {t.name}</p>
                {t.cta && (
                  <div className="mt-2">
                    <span className="text-[8px] sm:text-[9px] bg-amber-400/10 text-amber-400/70 px-2 py-0.5 rounded-full border border-amber-400/10">
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
            className="text-center p-4 sm:p-5 rounded-xl border border-amber-400/10 bg-amber-400/5"
          >
            <p className="text-sm sm:text-base font-bold text-amber-400">🚀 First Client - 50% Off!</p>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Free speed optimization (₹25,000 value)</p>
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
