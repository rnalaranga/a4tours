import { ArrowLeft, Clock, Calendar, Compass } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Sri Lankan Street Food",
    excerpt: "Discover the vibrant flavors of kottu roti, hoppers, and spicy sambols that define the island's culinary landscape.",
    content: "Sri Lankan street food is a vibrant reflection of the island's history, culture, and rich spice heritage. From the rhythmic chopping of kottu roti echoing through the night streets to the delicate edges of a perfectly crispy egg hopper, every dish tells a story of diverse influences.\n\nWhether you're wandering the bustling streets of Colombo or a quiet coastal town, the culinary adventure is boundless. Essential eats include 'Isso Vade' (spicy lentil and prawn fritters) at Galle Face Green, and the humble yet fiery coconut sambol that accompanies almost every meal. Dive in with an open mind and a ready palate, and discover why this little island punches so far above its weight in global flavor.",
    date: "Mar 15, 2026",
    category: "Culinary",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Hidden Beaches of the Southern Coast",
    excerpt: "Escape the crowds and explore these secret, pristine sandy stretches for the ultimate tropical relaxation.",
    content: "While popular spots like Mirissa and Unawatuna offer fantastic experiences, the true magic of Sri Lanka's southern coast lies within its hidden coves and secret beaches. Just a few kilometers off the main coastal road, you can find stretches of golden sand entirely to yourself.\n\nSecret Beach near Mirissa and the quiet crescent of Hiriketiya (which is becoming a surfer's haven) are just the beginning. These secluded spots provide untouched coral reefs, quiet waves, and the perfect atmosphere to disconnect. Rent a scooter, pack a towel, and let the coastal breeze guide you to your own private slice of paradise.",
    date: "Apr 02, 2026",
    category: "Guides",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "A Journey Through the Ceylon Tea Trails",
    excerpt: "Experience the misty mountains, historic estates, and the fascinating process behind the world's finest tea.",
    content: "The central highlands of Sri Lanka, often draped in rolling mist, are the heartland of pure Ceylon Tea. Introduced by the British in the 19th century, tea cultivation transformed these emerald hills into one of the most picturesque landscapes on earth.\n\nA journey through the tea trails—whether by taking the iconic blue train from Kandy to Ella or hiking through the plantations of Nuwara Eliya—offers a glimpse into an era of colonial charm. You'll meet the skilled tea pluckers, tour historic factories built over a century ago, and enjoy a perfectly brewed cup overlooking valleys that stretch endlessly into the horizon. It's a serene retreat that contrasts beautifully with the tropical heat of the coast.",
    date: "Apr 10, 2026",
    category: "Culture",
    readTime: "6 min read",
  },
];

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#550000] uppercase tracking-widest transition-colors mb-10"
        >
          <ArrowLeft size={16} /> Back to Journal
        </Link>

        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="inline-block px-3 py-1 bg-[#550000]/10 text-[#550000] rounded-full text-[10px] font-black uppercase tracking-widest">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest border-b border-gray-200 pb-8">
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-[#550000]" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-[#c9a84c]" /> {post.readTime}
            </span>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden relative mb-12 flex items-center justify-center">
            <Compass size={64} className="text-gray-300 opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Main Content */}
        <article className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl text-gray-500 font-medium leading-relaxed italic mb-8 border-l-4 border-[#c9a84c] pl-6">
            {post.excerpt}
          </p>
          {post.content.split('\n\n').map((paragraph, idx) => (
             <p key={idx} className="text-gray-600 leading-relaxed mb-6">
                {paragraph}
             </p>
          ))}
        </article>

      </div>
    </main>
  );
}
