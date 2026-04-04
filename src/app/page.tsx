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
      className="hover-lift rounded-2xl overflow-hidden bg-white"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Image placeholder */}
      <div className="img-placeholder h-52 relative">
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold"
          style={{ background: badgeColors[pkg.badge] || "#550000" }}
        >
          {pkg.badge}
        </div>
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#550000",
          }}
        >
          {pkg.category}
        </div>
        <div className="text-center text-gray-400">
          <Compass size={40} className="mb-2 opacity-30" />
          <p className="text-sm opacity-50">Photo coming soon</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          <MapPin size={13} className="text-[#550000]" />
          <span className="text-gray-500 text-xs">{pkg.location}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight">
          {pkg.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.highlights.map((h) => (
            <span
              key={h}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: "#fff0f0", color: "#550000" }}
            >
              {h}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock size={13} />
            {pkg.duration}
          </div>
          <div className="flex items-center gap-1">
            <Star size={13} className="text-[#c9a84c] fill-[#c9a84c]" />
            <span className="text-sm font-semibold">{pkg.rating}</span>
            <span className="text-xs text-gray-400">({pkg.reviews})</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400">Starting</span>
            <div className="font-bold text-[#550000] text-lg">{pkg.price}</div>
          </div>
          <Link
            href="/packages"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:gap-2.5"
            style={{ background: "#550000", color: "white" }}
          >
            View <ArrowRight size={14} />
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
      className="text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ background: "rgba(255,255,255,0.15)" }}
      >
        <Icon size={28} className="text-[#c9a84c]" />
      </div>
      <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
      <div className="text-white/70 text-sm font-medium">{stat.label}</div>
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
              Unveil the <br/>
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
      <section style={{ background: "#550000" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── FEATURED PACKAGES ── */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "#c9a84c" }}
            >
              Explore Sri Lanka
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Featured Tour Packages
            </h2>
            <div className="section-divider" />
            <p className="text-gray-500 mt-6 max-w-xl mx-auto">
              Hand-picked experiences designed to give you the best of Sri
              Lanka. Every package is crafted with care and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/packages" className="btn-primary">
              View All Packages <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white" ref={whyRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image placeholder */}
            <div
              className="relative"
              style={{
                opacity: whyInView ? 1 : 0,
                transform: whyInView ? "translateX(0)" : "translateX(-40px)",
                transition: "all 0.8s ease",
              }}
            >
              <div
                className="img-placeholder rounded-3xl overflow-hidden"
                style={{ height: "500px" }}
              >
                <div className="text-center text-gray-400">
                  <Award size={48} className="mb-3 opacity-30" />
                  <p className="opacity-50">Company photo</p>
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-2xl"
                style={{ background: "#550000" }}
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-black">15+</div>
                  <div className="text-xs text-white/70 mt-1">Years of Experience</div>
                </div>
              </div>
              <div
                className="absolute -top-6 -left-6 p-4 rounded-2xl shadow-xl"
                style={{ background: "#c9a84c" }}
              >
                <Star size={28} className="text-white fill-white" />
              </div>
            </div>

            {/* Right: Content */}
            <div
              style={{
                opacity: whyInView ? 1 : 0,
                transform: whyInView ? "translateX(0)" : "translateX(40px)",
                transition: "all 0.8s ease 0.2s",
              }}
            >
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: "#c9a84c" }}
              >
                Why Choose A4 Tours
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4 leading-tight text-center lg:text-left">
                We Create Journeys,<br />Not Just Trips
              </h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="text-gray-500 mb-10 leading-relaxed">
                With over 15 years of experience crafting extraordinary travel
                experiences in Sri Lanka, A4 Tours combines local expertise with
                world-class service to deliver journeys that exceed your
                expectations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map((item, i) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl transition-all duration-300 hover:shadow-md group"
                    style={{
                      background: "#fafafa",
                      border: "1px solid #f0f0f0",
                      opacity: whyInView ? 1 : 0,
                      transform: whyInView ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.5s ease ${0.3 + i * 0.1}s`,
                    }}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1.5 group-hover:text-[#550000] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about" className="btn-primary">
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #550000 0%, #3a0000 100%)",
        }}
        className="py-20"
        ref={testRef}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "#c9a84c" }}
            >
              What Our Travelers Say
            </span>
            <h2 className="text-4xl font-black text-white mt-2 mb-4">
              Real Experiences, Real Stories
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{
                background: "linear-gradient(90deg, #c9a84c, #f0d080)",
              }}
            />
          </div>

          <div
            className="max-w-3xl mx-auto"
            style={{
              opacity: testInView ? 1 : 0,
              transform: testInView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease",
            }}
          >
            <div
              className="p-10 rounded-3xl text-center relative"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="text-5xl mb-6 opacity-40 text-[#c9a84c] font-serif">&ldquo;</div>
              <p className="text-white text-xl leading-relaxed mb-8 italic">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#c9a84c] fill-[#c9a84c]" />
                ))}
              </div>
              <div className="font-bold text-white text-lg">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-white/50 text-sm mt-1">
                {testimonials[activeTestimonial].country} &bull;{" "}
                {testimonials[activeTestimonial].tour}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (p) => (p - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                }}
                id="testimonial-prev"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === activeTestimonial ? 28 : 8,
                      height: 8,
                      background:
                        i === activeTestimonial
                          ? "#c9a84c"
                          : "rgba(255,255,255,0.3)",
                    }}
                    id={`testimonial-dot-${i}`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setActiveTestimonial((p) => (p + 1) % testimonials.length)
                }
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                }}
                id="testimonial-next"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS STRIP ── */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "#c9a84c" }}
            >
              Top Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Where Will You Go Next?
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Sigiriya", icon: "🏰" },
              { name: "Ella", icon: "🌿" },
              { name: "Mirissa", icon: "🐋" },
              { name: "Kandy", icon: "🛕" },
              { name: "Yala", icon: "🐆" },
              { name: "Galle", icon: "🏖️" },
            ].map((dest, i) => (
              <Link
                href="/packages"
                key={dest.name}
                className="img-placeholder rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  height: "160px",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:bg-[rgba(85,0,0,0.3)]"
                >
                  <span className="text-4xl">{dest.icon}</span>
                  <span className="font-bold text-gray-700 group-hover:text-white transition-colors text-sm">
                    {dest.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #550000 0%, #7a0000 50%, #3a0000 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: "white" }}
        />
        <div
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "#c9a84c" }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span
            className="text-sm font-bold tracking-widest uppercase mb-4 inline-block"
            style={{ color: "#c9a84c" }}
          >
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Your Dream Trip is<br />One Click Away
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let our travel experts help you plan the perfect Sri Lankan getaway.
            Personalized itineraries, expert guidance, and unforgettable memories.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/packages" className="btn-outline">
              Browse Packages <Compass size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
