"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Star,
  Clock,
  MapPin,
  Filter,
  Search,
  ArrowRight,
  Compass,
  Users,
  ChevronDown,
  Info,
  X,
} from "lucide-react";
import { packages, categories, badgeColors, Package } from "@/data/packages";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  const { ref, inView } = useInView(0.05);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden hover-lift flex flex-col h-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.6s ease ${(index % 3) * 0.1}s`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Image */}
      <div className="img-placeholder h-48 relative shrink-0">
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold z-10"
          style={{ background: badgeColors[pkg.badge] || "#550000" }}
        >
          {pkg.badge}
        </div>
        <div
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold z-10"
          style={{ background: "rgba(255,255,255,0.9)", color: "#550000" }}
        >
          {pkg.category}
        </div>
        <div className="text-center text-gray-400 opacity-60">
          <Compass size={36} className="mb-1 opacity-30 mx-auto" />
          <p className="text-xs font-medium">📸 Gallery Image Placeholder</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <MapPin size={12} className="text-[#550000]" />
          <span className="text-gray-400 text-xs">{pkg.location}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight min-h-[3rem]">{pkg.title}</h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {pkg.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: "#fff0f0", color: "#550000" }}
            >
              {h}
            </span>
          ))}
          {pkg.highlights.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">
              +{pkg.highlights.length - 3} more
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-100 mt-auto">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <Clock size={12} className="text-[#550000]" />
            {pkg.duration}
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <Users size={12} className="text-[#550000]" />
            {pkg.pax}
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} className="text-[#c9a84c] fill-[#c9a84c]" />
            <span className="text-sm font-semibold">{pkg.rating}</span>
            <span className="text-xs text-gray-400">({pkg.reviews})</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-2">
           <Link
            href={`/packages/${pkg.id}`}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border border-[#550000]/20 text-[#550000] hover:bg-[#550000]/5"
          >
            <Info size={14} /> View Details
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 hover:gap-2.5"
            style={{ background: "#550000", color: "white" }}
          >
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const filtered = packages
    .filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      {/* Hero Banner */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #550000 0%, #3a0000 100%)" }}
      >
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "#c9a84c", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "white", transform: "translate(-30%, 30%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase">Explore & Discover</span>
          <h1 className="text-5xl font-black text-white mt-2 mb-4">
            Our Tour Packages
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{ background: "linear-gradient(90deg, #c9a84c, #f0d080)" }} />
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Choose from our carefully curated collection of Sri Lanka tour packages — something for every traveler.
          </p>
        </div>
      </section>

      {/* Filters Sticky Bar */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3 md:py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsFilterExpanded(!isFilterExpanded)}
            className="md:hidden w-full flex items-center justify-between px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:border-[#550000]/30 transition-all mb-2"
          >
            <div className="flex items-center gap-2">
              <Filter size={16} className={isFilterExpanded ? "text-[#550000]" : "text-gray-500"} />
              {isFilterExpanded ? "Hide Filters" : "Filter & Search Packages"}
            </div>
            {isFilterExpanded ? <X size={16} /> : <ChevronDown size={16} className="text-gray-400" />}
          </button>

          {/* Collapsible Content Container */}
          <div className={`
            ${isFilterExpanded ? "max-h-[500px] opacity-100 mt-4 mb-2" : "max-h-0 md:max-h-[500px] opacity-0 md:opacity-100 overflow-hidden md:overflow-visible"}
            transition-all duration-500 ease-in-out md:mt-0 md:mb-0
          `}>
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tours, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-[#550000] focus:ring-1 focus:ring-[#550000]/20 transition-all"
                  id="package-search"
                />
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                <span className="text-xs font-semibold text-gray-400 md:hidden uppercase tracking-wider ml-1">Sort By</span>
                <div className="relative flex-1 md:flex-none">
                  <Filter size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full md:w-[200px] pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-[#550000] bg-white text-gray-700 cursor-pointer appearance-none transition-all"
                    id="package-sort"
                  >
                    <option value="default">Default Sorting</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Category Pills */}
            <div className="mt-4 border-t border-gray-50 pt-4 md:border-none md:pt-0">
               <span className="text-[10px] font-bold text-gray-400 md:hidden uppercase tracking-[0.2em] mb-3 block ml-1">Categories</span>
              <div className="flex gap-2 flex-wrap md:flex-nowrap overflow-x-auto pb-2 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      // Auto-collapse on mobile after selection if desired, but maybe keep open for refine
                    }}
                    className="px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap border"
                    style={{
                      background: activeCategory === cat ? "#550000" : "white",
                      borderColor: activeCategory === cat ? "#550000" : "#eee",
                      color: activeCategory === cat ? "white" : "#666",
                      boxShadow: activeCategory === cat ? "0 4px 12px rgba(85,0,0,0.15)" : "none",
                    }}
                    id={`category-${cat.toLowerCase().replace(" ", "-")}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-14 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 text-sm font-medium">
              Showing <span className="font-bold text-[#550000]">{filtered.length}</span> signature collections
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400 bg-white rounded-3xl border border-dashed border-gray-200">
              <Compass size={64} className="mx-auto mb-4 opacity-20" />
              <p className="text-xl font-bold text-gray-600">No journeys match your search</p>
              <p className="text-sm mt-2 max-w-xs mx-auto">Try a different category or search term to discover hidden treasures.</p>
              <button 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                className="mt-6 text-[#550000] font-bold text-sm hover:underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-[#550000]/10"
            style={{ background: "linear-gradient(135deg, #550000, #3a0000)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 bg-[#c9a84c] -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5 bg-white translate-y-1/2 -translate-x-1/4" />
            
            <div className="relative z-10 text-center md:text-left md:flex items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                  Craft Your Own <br/>Unique Adventure
                </h2>
                <p className="text-white/70 mb-8 text-lg leading-relaxed">
                  Can&apos;t find the perfect fit? Our travel experts specialize in creating fully customized itineraries centered around your unique interests and rhythm.
                </p>
                <Link href="/contact" className="btn-gold shadow-lg shadow-black/20">
                  Request Custom Design <ArrowRight size={18} />
                </Link>
              </div>
              <div className="hidden md:block w-48 h-48 opacity-20 text-white">
                <Compass size={192} className="animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
