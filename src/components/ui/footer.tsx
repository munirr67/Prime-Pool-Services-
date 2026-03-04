import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Waves } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0B1120] py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start">
          <div className="flex w-full max-w-sm flex-col justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/20">
                <Waves className="text-white" size={24} strokeWidth={2} />
              </div>
              <span className="text-2xl font-medium text-white tracking-tight">
                Prime<span className="text-sky-400 font-light">Pools</span>
              </span>
            </div>
            <p className="text-[15px] text-slate-400 leading-relaxed mt-2">
              Austin's premier pool cleaning and maintenance service. We keep your pool pristine so you can focus on enjoying it.
            </p>
            <ul className="flex items-center space-x-5 text-slate-400 mt-4">
              <li className="hover:text-sky-400 transition-colors">
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              </li>
              <li className="hover:text-sky-400 transition-colors">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              </li>
              <li className="hover:text-sky-400 transition-colors">
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              </li>
              <li className="hover:text-sky-400 transition-colors">
                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </li>
            </ul>
          </div>
          
          <div className="grid w-full gap-8 sm:grid-cols-3 lg:gap-16">
            <div>
              <h3 className="mb-6 text-[16px] font-medium text-white">Services</h3>
              <ul className="space-y-4 text-[15px] text-slate-400">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Pool Cleaning</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Equipment Repairs</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Pool Remodeling</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Commercial Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-[16px] font-medium text-white">Company</h3>
              <ul className="space-y-4 text-[15px] text-slate-400">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-[16px] font-medium text-white">Resources</h3>
              <ul className="space-y-4 text-[15px] text-slate-400">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Pool Care Blog</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Service Areas</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-[14px] text-slate-500 md:flex-row md:items-center">
          <p className="order-2 md:order-1">© {new Date().getFullYear()} Prime Pool Service. All rights reserved.</p>
          <ul className="order-1 flex flex-col gap-4 sm:flex-row sm:gap-8 md:order-2">
            <li><a href="#" className="hover:text-sky-400 transition-colors">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
