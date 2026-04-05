"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
} from "lucide-react";

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
  "/images/memory-1.jpg",
  "/images/memory-2.jpg",
  "/images/memory-3.jpg",
  "/images/memory-4.jpg",
  "/images/memory-5.jpg",
  "/images/memory-6.jpg",
  "/images/memory-7.jpg",
  "/images/memory-8.jpg",
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
        <div
          className="absolute inset-0 bg-gray-100 transition-transform duration-1000 group-hover:scale-110 flex items-center justify-center text-gray-300"
        >
          <Compass size={48} className="opacity-10" />
        </div>

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
      className="space-y-2 group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      <div className="text-4xl md:text-5xl font-black text-[#550000] mb-2">{stat.value}</div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-[1px] bg-[#c9a84c] transition-all duration-500 group-hover:w-12" />
        <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────── */
export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
    const interval = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const { ref: whyRef, inView: whyInView } = useInView(0.1);
  const { ref: testRef, inView: testInView } = useInView(0.1);
  const { ref: discoveryRef, inView: discoveryInView } = useInView(0.1);
  const { ref: galleryRef, inView: galleryInView } = useInView(0.1);
  const { ref: blogRef, inView: blogInView } = useInView(0.1);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-width Background Image with Parallax-ready feel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/hero-sigiriya.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
          className="scale-105"
        />

        {/* Sophisticated Boutique Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 70% 30%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)",
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

        {/* Minimalist Scroll Hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transition: "all 1s ease 1s"
          }}
        >
          <span className="text-[10px] font-black tracking-[0.4em] uppercase">Begin Your Journey</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-gray-100 pt-16">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCOVERY (COLOR RICH SPLIT) ── */}
      <section className="relative py-32 bg-gradient-to-br from-[#051320] via-[#0a2342] to-[#040e18] overflow-hidden" ref={discoveryRef}>
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
      <section className="py-24 bg-[#fafafa]">
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

      {/* ── WHY CHOOSE US (BENTO GRID) ── */}
      <section className="py-32 bg-white" ref={whyRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6">

            {/* Row 1: Intro & Stat */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Title Block */}
              <div
                className="lg:col-span-2 bg-[#fafafa] rounded-[3rem] p-12 md:p-16 flex flex-col justify-center border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-700"
                style={{
                  opacity: whyInView ? 1 : 0,
                  transform: whyInView ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#c9a84c] mb-6">Authentic Excellence</span>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6">Beyond a Simple <br />Travel Agency</h2>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">We don&apos;t just book hotels; we architect memories. Every detail is hand-picked to ensure your journey reflects the pure elegance of Sri Lanka.</p>
              </div>

              {/* Stat Block */}
              <div
                className="bg-gradient-to-br from-[#550000] to-[#2a0000] rounded-[3rem] p-12 text-center flex flex-col items-center justify-center text-white relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(85,0,0,0.3)] transition-all duration-700"
                style={{
                  opacity: whyInView ? 1 : 0,
                  transform: whyInView ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s"
                }}
              >
                <div className="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
                <div className="relative z-10 text-6xl md:text-8xl font-black mb-4 group-hover:text-[#c9a84c] transition-colors duration-500">15+</div>
                <div className="relative z-10 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#c9a84c] group-hover:text-white transition-colors duration-500">Years of Craftsmanship</div>
              </div>
            </div>

            {/* Row 2: Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div
                className="bg-white rounded-[3rem] p-10 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-center"
                style={{
                  opacity: whyInView ? 1 : 0,
                  transform: whyInView ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
                }}
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-6">{whyUs[0].icon}</div>
                <h4 className="font-black text-xl text-gray-900 mb-3">{whyUs[0].title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{whyUs[0].description}</p>
              </div>

              {/* Centerpiece Logo */}
              <div
                className="lg:col-span-2 md:col-span-2 rounded-[3rem] overflow-hidden bg-gray-50 relative group border border-gray-100 min-h-[300px]"
                style={{
                  opacity: whyInView ? 1 : 0,
                  transform: whyInView ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s"
                }}
              >
                <img src="/images/logo-a4tours.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="A4 Tours Logo" />
              </div>

              {/* Feature 2 */}
              <div
                className="bg-white rounded-[3rem] p-10 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-center"
                style={{
                  opacity: whyInView ? 1 : 0,
                  transform: whyInView ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s"
                }}
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-6">{whyUs[1].icon}</div>
                <h4 className="font-black text-xl text-gray-900 mb-3">{whyUs[1].title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{whyUs[1].description}</p>
              </div>
            </div>

            {/* Row 3: Final Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 3 */}
              <div
                className="bg-white rounded-[3rem] p-10 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 flex items-center gap-8"
                style={{
                  opacity: whyInView ? 1 : 0,
                  transform: whyInView ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.75s"
                }}
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-4xl">{whyUs[2].icon}</div>
                <div>
                  <h4 className="font-black text-xl text-gray-900 mb-2">{whyUs[2].title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{whyUs[2].description}</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div
                className="bg-white rounded-[3rem] p-10 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 flex items-center gap-8"
                style={{
                  opacity: whyInView ? 1 : 0,
                  transform: whyInView ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s"
                }}
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-4xl">{whyUs[3].icon}</div>
                <div>
                  <h4 className="font-black text-xl text-gray-900 mb-2">{whyUs[3].title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{whyUs[3].description}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── AYURVEDA WELLNESS ── */}
      <section className="py-32 bg-[#faf8f5] relative overflow-hidden">
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
                     Restore Body, <br/>Mind & Soul
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
      <section className="relative py-40 min-h-[70vh] flex items-center justify-center overflow-hidden">
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
      <section className="py-32 bg-[#111111] overflow-hidden relative border-b border-white/5">
        {/* Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
          <h2 className="text-[15vw] font-black text-white leading-none whitespace-nowrap">UNFORGETTABLE</h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#c9a84c]">Smiles & Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">Traveller Memories</h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm">Real moments captured by our guests. Join our growing family of explorers.</p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden flex pb-8">
          <style dangerouslySetInnerHTML={{
            __html: `
               @keyframes marquee {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
               }
               .animate-marquee {
                  display: flex;
                  width: max-content;
                  animation: marquee 40s linear infinite;
               }
               .animate-marquee:hover {
                  animation-play-state: paused;
               }
            `}} />

          {/* The fading edges for smooth illusion */}
          <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#111111] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#111111] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee gap-6 px-3">
            {/* We render the list twice to create the infinite loop effect seamlessly */}
            {[...travelerMemories, ...travelerMemories].map((img, index) => (
              <div
                key={index}
                className="relative w-72 md:w-96 aspect-[4/5] rounded-[2.5rem] overflow-hidden shrink-0 group border border-white/5 grayscale-[0.5] hover:grayscale-0 transition-all duration-700 hover:shadow-[0_0_40px_rgba(201,168,76,0.15)] cursor-pointer"
              >
                {/* Temporary placeholder logic if img is missing */}
                <div className="absolute inset-0 bg-[#222222] -z-20 flex items-center justify-center">
                  <Compass size={48} className="text-white opacity-5" />
                </div>
                <img
                  src={img}
                  alt={`Traveler Memory ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#c9a84c]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-white tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-max">
                    #A4ToursFamily
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-32 bg-[#550000] relative overflow-hidden" ref={testRef}>
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
      <section className="py-32 bg-white">
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

      {/* ── GALLERY ── */}
      <section className="py-32 bg-white" ref={galleryRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#c9a84c]">Visual Narratives</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Island Snapshots</h2>
            <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto opacity-50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                className={`group relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-50 ${i === 0 || i === 5 ? 'lg:col-span-2 aspect-[16/9]' : ''}`}
                style={{
                  opacity: galleryInView ? 1 : 0,
                  transform: galleryInView ? "translateY(0)" : "translateY(40px)",
                  transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 * i}s`
                }}
              >
                <div className="absolute inset-0 bg-gray-200 transition-transform duration-1000 group-hover:scale-110 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <Compass size={48} className="opacity-10" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="text-white">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#c9a84c] mb-1">{item.category}</div>
                    <h4 className="text-xl font-black">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section className="py-24 bg-[#fafafa]" ref={blogRef}>
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
      <section className="py-24 px-6 bg-white overflow-hidden">
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
