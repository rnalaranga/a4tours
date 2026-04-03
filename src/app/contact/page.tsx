"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";

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

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+94 77 123 4567",
    sub: "+94 11 234 5678",
    href: "tel:+94771234567",
    color: "#550000",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@a4tours.lk",
    sub: "bookings@a4tours.lk",
    href: "mailto:info@a4tours.lk",
    color: "#c9a84c",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "No. 42, Galle Road",
    sub: "Colombo 03, Sri Lanka",
    href: "#map",
    color: "#550000",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon – Sat: 8am – 6pm",
    sub: "Sun: 9am – 2pm",
    href: "#",
    color: "#c9a84c",
  },
];

const topics = [
  "Tour Package Inquiry",
  "Custom Itinerary Request",
  "Group Booking",
  "Pricing & Availability",
  "Other",
];

export default function ContactPage() {
  const { ref: formRef, inView: formInView } = useInView(0.1);
  const { ref: infoRef, inView: infoInView } = useInView(0.1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    travelers: "2",
    travelDate: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #550000 0%, #3a0000 100%)" }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: "#c9a84c", transform: "translate(30%,-30%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase">Get In Touch</span>
          <h1 className="text-5xl font-black text-white mt-2 mb-4">Contact Us</h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{ background: "linear-gradient(90deg, #c9a84c, #f0d080)" }} />
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Ready to plan your dream trip? Our travel experts are here to help you create an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 bg-[#fafafa]" ref={infoRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="bg-white p-6 rounded-2xl hover-lift group flex flex-col items-center text-center"
                  style={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    opacity: infoInView ? 1 : 0,
                    transform: infoInView ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.5s ease ${i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon size={24} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="font-semibold text-[#550000] text-sm">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div
              ref={formRef}
              className="lg:col-span-3"
              style={{
                opacity: formInView ? 1 : 0,
                transform: formInView ? "translateX(0)" : "translateX(-40px)",
                transition: "all 0.8s ease",
              }}
            >
              <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase">Send a Message</span>
              <h2 className="text-3xl font-black text-gray-900 mt-2 mb-2">
                Plan Your Perfect Trip
              </h2>
              <div className="section-divider mx-0 mb-8" />

              {status === "sent" ? (
                <div
                  className="p-12 rounded-2xl text-center"
                  style={{ background: "linear-gradient(135deg, #f0fff4, #e8fdf0)" }}
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "#1a6b3a15" }}>
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">
                    Thank you for reaching out! Our travel experts will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", topic: "", message: "", travelers: "2", travelDate: "" }); }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#550000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#550000] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+94 77 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#550000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="topic">
                        Inquiry Type *
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        required
                        value={form.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#550000] transition-colors bg-white text-gray-600"
                      >
                        <option value="">Select a topic</option>
                        {topics.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="travelers">
                        Number of Travelers
                      </label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={form.travelers}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#550000] transition-colors bg-white text-gray-600"
                      >
                        {["1", "2", "3–5", "6–10", "11–20", "20+"].map((n) => (
                          <option key={n} value={n}>{n} {n === "1" ? "person" : "people"}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="travelDate">
                        Preferred Travel Date
                      </label>
                      <input
                        id="travelDate"
                        name="travelDate"
                        type="date"
                        value={form.travelDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#550000] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your dream trip — destinations, interests, special requests..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#550000] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center text-base"
                    id="contact-submit"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Side Info */}
            <div
              className="lg:col-span-2 space-y-6"
              style={{
                opacity: formInView ? 1 : 0,
                transform: formInView ? "translateX(0)" : "translateX(40px)",
                transition: "all 0.8s ease 0.2s",
              }}
            >
              {/* Map placeholder */}
              <div id="map" className="img-placeholder rounded-2xl" style={{ height: "260px" }}>
                <div className="text-center">
                  <MapPin size={40} className="text-[#550000] opacity-30 mb-2" />
                  <p className="text-sm text-gray-400 opacity-70">Google Map Embed</p>
                  <p className="text-xs text-gray-400 opacity-50">No. 42, Galle Road, Colombo 03</p>
                </div>
              </div>

              {/* Quick contact */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "linear-gradient(135deg, #550000, #3a0000)" }}
              >
                <h3 className="font-bold text-white text-lg mb-4">Need Immediate Help?</h3>
                <p className="text-white/70 text-sm mb-5">
                  Our team is available 7 days a week to answer your questions and help you plan the perfect trip.
                </p>
                <a
                  href="tel:+94771234567"
                  className="flex items-center gap-3 p-3 rounded-xl mb-3 transition-all hover:opacity-90"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#c9a84c" }}>
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Call Us Now</div>
                    <div className="text-white/60 text-xs">+94 77 123 4567</div>
                  </div>
                </a>
                <a
                  href="mailto:info@a4tours.lk"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all hover:opacity-90"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#c9a84c" }}>
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Email Us</div>
                    <div className="text-white/60 text-xs">info@a4tours.lk</div>
                  </div>
                </a>
              </div>

              {/* FAQ quick */}
              <div className="p-6 rounded-2xl" style={{ border: "1px solid #f0f0f0" }}>
                <h3 className="font-bold text-gray-900 mb-4">Common Questions</h3>
                {[
                  "Do you offer custom tour packages?",
                  "What is your cancellation policy?",
                  "Are tours available year-round?",
                ].map((q) => (
                  <div key={q} className="py-2.5 border-b border-gray-100 last:border-0 flex items-start gap-2 text-sm">
                    <CheckCircle size={14} className="text-[#550000] mt-0.5 shrink-0" />
                    <span className="text-gray-600">{q}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-400 mt-3">
                  We&apos;ll answer all your questions in our response!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
