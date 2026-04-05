"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  Star,
  Users,
  Award,
  Compass,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle,
  PhoneCall,
  Car,
  Leaf,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/* ── helpers ─────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── data ────────────────────────────────────────── */
const featuredPackages = [
  {
    id: 1,
    title: "Sigiriya & Cultural Triangle",
    location: "Sigiriya, Dambulla, Polonnaruwa",
    duration: "5 Days / 4 Nights",
    price: "From LKR 45,000",
    rating: 4.9,
    reviews: 128,
    category: "Cultural",
    badge: "Best Seller",
    highlights: ["UNESCO Sites", "Rock Fortress", "Ancient Temples"],
    image: "/images/dest-sigiriya.jpg",
  },
  {
    id: 2,
    title: "Southern Coast Beach Escape",
    location: "Mirissa, Unawatuna, Galle",
    duration: "4 Days / 3 Nights",
    price: "From LKR 38,000",
    rating: 4.8,
    reviews: 96,
    category: "Beach",
    badge: "Popular",
    highlights: ["Whale Watching", "Surf Lessons", "Galle Fort"],
    image: "/images/dest-mirissa.jpg",
  },
  {
    id: 3,
    title: "Ella & Tea Country Retreat",
    location: "Ella, Nuwara Eliya, Kandy",
    duration: "6 Days / 5 Nights",
    price: "From LKR 55,000",
    rating: 4.9,
    reviews: 142,
    category: "Nature",
    badge: "Premium",
    highlights: ["Train Journey", "Tea Plantations", "Nine Arch Bridge"],
    image: "/images/gallery-1.png",
  },
  {
    id: 4,
    title: "Wildlife Safari Adventure",
    location: "Yala, Udawalawe, Minneriya",
    duration: "7 Days / 6 Nights",
    price: "From LKR 72,000",
    rating: 4.7,
    reviews: 84,
    category: "Wildlife",
    badge: "Adventure",
    highlights: ["Leopard Spotting", "Elephant Gathering", "Bird Watching"],
    image: "/images/dest-yala.jpg",
  },
];

const stats = [
  { value: "5000+", label: "Happy Travelers", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Tour Packages", icon: Compass },
  { value: "4.9★", label: "Average Rating", icon: Star },
];

const testimonials = [
  {
    name: "Priya Sharma",
    country: "India",
    text: "A4 Tours made our Sri Lanka trip absolutely magical. The guides were knowledgeable, the hotels were top-notch, and every detail was perfect. Highly recommend!",
    rating: 5,
    tour: "Cultural Triangle Tour",
  },
  {
    name: "James Miller",
    country: "Australia",
    text: "We booked the wildlife safari package and it exceeded all expectations. Saw elephants, leopards, and so much more. The team was professional and caring throughout.",
    rating: 5,
    tour: "Wildlife Safari Adventure",
  },
  {
    name: "Anna Kowalski",
    country: "Poland",
    text: "The Ella retreat was breathtaking. A4 Tours handled everything seamlessly. The scenic train ride was a highlight of our entire holiday. Thank you so much!",
    rating: 5,
    tour: "Ella & Tea Country Retreat",
  },
];

const whyUs = [
  {
    title: "Expert Local Guides",
    description:
      "Our guides are certified professionals with deep local knowledge and passion for sharing Sri Lanka's beauty.",
    icon: "🏅",
  },
  {
    title: "Tailored Experiences",
    description:
      "Every tour is customizable. We craft itineraries that match your interests, pace, and budget perfectly.",
    icon: "✨",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock assistance throughout your journey. We're always just a call away, no matter where you are.",
    icon: "📞",
  },
  {
    title: "Best Price Guarantee",
    description:
      "We offer competitive pricing with no hidden fees. Transparent costs and unbeatable value for your money.",
    icon: "💎",
  },
];

const discoveryFeatures = [
  {
    title: "Cultural Legacy",
    desc: "Ancient cities and sacred temples spanning 2,500 years.",
    icon: "🛕",
  },
  {
    title: "Natural Wonders",
    desc: "Misty tea gardens and lush wildlife sanctuaries.",
    icon: "🌿",
  },
  {
    title: "Tropical Bliss",
    desc: "Unspoiled golden coasts and turquoise indian ocean.",
    icon: "🏖️",
  },
];

const galleryItems = [
  { id: 1, title: "Tea Country", category: "Nature", image: "/images/gallery-1.png" },
  { id: 2, title: "Galle Fort", category: "Heritage", image: "/images/gallery-2.jpg" },
  { id: 3, title: "Wild Elephant", category: "Wildlife", image: "/images/gallery-3.jpg" },
  { id: 4, title: "Golden Coast", category: "Beach", image: "/images/gallery-4.jpg" },
  { id: 5, title: "Stilt Fishermen", category: "Tradition", image: "/images/gallery-5.jpg" },
  { id: 6, title: "Nine Arch Bridge", category: "Scenic", image: "/images/gallery-6.jpg" },
];

const travelerMemories = [
  "/images/a4tours-happy_traveller1.jpg",
  "/images/a4tours-happy_traveller2.jpg",
  "/images/a4tours-happy_traveller3.jpg",
  "/images/a4tours-happy_traveller4.jpg",
  "/images/a4tours-happy_traveller5.jpg",
  "/images/a4tours-happy_traveller6.jpg",
  "/images/a4tours-happy_traveller7.jpg",
  "/images/a4tours-happy_traveller8.jpg",
  "/images/a4tours-happy_traveller9.jpg",
  "/images/a4tours-happy_traveller10.jpg",
  "/images/a4tours-happy_traveller11.jpg",
  "/images/a4tours-happy_traveller12.jpg",
  "/images/a4tours-happy_traveller13.jpg",
  "/images/a4tours-happy_traveller14.jpg",
];

const topDestinations = [
  {
    name: "Sigiriya",
    subtitle: "The Lion Rock",
    desc: "Ascend the ancient rock fortress rising dramatically from the central plains. A marvel of early engineering and art, offering breathtaking panoramic views of the cultural triangle.",
    image: "/images/dest-sigiriya.jpg",
  },
  {
    name: "Ella",
    subtitle: "The Emerald Highlands",
    desc: "Immerse yourself in verdant rolling tea estates, misty mountain peaks, and iconic railway journeys. The perfect retreat for cool breezes and nature hikes.",
    image: "/images/dest-ella.jpg",
  },
  {
    name: "Mirissa",
    subtitle: "Tropical Coast & Whales",
    desc: "A sun-kissed paradise famous for swaying palms, vibrant nightlife, and spectacular whale watching tours in the deep azure waters of the Indian Ocean.",
    image: "/images/dest-mirissa.jpg",
  },
  {
    name: "Kandy",
    subtitle: "The Sacred Capital",
    desc: "Surrounded by mountains and centered around a serene lake, Kandy is the cultural heartland, home to the revered Temple of the Sacred Tooth Relic.",
    image: "/images/dest-kandy.jpg",
  },
  {
    name: "Yala",
    subtitle: "Wild Frontiers",
    desc: "Venture into the dense brush of Yala National Park, where the elusive Sri Lankan leopard roams alongside magnificent elephant herds and diverse birdlife.",
    image: "/images/dest-yala.jpg",
  },
  {
    name: "Galle",
    subtitle: "Dutch Heritage Fort",
    desc: "Wander through cobblestone streets lined with colonial Dutch architecture, chic boutique cafes, and historic ramparts overlooking the sunset sea.",
    image: "/images/dest-galle.jpg",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Sri Lankan Street Food",
    excerpt: "Discover the vibrant flavors of kottu roti, hoppers, and spicy sambols that define the island's culinary landscape.",
    date: "Mar 15, 2026",
    category: "Culinary",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Hidden Beaches of the Southern Coast",
    excerpt: "Escape the crowds and explore these secret, pristine sandy stretches for the ultimate tropical relaxation.",
    date: "Apr 02, 2026",
    category: "Guides",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "A Journey Through the Ceylon Tea Trails",
    excerpt: "Experience the misty mountains, historic estates, and the fascinating process behind the world's finest tea.",
    date: "Apr 10, 2026",
    category: "Culture",
    readTime: "6 min read",
  },
];

/* ── components ───────────────────────────────────── */

function PackageCard({ pkg, index }: { pkg: typeof featuredPackages[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const badgeColors: Record<string, string> = {
    "Best Seller": "#550000",
    Popular: "#1a6b3a",
    Premium: "#c9a84c",
    Adventure: "#1a4480",
  };

  return (
    <div
      ref={ref}
      className="group rounded-[2rem] overflow-hidden bg-white transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
        boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
        border: "1px solid #f0f0f0",
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Soft overlay to ensure badge readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/10 mix-blend-overlay pointer-events-none" />

        {/* Floating Badges */}
        <div className="absolute top-5 left-5 flex gap-2 z-10">
          <div
            className="px-3 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-lg"
            style={{ background: badgeColors[pkg.badge] || "#550000" }}
          >
            {pkg.badge}
          </div>
        </div>

        <div
          className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-10"
          style={{
            background: "rgba(255,255,255,0.95)",
            color: "#550000",
            backdropFilter: "blur(4px)",
          }}
        >
          {pkg.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 opacity-50">
            <MapPin size={12} className="text-[#550000]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{pkg.location}</span>
          </div>
          <h3 className="font-black text-xl text-gray-900 leading-tight group-hover:text-[#550000] transition-colors">
            {pkg.title}
          </h3>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {pkg.highlights.map((h) => (
            <span
              key={h}
              className="text-[10px] px-3 py-1.5 rounded-lg font-bold border border-gray-100 text-gray-500 uppercase tracking-wide group-hover:border-[#550000]/10 transition-colors"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Meta Info Bar */}
        <div className="flex items-center justify-between py-5 border-y border-gray-50">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
            <Clock size={14} className="text-[#550000]/60" />
            {pkg.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <Star size={14} className="text-[#c9a84c] fill-[#c9a84c]" />
            <span className="text-sm font-black text-gray-900">{pkg.rating}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-1">
          <div className="space-y-0.5">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rate</div>
            <div className="font-black text-[#550000] text-xl">{pkg.price}</div>
          </div>
          <Link
            href="/packages"
            className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-[#550000] transition-all duration-300 hover:bg-[#550000] hover:text-white hover:border-[#550000]"
          >
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const Icon = stat.icon;
  return (
    <div
      ref={ref}
      className="relative p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-gray-50/50 border border-gray-100 overflow-hidden group hover:border-[#c9a84c]/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-500 w-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
      }}
    >
      {/* Giant Faded Background Icon */}
      <Icon className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-32 sm:h-32 text-gray-900/[0.03] group-hover:scale-110 group-hover:text-[#c9a84c]/[0.05] transition-all duration-700" />

      <div className="relative z-10 flex flex-col items-start gap-3">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-[#550000] group-hover:scale-110 group-hover:bg-[#550000] group-hover:text-white transition-all duration-500">
          <Icon size={18} className="sm:hidden" />
          <Icon size={22} className="hidden sm:block" />
        </div>
        <div>
          <div className="text-xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-0.5 leading-none">{stat.value}</div>
          <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────── */
const heroImages = [
  { src: "/images/hero-sigiriya.jpg", label: "Sigiriya Rock Fortress" },
  { src: "/images/hero-golden-beach.jpg", label: "Sri Lanka Beach" },
  { src: "/images/hero-beach.jpg", label: "Downsouth Sri Lanka" },
  { src: "/images/hero-culture.jpg", label: "Sri Lanka Culture and Heritage" },
  { src: "/images/hero-wildlife.jpg", label: "Wildlife Safari Sri Lanka" },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
    const testimonialTimer = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % testimonials.length),
      3000
    );
    const slideTimer = setInterval(
      () => setHeroSlide((p) => (p + 1) % heroImages.length),
      4000
    );
    return () => {
      clearInterval(testimonialTimer);
      clearInterval(slideTimer);
    };
  }, []);

  const { ref: whyRef, inView: whyInView } = useInView(0.1);
  const { ref: testRef, inView: testInView } = useInView(0.1);
  const { ref: discoveryRef, inView: discoveryInView } = useInView(0.1);
  const { ref: galleryRef, inView: galleryInView } = useInView(0.1);
  const { ref: blogRef, inView: blogInView } = useInView(0.1);

  // Dynamic Theme Color Observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('[data-theme-color]');
      const scrollCenter = window.scrollY + window.innerHeight / 3;

      let activeColor = "#016bb5"; // Default to sky blue for Hero
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (scrollCenter >= top && scrollCenter <= bottom) {
          activeColor = sec.getAttribute('data-theme-color') || activeColor;
        }
      });

      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor && metaThemeColor.getAttribute('content') !== activeColor) {
        metaThemeColor.setAttribute('content', activeColor);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── DRIVING TRIP OVERLAYS (Wayfinding & Parallax Flora) ── */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        {/* The Wayfinding Road Line */}
        <div className="absolute left-4 md:left-12 top-0 bottom-0 w-[2px] opacity-10">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-400 to-transparent flex flex-col justify-between py-24">
             {Array.from({ length: 40 }).map((_, i) => (
               <div key={i} className="w-full h-8 bg-gray-400/30 rounded-full" />
             ))}
          </div>
        </div>

        {/* The Journey Marker (SUV Icon) */}
        <JourneyMarker />

        {/* Foreground Parallax Flora (Tilted Leaves) */}
        <ParallaxFlora />
      </div>

      <section data-theme-color="#550000" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* ── Cinematic Ken Burns Slideshow ── */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes kenburns-0 {
            0%   { transform: scale(1.08) translate(0%, 0%); }
            100% { transform: scale(1.18) translate(-2%, -1.5%); }
          }
          @keyframes kenburns-1 {
            0%   { transform: scale(1.1) translate(2%, 1%); }
            100% { transform: scale(1.2) translate(-1.5%, 0%); }
          }
          @keyframes kenburns-2 {
            0%   { transform: scale(1.08) translate(-1.5%, 0.5%); }
            100% { transform: scale(1.18) translate(1.5%, -1%); }
          }
          @keyframes kenburns-3 {
            0%   { transform: scale(1.12) translate(1%, -1%); }
            100% { transform: scale(1.2) translate(-2%, 1%); }
          }
          @keyframes kenburns-4 {
            0%   { transform: scale(1.08) translate(-1%, 1%); }
            100% { transform: scale(1.18) translate(2%, -0.5%); }
          }
          @keyframes fadeInUp {
            0%   { opacity: 0; transform: translateY(6px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}} />

        {/* Slide stack */}
        {heroImages.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: i === heroSlide ? 1 : 0,
              transition: "opacity 1.2s ease",
              zIndex: i === heroSlide ? 0 : -1,
            }}
          >
            <img
              src={slide.src}
              alt={slide.label}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                animation: i === heroSlide ? `kenburns-${i} 7s ease-out forwards` : "none",
              }}
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 70% 30%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.88) 100%)",
            zIndex: 1,
          }}
        />

        {/* Dynamic Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="max-w-4xl space-y-8">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4"
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#c9a84c",
                backdropFilter: "blur(4px)",
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease 0.1s",
              }}
            >
              <Compass size={12} className="animate-spin-slow" />
              Sri Lanka&apos;s Boutique Collection
            </div>

            <h1
              className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              Unveil the <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Untold Stories
              </span>
            </h1>

            <p
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
              }}
            >
              Beyond the landmarks, we curate journeys that connect you with the soul of our island.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-5 justify-center pt-4"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
              }}
            >
              <Link href="/packages" className="btn-gold px-10 py-5 rounded-full text-base shadow-[0_15px_40px_rgba(85,0,0,0.3)]">
                Explore Packages <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="btn-outline px-10 py-5 rounded-full text-base border-white/20 hover:border-white/40">
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>

        {/* Authenticity Badge - Left Corner */}
        <div
          className="absolute bottom-12 left-12 z-20 hidden md:flex items-center gap-4 p-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateX(0)" : "translateX(-40px)",
            transition: "all 1s ease 0.8s",
          }}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#c9a84c]">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs uppercase">A4</div>
          </div>
          <div>
            <div className="text-white text-sm font-bold">Local Expertise</div>
            <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest leading-none">Registered Tour Agency</div>
          </div>
        </div>

        {/* Slide Indicators — bottom right */}
        <div
          className="absolute bottom-10 right-10 z-20 flex items-center gap-2"
          style={{ opacity: heroLoaded ? 1 : 0, transition: "all 1s ease 1s" }}
        >
          {heroImages.map((slide, i) => (
            <button
              key={i}
              onClick={() => setHeroSlide(i)}
              title={slide.label}
              className="transition-all duration-500"
              style={{
                width: i === heroSlide ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === heroSlide ? "#c9a84c" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        {/* Current slide label */}
        <div
          className="absolute bottom-10 left-12 z-20 hidden md:block"
          style={{ opacity: heroLoaded ? 1 : 0, transition: "all 1s ease 1s" }}
        >
          <span
            key={heroSlide}
            className="text-[10px] font-black tracking-[0.35em] uppercase"
            style={{
              color: "rgba(255,255,255,0.45)",
              animation: "fadeInUp 0.6s ease forwards",
            }}
          >
            {heroImages[heroSlide].label}
          </span>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
          style={{ opacity: heroLoaded ? 1 : 0, transition: "all 1s ease 1s" }}
        >
          <span className="text-[10px] font-black tracking-[0.4em] uppercase">Begin Your Journey</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section data-theme-color="#ffffff" className="py-8 md:py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRIPADVISOR HIGHLIGHT ── */}
      <section data-theme-color="#00aa6c" className="relative py-14 md:py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #003c28 0%, #00613f 50%, #004d32 100%)" }}>
        {/* Decorative orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #34e0a1, transparent 70%)" }} />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #34e0a1, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

            {/* Left — Branding + Rating */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]" style={{ background: "rgba(52,224,161,0.15)", border: "1px solid rgba(52,224,161,0.3)", color: "#34e0a1" }}>
                Verified Reviews
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-6xl md:text-7xl font-black text-white leading-none">4.9</span>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#34e0a1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      ))}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>out of 5.0</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm md:text-base">Based on <span className="text-white font-bold">200+</span> verified traveller reviews</p>
              </div>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g1500185-d3801228-Reviews-A4_Tours-Katunayake_Negombo_Western_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105"
                style={{ background: "#34e0a1", color: "#003c28" }}
              >
                Read All Reviews <ArrowRight size={16} />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-48" style={{ background: "linear-gradient(to bottom, transparent, rgba(52,224,161,0.3), transparent)" }} />

            {/* Right — Official TripAdvisor Widget + Badges */}
            <div className="flex-1 flex flex-col items-center lg:items-start gap-8">
              {/* Official Widget */}
              <div className="w-full max-w-xs">
                <div id="TA_cdsratingsonlynarrow431" className="TA_cdsratingsonlynarrow">
                  <ul id="aLaIYQRb" className="TA_links rM95FZY">
                    <li id="kjUQFz" className="SWrLhidkx3p6">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.tripadvisor.com/Attraction_Review-g1500185-d3801228-Reviews-A4_Tours-Katunayake_Negombo_Western_Province.html">
                        <img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" alt="TripAdvisor" className="h-10 w-auto" />
                      </a>
                    </li>
                  </ul>
                </div>
                <Script
                  src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&uniq=431&locationId=3801228&lang=en_US&border=true&display_version=2"
                  strategy="lazyOnload"
                  data-loadtrk
                />
              </div>

              {/* Award badges row */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {[
                  { label: "Travelers\u2019 Choice", year: "2024" },
                  { label: "Certificate of", year: "Excellence" },
                  { label: "Top Rated", year: "Sri Lanka" },
                ].map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl text-center" style={{ background: "rgba(52,224,161,0.08)", border: "1px solid rgba(52,224,161,0.2)" }}>
                    <div className="text-[10px] font-black uppercase tracking-wider leading-tight" style={{ color: "#34e0a1" }}>{badge.label}</div>
                    <div className="text-white font-black text-sm mt-1">{badge.year}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── DISCOVERY (COLOR RICH SPLIT) ── */}
      <section data-theme-color="#051320" className="relative py-32 bg-gradient-to-br from-[#051320] via-[#0a2342] to-[#040e18] overflow-hidden" ref={discoveryRef}>
        {/* Decorative Background Image Overlay for mobile fullness */}
        <div className="absolute inset-0 opacity-[0.25]">
          {/* The user should place dest-kandy.jpg or any nice bg here */}
          <img src="/images/dest-kandy.jpg" className="w-full h-full object-cover blur-md mix-blend-luminosity" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051320] via-[#0a2342]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div
              className="lg:col-span-5 space-y-10"
              style={{
                opacity: discoveryInView ? 1 : 0,
                transform: discoveryInView ? "translateX(0)" : "translateX(-40px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#c9a84c] drop-shadow-md">Infinite Discovery</span>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">Sri Lanka: The Pearl <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#f0d080]">of the Indian Ocean</span></h2>
                <p className="text-white/70 text-lg leading-relaxed">From historical heritage and vibrant wildlife to lush green mountains and golden shorelines, Sri Lanka offers a soul-enriching experience. Let us craft an itinerary that speaks to your heart.</p>
              </div>

              {/* Contact Card Inside Section */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 group hover:bg-white/10 hover:border-[#c9a84c]/30 transition-all duration-500">
                <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-[#550000] to-[#2a0000] flex items-center justify-center text-white shadow-[0_10px_20px_rgba(85,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                  <PhoneCall size={24} />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-white font-bold text-lg mb-1">Speak to an Expert</h4>
                  <p className="text-white/50 text-sm mb-3">Get a free consultation for your tour.</p>
                  <Link href="/contact" className="text-[#c9a84c] text-sm font-black uppercase tracking-widest group-hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">Contact Us <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>

            {/* Right Side: Image & Colored Cards grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 relative">
              {/* Large Vertical Image Anchoring the grid */}
              <div
                className="sm:row-span-2 rounded-[2.5rem] overflow-hidden relative group aspect-[4/5] sm:aspect-auto shadow-2xl border border-white/10"
                style={{
                  opacity: discoveryInView ? 1 : 0,
                  transform: discoveryInView ? "translateY(0)" : "translateY(40px)",
                  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
                }}
              >
                {/* The user should place discovery-main.jpg here */}
                <img src="/images/mask.jpg" alt="Culture Sri Lanka" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342] via-[#0a2342]/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-[#c9a84c] text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2"><Star size={12} className="fill-[#c9a84c]" /> 2500+ Years of History</div>
                  <div className="text-white font-black text-3xl">Vibrant Culture</div>
                </div>
              </div>

              {/* Feature Cards replacing white blocks */}
              {discoveryFeatures.map((feat, i) => (
                <div
                  key={feat.title}
                  className={`p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-[#c9a84c]/50 transition-all duration-500 flex flex-col justify-center gap-4 group ${i === 2 ? 'sm:col-span-2' : ''}`}
                  style={{
                    opacity: discoveryInView ? 1 : 0,
                    transform: discoveryInView ? "translateY(0)" : "translateY(40px)",
                    transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.15}s`
                  }}
                >
                  <div className="text-4xl w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">{feat.icon}</div>
                  <div>
                    <h4 className="font-black text-white text-xl mb-2">{feat.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PACKAGES ── */}
      <section data-theme-color="#fafafa" className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#c9a84c] mb-4 block">Boutique Collection</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-none">Featured Journeys</h2>
              <p className="text-gray-500 mt-6 text-lg">Curated experiences designed to connect you deeply with our island heritage.</p>
            </div>
            <Link href="/packages" className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-3">
              Explore All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section data-theme-color="#0d1a0f" className="relative min-h-screen flex items-center overflow-hidden" ref={whyRef}>

        {/* Full bleed background */}
        <div className="absolute inset-0">
          <img src="/images/gallery-1.png" alt="" className="w-full h-full object-cover" />
          {/* Dark gradient: strong on left, fades to semi-dark on right */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(8,18,10,0.97) 0%, rgba(8,18,10,0.88) 40%, rgba(8,18,10,0.60) 70%, rgba(8,18,10,0.40) 100%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* LEFT — Title + Stats */}
            <div
              className="space-y-8 md:space-y-10"
              style={{
                opacity: whyInView ? 1 : 0,
                transform: whyInView ? "translateX(0)" : "translateX(-40px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <div className="space-y-4">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#c9a84c]">Authentic Excellence</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05]">
                  Beyond a Simple<br />
                  <span style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Travel Agency
                  </span>
                </h2>
                <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                  We don&apos;t just book hotels — we architect memories. Every detail is hand-picked to reflect the pure elegance of Sri Lanka.
                </p>
              </div>

              {/* Stats row */}
              <div className="flex gap-6 md:gap-10 pt-2">
                {[
                  { value: "15+", label: "Years of Craftsmanship" },
                  { value: "5K+", label: "Happy Travellers" },
                  { value: "4.9★", label: "TripAdvisor Rating" },
                ].map((s, i) => (
                  <div key={s.label} className="flex flex-col"
                    style={{
                      opacity: whyInView ? 1 : 0,
                      transform: whyInView ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.1}s`
                    }}
                  >
                    <span className="text-2xl md:text-4xl font-black text-white leading-none">{s.value}</span>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1 leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Logo */}
              <div className="w-28 md:w-36 h-14 md:h-16 relative opacity-80">
                <img src="/images/logo-main.png" alt="A4 Tours" className="w-full h-full object-contain brightness-0 invert" />
              </div>
            </div>

            {/* RIGHT — 2×2 Glassmorphism Feature Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {whyUs.map((feat, i) => (
                <div
                  key={feat.title}
                  className="group p-5 md:p-8 rounded-2xl md:rounded-3xl flex flex-col gap-3 md:gap-5 cursor-default transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    opacity: whyInView ? 1 : 0,
                    transform: whyInView ? "translateY(0)" : "translateY(40px)",
                    transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.15}s`
                  }}
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-transform duration-500"
                    style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm md:text-lg leading-tight mb-1">{feat.title}</h4>
                    <p className="text-white/50 text-[11px] md:text-sm leading-relaxed hidden sm:block">{feat.description}</p>
                  </div>
                  {/* Hover glow accent */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.3)" }} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── AYURVEDA WELLNESS ── */}
      <section data-theme-color="#faf8f5" className="py-32 bg-[#faf8f5] relative overflow-hidden">
        {/* Subtle decorative leaf/nature accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f0ede6] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e8efe9] rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Image Column */}
            <div className="relative group">
              <div className="aspect-[4/5] rounded-t-[5rem] rounded-b-3xl overflow-hidden shadow-2xl relative z-10 border border-white">
                <img
                  src="/images/ayurveda-main.jpg"
                  alt="Sri Lanka Ayurveda"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                {/* Subtle calm overlay */}
                <div className="absolute inset-0 bg-[#354f3b]/10 mix-blend-overlay transition-opacity duration-700 opacity-50 group-hover:opacity-0" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#354f3b]">
                    <Star size={20} className="fill-[#354f3b] opacity-50" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">100%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Natural Healing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="space-y-8 md:pl-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#738f79]">Wholistic Wellness</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2e2b26] leading-[1.1]">
                  Restore Body, <br />Mind & Soul
                </h2>
              </div>

              <p className="text-[#5c574f] text-lg leading-relaxed pt-4">
                Experience the profound serenity of Sri Lankan Ayurveda. Rooted in 5,000 years of ancient wisdom, our authentic wellness retreats utilize native herbs, natural oils, and expert techniques to completely rejuvenate your spirit.
              </p>
              <p className="text-[#8c857b] text-base leading-relaxed">
                Whether you seek deep relaxation through a warm Shirodhara oil treatment, a cleansing Panchakarma retreat, or simply a peaceful escape in a jungle spa, we design wellness journeys that bring you back into perfectly natural harmony.
              </p>

              <div className="pt-6">
                <Link href="/packages" className="inline-flex items-center justify-center bg-[#465c4a] text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-[#354f3b] transition-colors shadow-lg shadow-[#465c4a]/20">
                  Discover Wellness Escapes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEACH PARALLAX ── */}
      <section data-theme-color="#111111" className="relative py-40 min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/beach-background.jpg')" }} // Place the user's uploaded image here
        />
        {/* Gradient/Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-8">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#c9a84c] drop-shadow-md">
            Tropical Bliss
          </span>
          <h2 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-lg">
            Golden Sands & <br className="hidden md:block" /> Ocean Adventures
          </h2>
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-medium drop-shadow-md">
            With over 1,340 kilometers of pristine coastline, Sri Lanka is a beach lover's ultimate paradise.
            From thrilling surfing in Arugam Bay and whale watching in Mirissa to snorkeling in vibrant coral reefs
            and simply unwinding under swaying palm trees—our shores promise unforgettable moments.
          </p>
          <div className="pt-8">
            <Link href="/packages" className="btn-gold px-12 py-5 rounded-full text-base font-black shadow-2xl">
              Discover Beach Packages <ArrowRight size={20} className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRAVELLER MEMORIES (CINEMATIC MARQUEE) ── */}
      <section data-theme-color="#111111" className="py-32 bg-[#111111] overflow-hidden relative border-b border-white/5">
        {/* Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
          <h2 className="text-[15vw] font-black text-white leading-none whitespace-nowrap">UNFORGETTABLE</h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#c9a84c]">Smiles &amp; Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">Traveller Memories</h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm">Real moments captured by our guests. Join our growing family of explorers.</p>
        </div>

        {/* Single-row Marquee */}
        <div className="relative w-full overflow-hidden pb-4">
          <style dangerouslySetInnerHTML={{
            __html: `
               @keyframes marquee {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
               }
               .animate-marquee {
                  display: flex;
                  width: max-content;
                  animation: marquee 50s linear infinite;
               }
               .animate-marquee:hover {
                  animation-play-state: paused;
               }
               .memory-img {
                  filter: saturate(1.12) contrast(1.05) brightness(1.02);
                  transition: filter 0.6s ease, transform 2s ease;
               }
               .memory-card:hover .memory-img {
                  filter: saturate(1.2) contrast(1.07) brightness(1.04);
               }
            `}} />

          {/* Fading edges */}
          <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#111111] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#111111] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee gap-5 px-3">
            {[...travelerMemories, ...travelerMemories].map((img, index) => (
              <div
                key={index}
                className="memory-card relative w-72 md:w-88 aspect-[4/5] rounded-[2rem] overflow-hidden shrink-0 group cursor-pointer"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="absolute inset-0 bg-[#1a1208] -z-20" />
                <img
                  src={img}
                  alt={`Traveler Memory ${(index % travelerMemories.length) + 1}`}
                  className="memory-img absolute inset-0 w-full h-full object-cover group-hover:scale-105"
                />
                {/* Subtle warm tint — always present */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0805]/60 pointer-events-none" />
                {/* Hover: reveal tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0805]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7">
                  <div
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-white tracking-widest px-4 py-2 rounded-full w-max"
                    style={{ background: "rgba(201,168,76,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    #A4ToursFamily
                  </div>
                </div>
                {/* Gold border shimmer on hover */}
                <div
                  className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.4)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section data-theme-color="#550000" className="py-32 bg-[#550000] relative overflow-hidden" ref={testRef}>
        {/* Decorative Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.1),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#c9a84c]">Voices of our travelers</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">Guest Reflections</h2>
            </div>

            <div
              className="p-12 md:p-16 rounded-[3rem] text-center relative border border-white/10 bg-white/5 backdrop-blur-xl"
              style={{
                opacity: testInView ? 1 : 0,
                transform: testInView ? "translateY(0)" : "translateY(40px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <p className="text-white md:text-2xl leading-relaxed italic font-medium">
                &quot;{testimonials[activeTestimonial].text}&quot;
              </p>

              <div className="mt-10 flex flex-col items-center gap-1">
                <div className="font-black text-white text-lg">{testimonials[activeTestimonial].name}</div>
                <div className="text-[#c9a84c] text-[10px] font-black uppercase tracking-widest">
                  {testimonials[activeTestimonial].country} &bull; {testimonials[activeTestimonial].tour}
                </div>
              </div>
            </div>

            {/* Refined Navigation Controls */}
            <div className="flex items-center justify-center gap-10">
              <button
                onClick={() => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#550000] transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: i === activeTestimonial ? 32 : 8,
                      background: i === activeTestimonial ? "#c9a84c" : "rgba(255,255,255,0.2)"
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((p) => (p + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#550000] transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section data-theme-color="#ffffff" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#c9a84c] mb-4 block">Signature Locales</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-none">Top Destinations</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topDestinations.map((dest, i) => (
              <Link
                href="/packages"
                key={dest.name}
                className="group relative rounded-[2.5rem] overflow-hidden aspect-[3/4] flex flex-col justify-end border border-gray-100 bg-gray-50 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-[#e0e0e0] -z-20 flex items-center justify-center">
                  <Compass size={48} className="text-gray-300 opacity-20" />
                </div>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 transform transition-all duration-500 group-hover:translate-y-0 translate-y-6">
                  <div className="mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#c9a84c]">{dest.subtitle}</span>
                    <h4 className="text-3xl lg:text-4xl font-black text-white mt-1">{dest.name}</h4>
                  </div>

                  {/* Expanded Details hidden initially, revealed on hover */}
                  <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 mt-4">
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      {dest.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest hover:text-[#c9a84c] transition-colors">
                      Discover Tours <ArrowRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Permanent Arrow Icon - fades out on full reveal */}
                <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-500 group-hover:opacity-0 group-hover:scale-50 backdrop-blur-md">
                  <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY (ISLAND SNAPSHOTS) ── */}
      <section data-theme-color="#ffffff" className="py-32 bg-white relative overflow-hidden" ref={galleryRef}>
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#c9a84c]">Visual Narratives</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-none">Island Snapshots</h2>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-lg mx-auto">A curated gallery of Sri Lanka's soul — where every frame tells a story of heritage and natural wonder.</p>
          </div>
        </div>

        {/* Full-bleed Mosaic Gallery */}
        <div className="w-full px-1 md:px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 auto-rows-[250px] md:auto-rows-[350px]">
            {galleryItems.map((item, i) => {
              // Perfectly balanced 4x2 grid (8 cells total)
              const spanClass =
                i === 0 ? "col-span-2 row-span-1 md:col-span-2 md:row-span-1" : // Top Wide (Tea Country)
                  i === 5 ? "col-span-2 row-span-1 md:col-span-2 md:row-span-1" : // Bottom Wide (Nine Arch)
                    "col-span-1 row-span-1"; // Standard Squares (including Golden Coast)

              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden bg-gray-100 ${spanClass}`}
                  style={{
                    opacity: galleryInView ? 1 : 0,
                    transform: galleryInView ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 * i}s`
                  }}
                >
                  {/* Image with subtle zoom on hover */}
                  <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-200">
                        <Compass size={40} className="opacity-10" />
                      </div>
                    )}
                  </div>

                  {/* Sophisticated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[10px] font-black tracking-widest text-[#c9a84c] uppercase mb-2 block">{item.category}</span>
                      <h4 className="text-2xl md:text-3xl font-black text-white leading-tight">{item.title}</h4>
                    </div>
                  </div>

                  {/* Minimal glass badge (always visible) */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white/40 group-hover:text-[#c9a84c]">
                      <ArrowRight size={14} className="-rotate-45" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section data-theme-color="#fafafa" className="py-24 bg-[#fafafa]" ref={blogRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#c9a84c] mb-4 block">Travel Journal</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-none">Stories & Insights</h2>
            </div>
            <Link href="/blog" className="btn-outline px-8 py-4 rounded-full text-sm inline-flex items-center gap-3">
              Read All Articles <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <div
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
                style={{
                  opacity: blogInView ? 1 : 0,
                  transform: blogInView ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 * i}s`
                }}
              >
                <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-110 flex items-center justify-center">
                    <Compass size={32} className="opacity-10 text-gray-400" />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[#c9a84c] text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#550000]" /> {post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-[#550000] transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[#550000] text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                    Read Story <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section data-theme-color="#ffffff" className="py-24 px-6 bg-white overflow-hidden">
        <div
          className="max-w-7xl mx-auto rounded-[3rem] relative overflow-hidden p-12 md:p-24 text-center"
          style={{
            background: "linear-gradient(135deg, #1a0000 0%, #550000 100%)"
          }}
        >
          {/* Background Image Suggestion Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#c9a84c]">Begin Your Tale</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95]">Craft Your Own <br />Unique Journey</h2>
            </div>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed">Let our travel designers architect the perfect Sri Lankan adventure for you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="btn-gold px-12 py-5 rounded-full text-base font-black">
                Get Free Design <ArrowRight size={20} className="ml-2 inline-block" />
              </Link>
              <Link href="/packages" className="btn-outline px-12 py-5 rounded-full text-base font-black border-white/20 hover:bg-white/5">
                Browse Signature Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/* ── JOURNEY MARKER (SUV icon) ── */
function JourneyMarker() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["5vh", "95vh"]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ y: smoothY }}
      className="absolute left-4 md:left-12 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#c9a84c] rounded-full flex items-center justify-center shadow-lg shadow-[#c9a84c]/20 border border-white/20">
        <Car size={18} className="text-[#550000]" />
      </div>
      <div className="h-12 w-[1px] bg-gradient-to-b from-[#c9a84c] to-transparent" />
    </motion.div>
  );
}

/* ── PARALLAX FLORA ── */
function ParallaxFlora() {
  const { scrollYProgress } = useScroll();
  
  // Left Leaf (Moves Faster)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  
  // Right Leaf (Moves Moderate)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [10, -30]);

  return (
    <>
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -left-20 top-1/4 w-80 h-80 opacity-40 blur-[8px] md:blur-[12px] mix-blend-overlay rotate-[-15deg]"
      >
        <img src="/images/tropical_leaf_parallax_1775411981478.png" className="w-full h-full object-contain" alt="" />
      </motion.div>
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute -right-24 bottom-1/4 w-96 h-96 opacity-30 blur-[15px] md:blur-[25px] mix-blend-overlay rotate-[35deg]"
      >
        <img src="/images/tropical_leaf_parallax_1775411981478.png" className="w-full h-full object-contain scale-x-[-1]" alt="" />
      </motion.div>
    </>
  );
}
