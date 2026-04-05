import Link from "next/link";
import { ArrowRight, Clock, Compass } from "lucide-react";

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

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen pt-24 bg-[#fafafa]">
        {/* -- Header -- */}
        <div className="bg-[#550000] text-center py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#c9a84c] mb-4 block">Travel Journal</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">Stories & Insights</h1>
            <p className="mt-4 text-white/70 text-lg">Curated stories, travel tips, and guides from our local experts.</p>
          </div>
        </div>

        {/* -- Blog List -- */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
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
      </main>
    </>
  );
}
