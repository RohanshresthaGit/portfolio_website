import Link from "next/link";
import featuredContent from "@/constants/featured.json";
import FeaturedCard from "@/components/sub/FeaturedCard";

const FeaturedPage = () => {
  const { pageTitle, pageSubtitle, items } = featuredContent;

  return (
    <div className="min-h-screen relative overflow-hidden text-gray-200" style={{ background: "#05071a" }}>
      <div
        className="absolute top-20 left-1/4 h-96 w-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(113,47,255,0.16) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(156,178,255,0.1) 0%, transparent 70%)",
          filter: "blur(36px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-28 md:px-10 md:pt-36">
        <div>
          <Link
            href="/"
            aria-label="Back to Home: Rohan Shrestha portfolio homepage"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-purple-400"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Home
          </Link>
        </div>

        <header
          className="mb-14 text-center"
        >
          <h1 className="text-4xl font-bold text-cyan-300 md:text-5xl">
            {pageTitle}
          </h1>
          <div className="mx-auto mt-4 h-[2px] w-32 rounded-full" style={{ background: "linear-gradient(90deg, #ba9cff, #9cb2ff, transparent)" }} />
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            {pageSubtitle}
          </p>
        </header>

        <div className="space-y-10">
          {items.map((item, index) => (
            <FeaturedCard key={item.id} item={item} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPage;
