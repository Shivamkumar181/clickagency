# Digital Marketing Agency Website (Clickagency)
# Overview
Clickagency is a digital marketing agency website that showcases services, generates leads, and engages visitors through an AI chatbot.

# Design & UI
- Black, White, Yellow color scheme
- Fully responsive (mobile, tablet, desktop)
- Animated service cards with hover effects
- Interactive image hover (B&W to Color)
- Smooth page transitions

# Page Sections
Home	Hero, 6 Services Cards, Our Promise, Why zTOh?, FAQ Carousel, Testimonials, Contact Form, AI Chatbot
About	Who We Are, Hover Image, Stats (Projects, Clients, Team, ROI)
Services	6 Service Cards → Click to Detail Page with Pricing
Resources	Success Stories, Team Profile, Careers

# AI Automation
- Floating AI Chatbot on all pages
- Guides conversations toward lead qualification
- Captures visitor email + phone
- Sends conversation summary to email via EmailJS
- Contact form with budget + service dropdowns
- WhatsApp pre-filled message link

# Tech Stack
- Framework	React 18
- Build Tool	Vite
- Styling	Tailwind CSS
- Icons	Lucide React
- Email Service	EmailJS
- AI Chatbot	Custom React component (AI Agent pattern)
- Version Control	Git + GitHub

# Installation
- Prerequisites
- Node.js (v16+)
- npm or yarn
- EmailJS account (free)

- Clone the repository
- git clone
- Install dependencies
- npm install
- Create .env file
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_WHATSAPP_NUMBER=+91XXXXXXXXXX

- Start development server
- npm run dev

- Build for production
- npm run build

# Responsive Breakpoints
- Device	Breakpoint
- Mobile	< 640px
- Tablet	640px - 1024px
- Desktop	> 1024px

Demo Link - https://clickagency.vercel.app/
