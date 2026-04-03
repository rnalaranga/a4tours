"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Star, 
  Users, 
  CheckCircle2, 
  XCircle, 
  Calendar,
  ChevronRight,
  ChevronDown,
  Info,
  ExternalLink,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { packages, badgeColors, Package } from "@/data/packages";
import { notFound } from "next/navigation";

export default function PackageDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const pkgId = parseInt(id);
  const pkg = packages.find((p) => p.id === pkgId);

  const [activeDay, setActiveDay] = useState<number | null>(1);

  if (!pkg) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[450px] md:min-h-[500px] flex items-end overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-dark"
          style={{ 
            background: "linear-gradient(to bottom, rgba(85,0,0,0.4) 0%, rgba(85,0,0,0.8) 70%, #550000 100%)",
            backgroundColor: "#550000"
          }}
        />
        
        {/* Shimmer Placeholder for Image */}
        <div className="absolute inset-0 z-[-1] img-placeholder">
          <div className="flex flex-col items-center justify-center opacity-30 text-white">
            <span className="text-6xl mb-4">🏝️</span>
            <p className="text-sm font-bold tracking-widest uppercase">Premium Gallery Image</p>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/packages"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-semibold transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Packages
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <span 
                className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                style={{ background: badgeColors[pkg.badge] || "#550000" }}
              >
                {pkg.badge}
              </span>
              <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white">
                {pkg.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {pkg.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/90">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#c9a84c] md:w-5 md:h-5" />
                <span className="font-bold text-sm md:text-base">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#c9a84c] md:w-5 md:h-5" />
                <span className="font-bold text-sm md:text-base">{pkg.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-[#c9a84c] fill-[#c9a84c] md:w-5 md:h-5" />
                <span className="font-bold text-sm md:text-base">{pkg.rating} ({pkg.reviews})</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT GRID ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2">
              
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-black text-[#550000] mb-6 flex items-center gap-3">
                  <Info size={28} className="text-[#c9a84c]" /> Overview
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {pkg.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { label: "Group Size", val: pkg.pax, icon: Users },
                    { label: "Duration", val: pkg.duration, icon: Clock },
                    { label: "Category", val: pkg.category, icon: Star },
                    { label: "Language", val: "English", icon: Info },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#fafafa] border border-gray-100">
                      <item.icon size={20} className="text-[#550000] mb-2" />
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-bold text-gray-800">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-12">
                <h2 className="text-2xl font-black text-[#550000] mb-6 flex items-center gap-3">
                  <Calendar size={28} className="text-[#c9a84c]" /> Detailed Itinerary
                </h2>
                
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <div 
                      key={day.day} 
                      className={`rounded-2xl border transition-all duration-300 ${activeDay === day.day ? "border-[#550000] ring-1 ring-[#550000]/20 shadow-lg" : "border-gray-100 hover:border-gray-300"}`}
                    >
                      <button 
                        onClick={() => setActiveDay(activeDay === day.day ? null : day.day)}
                        className="w-full text-left p-4 md:p-6 flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm font-black transition-colors ${activeDay === day.day ? "bg-[#550000] text-white" : "bg-gray-100 text-[#550000] group-hover:bg-[#550000]/10"}`}>
                            D{day.day}
                          </div>
                          <div>
                            <p className="text-[10px] md:text-xs text-[#c9a84c] font-black uppercase tracking-widest">Day {day.day}</p>
                            <h3 className="text-base md:text-lg font-bold text-gray-800 leading-tight">{day.title}</h3>
                          </div>
                        </div>
                        <ChevronDown 
                          size={18} 
                          className={`text-gray-400 transition-transform duration-300 md:w-5 md:h-5 ${activeDay === day.day ? "rotate-180" : ""}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDay === day.day && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t border-gray-50 flex items-start gap-4 md:gap-6">
                              <div className="w-10 md:w-12 shrink-0 flex justify-center">
                                <div className="w-0.5 h-full bg-dashed bg-gray-200 min-h-[40px]" />
                              </div>
                              <div className="space-y-3 pb-2 pt-4">
                                {day.activities.map((act, i) => (
                                  <div key={i} className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0 mt-1.5" />
                                    <span className="text-sm font-medium leading-relaxed">{act}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights List */}
              <div className="mb-12">
                <h2 className="text-2xl font-black text-[#550000] mb-6">Key Journey Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-[#c9a84c]/20 bg-[#c0a240]/5">
                      <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="font-bold text-gray-800">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions / Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-green-700 flex items-center gap-2">
                    <CheckCircle2 size={24} /> What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium italic">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 size={14} className="text-green-600" />
                        </div>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-red-700 flex items-center gap-2">
                    <XCircle size={24} /> What&apos;s Excluded
                  </h3>
                  <ul className="space-y-3">
                    {pkg.excludes.map((exc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium italic">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                          <XCircle size={14} className="text-red-600" />
                        </div>
                        {exc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Column: Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                
                {/* Price Card */}
                <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 mb-8 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/10 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-125" />
                  
                  <div className="mb-6 relative z-10">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">Starting From</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#550000]">{pkg.priceDisplay}</span>
                      <span className="text-xs font-bold text-gray-400 uppercase">/ person</span>
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <Link 
                      href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-[#550000] text-white rounded-full font-black text-sm transition-all duration-300 hover:bg-[#3a0000] hover:gap-4 shadow-xl shadow-[#550000]/20"
                    >
                      Book This Journey <ArrowRight size={18} />
                    </Link>
                    
                    <Link 
                      href="/contact"
                      className="w-full flex items-center justify-center gap-2 py-4 border-2 border-[#550000] text-[#550000] rounded-full font-black text-sm transition-all duration-300 hover:bg-[#550000]/5"
                    >
                      Inquire Customization
                    </Link>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between">
                    <div className="text-center group">
                      <div className="w-10 h-10 rounded-full bg-[#f8f5f5] flex items-center justify-center mx-auto mb-2 group-hover:bg-[#550000] group-hover:text-white transition-colors">
                        <Phone size={18} />
                      </div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                    </div>
                    <div className="text-center group">
                      <div className="w-10 h-10 rounded-full bg-[#f8f5f5] flex items-center justify-center mx-auto mb-2 group-hover:bg-[#550000] group-hover:text-white transition-colors">
                        <Mail size={18} />
                      </div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</p>
                    </div>
                    <div className="text-center group">
                      <div className="w-10 h-10 rounded-full bg-[#f8f5f5] flex items-center justify-center mx-auto mb-2 group-hover:bg-[#550000] group-hover:text-white transition-colors">
                        <Info size={18} />
                      </div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Help</p>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="p-6 rounded-2xl bg-[#550000]/5 border border-[#550000]/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#550000]/10 shadow-sm">
                    <CheckCircle2 size={24} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#550000]">Secure Booking</p>
                    <p className="text-xs text-gray-500 font-medium italic">Verified local experts guide you</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#c9a84c] text-sm font-black tracking-[0.2em] uppercase">Tailored Experiences</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#550000] mt-4 mb-8 leading-tight">
            Ready to Start Your Personalized <br/>Sri Lankan Narrative?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link 
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-[#550000] text-white rounded-full font-black transition-all hover:bg-[#3a0000] hover:scale-105 shadow-xl shadow-[#550000]/20"
              >
                Inquire Now
              </Link>
              <Link 
                href="/packages"
                className="w-full sm:w-auto px-10 py-5 bg-white text-[#550000] border-2 border-[#550000] rounded-full font-black transition-all hover:bg-gray-50"
              >
                View More Packages
              </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
