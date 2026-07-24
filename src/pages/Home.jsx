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





import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
  Network,
  Cpu,
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
    text: "Click transformed our digital presence — can’t wait to see real results!",
  },
  {
    name: "Future Partner",
    text: "Their tech-first approach is exactly what we need.",
  },
];

// Floating particles for background animation
const FloatingParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const particles = [];
    const particleCount = 80;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 215, 0, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
};

// Animated AI workflow nodes
const AIWorkflowNodes = () => {
  const nodes = [
    { icon: Brain, label: "AI Intelligence", x: "10%", y: "15%", delay: 0 },
    { icon: Target, label: "Ad Targeting", x: "75%", y: "10%", delay: 0.5 },
    { icon: BarChart3, label: "Analytics", x: "85%", y: "60%", delay: 1 },
    { icon: Zap, label: "Auto-Optimize", x: "5%", y: "70%", delay: 1.5 },
    { icon: Network, label: "Multi-Channel", x: "45%", y: "5%", delay: 0.8 },
    { icon: Cpu, label: "Cost Management", x: "50%", y: "80%", delay: 1.2 },
    { icon: Rocket, label: "Scale Campaigns", x: "30%", y: "45%", delay: 0.3 },
    { icon: Sparkles, label: "Smart Automation", x: "65%", y: "40%", delay: 0.7 },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Animated connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* AI-generated connection paths */}
        <path
          d="M 15% 25% Q 30% 15% 45% 15% Q 60% 15% 75% 20%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M 45% 15% Q 60% 40% 65% 50%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-300"
        />
        <path
          d="M 75% 20% Q 85% 40% 85% 60%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-500"
        />
        <path
          d="M 15% 25% Q 30% 55% 5% 70%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-200"
        />
        <path
          d="M 5% 70% Q 30% 75% 50% 80%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-400"
        />
        <path
          d="M 50% 80% Q 70% 70% 85% 60%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-600"
        />
        <path
          d="M 15% 25% Q 20% 35% 30% 45%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-150"
        />
        <path
          d="M 30% 45% Q 50% 50% 65% 40%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-350"
        />
        <circle cx="30%" cy="45%" r="4" fill="#FBBF24" className="animate-ping" />
        <circle cx="65%" cy="40%" r="4" fill="#FBBF24" className="animate-ping delay-500" />
      </svg>

      {/* Animated nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: node.delay + 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            className="relative group"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-full p-3 shadow-2xl shadow-yellow-400/20">
              <node.icon className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span className="text-[10px] text-yellow-200/70 font-medium bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
                {node.label}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Central pulse ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-64 h-64">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-yellow-400/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-yellow-400/10"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-yellow-400/10 backdrop-blur-sm rounded-full p-6 border border-yellow-400/30">
              <Sparkles className="w-16 h-16 text-yellow-400 animate-spin-slow" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Add spin-slow animation to tailwind config equivalent
const style = document.createElement('style');
style.textContent = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;
document.head.appendChild(style);

const Home = () => {
  return (
    <>
      <SEO
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        url="https://clickagency.vercel.app/"
        type="website"
      />
      
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-300/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Floating Particles */}
        <FloatingParticles />

        {/* AI Workflow Nodes */}
        <AIWorkflowNodes />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-200 font-medium">
              AI-Powered Marketing Automation
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Supercharge Your</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Marketing with AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Automate ads, optimize campaigns, and reduce costs with 
            <span className="text-yellow-300 font-semibold"> AI-driven workflows</span>.
            <br />
            All-in-one platform for performance marketing & automation.
          </motion.p>

          {/* Feature Tags */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              "AI Ad Optimization",
              "Smart Cost Management",
              "Automated Campaigns",
              "Real-time Analytics",
            ].map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:border-yellow-400/50 transition-all duration-300"
              >
                {feature}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#contact-form-section"
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full font-bold text-black hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started with AI
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-yellow-400/50 rounded-full font-medium text-white hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-yellow-400" />
              <span>No Lock-in Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>24-48hr Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-yellow-400" />
              <span>95+ PageSpeed Score</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Add CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>

      {/* Promise Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            OUR PROMISE & WHAT WE OFFER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promisePoints.map((p, i) => (
              <div key={i} className="flex gap-4 items-start">
                <p.icon className="text-yellow-400 min-w-8 ml-6" />
                <div>
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="text-gray-400 text-sm ml-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
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

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-black/76"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why <span className="text-yellow-200">Click Agency?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => (
              <div
                key={i}
                className="bg-black/40 p-6 rounded-xl text-center hover:scale-105 hover:border-yellow-400 border border-white/10 transition-all duration-300"
              >
                <card.icon className="mx-auto text-yellow-400 mb-3" size={40} />
                <h3 className="font-bold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Carousel Section with Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
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

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-black/76"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-40 right-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Click Marketing <span className="text-yellow-200">FAQs</span>
          </h2>
          <div className="overflow-x-auto custom-scrollbar pb-4">
            <div className="flex gap-5 w-max">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="w-80 bg-black/40 p-5 rounded-xl border border-yellow-400/30 flex-shrink-0 hover:scale-105 transition-all duration-300"
                >
                  <HelpCircle className="text-yellow-400 mb-2" size={28} />
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-300 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials + First Client Banner */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say About Click Agency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-black border ${t.cta ? "border-yellow-400 shadow-xl" : "border-white/20"} p-6 rounded-xl`}
              >
                <p className="italic text-gray-300">"{t.text}"</p>
                <p className="mt-4 text-yellow-400 font-semibold">— {t.name}</p>
                {t.cta && (
                  <div className="mt-4 text-center">
                    <span className="bg-yellow-200/50 text-black px-4 py-2 inline-block rounded-full text-sm font-bold">
                      🎉50% off + Free Speed Fix for First Client!🎉
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center bg-yellow-200/60 text-black p-8 rounded-2xl">
            <p className="text-2xl font-bold">
              🚀 Be My First Client - Exclusive Launch Discount 🚀
            </p>
            <p className="mt-2">
              Get 50% off first month + free website speed optimization (value
              ₹25,000). Limited to first paying client.
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
