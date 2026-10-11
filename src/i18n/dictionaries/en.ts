import type { Dictionary } from "..";

export const en: Dictionary = {
  common: {
    skipToContent: "Skip to content",
    menu: "Menu",
    close: "Close",
    language: "Language",
    switchLanguage: "Tukar ke Bahasa Melayu",
    whatsappCta: "WhatsApp Us",
    chatOnWhatsapp: "Chat on WhatsApp",
    learnMore: "Learn more",
    regLabel: "SSM Registration No.",
    breadcrumbHome: "Home",
  },
  nav: {
    home: "Home",
    services: "Services",
    ai: "Automation & AI",
    about: "About Us",
    contact: "Contact",
  },
  wa: {
    general: "Hi Wartel Trading, I'd like to ask about your services.",
    website: "Hi Wartel Trading, I'm interested in building a website for my business.",
    automation: "Hi Wartel Trading, I'm interested in automation for my business.",
    ai: "Hi Wartel Trading, I'm interested in an AI agent / chatbot for my business.",
  },
  meta: {
    siteDescription:
      "Website development, business automation and AI agents for Malaysian SMEs. An SSM-registered business in Puncak Alam, Selangor — free quotes.",
    keywords: [
      "Wartel Trading",
      "website development Malaysia",
      "web design Selangor",
      "web developer Puncak Alam",
      "business automation Malaysia",
      "AI agent Malaysia",
      "WhatsApp chatbot",
      "WhatsApp automation",
      "AI for SMEs",
      "digital marketing",
      "SEO Malaysia",
    ],
    home: {
      title: "Wartel Trading | Websites, Automation & AI Agents for Malaysian SMEs",
      description:
        "Website development, business automation and AI agents for Malaysian SMEs. An SSM-registered business in Puncak Alam, Selangor — free quotes.",
    },
    services: {
      title: "Website, Web App, Automation & AI Services",
      description:
        "Corporate websites & landing pages, custom web systems, business process automation, AI agents & WhatsApp chatbots, plus digital marketing & SEO for Malaysian SMEs.",
    },
    ai: {
      title: "Automation & AI Agents for Business",
      description:
        "AI agents that answer customers 24/7 on WhatsApp & your website, plus automated bookings, invoices, reports and lead follow-ups. Save time, cut manual work.",
    },
    about: {
      title: "About Us",
      description:
        "Meet Wartel Trading — an SSM-registered business (202603058867) in Bandar Puncak Alam helping Malaysian SMEs grow with websites, automation and AI.",
    },
    contact: {
      title: "Contact Us",
      description:
        "Contact Wartel Trading on WhatsApp 018-695 9795 or email for website, business automation and AI agent quotes.",
    },
  },
  home: {
    hero: {
      eyebrow: "SSM Registered · Bandar Puncak Alam, Selangor",
      titleLine1: "Websites that sell.",
      titleLine2: "AI that works 24/7.",
      subtitle:
        "Wartel Trading builds websites, automations and AI agents for Malaysian SMEs — so your business looks professional, wins more customers and spends less time on manual work.",
      primaryCta: "Get a Free Quote",
      secondaryCta: "See Automation & AI",
      points: ["Free quotes", "Support in BM & English", "Fast delivery, transparent pricing"],
      visual: {
        browserUrl: "yourbusiness.com.my",
        flowTitle: "Booking automation",
        flowSteps: ["Customer on WhatsApp", "AI agent replies & confirms", "Saved to Google Sheets", "You get notified"],
        flowStatus: "Running automatically",
        badge: "Website + Automation + AI",
      },
    },
    facts: [
      { label: "SSM registration", value: "202603058867" },
      { label: "Location", value: "Puncak Alam, Selangor" },
      { label: "Languages", value: "BM & English" },
      { label: "Coverage", value: "All of Malaysia (online)" },
    ],
    pillars: {
      eyebrow: "What we do",
      title: "Three pillars for a business that grows faster.",
      intro:
        "From your online presence to day-to-day operations — we build technology that actually gets used, not just looks good.",
      items: [
        {
          icon: "website",
          tag: "Website",
          title: "Websites & Web Systems",
          description: "Corporate websites, landing pages and web systems that are fast, mobile-friendly and optimised for Google.",
          bullets: ["Corporate websites & landing pages", "Booking systems & dashboards", "Basic SEO & Google Business"],
          cta: "View services",
          page: "services",
        },
        {
          icon: "automation",
          tag: "Automation",
          title: "Business Automation",
          description: "Connect WhatsApp, email, Google Sheets and your systems so repetitive work runs by itself.",
          bullets: ["Automatic customer follow-ups", "Automatic invoices & receipts", "Daily / weekly reports"],
          cta: "See automation examples",
          page: "ai",
        },
        {
          icon: "agent",
          tag: "AI Agent",
          title: "AI Agents & Chatbots",
          description:
            "AI that answers customer questions, takes bookings and qualifies leads — 24 hours a day, in BM & English.",
          bullets: ["WhatsApp & website chatbots", "Lead qualification", "AI assistant for internal documents"],
          cta: "Learn about AI agents",
          page: "ai",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Everything your business needs to go digital.",
      cta: "View all services",
    },
    spotlight: {
      eyebrow: "AI agents in action",
      title: "Imagine every customer served instantly — even at 2am.",
      description:
        "Our AI agents are trained on your business information — products, prices, opening hours and FAQs. They answer customers, collect details and hand hot leads over to you.",
      points: [
        "Replies in BM, English or Manglish",
        "Hands over to a human when needed",
        "Connected to WhatsApp, your website & Google Sheets",
      ],
      cta: "Explore Automation & AI",
      chatLabel: "Example conversation",
      chatAgent: "AI Agent",
      chatOnline: "Online",
      messages: [
        { from: "user", text: "Hi, can I make a booking for this Saturday?" },
        { from: "bot", text: "Sure! For how many people and what time?" },
        { from: "user", text: "4 people, 8pm." },
        {
          from: "bot",
          text: "Great, the 8:00pm Saturday slot is available ✅ I've recorded the booking under your name. Anything else?",
        },
      ],
    },
    why: {
      eyebrow: "Why Wartel Trading",
      title: "Technology focused on business results.",
      intro:
        "We started in digital marketing and business consulting. That's why every website, automation and AI agent we build has one goal: helping you sell more and work smarter.",
      items: [
        {
          title: "We understand business, not just code",
          description: "We start by understanding your processes and customers, then choose the right technology.",
        },
        {
          title: "Honest & transparent",
          description: "Scope, costs and timelines are shared clearly from the start. No hidden fees.",
        },
        {
          title: "Fast & practical",
          description: "We use modern tools and AI to deliver projects faster — without compromising on quality.",
        },
        {
          title: "Support after launch",
          description: "Training, documentation and post-launch support so you're confident running the system yourself.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "From idea to a system that runs.",
    },
    stack: {
      eyebrow: "Technology",
      title: "Built with trusted, modern tools.",
      items: [
        "Next.js",
        "React",
        "WordPress",
        "Tailwind CSS",
        "n8n",
        "Make",
        "Zapier",
        "OpenAI",
        "Claude",
        "WhatsApp Business",
        "Google Workspace",
        "Supabase",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Got questions? Here are the answers.",
      items: [
        {
          q: "What services does Wartel Trading offer?",
          a: "We build websites and web systems, business process automations, and AI agents and chatbots for WhatsApp and websites. We also offer digital marketing and SEO so your website gets found and drives sales.",
        },
        {
          q: "How much does a website cost?",
          a: "It depends on scope — for example the number of pages, special features like bookings or payments, and content needs. Reach out on WhatsApp for a free quote that fits your budget.",
        },
        {
          q: "What is an AI agent and how does it help my business?",
          a: "An AI agent is a smart assistant trained on your business information. It can answer customer questions, take bookings, collect lead details and update your systems automatically — 24 hours a day.",
        },
        {
          q: "Do I need technical knowledge to use these systems?",
          a: "No. We handle all the technical work and provide simple training so you and your staff can use and update the system easily.",
        },
        {
          q: "How long does a project take?",
          a: "A simple landing page can be ready within days, while full websites, automations or AI agents depend on scope. A clear timeline is included in every quote.",
        },
        {
          q: "Is Wartel Trading a registered business?",
          a: "Yes. Wartel Trading is registered with the Companies Commission of Malaysia (SSM) under the Registration of Businesses Act 1956, registration number 202603058867 (AS0510963-V), operating from Bandar Puncak Alam, Selangor and serving clients across Malaysia.",
        },
      ],
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Websites, systems and automations that help you grow.",
      subtitle:
        "From your first website to an AI agent serving your customers — we plan, build and support every step.",
      cta: "Get a Free Quote",
    },
    list: [
      {
        icon: "website",
        title: "Website Development",
        description: "Corporate websites, landing pages and online stores that are fast, mobile-friendly and easy to update.",
        features: ["Modern, responsive design", "Basic SEO & Google Analytics", "Domain, hosting & email"],
      },
      {
        icon: "app",
        title: "Web Systems & Apps",
        description: "Custom systems for bookings, memberships, inventory and dashboards — built around the way you work.",
        features: ["Booking & appointment systems", "Dashboards & reports", "Online payment integration"],
      },
      {
        icon: "automation",
        title: "Business Process Automation",
        description: "Eliminate repetitive work by connecting WhatsApp, email, Google Sheets and your apps.",
        features: ["n8n / Make / Zapier workflows", "Automatic invoices, receipts & reminders", "Data sync between systems"],
      },
      {
        icon: "agent",
        title: "AI Agents & Chatbots",
        description: "AI that answers customers, takes bookings and qualifies leads on WhatsApp and your website.",
        features: ["WhatsApp & website chatbots", "Trained on your business data", "Handover to staff when needed"],
      },
      {
        icon: "brain",
        title: "AI in Your Operations",
        description: "Use AI to process documents, generate content and analyse data faster.",
        features: ["Data extraction from documents & receipts", "AI assistant for internal SOPs", "AI-assisted content creation"],
      },
      {
        icon: "marketing",
        title: "Digital Marketing & SEO",
        description: "Make sure your website gets found — through SEO, Google Business Profile, content and paid ads.",
        features: ["SEO & Google Business Profile", "Meta, TikTok & Google ads", "Content & brand strategy"],
      },
    ],
    audience: {
      eyebrow: "Who we help",
      title: "Built for local businesses ready to grow.",
      items: [
        { title: "SMEs & small sellers", description: "Who want to look professional and win more customers online." },
        { title: "Service businesses", description: "Clinics, salons, tuition centres and services that run on bookings." },
        { title: "F&B & retail", description: "Restaurants, cafés and shops taking orders over WhatsApp." },
        { title: "Companies & offices", description: "Teams that want less manual work and paperwork." },
      ],
    },
    process: {
      eyebrow: "Our process",
      title: "From the first chat to a system that runs.",
      steps: [
        { title: "Initial discussion", description: "Share your goals, current process and budget over WhatsApp or a call." },
        { title: "Proposal & quote", description: "We prepare a solution proposal with clear scope, timeline and costs." },
        { title: "Build & test", description: "We build, test it with you and refine before going live." },
        { title: "Launch & support", description: "The system goes live, your staff are trained and support continues after launch." },
      ],
    },
    engagement: {
      eyebrow: "Packages",
      title: "Pick the starting point that fits your business.",
      note: "Pricing depends on scope. Contact us for a free quote.",
      items: [
        {
          title: "Website Starter",
          description: "For businesses that want a professional online presence, fast.",
          points: ["Landing page or 5-page website", "WhatsApp button & contact form", "Basic SEO & Google Business"],
        },
        {
          title: "Website + Automation",
          description: "A website that doesn't just look good, but works for you every day.",
          points: ["Everything in Website Starter", "Booking / lead automation", "Automatic notifications & reports"],
          featured: true,
          badge: "Most popular",
        },
        {
          title: "AI Agent",
          description: "An AI assistant to serve customers and lighten your team's workload.",
          points: ["WhatsApp / website AI agent", "Trained on your business info", "Monthly monitoring & improvements"],
        },
      ],
    },
  },
  ai: {
    hero: {
      eyebrow: "Automation & AI",
      title: "Let systems handle the repetitive work. You focus on growing.",
      subtitle:
        "We build AI agents and automations that answer customers, record bookings, send invoices and prepare reports — automatically, every day.",
      cta: "Discuss Your Automation",
      secondaryCta: "Ask About AI Agents",
    },
    useCases: {
      eyebrow: "Use cases",
      title: "What can be automated?",
      intro: "If it's repetitive, rule-based and time-consuming — it can most likely be automated.",
      items: [
        {
          icon: "chat",
          title: "24/7 customer service",
          description: "An AI agent answers common questions about products, prices and opening hours on WhatsApp and your website.",
        },
        {
          icon: "leads",
          title: "Automatic lead follow-up",
          description: "Every new lead is recorded, qualified and followed up without you having to remember.",
        },
        {
          icon: "booking",
          title: "Bookings & reminders",
          description: "Bookings are taken online, saved to your calendar and customers are reminded automatically.",
        },
        {
          icon: "invoice",
          title: "Invoices & receipts",
          description: "Invoices are generated and sent automatically, and receipts flow straight into your accounting records.",
        },
        {
          icon: "report",
          title: "Reports & dashboards",
          description: "Sales and operations data is collected into one dashboard, with a summary sent to you every week.",
        },
        {
          icon: "docs",
          title: "Internal AI assistant",
          description: "Staff can ask about SOPs, policies and company documents to an AI assistant that understands your data.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Four steps to a more automated business.",
      steps: [
        { title: "Process audit", description: "We identify the most time-consuming manual work in your business." },
        { title: "Workflow design", description: "We design the automation or AI agent flow that fits how you work." },
        { title: "Build & connect", description: "The system is built and connected to WhatsApp, email, Sheets or your existing apps." },
        { title: "Monitor & improve", description: "Performance is monitored and the AI refined over time." },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Why businesses choose automation & AI.",
      items: [
        { title: "Save time", description: "Cut hours of manual work every week." },
        { title: "Instant response", description: "Customers are served right away, day or night." },
        { title: "Fewer errors", description: "Data is recorded consistently, without manual copying." },
        { title: "Scale easily", description: "Serve more customers without hiring right away." },
      ],
    },
    trust: {
      title: "Your data stays yours.",
      description:
        "We build every automation with the minimum access it needs, on accounts you own, and explain clearly what data the AI processes.",
      cta: "Ask a Question",
    },
  },
  about: {
    hero: {
      eyebrow: "About Us",
      title: "A local business helping local businesses go digital.",
      subtitle:
        "Wartel Trading was founded in Bandar Puncak Alam, Selangor on a simple belief: every SME deserves the technology usually reserved for big companies.",
    },
    story: {
      eyebrow: "Our story",
      title: "From marketing strategy to websites, automation and AI.",
      paragraphs: [
        "Wartel Trading began operating on 28 February 2026 as an SSM-registered sole proprietorship, rooted in digital marketing and business consulting.",
        "We saw many local businesses still spending hours replying to the same messages, recording bookings by hand and relying entirely on social media. The technology to change all that now exists — and it's increasingly affordable.",
        "Our mission is to close that gap: building websites, automations and AI agents that are practical, easy to use and deliver real returns for your business.",
      ],
    },
    mission: {
      title: "Mission",
      text: "To help Malaysian SMEs grow with practical, affordable and results-focused websites, automation and AI.",
    },
    vision: {
      title: "Vision",
      text: "To be the technology partner of choice for Malaysian SMEs on their digital transformation journey.",
    },
    values: {
      eyebrow: "Our values",
      title: "The principles we hold.",
      items: [
        { title: "Honest & transparent", description: "Clear communication on scope, costs and timelines." },
        { title: "Quality first", description: "Systems that are stable, fast and safe to use every day." },
        { title: "Results-oriented", description: "We measure success by our clients' real outcomes." },
        { title: "Close to customers", description: "Easy to reach, quick to act and always listening." },
      ],
    },
    info: {
      eyebrow: "Business information",
      title: "Registered and operating legitimately.",
      description:
        "Wartel Trading is registered with the Companies Commission of Malaysia (SSM) under the Registration of Businesses Act 1956.",
      rows: {
        name: "Business name",
        regNo: "Registration no.",
        type: "Business type",
        started: "Commencement date",
        startedValue: "28 February 2026",
        address: "Business address",
        coverage: "Service coverage",
        coverageValue: "All of Malaysia (online)",
      },
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact Us",
      title: "Let's talk.",
      subtitle:
        "Tell us about your business and what you want to achieve — we'll suggest a solution and a free quote.",
    },
    cards: {
      whatsapp: { title: "WhatsApp / Phone", cta: "Start chat" },
      email: { title: "Email", cta: "Send email" },
      address: { title: "Business address", cta: "Open in Google Maps" },
    },
    form: {
      title: "Send a message",
      description: "Fill in this form and your message will open directly in WhatsApp.",
      name: "Name",
      namePlaceholder: "Your name",
      phone: "Phone number (optional)",
      phonePlaceholder: "01X-XXX XXXX",
      interest: "I'm interested in",
      interestPlaceholder: "Choose one",
      interests: [
        "New website / website upgrade",
        "Web systems & apps",
        "Business automation",
        "AI agent / chatbot",
        "Digital marketing & SEO",
        "Other",
      ],
      message: "Message",
      messagePlaceholder: "Tell us about your business and what you need…",
      submit: "Send via WhatsApp",
      orEmail: "or send by email",
      privacy: "No data is stored on this website. Your message goes directly through WhatsApp or email.",
      required: "Please fill in your name and message.",
      waIntro: "Hi Wartel Trading!",
      waName: "Name",
      waPhone: "Phone",
      waInterest: "Interested in",
      waMessage: "Message",
      emailSubject: "Website enquiry",
    },
  },
  cta: {
    title: "Ready to take your business to the next level?",
    description:
      "Tell us what you need — a website, automation or an AI agent. We'll reply with a recommendation and a free quote.",
    primary: "WhatsApp Now",
    secondary: "Contact Page",
  },
  footer: {
    tagline: "Websites, business automation and AI agents for Malaysian SMEs. From Bandar Puncak Alam, Selangor.",
    explore: "Navigate",
    services: "Services",
    serviceLinks: ["Website development", "Web systems", "Business automation", "AI agents & chatbots", "Digital marketing & SEO"],
    contact: "Contact",
    rights: "All rights reserved.",
    registered: "Registered under the Registration of Businesses Act 1956.",
  },
  notFound: {
    title: "Page not found",
    description: "Sorry, the page you're looking for doesn't exist or has been moved.",
    cta: "Back to Home",
  },
};
