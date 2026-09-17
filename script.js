/**
 * ==============================================================================
 * ONE STOP SOLUTION - AI ASSISTANT CHATBOT CORE SCRIPT
 * Brand: ONE STOP SOLUTION
 * Tagline: "Your Digital Growth Partner."
 * Chatbot: OneStop AI Assistant
 * Description: 24/7 Virtual Business Assistant & Lead Generation Engine
 * Features: Pure Vanilla JS, Multilingual (English, বাংলা, Banglish),
 *           Guided Service Flows, Lead Capture, WhatsApp Dispatch, AI API Ready.
 * ==============================================================================
 */

// Strict mode for clean, bug-free execution
'use strict';

/* ==============================================================================
   SECTION 1: ADMIN & BUSINESS CONFIGURATION (EASY TO EDIT)
   Edit this section to update all agency details, links, pricing, and services.
   You do NOT need to modify the code below this section for basic setup!
   ============================================================================== */
const CONFIG = {
  // Brand Identity
  agencyName: "OneStop Solution",
  brandTitle: "ONE STOP SOLUTION",
  tagline: "Your Digital Growth Partner.",
  chatbotName: "OneStop AI Assistant",
  botRole: "Senior Digital Agency Growth Executive",

  // Contact Channels (Replace placeholders with your real details)
  whatsappNumber: "8801700000000", // International format without '+' (e.g., 8801700000000)
  whatsapp: "https://wa.me/8801700000000",
  facebook: "https://facebook.com/onestopsolution",
  messenger: "https://m.me/onestopsolution",
  email: "contact@onestopsolution.com",
  phone: "+880 1700-000000",
  address: "Dhaka, Bangladesh (Serving Global Clients Online)",
  businessHours: "24/7 Virtual Assistant • Core Strategist Team: 10:00 AM - 10:00 PM",

  // Core Service Catalog & Deliverables
  services: {
    digitalMarketing: {
      id: "digital_marketing",
      title: "Digital Marketing",
      badge: "🚀 High-ROI Growth",
      deliverables: [
        "Facebook & Instagram Ads (Targeted Conversion Campaigns)",
        "Google Ads (Search, Display, YouTube & Performance Max)",
        "Verified B2B & B2C Lead Generation",
        "Social Media Management & Monthly Content Strategy",
        "Retargeting & Custom Audience Sales Funnels",
        "1-on-1 Marketing Growth Consultation"
      ]
    },
    webDevelopment: {
      id: "web_development",
      title: "Web Development",
      badge: "🌐 High-Speed & Conversion",
      deliverables: [
        "Modern Corporate & Business Websites",
        "High-Converting Sales Landing Pages",
        "Full-featured E-commerce Stores (Shopify / WooCommerce / Custom)",
        "Personal Brand & Creative Portfolios",
        "Mobile Responsive & Lightning-fast Page Speed",
        "SEO-ready Architecture & Security Maintenance"
      ]
    },
    mediaEditing: {
      id: "media_editing",
      title: "Media & Creative Services",
      badge: "🎬 High-Retention Visuals",
      deliverables: [
        "Viral Short-form Video Editing (Reels, TikTok, YouTube Shorts)",
        "High-Retention Long-form YouTube Video Editing",
        "High-Impact Commercial & Promotional Video Ads",
        "Click-Worthy YouTube & Social Media Thumbnail Design",
        "Brand Identity, Social Media Post & Banner Design",
        "Modern Motion Graphics & Visual Effects"
      ]
    }
  },

  // Configurable Pricing Information
  pricing: {
    generalNotice: "At OneStop Solution, every project is tailored to deliver maximum return on investment. Pricing is customized based on your business scope, timeline, and goals.",
    digitalMarketing: "Our Digital Marketing packages start from custom monthly retainers based on ad spend, platform scope, and lead targets. Contact us for a custom proposal.",
    webDevelopment: "Website pricing depends on the type (Landing Page, Business site, or E-commerce), number of pages, and custom features. Starter landing pages are very affordable.",
    mediaEditing: "Media editing pricing is based on video duration, raw footage complexity, editing style, and monthly batch volume. Volume discounts apply."
  },

  // Frequently Asked Questions & Knowledge Base
  faqs: [
    {
      keywords: ["service", "services", "offer", "provide", "ki ki service", "services ki", "কাজ কি"],
      question: "What services do you provide?",
      answer: "OneStop Solution provides 3 primary digital growth pillars:\n1. 🚀 **Digital Marketing** (FB/IG Ads, Google Ads, Lead Gen, Social Media Management)\n2. 🌐 **Web Development** (Business Sites, Landing Pages, E-commerce)\n3. 🎬 **Media Editing & Creative** (Viral Reels, YouTube Editing, Thumbnails, Graphics)"
    },
    {
      keywords: ["website cost", "website price", "website banate koto", "web dev price", "দাম কত website"],
      question: "How much does a website cost?",
      answer: "Website pricing varies depending on your requirements:\n• **Landing Page**: Fast, single-page, conversion-optimized.\n• **Business Website**: Multi-page corporate brand showcase.\n• **E-commerce**: Full catalog, cart, and payment gateway.\nLet me ask you a few quick questions so our team can provide an accurate quote!"
    },
    {
      keywords: ["marketing cost", "marketing price", "ads cost", "facebook ads fee", "marketing fee", "কত টাকা লাগবে marketing"],
      question: "How much does digital marketing cost?",
      answer: "Our marketing management fee depends on your platforms, monthly ad spend, and whether you need ad creatives & copy included. We offer customized packages to fit startup budgets as well as established brands."
    },
    {
      keywords: ["how long", "time", "turnaround", "koto din lagbe", "সময় কত লাগবে", "deadline"],
      question: "How long does website development or editing take?",
      answer: "• Landing pages & single videos: **2 to 4 business days**.\n• Full corporate business websites: **7 to 14 business days**.\n• Complete E-commerce platforms: **2 to 3 weeks**.\nWe also offer expedited rush delivery if you have an urgent deadline!"
    },
    {
      keywords: ["monthly marketing", "monthly retainer", "retainer", "monthly basis", "মাসিক"],
      question: "Do you provide monthly marketing management?",
      answer: "Yes! A majority of our clients work with us on a **monthly growth retainer** where we continuously manage their Facebook/Instagram ads, Google ads, A/B test creatives, and optimize campaigns for steady lead flow."
    },
    {
      keywords: ["reels", "youtube", "tiktok", "shorts", "video editing", "thumbnail", "ভিডিও"],
      question: "Do you edit Reels and YouTube videos?",
      answer: "Yes! Our creative team specializes in high-retention video editing with engaging pacing, trending sound effects, captions, B-roll, motion graphics, and click-optimized thumbnails for creators and businesses."
    },
    {
      keywords: ["facebook page", "page manage", "fb page manage", "page management", "ম্যানেজ"],
      question: "Can you manage our Facebook page and social media?",
      answer: "Absolutely! Our social media management includes branded post designs, caption writing, strategic scheduling, hashtag research, and community engagement to keep your brand active and credible."
    },
    {
      keywords: ["custom package", "package", "bundle", "discount"],
      question: "Do you provide custom packages?",
      answer: "Yes! Most growing businesses combine Web Development + Digital Marketing + Video Editing into an all-in-one growth bundle at a discounted agency rate."
    },
    {
      keywords: ["contact", "reach", "thikana", "address", "phone", "whatsapp", "যোগাযোগ"],
      question: "How can I contact OneStop Solution?",
      answer: "You can reach us immediately via:\n• 💬 **WhatsApp**: Instant response\n• ⚡ **Facebook Messenger**: Agency inbox\n• 📞 **Phone**: Directly with our strategist\n• ✉️ **Email**: contact@onestopsolution.com"
    }
  ],

  // AI API Integration Hook (Optional)
  // WARNING: Never put private secret keys in frontend code on production!
  // Use a backend proxy (e.g. Cloudflare Worker, Vercel Serverless) for secure AI calls.
  ai: {
    enabled: false, // Set to true when you connect your AI proxy
    endpoint: "https://your-secure-proxy.workers.dev/api/chat", // Cloudflare Worker or Vercel URL
    model: "gpt-4o-mini", // or gemini-1.5-flash
    headers: {
      "Content-Type": "application/json"
    }
  }
};


/* ==============================================================================
   SECTION 2: STATE MANAGEMENT & CHAT STORE
   Tracks active flows, steps, language, and collected lead data.
   ============================================================================== */
const ChatState = {
  isOpen: false,
  isTyping: false,
  detectedLang: 'en', // 'en', 'bn', 'banglish'
  activeFlow: 'idle', // 'idle', 'digital_marketing', 'web_development', 'media_editing', 'lead_capture', 'pricing', 'human_handoff'
  step: 0,
  lead: {
    serviceCategory: '',
    projectType: '',
    brandOrBusiness: '',
    specificDetails: '',
    budget: '',
    timeline: '',
    userName: '',
    contactInfo: ''
  },
  messages: []
};


/* ==============================================================================
   SECTION 3: MULTILINGUAL NLP DETECTION & DICTIONARY
   Intelligently determines whether the visitor speaks English, বাংলা, or Banglish.
   ============================================================================== */
const NLP = {
  // Bengali Unicode range: 0980-09FF
  banglaRegex: /[\u0980-\u09FF]/,

  // Common Banglish Phonetic Lexicon
  banglishWords: [
    'amar', 'amader', 'apnar', 'apnader', 'lagbe', 'koto', 'taka', 'tk',
    'banate', 'banabo', 'chai', 'korben', 'parben', 'ache', 'kemon',
    'kemne', 'ki bhabe', 'kivabe', 'valo', 'bhalo', 'service', 'kaj',
    'dorkar', 'dorkari', 'jante', 'dhonnobad', 'shunchi', 'offer', 'dam',
    'koto tk', 'page', 'manush', 'kotha', 'bolte', 'shuru', 'lagte pare'
  ],

  detectLanguage(input) {
    if (!input || typeof input !== 'string') return 'en';
    const text = input.trim().toLowerCase();

    // 1. Check for native Bangla Script
    if (this.banglaRegex.test(text)) {
      return 'bn';
    }

    // 2. Check for Banglish keywords
    const words = text.split(/\s+/);
    let banglishHits = 0;
    for (const w of words) {
      if (this.banglishWords.includes(w)) {
        banglishHits++;
      }
    }
    if (banglishHits >= 1) {
      return 'banglish';
    }

    // Default to English
    return 'en';
  },

  // Multilingual Response Phrases
  phrases: {
    welcome: {
      en: "👋 Hello! Welcome to **OneStop Solution**.\n\nI’m **OneStop AI Assistant**. I can help you with our digital marketing, web development, and creative media services.\n\nWhat can I help you with today?",
      bn: "👋 স্বাগতম! **ওয়ানস্টপ সলিউশন**-এ আপনাকে স্বাগতম।\n\nআমি **ওয়ানস্টপ এআই অ্যাসিস্ট্যান্ট**। আমি আমাদের ডিজিটাল মার্কেটিং, ওয়েব ডেভেলপমেন্ট এবং মিডিয়া এডিটিং সার্ভিসে আপনাকে সাহায্য করতে পারি।\n\nআজ আপনাকে কীভাবে সাহায্য করতে পারি?",
      banglish: "👋 Hello! **OneStop Solution**-e apnake shagotom.\n\nAmi **OneStop AI Assistant**। Apnar business growth-er jonno Digital Marketing, Web Development ba Media Editing niye sahajjo korte pari.\n\nAjke apnar ki dhoroner service lagbe?"
    },
    humanHandoff: {
      en: "Of course! I can connect you directly with the **OneStop Solution** human strategist team right away.",
      bn: "অবশ্যই! আমি আপনাকে সরাসরি **ওয়ানস্টপ সলিউশন**-এর এক্সপার্ট টিমের সাথে যোগাযোগ করিয়ে দিচ্ছি।",
      banglish: "Obosshoi! Ami apnake direct **OneStop Solution** team er sathe connect kore dicchi."
    },
    contactCollected: {
      en: "🎉 **Thank you! Your project details have been recorded.**\n\nOur agency team will review your specifications and reach out with a customized proposal.",
      bn: "🎉 **ধন্যবাদ! আপনার প্রজেক্টের তথ্য সফলভাবে গ্রহণ করা হয়েছে।**\n\nআমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।",
      banglish: "🎉 **Dhonnobad! Apnar project details amader team er kache poucheche.**\n\nAmader specialist team khub druto apnar sathe contact korbe."
    }
  }
};


/* ==============================================================================
   SECTION 4: CHATBOT UI & RENDERING ENGINE
   Handles DOM rendering, bubbles, quick replies, animations, and inputs.
   ============================================================================== */
const OneStopChatbot = {
  // DOM Elements
  elements: {
    widget: null,
    launcher: null,
    badge: null,
    window: null,
    messagesContainer: null,
    quickReplies: null,
    typingIndicator: null,
    input: null,
    sendBtn: null,
    handoffBar: null,
    handoffWhatsappBtn: null
  },

  init() {
    // Cache DOM Elements
    this.elements.widget = document.getElementById('onestop-chat-widget');
    this.elements.launcher = document.getElementById('onestop-launcher-btn');
    this.elements.badge = document.getElementById('launcher-unread-badge');
    this.elements.window = document.getElementById('onestop-chat-window');
    this.elements.messagesContainer = document.getElementById('onestop-messages-container');
    this.elements.quickReplies = document.getElementById('onestop-quick-replies');
    this.elements.typingIndicator = document.getElementById('onestop-typing-indicator');
    this.elements.input = document.getElementById('onestop-input');
    this.elements.sendBtn = document.getElementById('onestop-send-btn');
    this.elements.handoffBar = document.getElementById('handoff-bar');
    this.elements.handoffWhatsappBtn = document.getElementById('handoff-whatsapp-btn');

    // Sync Agency Contact URLs in Landing Page & Widget
    this.syncBrandLinks();

    // Bind Event Listeners
    this.bindEvents();

    // Load Chat History or Show Initial Welcome
    this.loadSessionState();
  },

  syncBrandLinks() {
    // Sync WhatsApp links
    const waUrl = CONFIG.whatsapp;
    if (this.elements.handoffWhatsappBtn) {
      this.elements.handoffWhatsappBtn.href = waUrl;
    }
    const pageWa = document.getElementById('agency-whatsapp-link');
    if (pageWa) pageWa.href = waUrl;

    // Sync Messenger links
    const pageMsgr = document.getElementById('agency-messenger-link');
    if (pageMsgr) pageMsgr.href = CONFIG.messenger;

    // Sync Email links
    const pageEmail = document.getElementById('agency-email-link');
    if (pageEmail) {
      pageEmail.href = `mailto:${CONFIG.email}?subject=Inquiry%20from%20OneStop%20Website`;
    }
    const pageEmailDisplay = document.getElementById('agency-email-display');
    if (pageEmailDisplay) {
      pageEmailDisplay.textContent = CONFIG.email;
    }
  },

  bindEvents() {
    // Textarea input auto-grow and Enter key handling
    this.elements.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleUserSend();
      }
    });

    this.elements.input.addEventListener('input', () => {
      this.elements.input.style.height = 'auto';
      this.elements.input.style.height = Math.min(this.elements.input.scrollHeight, 100) + 'px';
    });
  },

  toggleChat() {
    if (ChatState.isOpen) {
      this.closeChat();
    } else {
      this.openChat();
    }
  },

  openChat(flowToTrigger = null) {
    ChatState.isOpen = true;
    this.elements.window.classList.add('open');
    this.elements.window.classList.remove('minimized');
    this.elements.launcher.classList.add('active');
    this.elements.badge.classList.add('hidden');

    setTimeout(() => {
      this.elements.input.focus();
      this.scrollToBottom();
    }, 150);

    if (flowToTrigger) {
      this.startServiceFlow(flowToTrigger);
    }
  },

  closeChat() {
    ChatState.isOpen = false;
    this.elements.window.classList.remove('open');
    this.elements.window.classList.remove('minimized');
    this.elements.launcher.classList.remove('active');
  },

  minimizeChat() {
    ChatState.isOpen = false;
    this.elements.window.classList.remove('open');
    this.elements.window.classList.add('minimized');
    this.elements.launcher.classList.remove('active');
  },

  clearChat() {
    if (confirm("Are you sure you want to clear this conversation history?")) {
      sessionStorage.removeItem('onestop_chat_messages');
      sessionStorage.removeItem('onestop_chat_state');
      this.elements.messagesContainer.innerHTML = '';
      ChatState.messages = [];
      ChatState.activeFlow = 'idle';
      ChatState.step = 0;
      this.showWelcomeMessage();
    }
  },

  loadSessionState() {
    const saved = sessionStorage.getItem('onestop_chat_messages');
    if (saved) {
      try {
        const msgs = JSON.parse(saved);
        if (Array.isArray(msgs) && msgs.length > 0) {
          ChatState.messages = msgs;
          msgs.forEach(m => this.renderMessageBubble(m.sender, m.text, m.time, m.extraHtml, false));
          this.renderQuickRepliesForCurrentState();
          return;
        }
      } catch (e) {
        console.warn("Could not restore session:", e);
      }
    }
    // Default initial greeting
    this.showWelcomeMessage();
  },

  saveSessionState() {
    try {
      sessionStorage.setItem('onestop_chat_messages', JSON.stringify(ChatState.messages));
    } catch (e) {
      console.warn("Session storage save failed:", e);
    }
  },

  showWelcomeMessage() {
    const welcomeText = NLP.phrases.welcome[ChatState.detectedLang] || NLP.phrases.welcome.en;
    this.addBotMessage(welcomeText, null, [
      { label: "🚀 Digital Marketing", value: "digital_marketing" },
      { label: "🌐 Web Development", value: "web_development" },
      { label: "🎬 Media Editing", value: "media_editing" },
      { label: "💰 Pricing", value: "pricing" },
      { label: "📞 Contact Us", value: "contact" },
      { label: "❓ Ask a Question", value: "ask_question" }
    ]);
  },

  formatTime(date = new Date()) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  },

  scrollToBottom() {
    requestAnimationFrame(() => {
      this.elements.messagesContainer.scrollTop = this.elements.messagesContainer.scrollHeight;
    });
  },

  showTyping() {
    ChatState.isTyping = true;
    this.elements.typingIndicator.style.display = 'flex';
    this.scrollToBottom();
  },

  hideTyping() {
    ChatState.isTyping = false;
    this.elements.typingIndicator.style.display = 'none';
  },

  renderMessageBubble(sender, text, time = this.formatTime(), extraHtml = null, shouldSave = true) {
    const group = document.createElement('div');
    group.className = `msg-group ${sender}`;

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.textContent = sender === 'bot' ? '🤖' : '👤';

    const wrap = document.createElement('div');
    wrap.className = 'msg-bubble-wrap';

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';

    // Parse simple markdown-like formatting (**bold**, \n newlines)
    const formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    bubble.innerHTML = formatted;

    if (extraHtml) {
      const extraDiv = document.createElement('div');
      extraDiv.innerHTML = extraHtml;
      bubble.appendChild(extraDiv);
    }

    const timeSpan = document.createElement('span');
    timeSpan.className = 'msg-time';
    timeSpan.textContent = time;

    wrap.appendChild(bubble);
    wrap.appendChild(timeSpan);

    group.appendChild(avatar);
    group.appendChild(wrap);

    this.elements.messagesContainer.appendChild(group);
    this.scrollToBottom();

    if (shouldSave) {
      ChatState.messages.push({ sender, text, time, extraHtml });
      this.saveSessionState();
    }
  },

  addUserMessage(text) {
    this.renderMessageBubble('user', text);
  },

  addBotMessage(text, extraHtml = null, quickReplies = []) {
    this.showTyping();
    // Simulate natural agency executive typing speed (350ms - 800ms)
    const delay = Math.min(Math.max(text.length * 10, 400), 900);

    setTimeout(() => {
      this.hideTyping();
      this.renderMessageBubble('bot', text, this.formatTime(), extraHtml, true);
      this.setQuickReplies(quickReplies);
    }, delay);
  },

  setQuickReplies(replies = []) {
    this.elements.quickReplies.innerHTML = '';
    if (!replies || replies.length === 0) return;

    replies.forEach(r => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.innerHTML = r.label;
      btn.onclick = () => {
        this.handleQuickReplyClick(r.value, r.label);
      };
      this.elements.quickReplies.appendChild(btn);
    });
    this.scrollToBottom();
  },

  handleQuickReplyClick(value, label) {
    // Echo user choice in chat
    this.addUserMessage(label.replace(/^[^\w\s]+/, '').trim());
    this.processAction(value);
  },

  handleUserSend() {
    const raw = this.elements.input.value;
    if (!raw || !raw.trim() || ChatState.isTyping) return;

    const text = raw.trim();
    this.elements.input.value = '';
    this.elements.input.style.height = 'auto';

    // 1. Detect language from current user input
    const lang = NLP.detectLanguage(text);
    if (lang) {
      ChatState.detectedLang = lang;
    }

    // 2. Render user bubble
    this.addUserMessage(text);

    // 3. Process message through Conversational Engine
    this.processUserMessage(text);
  },


  /* ==============================================================================
     SECTION 5: CONVERSATION FLOW ROUTER & ENGINE
     Manages step-by-step service inquiries, leads, FAQs, and human handoff.
     ============================================================================== */
  processUserMessage(userText) {
    const textLower = userText.toLowerCase();

    // Check for Human Handoff Intent
    if (
      textLower.includes('human') ||
      textLower.includes('agent') ||
      textLower.includes('team') ||
      textLower.includes('expert') ||
      textLower.includes('manush') ||
      textLower.includes('kotha bolbo') ||
      textLower.includes('call me') ||
      textLower.includes('phone number') ||
      textLower.includes('talk to someone')
    ) {
      this.triggerHumanHandoff();
      return;
    }

    // If currently in an active step-by-step flow, advance the flow
    if (ChatState.activeFlow !== 'idle') {
      this.advanceGuidedFlow(userText);
      return;
    }

    // Check for Service Triggers
    if (
      textLower.includes('marketing') ||
      textLower.includes('facebook ad') ||
      textLower.includes('fb ad') ||
      textLower.includes('google ad') ||
      textLower.includes('lead gen') ||
      textLower.includes('boost') ||
      textLower.includes('customer lagbe') ||
      textLower.includes('sales')
    ) {
      this.startServiceFlow('digital_marketing', userText);
      return;
    }

    if (
      textLower.includes('website') ||
      textLower.includes('web dev') ||
      textLower.includes('landing page') ||
      textLower.includes('ecommerce') ||
      textLower.includes('e-commerce') ||
      textLower.includes('portfolio') ||
      textLower.includes('site banate')
    ) {
      this.startServiceFlow('web_development', userText);
      return;
    }

    if (
      textLower.includes('video') ||
      textLower.includes('editing') ||
      textLower.includes('reels') ||
      textLower.includes('tiktok') ||
      textLower.includes('shorts') ||
      textLower.includes('youtube') ||
      textLower.includes('thumbnail') ||
      textLower.includes('motion')
    ) {
      this.startServiceFlow('media_editing', userText);
      return;
    }

    if (
      textLower.includes('price') ||
      textLower.includes('cost') ||
      textLower.includes('pricing') ||
      textLower.includes('koto taka') ||
      textLower.includes('dam koto') ||
      textLower.includes('budget') ||
      textLower.includes('package')
    ) {
      this.startServiceFlow('pricing');
      return;
    }

    if (
      textLower.includes('contact') ||
      textLower.includes('whatsapp') ||
      textLower.includes('email') ||
      textLower.includes('address') ||
      textLower.includes('location') ||
      textLower.includes('thikana')
    ) {
      this.showContactChannels();
      return;
    }

    // Check for FAQ Knowledge Base match
    const matchedFaq = this.findMatchingFaq(textLower);
    if (matchedFaq) {
      this.addBotMessage(matchedFaq.answer, null, [
        { label: "🚀 Digital Marketing", value: "digital_marketing" },
        { label: "🌐 Web Development", value: "web_development" },
        { label: "🎬 Media Editing", value: "media_editing" },
        { label: "📞 Contact Team", value: "handoff" }
      ]);
      return;
    }

    // Check Greetings
    if (
      textLower.includes('hi') ||
      textLower.includes('hello') ||
      textLower.includes('hey') ||
      textLower.includes('salam') ||
      textLower.includes('assalamu')
    ) {
      const greeting = ChatState.detectedLang === 'bn'
        ? "হ্যালো! ওয়ানস্টপ সলিউশনে আপনাকে স্বাগতম। আপনি আপনার বিজনেসের জন্য কোন সার্ভিসটি খুঁজছেন?"
        : (ChatState.detectedLang === 'banglish'
          ? "Hello! OneStop Solution-e apnake shagotom. Apnar business er jonno kon service ta lagbe?"
          : "Hello! Welcome to OneStop Solution. How can we help you grow your business today?");
      
      this.addBotMessage(greeting, null, [
        { label: "🚀 Digital Marketing", value: "digital_marketing" },
        { label: "🌐 Web Development", value: "web_development" },
        { label: "🎬 Media Editing", value: "media_editing" },
        { label: "💰 Pricing", value: "pricing" }
      ]);
      return;
    }

    // Fallback: If AI API is enabled, forward to AI; otherwise smart default reply
    if (CONFIG.ai.enabled) {
      this.queryAiApi(userText);
    } else {
      this.handleSmartFallback(userText);
    }
  },

  findMatchingFaq(query) {
    for (const faq of CONFIG.faqs) {
      for (const kw of faq.keywords) {
        if (query.includes(kw)) {
          return faq;
        }
      }
    }
    return null;
  },

  handleSmartFallback(userText) {
    let msg = "";
    if (ChatState.detectedLang === 'bn') {
      msg = "আমি বুঝতে পেরেছি! আপনার রিকোয়ারমেন্ট অনুযায়ী আমাদের স্পেশালিস্ট টিম সেরা সমাধান প্রস্তুত করতে পারবে। আপনি কি ডিজিটাল মার্কেটিং, ওয়েব ডেভেলপমেন্ট, নাকি মিডিয়া এডিটিং সার্ভিস খুঁজছেন?";
    } else if (ChatState.detectedLang === 'banglish') {
      msg = "Ami bujhte perechi! Apnar requirement onujayi amader agency team best solution provide korte parbe. Apni ki Digital Marketing, Web Development, naki Media Editing niye kotha bolte chan?";
    } else {
      msg = "I hear you! To provide the most effective solution for your brand, could you let me know which area you'd like to explore?";
    }

    this.addBotMessage(msg, null, [
      { label: "🚀 Digital Marketing", value: "digital_marketing" },
      { label: "🌐 Web Development", value: "web_development" },
      { label: "🎬 Media Editing", value: "media_editing" },
      { label: "📞 Speak to Team", value: "handoff" }
    ]);
  },


  /* ==============================================================================
     SECTION 6: GUIDED SERVICE INTERACTION FLOWS
     Step-by-step flows for Web Dev, Marketing, Media, and Lead Capture.
     ============================================================================== */
  startServiceFlow(flowKey, initialContext = "") {
    ChatState.activeFlow = flowKey;
    ChatState.step = 0;
    this.openChat();

    // Reset temporary lead state for fresh inquiry
    ChatState.lead.serviceCategory = flowKey;

    switch (flowKey) {
      case 'web_development':
        this.runWebDevStep(0);
        break;
      case 'digital_marketing':
        this.runMarketingStep(0);
        break;
      case 'media_editing':
        this.runMediaStep(0);
        break;
      case 'pricing':
        this.runPricingFlow();
        break;
      case 'contact':
        this.showContactChannels();
        break;
      case 'handoff':
        this.triggerHumanHandoff();
        break;
      default:
        this.showWelcomeMessage();
    }
  },

  advanceGuidedFlow(userInput) {
    switch (ChatState.activeFlow) {
      case 'web_development':
        this.runWebDevStep(ChatState.step + 1, userInput);
        break;
      case 'digital_marketing':
        this.runMarketingStep(ChatState.step + 1, userInput);
        break;
      case 'media_editing':
        this.runMediaStep(ChatState.step + 1, userInput);
        break;
      case 'lead_capture':
        this.runLeadCaptureStep(ChatState.step + 1, userInput);
        break;
      default:
        this.processUserMessage(userInput);
    }
  },

  /* --- 6A: WEB DEVELOPMENT FLOW --- */
  runWebDevStep(stepIndex, prevInput = "") {
    ChatState.step = stepIndex;

    if (stepIndex === 0) {
      const msg = ChatState.detectedLang === 'bn'
        ? "🌐 **ওয়েব ডেভেলপমেন্ট সার্ভিস**:\nআপনার ব্যবসার জন্য কোন ধরনের ওয়েবসাইট প্রয়োজন?"
        : (ChatState.detectedLang === 'banglish'
          ? "🌐 **Web Development Service**:\nApnar business er jonno ki dhoroner website banate chan?"
          : "🌐 **Web Development**:\nWhat type of website does your business need?");
      
      this.addBotMessage(msg, null, [
        { label: "Business Website", value: "Business Website" },
        { label: "High-Converting Landing Page", value: "Landing Page" },
        { label: "E-commerce Store", value: "E-commerce Store" },
        { label: "Portfolio Website", value: "Portfolio Website" },
        { label: "Custom Solution", value: "Custom Web Solution" },
        { label: "Not Sure Yet", value: "Need Guidance" }
      ]);
    } 
    else if (stepIndex === 1) {
      ChatState.lead.projectType = prevInput;
      const msg = ChatState.detectedLang === 'bn'
        ? "চমৎকার! আপনার ব্র্যান্ড বা বিজনেসটির নাম কি? এবং কি ধরণের প্রডাক্ট বা সার্ভিস অফার করেন?"
        : (ChatState.detectedLang === 'banglish'
          ? "Shundor! Apnar Brand ba Business-er name ki? Ar apnara ki offer koren?"
          : "Great! What is your **brand or business name**, and what does your business offer?");
      this.addBotMessage(msg);
    }
    else if (stepIndex === 2) {
      ChatState.lead.brandOrBusiness = prevInput;
      const msg = ChatState.detectedLang === 'bn'
        ? "ওয়েবসাইটে কি বিশেষ কোনো ফিচার দরকার? (যেমন: পেমেন্ট গেটওয়ে, বুকিং সিস্টেম, ব্লগের ব্যবস্থা ইত্যাদি) এবং কোনো রেফারেন্স সাইট পছন্দ আছে?"
        : (ChatState.detectedLang === 'banglish'
          ? "Website-e kono special features dorkar? (e.g. Payment gateway, booking, product catalog) Ar kono reference website ache ki?"
          : "Are there any specific features you require (e.g., Online Payments, Booking System, Product Filter, CMS) or reference websites you love?");
      this.addBotMessage(msg, null, [
        { label: "Standard Features", value: "Standard Modern Features" },
        { label: "E-commerce & Payments", value: "E-commerce + Online Payments" },
        { label: "Booking & Inquiries", value: "Booking & Leads System" },
        { label: "Need Agency Recommendation", value: "Recommend For Me" }
      ]);
    }
    else if (stepIndex === 3) {
      ChatState.lead.specificDetails = prevInput;
      const msg = ChatState.detectedLang === 'bn'
        ? "আপনার আনুমানিক বাজেট এবং কতদিনের মধ্যে প্রজেক্টটি লাইভ করতে চান?"
        : (ChatState.detectedLang === 'banglish'
          ? "Apnar approximate budget koto and koto diner moddhe website live korte chan?"
          : "What is your approximate **budget range** and target **completion deadline**?");
      this.addBotMessage(msg, null, [
        { label: "Flexible Budget • Within 1-2 Weeks", value: "Flexible Budget - 1-2 Weeks" },
        { label: "Starter Budget • Under $300 / ৳25,000", value: "Starter Budget" },
        { label: "Growth Budget • $500 - $1500", value: "Growth Budget" },
        { label: "Enterprise / Custom", value: "Enterprise" }
      ]);
    }
    else {
      ChatState.lead.budget = prevInput;
      // Wrap up Web Dev inquiry and start lead summary
      this.finishServiceInquiry(
        "Web Development Solution",
        [
          "Full Responsive Mobile-First Design",
          "Lightning Speed Optimization (<1.5s load)",
          "SEO & OpenGraph Social Sharing Setup",
          "OneStop 30-day Free Post-launch Support"
        ]
      );
    }
  },

  /* --- 6B: DIGITAL MARKETING FLOW --- */
  runMarketingStep(stepIndex, prevInput = "") {
    ChatState.step = stepIndex;

    if (stepIndex === 0) {
      const msg = ChatState.detectedLang === 'bn'
        ? "🚀 **ডিজিটাল মার্কেটিং সলিউশন**:\nআপনার বিজনেসটি কি ধরণের এবং আপনার মূল লক্ষ্য কি?"
        : (ChatState.detectedLang === 'banglish'
          ? "🚀 **Digital Marketing Solution**:\nApnar business ta ki dhoroner and main goal ki?"
          : "🚀 **Digital Marketing**:\nWhat is your business type, and what is your primary marketing goal right now?");
      
      this.addBotMessage(msg, null, [
        { label: "Generate Verified Customer Leads", value: "Lead Generation" },
        { label: "Boost Online E-commerce Sales", value: "E-commerce Sales" },
        { label: "Brand Awareness & Followers", value: "Brand Awareness" },
        { label: "Full Social Media Management", value: "Page & Content Management" }
      ]);
    }
    else if (stepIndex === 1) {
      ChatState.lead.projectType = prevInput;
      const msg = ChatState.detectedLang === 'bn'
        ? "কোন প্লাটফর্মগুলোতে ফোকাস করতে চান? (ফেসবুক, ইনস্টাগ্রাম, গুগল নাকি টিকটক?)"
        : (ChatState.detectedLang === 'banglish'
          ? "Kon platform-e focus korte chan? (Facebook, Instagram, Google Ads, naki sob platform?)"
          : "Which advertising platforms would you like to prioritize?");
      this.addBotMessage(msg, null, [
        { label: "Facebook & Instagram Ads", value: "Facebook & Instagram Ads" },
        { label: "Google Ads (Search & YouTube)", value: "Google Search & YouTube Ads" },
        { label: "All-in-One Multi-Channel Growth", value: "Multi-Channel Growth" }
      ]);
    }
    else if (stepIndex === 2) {
      ChatState.lead.specificDetails = prevInput;
      const msg = ChatState.detectedLang === 'bn'
        ? "আপনি কি এর আগে ফেসবুক বা গুগল অ্যাড চালিয়েছেন? আপনার আনুমানিক মাসিক অ্যাড বাজেট কত?"
        : (ChatState.detectedLang === 'banglish'
          ? "Apni ki age ads chalaisen? Monthly ad budget koto rakhte chan?"
          : "Have you previously run paid ads, and what is your estimated **monthly marketing/ad budget**?");
      this.addBotMessage(msg, null, [
        { label: "First Time • Testing Budget", value: "First Time Advertiser" },
        { label: "$100 - $300 / Month (৳12k - ৳35k)", value: "$100-$300 / month" },
        { label: "$500 - $1,500 / Month", value: "$500-$1500 / month" },
        { label: "$2,000+ Scaled Budget", value: "$2000+ Scaled" }
      ]);
    }
    else {
      ChatState.lead.budget = prevInput;
      this.finishServiceInquiry(
        "Digital Marketing & Ad Strategy",
        [
          "Targeted Audience Persona & Competitor Research",
          "High-Converting Copywriting & Ad Creatives",
          "A/B Split Testing & Retargeting Funnels",
          "Weekly ROI & Conversion Performance Reports"
        ]
      );
    }
  },

  /* --- 6C: MEDIA EDITING FLOW --- */
  runMediaStep(stepIndex, prevInput = "") {
    ChatState.step = stepIndex;

    if (stepIndex === 0) {
      const msg = ChatState.detectedLang === 'bn'
        ? "🎬 **মিডিয়া এডিটিং ও ক্রিয়েটিভ সার্ভিস**:\nআপনার কি ধরণের ভিডিও বা গ্রাফিক্স এডিটিং প্রয়োজন?"
        : (ChatState.detectedLang === 'banglish'
          ? "🎬 **Media Editing & Creative**:\nApnar ki dhoroner video ba graphics edit lagbe?"
          : "🎬 **Media Editing & Creative**:\nWhat type of content do you need edited?");
      
      this.addBotMessage(msg, null, [
        { label: "Viral Short-Form (Reels/TikTok/Shorts)", value: "Short-Form Reels/TikTok" },
        { label: "YouTube Long-Form Video", value: "YouTube Video Editing" },
        { label: "Promotional & Commercial Ad", value: "Commercial Video Ad" },
        { label: "Thumbnails & Social Media Posts", value: "Thumbnails & Post Design" },
        { label: "Motion Graphics & Animation", value: "Motion Graphics" }
      ]);
    }
    else if (stepIndex === 1) {
      ChatState.lead.projectType = prevInput;
      const msg = ChatState.detectedLang === 'bn'
        ? "প্রতি মাসে আনুমানিক কতগুলো ভিডিও প্রয়োজন এবং ফুটেজের দৈর্ঘ্য কতটুকু?"
        : (ChatState.detectedLang === 'banglish'
          ? "Mashe koto gula video edit lagbe and raw footage kemon length er?"
          : "Approximately how many videos do you need per month, and what is the typical duration?");
      this.addBotMessage(msg, null, [
        { label: "1 to 4 Videos (Trial)", value: "1-4 Videos" },
        { label: "8 to 15 Videos / Month (Batch)", value: "8-15 Monthly Batch" },
        { label: "Daily Content (20+ Videos)", value: "Daily Content Package" }
      ]);
    }
    else if (stepIndex === 2) {
      ChatState.lead.specificDetails = prevInput;
      const msg = ChatState.detectedLang === 'bn'
        ? "আপনার পছন্দের কোনো এডিটিং স্টাইল বা রেফারেন্স চ্যানেল আছে কি? ডেলিভারি কত দ্রুত প্রয়োজন?"
        : (ChatState.detectedLang === 'banglish'
          ? "Kono reference style ba creator pochondo ache? Delivery koto taratari dorkar?"
          : "Do you have a specific reference style (e.g., Alex Hormozi style captions, documentary, cinematic) and what is your turnaround deadline?");
      this.addBotMessage(msg, null, [
        { label: "Hormozi / Fast-Paced Subtitles", value: "Hormozi Fast-Paced" },
        { label: "Clean Documentary / Storytelling", value: "Cinematic Documentary" },
        { label: "Commercial Sales Style", value: "Sales Ad Commercial" },
        { label: "Let OneStop Designer Decide", value: "Agency Best Practice" }
      ]);
    }
    else {
      ChatState.lead.timeline = prevInput;
      this.finishServiceInquiry(
        "Media Editing & Creative Suite",
        [
          "High-Retention Hook & Sound Design (SFX)",
          "Dynamic Motion Graphics & Caption Styling",
          "Color Grading & Audio Master Clearing",
          "Fast 48-Hour Standard Turnaround with Revisions"
        ]
      );
    }
  },

  /* --- 6D: FINISH INQUIRY & TRIGGER LEAD SUMMARY --- */
  finishServiceInquiry(serviceTitle, features = []) {
    let featureListHtml = '<ul class="msg-card-list">';
    features.forEach(f => {
      featureListHtml += `<li>✓ ${f}</li>`;
    });
    featureListHtml += '</ul>';

    const cardHtml = `
      <div class="msg-card">
        <div class="msg-card-title">⚡ Tailored Recommendation: ${serviceTitle}</div>
        ${featureListHtml}
      </div>
    `;

    const finishMsg = ChatState.detectedLang === 'bn'
      ? "আপনার প্রজেক্টের রিকোয়ারমেন্টগুলো অত্যন্ত চমৎকার! আমাদের টিম এটি নিখুঁতভাবে সম্পন্ন করতে সক্ষম। আপনার সাথে সরাসরি প্রজেক্টটি আলোচনা করার জন্য অনুগ্রহ করে আপনার নাম ও যোগাযোগ নম্বর (WhatsApp/Email) দিন।"
      : (ChatState.detectedLang === 'banglish'
        ? "Apnar project requirement shundor! Amader team perfectly eta execute korte parbe. Apnar sathe direct communicate korar jonno apnar Name and WhatsApp number ta bolben ki?"
        : "Based on your requirements, OneStop Solution can craft the ideal custom package for your brand. Let me take down your **Name** and **WhatsApp/Phone** so our team can provide your finalized proposal.");

    ChatState.activeFlow = 'lead_capture';
    ChatState.step = 0;

    this.addBotMessage(finishMsg, cardHtml, [
      { label: "💬 Send to WhatsApp Now", value: "dispatch_whatsapp_direct" },
      { label: "Enter Details in Chat", value: "enter_details" }
    ]);
  },

  /* --- 6E: STEP-BY-STEP LEAD CAPTURE --- */
  runLeadCaptureStep(stepIndex, userInput = "") {
    ChatState.step = stepIndex;

    if (stepIndex === 1) {
      ChatState.lead.userName = userInput;
      const msg = ChatState.detectedLang === 'bn'
        ? `ধন্যবাদ **${userInput}**! আপনার ফোন অথবা হোয়াটসঅ্যাপ নম্বরটি (অথবা ইমেইল) প্রদান করুন:`
        : (ChatState.detectedLang === 'banglish'
          ? `Dhonnobad **${userInput}**! Apnar WhatsApp ba Phone number (ba Email) ta bolun:`
          : `Thanks **${userInput}**! What is the best **WhatsApp or Phone number** (or Email) to reach you?`);
      this.addBotMessage(msg);
    }
    else {
      ChatState.lead.contactInfo = userInput;
      this.presentFinalLeadCard();
    }
  },

  presentFinalLeadCard() {
    ChatState.activeFlow = 'idle';

    const serviceName = ChatState.lead.serviceCategory ? CONFIG.services[ChatState.lead.serviceCategory]?.title || ChatState.lead.serviceCategory : "Custom Digital Solution";
    const user = ChatState.lead.userName || "Client";
    const contact = ChatState.lead.contactInfo || "Not Provided";
    const type = ChatState.lead.projectType || "General Consultation";
    const budget = ChatState.lead.budget || "Custom Quote";

    // Format pre-filled WhatsApp message for one-click dispatch
    const rawWaText = `Hello OneStop Solution! 🚀\nI discussed my project with your OneStop AI Assistant.\n\n` +
      `👤 Name: ${user}\n` +
      `📞 Contact: ${contact}\n` +
      `📌 Service: ${serviceName}\n` +
      `🎯 Project: ${type}\n` +
      `💰 Budget/Scope: ${budget}\n\n` +
      `Please let me know the next steps to get started!`;

    const waEncodedUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(rawWaText)}`;

    const summaryCardHtml = `
      <div class="lead-summary-card">
        <div class="lead-summary-header">
          <span>📋</span> OneStop Project Brief
        </div>
        <div class="lead-item"><span>Client:</span> <span>${user}</span></div>
        <div class="lead-item"><span>Contact:</span> <span>${contact}</span></div>
        <div class="lead-item"><span>Service:</span> <span>${serviceName}</span></div>
        <div class="lead-item"><span>Scope:</span> <span>${type}</span></div>
        <div class="lead-item"><span>Budget:</span> <span>${budget}</span></div>
        <a href="${waEncodedUrl}" target="_blank" rel="noopener noreferrer" class="lead-whatsapp-btn">
          <span>💬 Send Brief to Agency WhatsApp</span>
        </a>
      </div>
    `;

    const thankYou = NLP.phrases.contactCollected[ChatState.detectedLang] || NLP.phrases.contactCollected.en;

    this.addBotMessage(thankYou, summaryCardHtml, [
      { label: "💬 Chat on WhatsApp", value: "open_whatsapp" },
      { label: "⚡ Messenger", value: "open_messenger" },
      { label: "Ask Something Else", value: "ask_question" }
    ]);
  },

  /* --- 6F: PRICING FLOW --- */
  runPricingFlow() {
    ChatState.activeFlow = 'idle';
    const pricingMsg = `💰 **OneStop Solution Pricing Guidelines**:\n\n` +
      `• **Digital Marketing**: ${CONFIG.pricing.digitalMarketing}\n\n` +
      `• **Web Development**: ${CONFIG.pricing.webDevelopment}\n\n` +
      `• **Media Editing**: ${CONFIG.pricing.mediaEditing}\n\n` +
      `Which service would you like an exact estimate for?`;

    this.addBotMessage(pricingMsg, null, [
      { label: "🚀 Quote Marketing", value: "digital_marketing" },
      { label: "🌐 Quote Website", value: "web_development" },
      { label: "🎬 Quote Media Editing", value: "media_editing" },
      { label: "📞 Talk to Strategist", value: "handoff" }
    ]);
  },

  /* --- 6G: CONTACT CHANNELS & HUMAN HANDOFF --- */
  showContactChannels() {
    const contactMsg = `📞 **Connect Directly with OneStop Solution Team**:\n\n` +
      `• 💬 **WhatsApp**: [Click to Chat](${CONFIG.whatsapp})\n` +
      `• ⚡ **Messenger**: [Facebook Inbox](${CONFIG.messenger})\n` +
      `• 📞 **Phone**: ${CONFIG.phone}\n` +
      `• ✉️ **Email**: ${CONFIG.email}\n` +
      `• ⏰ **Hours**: ${CONFIG.businessHours}`;

    this.addBotMessage(contactMsg, null, [
      { label: "💬 Open WhatsApp", value: "open_whatsapp" },
      { label: "⚡ Open Messenger", value: "open_messenger" },
      { label: "Start a Project Flow", value: "ask_question" }
    ]);
  },

  triggerHumanHandoff() {
    // Show top handoff banner in chat window
    if (this.elements.handoffBar) {
      this.elements.handoffBar.classList.add('active');
    }

    const handoffMsg = NLP.phrases.humanHandoff[ChatState.detectedLang] || NLP.phrases.humanHandoff.en;
    
    const cardHtml = `
      <div class="msg-card">
        <div class="msg-card-title">Direct Communication Channels</div>
        <div class="msg-card-actions">
          <a href="${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-full" style="background:#25d366;color:#064e3b;font-weight:700;margin-bottom:6px;">
            💬 WhatsApp Live Chat
          </a>
          <a href="${CONFIG.messenger}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-full" style="color:#fff;margin-bottom:6px;">
            ⚡ Facebook Messenger
          </a>
          <a href="tel:${CONFIG.phone.replace(/[^0-9+]/g, '')}" class="btn btn-ghost btn-full" style="color:#fff;">
            📞 Call ${CONFIG.phone}
          </a>
        </div>
      </div>
    `;

    this.addBotMessage(handoffMsg, cardHtml, [
      { label: "💬 WhatsApp Us", value: "open_whatsapp" },
      { label: "⚡ Messenger", value: "open_messenger" },
      { label: "Keep Chatting with AI", value: "ask_question" }
    ]);
  },

  processAction(action) {
    switch (action) {
      case 'digital_marketing':
        this.startServiceFlow('digital_marketing');
        break;
      case 'web_development':
        this.startServiceFlow('web_development');
        break;
      case 'media_editing':
        this.startServiceFlow('media_editing');
        break;
      case 'pricing':
        this.runPricingFlow();
        break;
      case 'contact':
        this.showContactChannels();
        break;
      case 'handoff':
        this.triggerHumanHandoff();
        break;
      case 'open_whatsapp':
        window.open(CONFIG.whatsapp, '_blank');
        break;
      case 'open_messenger':
        window.open(CONFIG.messenger, '_blank');
        break;
      case 'dispatch_whatsapp_direct':
        this.presentFinalLeadCard();
        break;
      case 'enter_details':
        ChatState.step = 0;
        this.addBotMessage(
          ChatState.detectedLang === 'bn'
            ? "অনুগ্রহ করে আপনার **নাম** লিখুন:"
            : (ChatState.detectedLang === 'banglish'
              ? "Apnar **Name** ta bolun:"
              : "Please enter your **Full Name**:")
        );
        break;
      case 'ask_question':
        this.showWelcomeMessage();
        break;
      default:
        this.advanceGuidedFlow(action);
    }
  },

  renderQuickRepliesForCurrentState() {
    this.setQuickReplies([
      { label: "🚀 Digital Marketing", value: "digital_marketing" },
      { label: "🌐 Web Development", value: "web_development" },
      { label: "🎬 Media Editing", value: "media_editing" },
      { label: "💰 Pricing", value: "pricing" },
      { label: "📞 Contact Us", value: "contact" }
    ]);
  },


  /* ==============================================================================
     SECTION 7: SECURE AI API PROXY CLIENT (OPTIONAL INTEGRATION)
     Connects to an external AI Proxy (OpenAI, Gemini, etc.) if enabled in CONFIG.
     Falls back safely to local logic if network fails or API is disabled.
     ============================================================================== */
  async queryAiApi(userMessage) {
    this.showTyping();

    // Prepare system instructions for AI model
    const systemPrompt = `You are ${CONFIG.chatbotName}, a professional, friendly, and conversion-focused virtual assistant for ${CONFIG.agencyName} ("${CONFIG.tagline}").
Agency Services:
1. Digital Marketing: Facebook/Instagram Ads, Google Ads, Lead Generation, Social Media Management, Content Strategy.
2. Web Development: High-converting landing pages, Business websites, E-commerce stores, Portfolios.
3. Media Editing: Short-form Reels/TikToks, YouTube long-form videos, commercial video ads, thumbnails, motion graphics.
Contact Info: WhatsApp: ${CONFIG.whatsapp}, Phone: ${CONFIG.phone}, Email: ${CONFIG.email}.
Tone: Professional, helpful, concise, agency-grade. Keep responses short and conversational. Answer in the same language as the user (English, Bangla, or Banglish). Always encourage next steps or offer to connect with our strategist team.`;

    try {
      const response = await fetch(CONFIG.ai.endpoint, {
        method: "POST",
        headers: CONFIG.ai.headers,
        body: JSON.stringify({
          model: CONFIG.ai.model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userMessage }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`AI API responded with status ${response.status}`);
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || data.reply || data.text;

      this.hideTyping();
      if (reply) {
        this.renderMessageBubble('bot', reply, this.formatTime(), null, true);
        this.renderQuickRepliesForCurrentState();
      } else {
        this.handleSmartFallback(userMessage);
      }
    } catch (err) {
      console.warn("AI API request failed, switching to local state machine:", err);
      this.hideTyping();
      this.handleSmartFallback(userMessage);
    }
  }
};

// Expose OneStopChatbot to window for direct HTML triggers
window.OneStopChatbot = OneStopChatbot;

// Auto-initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  OneStopChatbot.init();
});
