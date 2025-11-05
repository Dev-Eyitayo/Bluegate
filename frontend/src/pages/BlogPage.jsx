import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "../../utils/apiClient";
import { Loader2 } from "lucide-react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await apiRequest("/blogs/?limit=50", "GET");
        setPosts(data || []);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-sky-200/10 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-sky-600" />
          <span className="text-lg text-gray-700">Loading posts...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-sky-200/10 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <p className="text-red-600 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-5 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
        {posts.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {post.images && post.images.length > 0 && (
                <img
                  src={post.images[0].image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-5">
                <h3 className="text-lg font-bold text-sky-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt || post.content.replace(/<[^>]*>/g, "").substring(0, 120)}...
                </p>

                <Link
                  to={`/blogs/${post.slug}`}
                  className="inline-block mt-3 text-sm font-medium text-sky-700 hover:text-sky-900 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}