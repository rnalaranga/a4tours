"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Award,
  Users,
  Heart,
  Globe,
  Star,
  Target,
  Eye,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

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

const team = [
  {
    name: "Kamal Perera",
    role: "Founder & CEO",
    experience: "20+ Years",
    description: "Passionate traveler turned entrepreneur who founded A4 Tours with a vision to showcase Sri Lanka's beauty to the world.",
  },
  {
    name: "Dilsha Fernando",
    role: "Head of Operations",
    experience: "12+ Years",
    description: "Expert in logistics and customer experience, ensuring every tour runs seamlessly from booking to farewell.",
  },
  {
    name: "Sunil Rajapaksa",
    role: "Senior Tour Guide",
    experience: "15+ Years",
    description: "Certified cultural heritage guide with an encyclopedic knowledge of Sri Lanka's history, fauna and flora.",
  },
  {
    name: "Nimal Silva",
    role: "Travel Consultant",
    experience: "8+ Years",
    description: "Specialist in crafting bespoke itineraries, particularly for honeymoon and luxury travel packages.",
  },
];

const milestones = [
  { year: "2010", event: "A4 Tours Founded", desc: "Started with a small team and big dreams in Colombo" },
  { year: "2013", event: "500 Happy Clients", desc: "Reached our first major milestone of serving 500 travelers" },
  { year: "2016", event: "National Award", desc: "Received Best Emerging Tour Operator award from SLTDA" },
  { year: "2019", event: "International Recognition", desc: "Partnered with international travel agencies across 20 countries" },
  { year: "2022", event: "5000+ Travelers", desc: "Surpassed 5000 satisfied travelers from around the globe" },
  { year: "2024", event: "Digital Expansion", desc: "Launched new digital booking platform for seamless experiences" },
];

const values = [
  { icon: Heart, title: "Passion for Travel", desc: "We genuinely love what we do. Our enthusiasm for travel shines through every tour we craft." },
  { icon: Users, title: "People First", desc: "Our travelers are family. We go above and beyond to ensure your comfort, safety, and happiness." },
  { icon: Globe, title: "Sustainable Tourism", desc: "We're committed to responsible travel that benefits local communities and protects Sri Lanka's environment." },
  { icon: Award, title: "Excellence Always", desc: "We hold ourselves to the highest standards in every aspect of the travel experience we deliver." },
];

export default function AboutPage() {
  const { ref: storyRef, inView: storyInView } = useInView(0.1);
  const { ref: valuesRef, inView: valuesInView } = useInView(0.1);
  const { ref: missionRef, inView: missionInView } = useInView(0.1);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #550000 0%, #3a0000 100%)" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "#c9a84c", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "white", transform: "translate(-30%, 30%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase">Our Story</span>
          <h1 className="text-5xl font-black text-white mt-2 mb-4">About A4 Tours</h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{ background: "linear-gradient(90deg, #c9a84c, #f0d080)" }} />
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Fifteen years of creating extraordinary journeys, one traveler at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div
              className="relative"
              style={{
                opacity: storyInView ? 1 : 0,
                transform: storyInView ? "translateX(0)" : "translateX(-40px)",
                transition: "all 0.8s ease",
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl h-56 col-span-2 flex items-center justify-center" style={{background:"linear-gradient(135deg,#f5ecec,#eddede)",border:"2px dashed #d4b0b0"}}>
                  <p className="text-[#550000]/40 text-sm font-medium">📸 Team / Office Photo</p>
                </div>
                <div className="rounded-2xl h-44 flex items-center justify-center" style={{background:"linear-gradient(135deg,#f5ecec,#eddede)",border:"2px dashed #d4b0b0"}}>
                  <p className="text-[#550000]/40 text-xs font-medium text-center">📸 Tour Photo 1</p>
                </div>
                <div className="rounded-2xl h-44 flex items-center justify-center" style={{background:"linear-gradient(135deg,#f5ecec,#eddede)",border:"2px dashed #d4b0b0"}}>
                  <p className="text-[#550000]/40 text-xs font-medium text-center">📸 Tour Photo 2</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              style={{
                opacity: storyInView ? 1 : 0,
                transform: storyInView ? "translateX(0)" : "translateX(40px)",
                transition: "all 0.8s ease 0.2s",
              }}
            >
              <span className="text-sm font-bold tracking-widest uppercase text-[#c9a84c]">Who We Are</span>
              <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4 leading-tight">
                Born from a Love<br />of Sri Lanka
              </h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="text-gray-500 leading-relaxed mb-5">
                A4 Tours was founded in 2010 by Kamal Perera, a passionate traveler who believed that Sri Lanka&apos;s incredible beauty, culture, and warmth deserved to be shared with the entire world.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                What started as a small operation with two vehicles and a handful of dedicated guides has grown into one of Sri Lanka&apos;s most trusted tour operators, serving over 5,000 happy travelers from more than 50 countries.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our secret? We treat every traveler like family, obsessing over the details that make a trip truly special — from the perfect hotel to the most knowledgeable guide.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "SLTDA Certified Operator",
                  "ISO 9001 Quality Management",
                  "Eco-Friendly Tourism",
                  "24/7 Customer Support",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} className="text-[#550000] shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                Get In Touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#fafafa]" ref={missionRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To create extraordinary, personalized travel experiences that connect people with the authentic beauty, culture and warmth of Sri Lanka — while supporting local communities and preserving our natural heritage.",
                color: "#550000",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be Sri Lanka's most beloved tour operator, recognized globally for our exceptional service, responsible tourism practices, and our ability to create journeys that transform and inspire.",
                color: "#c9a84c",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-10 rounded-3xl text-white relative overflow-hidden"
                  style={{
                    background: item.color === "#550000"
                      ? "linear-gradient(135deg, #550000, #3a0000)"
                      : "linear-gradient(135deg, #c9a84c, #a07030)",
                    opacity: missionInView ? 1 : 0,
                    transform: missionInView ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.7s ease ${i * 0.15}s`,
                  }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: "white", transform: "translate(30%, -30%)" }} />
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(255,255,255,0.2)" }}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sm font-bold tracking-widest uppercase text-[#c9a84c]">What Drives Us</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">Our Core Values</h2>
            <div className="section-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl text-center hover-lift"
                  style={{
                    border: "1px solid #f0f0f0",
                    opacity: valuesInView ? 1 : 0,
                    transform: valuesInView ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.6s ease ${i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "#fff0f0" }}
                  >
                    <Icon size={28} className="text-[#550000]" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #550000 0%, #3a0000 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase">Our Journey</span>
            <h2 className="text-4xl font-black text-white mt-2 mb-4">Milestones That Define Us</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #c9a84c, #f0d080)" }} />
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "rgba(201,168,76,0.3)" }} />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`hidden md:block flex-1 text-right ${i % 2 !== 0 ? "text-left" : ""}`}>
                    {i % 2 === 0 && (
                      <div className="pr-10">
                        <div className="font-bold text-white text-lg">{m.event}</div>
                        <p className="text-white/60 text-sm mt-1">{m.desc}</p>
                      </div>
                    )}
                    {i % 2 !== 0 && (
                      <div className="pl-10">
                        <div className="font-bold text-white text-lg">{m.event}</div>
                        <p className="text-white/60 text-sm mt-1">{m.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center font-black text-sm"
                      style={{ background: "#c9a84c", color: "#3a0000" }}
                    >
                      {m.year}
                    </div>
                  </div>
                  <div className="flex-1 md:hidden">
                    <div className="font-bold text-white text-base">{m.event}</div>
                    <p className="text-white/60 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase">Meet the Team</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">The Faces Behind A4 Tours</h2>
            <div className="section-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden hover-lift text-center"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)" }}>
                {/* Avatar placeholder */}
                <div className="img-placeholder h-52 relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-[#550000]/30"
                    style={{ background: "rgba(85,0,0,0.08)" }}>
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                  <div className="text-[#550000] font-semibold text-sm mb-1">{member.role}</div>
                  <div className="text-[#c9a84c] text-xs font-bold mb-3">{member.experience}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                  <div className="flex items-center justify-center gap-1 mt-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-[#c9a84c] fill-[#c9a84c]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Ready to Travel With Us?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Join thousands of happy travelers who have trusted A4 Tours with their Sri Lanka adventures.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/packages" className="btn-primary">
              View Packages <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline" style={{ color: "#550000", borderColor: "#550000" }}>
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
