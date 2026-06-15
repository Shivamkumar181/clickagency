// import React, { useState, useRef, useEffect } from "react";
// import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
// import emailjs from "emailjs-com";

// const ChatBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       text: "👋 Hi! I'm Click Agency AI Assistant. I can help you learn about SEO, social media marketing, website design, and more. What would you like to know? Also, could you share your email and phone so Shivam can reach out personally? 😊",
//       sender: "bot",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [conversationHistory, setConversationHistory] = useState([]);
//   const [leadSubmitted, setLeadSubmitted] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim()) return;
//     const userMsg = input.trim();
//     setMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
//     setConversationHistory((prev) => [...prev, `User: ${userMsg}`]);
//     setInput("");
//     setIsTyping(true);

//     // Simple bot response logic
//     setTimeout(() => {
//       let botReply = "";
//       const lowerMsg = userMsg.toLowerCase();

//       // Pricing related
//       if (
//         lowerMsg.includes("price") ||
//         lowerMsg.includes("cost") ||
//         lowerMsg.includes("pricing")
//       ) {
//         botReply =
//           "Our pricing is affordable for small businesses:\n• SEO: Starting at ₹12,000/month\n• Social Media: ₹8,000/month\n• Website Design: ₹25,000 one-time\n• PPC: ₹8,000 + ad spend\n\nWant a custom quote? Share your email & phone!";
//       }
//       // Greetings
//       else if (
//         lowerMsg.includes("hello") ||
//         lowerMsg.includes("hi") ||
//         lowerMsg.includes("hey") ||
//         lowerMsg.includes("hii")
//       ) {
//         botReply =
//           "Hello! I'm Click Agency AI Assistant. How can I help you today?";
//       }
//       // Founder questions
//       else if (
//         lowerMsg.includes("company founder") ||
//         lowerMsg.includes("owner") ||
//         lowerMsg.includes("shivam") ||
//         lowerMsg.includes("who founded")
//       ) {
//         botReply =
//           "Shivam is our company founder and the lead strategist at Click Agency. He's passionate about helping businesses grow online!";
//       }
//       // Trust and reliability
//       else if (
//         lowerMsg.includes("trust issues") ||
//         lowerMsg.includes("client") ||
//         lowerMsg.includes("phone") ||
//         lowerMsg.includes("reliable")
//       ) {
//         botReply =
//           "I understand trust is important! Shivam is happy to have a quick call to discuss your concerns. Please share your email and phone number, and he'll reach out personally within a few hours!";
//       }
//       // Digital marketing general
//       else if (
//         lowerMsg.includes("digital marketing") ||
//         lowerMsg.includes("marketing")
//       ) {
//         botReply =
//           "We offer a range of digital marketing services including SEO, social media management, PPC advertising, and content marketing. To get personalized advice, please share your email and phone number so Shivam can reach out personally!";
//       }
//       // SEO specific
//       else if (lowerMsg.includes("seo") || lowerMsg.includes("search engine")) {
//         botReply =
//           "SEO services include: keyword research, on-page optimization, local SEO, technical SEO, competitor analysis, link building, and monthly reporting. We help Bangalore businesses rank higher on Google! Results typically show in 3-6 months.";
//       }
//       // Social media specific
//       else if (
//         lowerMsg.includes("social media") ||
//         lowerMsg.includes("instagram") ||
//         lowerMsg.includes("facebook") ||
//         lowerMsg.includes("linkedin")
//       ) {
//         botReply =
//           "Social media packages include content creation, graphic design, caption writing, posting schedule, engagement, community management, and monthly analytics. Perfect for Instagram, LinkedIn, and Facebook presence! Starting at ₹8,000/month.";
//       }
//       // Website design
//       else if (
//         lowerMsg.includes("website") ||
//         lowerMsg.includes("web design") ||
//         lowerMsg.includes("landing page")
//       ) {
//         botReply =
//           "I build modern, mobile-friendly websites that load fast and look great. Services include: custom design, responsive layout, SEO optimization, contact forms, speed optimization, and free hosting setup for the first year! Starting from ₹25,000 one-time.";
//       }
//       // PPC / Google Ads
//       else if (
//         lowerMsg.includes("ppc") ||
//         lowerMsg.includes("google ads") ||
//         lowerMsg.includes("advertising")
//       ) {
//         botReply =
//           "PPC advertising services include: Google Ads, Meta Ads (Facebook/Instagram), keyword research, ad copy creation, landing page design, daily monitoring, A/B testing, and detailed performance reporting. Starting at ₹8,000 + ad spend.";
//       }
//       // Content marketing
//       else if (
//         lowerMsg.includes("content") ||
//         lowerMsg.includes("blog") ||
//         lowerMsg.includes("article")
//       ) {
//         botReply =
//           "Content marketing includes blog writing, article creation, SEO content optimization, email newsletters, and content strategy. We help you attract and engage your target audience with valuable content!";
//       }
//       // Local SEO
//       else if (
//         lowerMsg.includes("local seo") ||
//         lowerMsg.includes("google maps") ||
//         lowerMsg.includes("near me")
//       ) {
//         botReply =
//           "Local SEO helps your business appear in 'near me' searches and Google Maps. Services include Google My Business optimization, local citations, review management, and local keyword targeting. Perfect for brick-and-mortar businesses in Bangalore!";
//       }
//       // E-commerce
//       else if (
//         lowerMsg.includes("ecommerce") ||
//         lowerMsg.includes("online store") ||
//         lowerMsg.includes("shopify")
//       ) {
//         botReply =
//           "We offer e-commerce solutions including Shopify setup, WooCommerce development, product listing optimization, and conversion rate optimization. Starting at ₹35,000 for a complete online store!";
//       }
//       // Email marketing
//       else if (
//         lowerMsg.includes("email marketing") ||
//         lowerMsg.includes("newsletter")
//       ) {
//         botReply =
//           "Email marketing services include newsletter design, automation workflows, list segmentation, A/B testing, and performance tracking. Starting at ₹5,000/month. Great for customer retention!";
//       }
//       // Timeline / Duration
//       else if (
//         lowerMsg.includes("how long") ||
//         lowerMsg.includes("timeline") ||
//         lowerMsg.includes("when will i see results")
//       ) {
//         botReply =
//           "Results timeline varies by service:\n• SEO: 3-6 months\n• PPC: Immediate (1-2 weeks)\n• Social Media: 1-2 months\n• Website Design: 2-4 weeks\n• Email Marketing: 1 month\nWe'll set clear expectations before starting!";
//       }
//       // Industries served
//       else if (
//         lowerMsg.includes("industry") ||
//         lowerMsg.includes("sector") ||
//         lowerMsg.includes("niche")
//       ) {
//         botReply =
//           "We work with various industries including real estate, education, healthcare, e-commerce, restaurants, salons, and professional services. Each strategy is customized for your specific industry!";
//       }
//       // Portfolio / Past work
//       else if (
//         lowerMsg.includes("portfolio") ||
//         lowerMsg.includes("past work") ||
//         lowerMsg.includes("examples")
//       ) {
//         botReply =
//           "We'd love to share our portfolio with you! Please share your email and phone number, and Shivam will send you relevant case studies and examples of our work.";
//       }
//       // Contract / Commitment
//       else if (
//         lowerMsg.includes("contract") ||
//         lowerMsg.includes("commitment") ||
//         lowerMsg.includes("lock-in")
//       ) {
//         botReply =
//           "We offer flexible terms! First 3 months with zero lock-in contract. After that, month-to-month commitment. No long-term binding - your satisfaction is our priority!";
//       }
//       // Payment methods
//       else if (
//         lowerMsg.includes("payment") ||
//         lowerMsg.includes("pay") ||
//         lowerMsg.includes("mode")
//       ) {
//         botReply =
//           "We accept payments via bank transfer, UPI (Google Pay, PhonePe), credit/debit cards, and net banking. 50% advance payment for new projects, balance upon completion.";
//       }
//       // Support / Maintenance
//       else if (
//         lowerMsg.includes("support") ||
//         lowerMsg.includes("maintenance") ||
//         lowerMsg.includes("after service")
//       ) {
//         botReply =
//           "We provide ongoing support for all our services. Website maintenance starts at ₹3,000/month. For marketing services, support is included in your monthly package!";
//       }
//       // Free audit
//       else if (
//         lowerMsg.includes("free audit") ||
//         lowerMsg.includes("free consultation") ||
//         lowerMsg.includes("strategy call")
//       ) {
//         botReply =
//           "Yes! We offer a free 30-minute strategy call and website/marketing audit. Share your email and phone number, and Shivam will schedule a call at your convenience!";
//       }
//       // Refund policy
//       else if (
//         lowerMsg.includes("refund") ||
//         lowerMsg.includes("money back") ||
//         lowerMsg.includes("guarantee")
//       ) {
//         botReply =
//           "We're confident in our services! We offer a satisfaction guarantee. If you're not happy with the results in the first month, we'll work with you to make it right or provide a partial refund as per agreement.";
//       }
//       // Working hours
//       else if (
//         lowerMsg.includes("hours") ||
//         lowerMsg.includes("working time") ||
//         lowerMsg.includes("available")
//       ) {
//         botReply =
//           "Our working hours are Monday to Saturday, 10 AM to 7 PM IST. Chatbot is available 24/7! For urgent queries, WhatsApp us anytime at +91 98765 43210.";
//       }
//       // Location
//       else if (
//         lowerMsg.includes("location") ||
//         lowerMsg.includes("bangalore") ||
//         lowerMsg.includes("office")
//       ) {
//         botReply =
//           "We're based in Bangalore, India! We serve clients locally and across India. Virtual meetings available for remote clients. Would you like to schedule an in-person meeting?";
//       }
//       // Comparison with other agencies
//       else if (
//         lowerMsg.includes("different") ||
//         lowerMsg.includes("unique") ||
//         lowerMsg.includes("why choose you")
//       ) {
//         botReply =
//           "What makes us different?\n• Direct access to founder (no middlemen)\n• Affordable pricing for small businesses\n• No long-term contracts\n• Fast response time (24-48 hours)\n• Custom strategies, not templates\n• Local Bangalore market expertise";
//       }
//       // Tools used
//       else if (
//         lowerMsg.includes("tools") ||
//         lowerMsg.includes("software") ||
//         lowerMsg.includes("platform")
//       ) {
//         botReply =
//           "We use industry-leading tools: Google Analytics, SEMrush, Ahrefs, Meta Business Suite, Canva, Mailchimp, WordPress, and more. You'll get access to dashboards for transparency!";
//       }
//       // Training / Education
//       else if (
//         lowerMsg.includes("training") ||
//         lowerMsg.includes("learn") ||
//         lowerMsg.includes("teach")
//       ) {
//         botReply =
//           "We offer basic training sessions for your team on how to manage social media, understand analytics, and maintain your website. Training is included in select packages!";
//       }
//       // Urgent help
//       else if (
//         lowerMsg.includes("urgent") ||
//         lowerMsg.includes("emergency") ||
//         lowerMsg.includes("quick help")
//       ) {
//         botReply =
//           "For urgent requirements, please share your phone number immediately. Shivam will call you back within 30 minutes during business hours!";
//       }
//       // Discount / Offer
//       else if (
//         lowerMsg.includes("discount") ||
//         lowerMsg.includes("offer") ||
//         lowerMsg.includes("deal")
//       ) {
//         botReply =
//           "Special launch offer for first 5 clients! Get 20% off on first 3 months + free website audit. Share your email to claim this exclusive deal!";
//       }
//       // Referral program
//       else if (lowerMsg.includes("referral") || lowerMsg.includes("refer")) {
//         botReply =
//           "Love our service? Refer a friend and get 10% off your next month's bill! Both you and your friend will benefit from our referral program.";
//       }
//       // Privacy policy
//       else if (
//         lowerMsg.includes("privacy") ||
//         lowerMsg.includes("data") ||
//         lowerMsg.includes("secure")
//       ) {
//         botReply =
//           "Your data is safe with us! We never share your information with third parties. All conversations are confidential. See our privacy policy for more details.";
//       }
//       // Who are you
//       else if (
//         lowerMsg.includes("who are you") ||
//         lowerMsg.includes("assist") ||
//         lowerMsg.includes("yourself")
//       ) {
//         botReply =
//           "I'm Click Agency AI Assistant, here to help you 24/7 with any questions about our digital marketing services!";
//       }
//       // Default response
//       else {
//         botReply =
//           "Thanks for your interest! I specialize in helping small businesses grow online. To give you personalized advice, could you share your email and phone number? I'll reach out within a few hours!";
//       }

//       setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
//       setConversationHistory((prev) => [...prev, `Bot: ${botReply}`]);
//       setIsTyping(false);
//     }, 800);
//   };

//   const submitLead = async () => {
//     if (!email || !phone) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Please share your email and phone number so Shivam can personally get in touch with you! 📞",
//           sender: "bot",
//         },
//       ]);
//       return;
//     }

//     if (leadSubmitted) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "You've already shared your details! Shivam will reach out soon. For urgent queries, WhatsApp at +91 98765 43210",
//           sender: "bot",
//         },
//       ]);
//       return;
//     }

//     setIsTyping(true);

//     const summary = `=== CHAT CONVERSATION ===\n${conversationHistory.join("\n")}\n\n=== USER DETAILS ===\nEmail: ${email}\nPhone: ${phone}\n=== END ===`;

//     try {
//       const result = await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_CHATBOT_TEMPLATE_ID,
//         {
//           user_email: email,
//           user_phone: phone,
//           conversation_summary: summary,
//         },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//       );

//       if (result.status === 200) {
//         setLeadSubmitted(true);
//         setMessages((prev) => [
//           ...prev,
//           {
//             text: "Thanks! I've sent your details to Shivam. He'll personally reach out on WhatsApp within 1 hour. Meanwhile, feel free to ask me more questions! 🚀",
//             sender: "bot",
//           },
//         ]);
//       }
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Technical glitch! But don't worry - you can email Shivam directly at hello@clickagency.com or WhatsApp +91 98765 43210",
//           sender: "bot",
//         },
//       ]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   const toggleMinimize = () => {
//     setIsMinimized(!isMinimized);
//   };

//   return (
//     <>
//       {!isOpen && (
//         // <button
//         //   onClick={() => setIsOpen(true)}
//         //   className="fixed bottom-6 right-6 bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 group"
//         // >
//         //   <MessageCircle size={24} className="group-hover:rotate-12 transition" />
//         //   <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
//         // </button>
//         <button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-6 right-6 bg-yellow-200 text-black p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 group"
//         >
//           {/* Advanced AI Bot Icon */}
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="group-hover:rotate-12 transition-transform duration-300"
//           >
//             {/* Main Body */}
//             <rect
//               x="7"
//               y="5"
//               width="10"
//               height="13"
//               rx="3"
//               fill="currentColor"
//             />
//             {/* Eyes */}
//             <circle cx="10" cy="9" r="1.5" fill="black" />
//             <circle cx="14" cy="9" r="1.5" fill="black" />
//             {/* Eye Glow */}
//             <circle cx="10" cy="9" r="0.7" fill="yellow" />
//             <circle cx="14" cy="9" r="0.7" fill="yellow" />
//             {/* Smile */}
//             <path
//               d="M9 13 Q12 15 15 13"
//               stroke="black"
//               strokeWidth="1.2"
//               fill="none"
//               strokeLinecap="round"
//             />
//             {/* Antenna */}
//             <line
//               x1="12"
//               y1="5"
//               x2="12"
//               y2="2"
//               stroke="currentColor"
//               strokeWidth="1.5"
//             />
//             <circle cx="12" cy="1.5" r="1.5" fill="currentColor" />
//             {/* Signal Waves */}
//             <path
//               d="M15 2 Q17 1.5 17 3"
//               stroke="currentColor"
//               strokeWidth="0.8"
//               fill="none"
//               opacity="0.5"
//             />
//             <path
//               d="M16 0.5 Q19 -0.5 19 2"
//               stroke="currentColor"
//               strokeWidth="0.8"
//               fill="none"
//               opacity="0.3"
//             />
//             {/* Ears */}
//             <rect x="5" y="7" width="2" height="3" rx="1" fill="currentColor" />
//             <rect
//               x="17"
//               y="7"
//               width="2"
//               height="3"
//               rx="1"
//               fill="currentColor"
//             />
//             {/* Neck */}
//             <rect x="11" y="18" width="2" height="2" fill="currentColor" />
//           </svg>

//           {/* Animated Ring */}
//           <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400 opacity-30"></span>

//           {/* Online Indicator */}
//           <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></span>

//           {/* Notification Badge */}
//           <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center px-1 animate-bounce shadow-lg">
//             !
//           </span>
//         </button>
//       )}

//       {isOpen && (
//         <div
//           className={`fixed bottom-6 right-6 w-96 bg-black border border-yellow-400 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 ${isMinimized ? "h-14" : "h-[550px]"}`}
//         >
//           {/* Header */}
//           <div className="flex justify-between items-center p-4 border-b border-yellow-500/20 bg-black rounded-t-2xl">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//               <h3 className="text-yellow-200 font-bold">Assistant</h3>
//               <span className="text-xs text-gray-500">online</span>
//             </div>
//             <div className="flex gap-2">
//               <button
//                 onClick={toggleMinimize}
//                 className="text-white hover:text-yellow-400 transition"
//               >
//                 <Minimize2 size={18} />
//               </button>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-white hover:text-yellow-400 transition"
//               >
//                 <X size={18} />
//               </button>
//             </div>
//           </div>

//           {!isMinimized && (
//             <>
//               {/* Messages */}
//               <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
//                 {messages.map((msg, idx) => (
//                   <div
//                     key={idx}
//                     className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//                   >
//                     <div
//                       className={`max-w-[80%] p-3 rounded-xl ${
//                         msg.sender === "user"
//                           ? "bg-white/30 text-white"
//                           : "bg-white/10 text-white"
//                       }`}
//                     >
//                       <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
//                     </div>
//                   </div>
//                 ))}
//                 {isTyping && (
//                   <div className="flex justify-start">
//                     <div className="bg-white/10 p-3 rounded-xl">
//                       <div className="flex gap-1">
//                         <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
//                         <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
//                         <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Input Area */}
//               <div className="p-3 border-t border-yellow-500/20">
//                 <input
//                   type="email"
//                   placeholder="Your email address *"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full mb-2 p-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:border-yellow-400 focus:outline-none"
//                   disabled={leadSubmitted}
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Your phone number *"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full mb-2 p-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:border-yellow-400 focus:outline-none"
//                   disabled={leadSubmitted}
//                 />
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     onKeyPress={(e) => e.key === "Enter" && handleSend()}
//                     placeholder="Ask about services..."
//                     className="flex-1 p-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:border-yellow-400 focus:outline-none"
//                   />
//                   <button
//                     onClick={handleSend}
//                     className="bg-yellow-400 text-black p-2 rounded-lg hover:scale-105 transition"
//                   >
//                     <Send size={18} />
//                   </button>
//                 </div>
//                 <button
//                   onClick={submitLead}
//                   disabled={leadSubmitted}
//                   className={`w-full mt-2 py-2 rounded-lg text-sm font-semibold transition ${
//                     leadSubmitted
//                       ? "bg-green-500/20 text-green-400 cursor-default"
//                       : "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30"
//                   }`}
//                 >
//                   {leadSubmitted
//                     ? "✓ Submitted!"
//                     : "Send my info to Click Agency"}
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatBot;




import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import emailjs from "emailjs-com";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi! I'm Click Agency AI Assistant. I can help you learn about SEO, social media marketing, website design, and more. What would you like to know? Also, could you share your email and phone so Shivam can reach out personally? 😊",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [conversationHistory, setConversationHistory] = useState([]);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
    setConversationHistory((prev) => [...prev, `User: ${userMsg}`]);
    setInput("");
    setIsTyping(true);

    // Simple bot response logic
    setTimeout(() => {
      let botReply = "";
      const lowerMsg = userMsg.toLowerCase();

      // Pricing related
      if (
        lowerMsg.includes("price") ||
        lowerMsg.includes("cost") ||
        lowerMsg.includes("pricing")
      ) {
        botReply =
          "Our pricing is affordable for small businesses:\n• SEO: Starting at ₹12,000/month\n• Social Media: ₹8,000/month\n• Website Design: ₹25,000 one-time\n• PPC: ₹8,000 + ad spend\n\nWant a custom quote? Share your email & phone!";
      }
      // Greetings
      else if (
        lowerMsg.includes("hello") ||
        lowerMsg.includes("hi") ||
        lowerMsg.includes("hey") ||
        lowerMsg.includes("hii")
      ) {
        botReply =
          "Hello! I'm Click Agency AI Assistant. How can I help you today?";
      }
      // Founder questions
      else if (
        lowerMsg.includes("company founder") ||
        lowerMsg.includes("owner") ||
        lowerMsg.includes("shivam") ||
        lowerMsg.includes("who founded")
      ) {
        botReply =
          "Shivam is our company founder and the lead strategist at Click Agency. He's passionate about helping businesses grow online!";
      }
      // Trust and reliability
      else if (
        lowerMsg.includes("trust issues") ||
        lowerMsg.includes("client") ||
        lowerMsg.includes("phone") ||
        lowerMsg.includes("reliable")
      ) {
        botReply =
          "I understand trust is important! Shivam is happy to have a quick call to discuss your concerns. Please share your email and phone number, and he'll reach out personally within a few hours!";
      }
      // Digital marketing general
      else if (
        lowerMsg.includes("digital marketing") ||
        lowerMsg.includes("marketing")
      ) {
        botReply =
          "We offer a range of digital marketing services including SEO, social media management, PPC advertising, and content marketing. To get personalized advice, please share your email and phone number so Shivam can reach out personally!";
      }
      // SEO specific
      else if (lowerMsg.includes("seo") || lowerMsg.includes("search engine")) {
        botReply =
          "SEO services include: keyword research, on-page optimization, local SEO, technical SEO, competitor analysis, link building, and monthly reporting. We help Bangalore businesses rank higher on Google! Results typically show in 3-6 months.";
      }
      // Social media specific
      else if (
        lowerMsg.includes("social media") ||
        lowerMsg.includes("instagram") ||
        lowerMsg.includes("facebook") ||
        lowerMsg.includes("linkedin")
      ) {
        botReply =
          "Social media packages include content creation, graphic design, caption writing, posting schedule, engagement, community management, and monthly analytics. Perfect for Instagram, LinkedIn, and Facebook presence! Starting at ₹8,000/month.";
      }
      // Website design
      else if (
        lowerMsg.includes("website") ||
        lowerMsg.includes("web design") ||
        lowerMsg.includes("landing page")
      ) {
        botReply =
          "I build modern, mobile-friendly websites that load fast and look great. Services include: custom design, responsive layout, SEO optimization, contact forms, speed optimization, and free hosting setup for the first year! Starting from ₹25,000 one-time.";
      }
      // PPC / Google Ads
      else if (
        lowerMsg.includes("ppc") ||
        lowerMsg.includes("google ads") ||
        lowerMsg.includes("advertising")
      ) {
        botReply =
          "PPC advertising services include: Google Ads, Meta Ads (Facebook/Instagram), keyword research, ad copy creation, landing page design, daily monitoring, A/B testing, and detailed performance reporting. Starting at ₹8,000 + ad spend.";
      }
      // Content marketing
      else if (
        lowerMsg.includes("content") ||
        lowerMsg.includes("blog") ||
        lowerMsg.includes("article")
      ) {
        botReply =
          "Content marketing includes blog writing, article creation, SEO content optimization, email newsletters, and content strategy. We help you attract and engage your target audience with valuable content!";
      }
      // Local SEO
      else if (
        lowerMsg.includes("local seo") ||
        lowerMsg.includes("google maps") ||
        lowerMsg.includes("near me")
      ) {
        botReply =
          "Local SEO helps your business appear in 'near me' searches and Google Maps. Services include Google My Business optimization, local citations, review management, and local keyword targeting. Perfect for brick-and-mortar businesses in Bangalore!";
      }
      // E-commerce
      else if (
        lowerMsg.includes("ecommerce") ||
        lowerMsg.includes("online store") ||
        lowerMsg.includes("shopify")
      ) {
        botReply =
          "We offer e-commerce solutions including Shopify setup, WooCommerce development, product listing optimization, and conversion rate optimization. Starting at ₹35,000 for a complete online store!";
      }
      // Email marketing
      else if (
        lowerMsg.includes("email marketing") ||
        lowerMsg.includes("newsletter")
      ) {
        botReply =
          "Email marketing services include newsletter design, automation workflows, list segmentation, A/B testing, and performance tracking. Starting at ₹5,000/month. Great for customer retention!";
      }
      // Timeline / Duration
      else if (
        lowerMsg.includes("how long") ||
        lowerMsg.includes("timeline") ||
        lowerMsg.includes("when will i see results")
      ) {
        botReply =
          "Results timeline varies by service:\n• SEO: 3-6 months\n• PPC: Immediate (1-2 weeks)\n• Social Media: 1-2 months\n• Website Design: 2-4 weeks\n• Email Marketing: 1 month\nWe'll set clear expectations before starting!";
      }
      // Industries served
      else if (
        lowerMsg.includes("industry") ||
        lowerMsg.includes("sector") ||
        lowerMsg.includes("niche")
      ) {
        botReply =
          "We work with various industries including real estate, education, healthcare, e-commerce, restaurants, salons, and professional services. Each strategy is customized for your specific industry!";
      }
      // Portfolio / Past work
      else if (
        lowerMsg.includes("portfolio") ||
        lowerMsg.includes("past work") ||
        lowerMsg.includes("examples")
      ) {
        botReply =
          "We'd love to share our portfolio with you! Please share your email and phone number, and Shivam will send you relevant case studies and examples of our work.";
      }
      // Contract / Commitment
      else if (
        lowerMsg.includes("contract") ||
        lowerMsg.includes("commitment") ||
        lowerMsg.includes("lock-in")
      ) {
        botReply =
          "We offer flexible terms! First 3 months with zero lock-in contract. After that, month-to-month commitment. No long-term binding - your satisfaction is our priority!";
      }
      // Payment methods
      else if (
        lowerMsg.includes("payment") ||
        lowerMsg.includes("pay") ||
        lowerMsg.includes("mode")
      ) {
        botReply =
          "We accept payments via bank transfer, UPI (Google Pay, PhonePe), credit/debit cards, and net banking. 50% advance payment for new projects, balance upon completion.";
      }
      // Support / Maintenance
      else if (
        lowerMsg.includes("support") ||
        lowerMsg.includes("maintenance") ||
        lowerMsg.includes("after service")
      ) {
        botReply =
          "We provide ongoing support for all our services. Website maintenance starts at ₹3,000/month. For marketing services, support is included in your monthly package!";
      }
      // Free audit
      else if (
        lowerMsg.includes("free audit") ||
        lowerMsg.includes("free consultation") ||
        lowerMsg.includes("strategy call")
      ) {
        botReply =
          "Yes! We offer a free 30-minute strategy call and website/marketing audit. Share your email and phone number, and Shivam will schedule a call at your convenience!";
      }
      // Refund policy
      else if (
        lowerMsg.includes("refund") ||
        lowerMsg.includes("money back") ||
        lowerMsg.includes("guarantee")
      ) {
        botReply =
          "We're confident in our services! We offer a satisfaction guarantee. If you're not happy with the results in the first month, we'll work with you to make it right or provide a partial refund as per agreement.";
      }
      // Working hours
      else if (
        lowerMsg.includes("hours") ||
        lowerMsg.includes("working time") ||
        lowerMsg.includes("available")
      ) {
        botReply =
          "Our working hours are Monday to Saturday, 10 AM to 7 PM IST. Chatbot is available 24/7! For urgent queries, WhatsApp us anytime at +91 98765 43210.";
      }
      // Location
      else if (
        lowerMsg.includes("location") ||
        lowerMsg.includes("bangalore") ||
        lowerMsg.includes("office")
      ) {
        botReply =
          "We're based in Bangalore, India! We serve clients locally and across India. Virtual meetings available for remote clients. Would you like to schedule an in-person meeting?";
      }
      // Comparison with other agencies
      else if (
        lowerMsg.includes("different") ||
        lowerMsg.includes("unique") ||
        lowerMsg.includes("why choose you")
      ) {
        botReply =
          "What makes us different?\n• Direct access to founder (no middlemen)\n• Affordable pricing for small businesses\n• No long-term contracts\n• Fast response time (24-48 hours)\n• Custom strategies, not templates\n• Local Bangalore market expertise";
      }
      // Tools used
      else if (
        lowerMsg.includes("tools") ||
        lowerMsg.includes("software") ||
        lowerMsg.includes("platform")
      ) {
        botReply =
          "We use industry-leading tools: Google Analytics, SEMrush, Ahrefs, Meta Business Suite, Canva, Mailchimp, WordPress, and more. You'll get access to dashboards for transparency!";
      }
      // Training / Education
      else if (
        lowerMsg.includes("training") ||
        lowerMsg.includes("learn") ||
        lowerMsg.includes("teach")
      ) {
        botReply =
          "We offer basic training sessions for your team on how to manage social media, understand analytics, and maintain your website. Training is included in select packages!";
      }
      // Urgent help
      else if (
        lowerMsg.includes("urgent") ||
        lowerMsg.includes("emergency") ||
        lowerMsg.includes("quick help")
      ) {
        botReply =
          "For urgent requirements, please share your phone number immediately. Shivam will call you back within 30 minutes during business hours!";
      }
      // Discount / Offer
      else if (
        lowerMsg.includes("discount") ||
        lowerMsg.includes("offer") ||
        lowerMsg.includes("deal")
      ) {
        botReply =
          "Special launch offer for first 5 clients! Get 20% off on first 3 months + free website audit. Share your email to claim this exclusive deal!";
      }
      // Referral program
      else if (lowerMsg.includes("referral") || lowerMsg.includes("refer")) {
        botReply =
          "Love our service? Refer a friend and get 10% off your next month's bill! Both you and your friend will benefit from our referral program.";
      }
      // Privacy policy
      else if (
        lowerMsg.includes("privacy") ||
        lowerMsg.includes("data") ||
        lowerMsg.includes("secure")
      ) {
        botReply =
          "Your data is safe with us! We never share your information with third parties. All conversations are confidential. See our privacy policy for more details.";
      }
      // Who are you
      else if (
        lowerMsg.includes("who are you") ||
        lowerMsg.includes("assist") ||
        lowerMsg.includes("yourself")
      ) {
        botReply =
          "I'm Click Agency AI Assistant, here to help you 24/7 with any questions about our digital marketing services!";
      }
      // Default response
      else {
        botReply =
          "Thanks for your interest! I specialize in helping small businesses grow online. To give you personalized advice, could you share your email and phone number? I'll reach out within a few hours!";
      }

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
      setConversationHistory((prev) => [...prev, `Bot: ${botReply}`]);
      setIsTyping(false);
    }, 800);
  };

  const submitLead = async () => {
    if (!email || !phone) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Please share your email and phone number so Shivam can personally get in touch with you!",
          sender: "bot",
        },
      ]);
      return;
    }

    if (leadSubmitted) {
      setMessages((prev) => [
        ...prev,
        {
          text: "You've already shared your details! Shivam will reach out soon. For urgent queries, email clickcontact00@gmail.com",
          sender: "bot",
        },
      ]);
      return;
    }

    setIsTyping(true);

    const summary = `=== CHAT CONVERSATION ===\n${conversationHistory.join("\n")}\n\n=== USER DETAILS ===\nEmail: ${email}\nPhone: ${phone}\n=== END ===`;

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CHATBOT_TEMPLATE_ID,
        {
          user_email: email,
          user_phone: phone,
          conversation_summary: summary,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (result.status === 200) {
        setLeadSubmitted(true);
        setMessages((prev) => [
          ...prev,
          {
            text: "Thanks! I've sent your details to Shivam. He'll personally reach out on WhatsApp within 1 hour. Meanwhile, feel free to ask me more questions! 🚀",
            sender: "bot",
          },
        ]);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Technical glitch! But don't worry - you can email Shivam directly at hello@clickagency.com or WhatsApp +91 98765 43210",
          sender: "bot",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-yellow-200 text-black p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 group"
        >
          {/* Advanced AI Bot Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-6 sm:h-6 w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
          >
            {/* Main Body */}
            <rect
              x="7"
              y="5"
              width="10"
              height="13"
              rx="3"
              fill="currentColor"
            />
            {/* Eyes */}
            <circle cx="10" cy="9" r="1.5" fill="black" />
            <circle cx="14" cy="9" r="1.5" fill="black" />
            {/* Eye Glow */}
            <circle cx="10" cy="9" r="0.7" fill="yellow" />
            <circle cx="14" cy="9" r="0.7" fill="yellow" />
            {/* Smile */}
            <path
              d="M9 13 Q12 15 15 13"
              stroke="black"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Antenna */}
            <line
              x1="12"
              y1="5"
              x2="12"
              y2="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="1.5" r="1.5" fill="currentColor" />
            {/* Signal Waves */}
            <path
              d="M15 2 Q17 1.5 17 3"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M16 0.5 Q19 -0.5 19 2"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
            />
            {/* Ears */}
            <rect x="5" y="7" width="2" height="3" rx="1" fill="currentColor" />
            <rect
              x="17"
              y="7"
              width="2"
              height="3"
              rx="1"
              fill="currentColor"
            />
            {/* Neck */}
            <rect x="11" y="18" width="2" height="2" fill="currentColor" />
          </svg>

          {/* Animated Ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400 opacity-30"></span>

          {/* Online Indicator */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></span>

          {/* Notification Badge */}
          <span className="absolute -top-2 -right-2 min-w-[16px] h-[16px] sm:min-w-[18px] sm:h-[18px] bg-red-500 rounded-full text-white text-[8px] sm:text-[9px] font-bold flex items-center justify-center px-0.5 sm:px-1 animate-bounce shadow-lg">
            !
          </span>
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-2rem)] sm:max-w-none bg-black border border-yellow-400 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 ${
            isMinimized ? "h-14" : "h-[500px] sm:h-[550px]"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-3 sm:p-4 border-b border-yellow-500/20 bg-black rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-yellow-200 font-bold text-sm sm:text-base">
                Assistant
              </h3>
              <span className="text-[10px] sm:text-xs text-gray-500">online</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={toggleMinimize}
                className="text-white hover:text-yellow-400 transition"
              >
                <Minimize2 size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-400 transition"
              >
                <X size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 custom-scrollbar">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-xl ${
                        msg.sender === "user"
                          ? "bg-white/30 text-white"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      <p className="text-xs sm:text-sm whitespace-pre-wrap break-words">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-xl">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 sm:p-4 border-t border-yellow-500/20">
                <input
                  type="email"
                  placeholder="Your email address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-2 p-2 sm:p-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:border-yellow-400 focus:outline-none"
                  disabled={leadSubmitted}
                />
                <input
                  type="tel"
                  placeholder="Your phone number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mb-2 p-2 sm:p-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:border-yellow-400 focus:outline-none"
                  disabled={leadSubmitted}
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about services..."
                    className="flex-1 p-2 sm:p-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:border-yellow-400 focus:outline-none"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-yellow-400 text-black p-2 sm:p-2.5 rounded-lg hover:scale-105 transition"
                  >
                    <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
                <button
                  onClick={submitLead}
                  disabled={leadSubmitted}
                  className={`w-full mt-2 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                    leadSubmitted
                      ? "bg-green-500/20 text-green-400 cursor-default"
                      : "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30"
                  }`}
                >
                  {leadSubmitted
                    ? "✓ Submitted!"
                    : "Send my info to Click Agency"}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
