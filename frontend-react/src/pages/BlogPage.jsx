import React from "react";
import { Link } from "react-router-dom";

// Sample blog data — easy to expand
const blogPosts = [
  {
    to: "un-days",
    title: "United Nations Day Activities",
    content: `The international days are occasions to educate the general public on issues of concern,
          to mobilize political will and resources to address global problems, and to celebrate and
          reinforce achievements of humanity. Blue Gate Initiative joins the rest of the world in
          observing internationally declared days to showcase its efforts in addressing global health
          issues, social equity, and awareness creation in communities...`,
    image: "/assets/unitedNations/internationalDay/internationalDay3.jpg",
  },
  {
    id: "health-awareness-campaign",
    title: "Promoting Health Awareness in Rural Communities",
    content: `Health is wealth, and at Blue Gate Initiative, we are taking this message to every doorstep. Our community health promotion programs have reached thousands across Oyo State...`,
    image: "/assets/blog/health-awareness.jpg",
  },
  {
    id: "youth-engagement",
    title: "Youth Engagement and Public Health Innovation",
    content: `The future of public health lies in the hands of our youth. Through targeted programs and mentorship, we inspire young people to drive meaningful change in their communities...`,
    image: "/assets/blog/youth.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Page Header */}
      <section className="py-8 px-2 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-extrabold text-sky-800 mb-2">Our Blog</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Insights, stories, and updates from our team at Blue Gate Initiative.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.to}
            className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h3 className="text-lg font-bold text-sky-800 mb-2">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {post.content.substring(0, 120)}...
              </p>

              <Link
                to={`/blogs/${post.to}`}
                className="inline-block mt-3 text-sm font-medium text-sky-700 hover:text-sky-900"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
