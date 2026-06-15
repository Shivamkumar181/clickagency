import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Code2,
  Megaphone,
  Rocket,
  Award,
  Clock,
  HeartHandshake,
  TrendingUp,
  Zap,
  Users,
  Globe,
  Coffee,
  GraduationCap,
} from "lucide-react";

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Overlapping Images */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-full w-full"
          style={{
            backgroundImage: "url('images/question-mark-icon.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 z-0 bg-black/70 "></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center mt-100">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-5 mt-13"
          >
            <span className="text-yellow-200">Who</span> We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Meet the mind behind Click Agency - where code meets creativity, and
            data drives decisions.
          </motion.p>
        </div>
      </section>

      {/* Founder Story with Overlapping Image Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image Stack - Overlapping Cards Effect */}
          {/* Image Stack - Overlapping Cards Effect */}
          <motion.div variants={fadeInUp} className="flex-1 relative">
            <div className="relative h-[550px] w-full">
              {/* Background decorative circle */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-80 h-80 bg-yellow-500/5 rounded-full blur-2xl"></div>

              {/* Main Image Card - Top Left */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="absolute top-0 left-0 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/30 z-40 rotate-6 hover:rotate-0 transition-all duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=400&fit=crop"
                  alt="Developer working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/50 px-2 py-1 rounded">
                  Full-Stack Dev
                </div>
              </motion.div>

              {/* Second Image Card - Top Right */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="absolute top-0 right-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/30 z-30 -rotate-3 hover:rotate-0 transition-all duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=400&fit=crop"
                  alt="Marketing strategy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/50 px-2 py-1 rounded">
                  Performance Marketer
                </div>
              </motion.div>

              {/* Third Image Card - Middle Left */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="absolute top-80 left-20 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/30 z-20 rotate-4 hover:rotate-1 transition-all duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/50 px-2 py-1 rounded">
                  AI Automation Expert
                </div>
              </motion.div>

              {/* Fourth Image Card - Bottom Right (NEW) */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -2 }}
                className="absolute bottom-0 right-10 w-60 h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/30 z-10 -rotate-5 hover:rotate-0 transition-all duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop"
                  alt="SEO Analytics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/50 px-2 py-1 rounded">
                  SEO & Analytics
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInUp} className="flex-1 space-y-6">
            <div className="inline-block bg-yellow-400/20 px-4 py-1 rounded-full">
              <span className="text-yellow-200 text-sm font-semibold">
                Story
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Turning Clicks Into -
              <span className="text-yellow-200">Customers</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Click is a next-generation digital marketing agency focused on
              helping small and medium businesses in Bangalore build a powerful
              online presence. We believe that effective marketing should be
              accessible, transparent, and results-driven.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our approach combines strategic thinking with practical execution.
              Whether it's improving your search rankings, growing your social
              media following, or creating a website that converts — we've got
              you covered with solutions that actually work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What you can expect when working with Click -{" "}
              <span className="text-yellow-200">
                clear communication, affordable pricing, and a partner who
                genuinely cares about your growth
              </span>
              . No long-term contracts, no hidden fees — just honest marketing
              that delivers real value for your business.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Code2 size={20} className="text-yellow-400" />
                <span className="text-sm">Full-Stack Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Megaphone size={20} className="text-yellow-400" />
                <span className="text-sm">Performance Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-yellow-400" />
                <span className="text-sm">AI Automation</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section with Counters */}
      <section
        ref={ref}
        className="py-20 bg-gradient-to-r from-yellow-900/10 to-black"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact by <span className="text-yellow-200">Numbers</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The journey so far - and the milestones ahead
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                value: startCount ? 52 : 0,
                suffix: "+",
                label: "Projects Completed",
                sub: "",
                icon: Code2,
              },
              {
                value: startCount ? 8 : 0,
                suffix: "",
                label: "Happy Clients",
                sub: "First client pending - be the first!",
                icon: Users,
                highlight: true,
              },
              {
                value: 1,
                suffix: " +",
                label: "Core Team",
                sub: "Growing with freelancers",
                icon: Coffee,
              },
              {
                value: startCount ? 156 : 0,
                suffix: "%",
                label: "Avg. ROI",
                sub: "First client gets 100% boost*",
                icon: TrendingUp,
                special: "average",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className={`group flex items-center gap-4 p-4 rounded-xl ${
                  stat.highlight
                    ? "bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 shadow-lg shadow-yellow-400/5"
                    : "bg-white/5 border border-white/10 hover:border-yellow-400/20"
                } transition-all duration-300`}
              >
                {/* Icon */}
                <div
                  className={`p-3 rounded-xl ${
                    stat.highlight
                      ? "bg-yellow-400/20"
                      : "bg-white/10 group-hover:bg-yellow-400/20"
                  } transition-all duration-300`}
                >
                  <stat.icon className="text-yellow-400" size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-1">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 leading-tight">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    {stat.special === "average" && (
                      <span className="text-xs text-yellow-500 font-semibold">
                        *
                      </span>
                    )}
                  </div>
                  <p className="text-white font-semibold text-sm mt-0.5">
                    {stat.label}
                  </p>
                  {stat.sub && (
                    <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
                  )}
                </div>

                {/* Decorative element */}
                <div
                  className={`w-1 h-12 rounded-full ${
                    stat.highlight ? "bg-yellow-400" : "bg-yellow-400/30"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision with Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <Rocket size={32} className="text-yellow-400" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To democratize enterprise-level digital growth for Bangalore's
              businesses. We believe that every local business deserves a
              high-performance website and data-driven marketing — without the
              agency overhead or confusing jargon.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award size={32} className="text-yellow-400" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To become India's most trusted tech-first digital agency, known
              for transparency, measurable results, and a seamless blend of
              development and marketing. By 2028, we aim to help 500+ businesses
              scale profitably online.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-16 overflow-hidden rounded-3xl"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('images/journey-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />

          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 z-0 bg-black/85"></div>

          {/* Content */}
          <div className="relative z-10 py-12 px-4 md:px-8">
            <h3 className="text-2xl font-bold text-center mb-10">
              Our <span className="text-yellow-200">Journey</span>
            </h3>

            <div className="relative">
              {/* Timeline line - no dots */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400/30 hidden md:block"></div>

              <div className="space-y-8 md:space-y-0">
                {[
                  {
                    title: "The Beginning",
                    desc: "Started freelancing as a web developer, building custom sites for local businesses.",
                    icon: Code2,
                    align: "left",
                  },
                  {
                    title: "Agency Founded",
                    desc: "Officially launched Click<< after noticing the gap between development and marketing services.",
                    icon: Rocket,
                    align: "right",
                  },
                  {
                    title: "First Milestone",
                    desc: "Helped 5 early clients achieve 2x ROI through integrated SEO + dev approach.",
                    icon: TrendingUp,
                    align: "left",
                  },
                  {
                    title: "AI Integration",
                    desc: "Launched AI chatbot services and automation suite — now looking for first official agency client.",
                    icon: Zap,
                    align: "right",
                  },
                  {
                    title: "Scaling Up",
                    desc: "Expanding team and services to serve 30+ concurrent clients.",
                    icon: Users,
                    align: "left",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative md:flex md:items-center md:${item.align === "left" ? "justify-start" : "justify-end"} mb-8 md:mb-12`}
                  >
                    <div
                      className={`md:w-5/12 ${item.align === "right" ? "md:order-2" : ""}`}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: item.align === "left" ? -30 : 30,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-yellow-400 hover:bg-white/20 transition-all hover:scale-105"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon size={20} className="text-yellow-400" />
                          <span className="text-yellow-400 font-bold">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </motion.div>
                    </div>
                    <div className="hidden md:block md:w-2/12"></div>
                    <div className="md:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values / What Drives Us */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives <span className="text-yellow-200">Click</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Core values that define every project we take on
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Technical Excellence",
                desc: "No shortcuts. Every line of code is optimized for speed, security, and scalability.",
                color: "hover:border-yellow-400",
              },
              {
                icon: TrendingUp,
                title: "Data-Driven Decisions",
                desc: "We don't guess. Every strategy is backed by analytics and real-world testing.",
                color: "hover:border-yellow-400",
              },
              {
                icon: HeartHandshake,
                title: "Radical Transparency",
                desc: "Live dashboards, weekly updates, and clear communication — always.",
                color: "hover:border-yellow-400",
              },
              {
                icon: Clock,
                title: "Fast Response",
                desc: "24-48 hour reply time. Your business urgency is our priority.",
                color: "hover:border-yellow-400",
              },
              {
                icon: Globe,
                title: "Local Expertise",
                desc: "Bangalore-focused strategies that understand the local market nuances.",
                color: "hover:border-yellow-400",
              },
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                desc: "Staying ahead of Google updates, AI trends, and industry shifts.",
                color: "hover:border-yellow-400",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className={`bg-white/5 p-6 rounded-xl border border-white/10 ${value.color} transition-all duration-300 cursor-pointer`}
              >
                <value.icon className="text-yellow-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
