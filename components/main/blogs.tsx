import React from "react";
import Image from "next/image";
import { blogPosts } from "@/constants/blogposts";
import { FaCalendar, FaArrowRight, FaClock } from "react-icons/fa6";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-12 sm:py-16 md:py-24 pb-12 sm:pb-16 md:pb-24 container px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mx-auto font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">BLOG</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold px-4">
          Thoughts, tutorials, and insights on app development, technology, and
          software engineering
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 group"
          >
            {/* Blog Image */}
            <div className="relative overflow-hidden h-48 sm:h-56">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-fit group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-5 sm:p-6">
              {/* Meta Information */}
              <div className="flex items-center gap-4 text-gray-400 text-xs sm:text-sm mb-3">
                <div className="flex items-center gap-1">
                  <FaCalendar size={12} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock size={12} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md "
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors group/link"
              >
                Read More
                <FaArrowRight
                  size={12}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No blog posts yet. Stay tuned for upcoming content!
          </p>
        </div>
      )}
    </section>
  );
};

export default Blog;