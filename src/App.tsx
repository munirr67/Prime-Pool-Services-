import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Star, Menu, X, CheckCircle2, MapPin, TreePine, Waves, Mountain, Home, Sunrise, CalendarCheck, ShieldCheck, CircleDollarSign, MessageSquareText, Mail, ChevronsRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Footer } from './components/ui/footer';

const services = [
  {
    title: "Residential Pool Care",
    desc: "Enjoy a pool that’s always clean, safe, and ready for family time or entertaining guests. Our residential pool services are handled by trained professionals who care for your pool as if it were their own.",
    img: "anon-bob-2_a_Ultra-realistic_prof (1).png"
  },
  {
    title: "Commercial Pool Services",
    desc: "High-traffic pools require expert care to meet safety standards and health code requirements. We specialize in commercial pool service designed to keep facilities compliant, reliable, and guest-ready during peak usage.",
    img: "https://unsplash.com/photos/stainless-steel-railings-on-swimming-pool-JhcQHSBMask"
  },
  {
    title: "Pool Maintenance",
    desc: "Protect your investment with professional pool maintenance from an established Austin-based company. From routine inspections to ongoing care, we service pools of all sizes using proven systems and industry best practices.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Pool Repair",
    desc: "Our factory-trained repair specialists quickly diagnose and fix pool issues before they turn into costly problems. Schedule a service call today and get your pool back to stress-free operation.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
  }
];

const locations = [
  "Georgetown", "Round Rock", "Pflugerville", "Leander", 
  "Cedar Park", "Lago Vista", "Jonestown", "Steiner Ranch", 
  "Westlake Hills", "Lakeway", "Barton Creek"
];

const includedItems = [
  "Commercial grade pool chemicals and materials",
  "Crystal clear water maintenance",
  "Precise sanitizer level control",
  "Prevention of combined chlorine buildup",
  "Proper water balance to protect surfaces and equipment",
  "Thorough cleaning on every visit",
  "Pool wall brushing to prevent black algae",
  "Filtration system monitoring",
  "Equipment and system checks",
  "Proactive communication with customers"
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-500/30">
      {/* Top Stripe */}
      <div className="bg-sky-600 text-white text-[13px] h-10 px-6 lg:px-12 hidden md:flex justify-between items-center z-50 absolute top-0 inset-x-0">
        <div className="flex items-center gap-2">
          <span className="font-medium bg-white text-sky-600 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">Offer</span>
          <span>Get 20% off your first month of premium pool maintenance.</span>
        </div>
        <div className="flex items-center gap-5 font-medium">
          <a href="#" className="hover:text-sky-200 transition-colors">Login</a>
          <a href="#" className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-lg transition-colors">Sign Up</a>
        </div>
      </div>

      {/* Header */}
      <header 
        className={`fixed inset-x-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? 'top-0 bg-slate-900/95 backdrop-blur-md border-white/10 py-4 shadow-lg' : 'top-0 md:top-10 bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Prime Pool Service">
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <Waves className="text-white" size={24} strokeWidth={2} />
            </div>
            <span className="text-2xl font-medium text-white tracking-tight">
              Prime<span className="text-sky-400 font-light">Pools</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Services', 'Maintenance', 'Repairs', 'About Us'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:5124413473" className="flex items-center gap-2 text-sm font-medium text-white hover:text-sky-400 transition-colors">
              <Phone size={16} />
              (512) 441-3473
            </a>
            <a href="#" className="bg-white text-slate-800 hover:bg-sky-50 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-md hover:shadow-white/20 shadow-sm shadow-white/10">
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900 pt-24 px-6 lg:hidden">
          <nav className="flex flex-col gap-6">
            {['Services', 'Maintenance', 'Repairs', 'About Us'].map((item) => (
              <a key={item} href="#" className="text-xl font-medium text-white">
                {item}
              </a>
            ))}
            <div className="h-px bg-white/10 my-4" />
            <a href="tel:5124413473" className="flex items-center gap-3 text-lg font-medium text-sky-400">
              <Phone size={20} />
              (512) 441-3473
            </a>
            <a href="#" className="bg-sky-500 text-white text-center py-4 rounded-lg text-lg font-medium mt-4">
              Get Free Quote
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" 
            alt="Pristine swimming pool" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 z-10 bg-slate-900/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full lg:w-3/5 max-w-2xl pt-24 lg:pt-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[14px] sm:text-[15px] font-medium tracking-widest text-sky-100 uppercase">PROUDLY SERVING THE AUSTIN METROPLEX</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-[64px] font-medium text-white leading-tight mb-6 tracking-tight">
              Crystal Clear Pools, <br />
              <span className="font-serif font-serif italic font-normal text-sky-200">Without the Stress.</span>
            </h1>
            
            <p className="text-[17px] sm:text-[18px] text-slate-200 mb-10 leading-relaxed max-w-xl font-normal">
              We specialize in professional pool cleaning, maintenance, and repairs for homes and businesses. Reliable service, expert care, and hassle free pool ownership.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-lg text-[15px] sm:text-[16px] font-medium transition-all duration-200 ease-out shadow-sm shadow-sky-500/15 hover:shadow-md hover:shadow-sky-500/20 hover:-translate-y-[2px] group">
                Get Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+1234567890" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded-lg text-[15px] font-medium transition-all duration-200 ease-out hover:-translate-y-[2px] group">
                <Phone size={18} className="text-sky-300 group-hover:rotate-12 transition-transform" />
                Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-6 sm:gap-8">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-slate-300 font-medium">5.0 Average Rating</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex flex-col gap-1">
                <span className="text-xl font-medium text-white leading-none">10+</span>
                <span className="text-sm text-slate-300 font-medium">Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Feature Card - Desktop Only */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
            className="hidden lg:block w-full lg:w-2/5 max-w-sm ml-auto"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-12 h-12 bg-sky-500/20 rounded-2xl flex items-center justify-center mb-6 border border-sky-400/30">
                <CheckCircle2 className="text-sky-400" size={24} />
              </div>
              
              <h3 className="text-[18px] sm:text-[20px] font-serif italic text-white mb-3">Professional Pool Care You Can Trust</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                With years of experience in the Austin area, our certified technicians deliver consistent, high quality service to keep your pool pristine year round.
              </p>
              
              <ul className="space-y-3">
                {['Weekly Pool Cleaning', 'Water Chemistry Balancing', 'Equipment Inspection & Repairs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-1/3 shrink-0">
              <h2 className="text-[14px] sm:text-[15px] font-medium text-slate-800 mb-1.5">Trusted by Homeowners & Local Partners</h2>
              <p className="text-[15px] sm:text-[16px] text-slate-500">Serving homes and businesses across the Austin area</p>
            </div>
            <div className="w-full lg:w-2/3 overflow-hidden relative flex items-center">
              <motion.div 
                className="flex w-max opacity-50 grayscale"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 50, repeat: Infinity }}
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-x-10 pr-10">
                    <svg className="h-7 sm:h-8 w-auto text-slate-800 shrink-0" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5L25 25H5L15 5Z" fill="currentColor"/>
                      <text x="35" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="currentColor">APEX</text>
                      <text x="75" y="20" fontFamily="sans-serif" fontSize="14" fill="currentColor">PROPERTIES</text>
                    </svg>
                    <svg className="h-7 sm:h-8 w-auto text-slate-800 shrink-0" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="3"/>
                      <text x="35" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="currentColor">OASIS</text>
                      <text x="80" y="20" fontFamily="sans-serif" fontSize="14" fill="currentColor">BUILDERS</text>
                    </svg>
                    <svg className="h-7 sm:h-8 w-auto text-slate-800 shrink-0" viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="5" width="20" height="20" fill="currentColor"/>
                      <text x="35" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="currentColor">LUMINA</text>
                      <text x="90" y="20" fontFamily="sans-serif" fontSize="14" fill="currentColor">REALTY</text>
                    </svg>
                    <svg className="h-7 sm:h-8 w-auto text-slate-800 shrink-0" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L15 5L25 15L15 25L5 15Z" stroke="currentColor" strokeWidth="3"/>
                      <text x="35" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="currentColor">CRESTVIEW</text>
                      <text x="115" y="20" fontFamily="sans-serif" fontSize="14" fill="currentColor">HOA</text>
                    </svg>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 sm:py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-24"
          >
            <div className="w-full lg:w-1/4 shrink-0">
              <span className="text-[14px] sm:text-[15px] font-medium tracking-widest text-sky-600 uppercase">About Us</span>
            </div>
            <div className="w-full lg:w-3/4 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium text-slate-800 leading-[1.2] mb-8 tracking-tight">
                Professional Pool Care <span className="italic font-normal text-sky-600">You Can Rely On</span>
              </h2>
              <div className="space-y-6 text-[17px] sm:text-[18px] text-slate-600 leading-relaxed font-normal">
                <p>
                  Prime Pool Service is a full-service pool cleaning, repair, and maintenance company serving both residential and commercial clients across the Austin area.
                </p>
                <p>
                  We take pride in delivering reliable, detail-oriented pool care backed by experience and industry standards. Every member of our team is a Certified Pool Operator (CPO), ensuring your pool is serviced safely, professionally, and correctly every time.
                </p>
                <p>
                  Your pool is a major investment — and it deserves expert care you can trust. When you work with Prime Pool Service, you’re choosing consistency, accountability, and peace of mind.
                </p>
              </div>
              <div className="mt-10">
                <a href="tel:5124413473" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-[15px] sm:text-[16px] font-medium transition-all duration-200 ease-out shadow-sm shadow-slate-900/10 hover:shadow-md hover:shadow-slate-900/15 hover:-translate-y-[2px] group">
                  <Phone size={18} className="text-sky-400 group-hover:rotate-12 transition-transform" />
                  Call (512) 441-3473
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
          >
            <span className="text-[14px] sm:text-[15px] font-medium tracking-widest text-sky-600 uppercase">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium text-slate-800 leading-[1.2] mt-4 mb-6 tracking-tight">
              Complete Pool Care for <span className="italic font-normal text-sky-600">Homes & Businesses</span>
            </h2>
            <p className="text-[17px] sm:text-[18px] text-slate-600 leading-relaxed font-normal">
              From weekly maintenance to complex repairs, we keep pools safe, clean, and ready to enjoy year round.
            </p>
          </motion.div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden shrink-0">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="flex flex-col flex-grow p-8 sm:p-10">
                  <h3 className="text-2xl font-medium text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-[16px] leading-relaxed flex-grow">{service.desc}</p>
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <a href="#" className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors group/link">
                      Learn more
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What's Included */}
          {/* The Prime Standard & Service Area Bento Grid */}
          <div className="mt-24 sm:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* The Prime Standard */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:col-span-7 bg-slate-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-slate-900/10"
            >
              {/* Background pattern */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
                  backgroundSize: '24px 24px' 
                }}
              />
              
              <div className="relative z-10 mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-[13px] font-medium tracking-widest text-white uppercase">The Prime Standard</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-medium text-white mb-4 tracking-tight">Everything included.</h3>
                <p className="text-[16px] sm:text-[17px] text-slate-400 max-w-md">Our professional care plans are comprehensive, ensuring your pool is always swim-ready.</p>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {includedItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-sky-500/30 group-hover:bg-sky-500/40 transition-colors">
                      <CheckCircle2 className="text-sky-400" size={12} strokeWidth={4} />
                    </div>
                    <span className="text-[14px] sm:text-[15px] text-slate-300 font-medium leading-snug group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Area */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-5 bg-sky-50 rounded-3xl p-8 sm:p-12 border border-sky-100 relative overflow-hidden flex flex-col shadow-lg shadow-sky-900/5"
            >
              <div className="absolute -top-10 -right-10 text-sky-200/50 pointer-events-none rotate-12">
                <MapPin size={200} strokeWidth={1} />
              </div>
              
              <div className="relative z-10 mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-sky-100 flex items-center justify-center mb-6">
                  <MapPin className="text-sky-500" size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-slate-800 mb-3 tracking-tight">Service Area</h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                  Proudly serving the Greater Austin Area and surrounding communities with fast, reliable pool care.
                </p>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2 mb-10">
                {locations.map((loc, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white rounded-full text-[13px] sm:text-[14px] font-medium text-slate-700 shadow-sm border border-slate-200/60 hover:border-sky-300 hover:text-sky-700 transition-colors cursor-default">
                    {loc}
                  </span>
                ))}
              </div>
              
              <div className="relative z-10 mt-auto pt-6 border-t border-sky-200/60">
                <p className="text-[13px] text-slate-500 font-medium mb-2 uppercase tracking-wider">Not sure if we serve your area?</p>
                <a href="tel:5124413473" className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors text-[16px] sm:text-[18px] group">
                  <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                  (512) 441-3473
                </a>
              </div>
            </motion.div>

          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-lg text-[15px] sm:text-[16px] font-medium transition-all duration-200 ease-out shadow-sm shadow-sky-500/15 hover:shadow-md hover:shadow-sky-500/20 hover:-translate-y-[2px] group">
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:5124413473" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-8 py-4 rounded-lg text-[15px] font-medium transition-all duration-200 ease-out hover:shadow-md hover:-translate-y-[2px] group shadow-sm">
              <Phone size={18} className="text-sky-500 group-hover:rotate-12 transition-transform" />
              Call (512) 441-3473
            </a>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 sm:py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <span className="text-[14px] sm:text-[15px] font-medium tracking-widest text-sky-600 uppercase mb-3 block">Expert Troubleshooting</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-800 mb-6 leading-[1.15] tracking-tight">
                We handle the headaches. <br className="hidden sm:block" />
                <span className="italic font-normal text-sky-600">You enjoy the water.</span>
              </h2>
              
              <div className="space-y-6 text-[16px] sm:text-[18px] text-slate-600 leading-relaxed">
                <p>
                  Green water, stubborn algae, or a pump making strange noises? Pool ownership shouldn't feel like a second job. When things go wrong, it quickly turns your backyard oasis into a source of stress.
                </p>
                <p>
                  You don't need to be a chemist or a mechanic to have a perfect pool. We diagnose and resolve complex water chemistry and mechanical issues every single day, restoring balance and clarity without the guesswork.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200/60">
                <ul className="space-y-4">
                  {[
                    "Algae blooms and cloudy water recovery",
                    "Pump, heater, and filter diagnostics",
                    "Leak detection and plumbing repairs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2.5 shrink-0" />
                      <span className="text-[16px] text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] aspect-[4/3] lg:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1533481405265-e9ce0c044abb?q=80&w=1000&auto=format&fit=crop" 
                  alt="Pristine pool water" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/5" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 sm:py-32 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <span className="text-[14px] sm:text-[15px] font-medium tracking-widest text-sky-600 uppercase">How It Works</span>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium text-slate-800 leading-[1.2] mt-4 mb-6 tracking-tight">
              A Simple, Transparent <span className="italic font-normal text-sky-600">Process</span>
            </h2>
            <p className="text-[17px] sm:text-[18px] text-slate-600 leading-relaxed font-normal">
              Getting started with professional pool care should be effortless. Here is what to expect when you partner with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                num: "01",
                title: "Request a Quote",
                desc: "Contact us online or by phone. We'll discuss your needs and schedule a free on site evaluation."
              },
              {
                num: "02",
                title: "On-Site Assessment",
                desc: "A certified technician will inspect your pool and equipment to recommend the ideal service plan."
              },
              {
                num: "03",
                title: "Enjoy Your Pool",
                desc: "We take over the maintenance. You get to relax and enjoy a pristine, swim ready pool year round."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: i * 0.15, ease: "easeOut" }}
                className="relative group"
              >
                {/* Separator line for desktop */}
                {i !== 2 && (
                  <div className="hidden md:block absolute top-8 -right-6 lg:-right-8 w-12 lg:w-16 h-px bg-slate-200" />
                )}
                
                <div className="text-6xl font-serif italic text-slate-200 mb-6 group-hover:text-sky-500 transition-colors duration-300">
                  {step.num}
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-3">{step.title}</h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 sm:py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] aspect-[4/3] lg:aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professional pool cleaning service" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hidden sm:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center shrink-0">
                    <Star className="text-sky-500 fill-sky-500" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-medium text-slate-800">5.0</p>
                    <p className="text-sm text-slate-500 font-medium">Top Rated Service</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-[13px] sm:text-[14px] font-medium text-sky-600 uppercase tracking-widest mb-3">Why Choose Prime</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-800 mb-6 leading-[1.15]">
                A Pool Service You Can Actually Rely On.
              </h3>
              <p className="text-[16px] sm:text-[18px] text-slate-600 leading-relaxed mb-12">
                We know how frustrating it is to deal with unreliable contractors. That's why we built our business on consistency, clear communication, and doing the job right the first time.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: CalendarCheck,
                    title: "Dependable Weekly Service",
                    desc: "We show up on the same day every week. No guessing, no missed visits, just a clean pool."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Certified & Insured Technicians",
                    desc: "Our team is fully CPO certified, trained, and background checked for your peace of mind."
                  },
                  {
                    icon: CircleDollarSign,
                    title: "Clear, Upfront Pricing",
                    desc: "No hidden fees or surprise charges. You approve any necessary repairs before we start."
                  },
                  {
                    icon: MessageSquareText,
                    title: "Proactive Communication",
                    desc: "We send detailed service reports after every visit, so you always know your pool's status."
                  }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:shadow-md transition-all duration-200">
                        <Icon className="text-sky-500" size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-[17px] font-medium text-slate-800 mb-1">{item.title}</h4>
                        <p className="text-[15px] text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Nudge */}
              <div className="mt-12 pt-8 border-t border-slate-200/60">
                <a href="tel:5124413473" className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-500 hover:text-slate-800 transition-colors group">
                  Need a reliable pool guy? <span className="text-sky-600 group-hover:text-sky-700 font-medium flex items-center gap-1">Call us today <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-[#0B1120] relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at top center, black, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at top center, black, transparent 70%)'
          }}
        />
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              What people say
            </h2>
            <p className="text-[17px] sm:text-[18px] text-slate-400 leading-relaxed font-normal">
              Discover what our satisfied customers have to say about their experiences with our pool services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner, Austin",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
                text: "Since hiring Prime Pool Service, our pool has never looked better. Their weekly maintenance saves us hours of work and the water is always crystal clear."
              },
              {
                name: "David Patel",
                role: "Property Manager",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
                text: "I've worked with numerous pool contractors, but Prime stands out for their reliability and proactive communication. They handle our community pools flawlessly."
              },
              {
                name: "Emily Carter",
                role: "Homeowner, Round Rock",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
                text: "The team is incredibly professional. They fixed our broken pump the same day I called and their pricing was completely transparent. Highly recommended."
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: i * 0.1, ease: "easeOut" }}
                className="group relative bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col h-full overflow-hidden transition-colors hover:bg-white/[0.05]"
              >
                {/* Hover Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-6 shadow-lg border border-white/10"
                />
                
                <h4 className="text-[18px] font-medium text-white mb-1">{testimonial.name}</h4>
                <p className="text-[14px] text-slate-400 mb-6">{testimonial.role}</p>
                
                <p className="text-[16px] text-slate-300 leading-relaxed flex-grow relative z-10">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto gap-16 lg:flex lg:items-center lg:justify-between">
            
            {/* Left Side: Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-lg space-y-4 lg:max-w-md"
            >
              <span className="text-[14px] sm:text-[15px] font-medium tracking-widest text-sky-600 uppercase">Contact Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium text-slate-800 leading-[1.2] tracking-tight">
                Ready for a <span className="italic font-normal text-sky-600">Pristine</span> Pool?
              </h2>
              <p className="text-[17px] sm:text-[18px] text-slate-600 leading-relaxed font-normal pt-4">
                We’re here to help. Request a free quote, ask a question, or schedule your first service today. We look forward to hearing from you!
              </p>
              
              <ul className="mt-10 space-y-6">
                {[
                  { icon: Mail, text: "support@primepoolservice.com" },
                  { icon: Phone, text: "(512) 441-3473" },
                  { icon: MapPin, text: "Austin, TX & Surrounding Areas" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex items-center gap-x-4 group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-sky-500 shrink-0 group-hover:bg-sky-50 group-hover:scale-105 transition-all duration-200">
                        <Icon size={20} />
                      </div>
                      <p className="text-[16px] font-medium text-slate-700">{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="flex-1 mt-16 lg:mt-0 lg:max-w-lg w-full"
            >
              <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 text-slate-600 bg-white border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none rounded-xl transition-all" 
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 text-slate-600 bg-white border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none rounded-xl transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 text-slate-600 bg-white border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none rounded-xl transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                    <textarea 
                      required 
                      className="w-full h-32 px-4 py-3 resize-none text-slate-600 bg-white border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none rounded-xl transition-all" 
                      placeholder="Tell us about your pool..."
                    ></textarea>
                  </div>
                  <button className="w-full px-8 py-4 text-white font-medium bg-sky-500 hover:bg-sky-600 active:bg-sky-700 rounded-lg transition-all shadow-sm shadow-sky-500/30">
                    Get Your Free Quote
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
