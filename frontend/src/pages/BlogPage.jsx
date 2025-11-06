import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "../../utils/apiClient";
import { LoaderCircle } from "lucide-react";

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
        setError("Failed to load outreach posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-sky-200/10 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <LoaderCircle className="h-12 w-12 animate-spin text-sky-600" />
          {/* <span className="text-lg text-gray-700">Loading posts...</span> */}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-sky-200/10 flex items-center justify-center p-2">
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
      <section className="py-6 max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-xl font-extrabold text-sky-800 mb-2">Our Outreaches</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Insights, stories, and updates from the outreaches of our team at Blue Gate Initiative.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-2 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.length === 0 ? (
          <div className="col-span-full text-center py-6">
            <p className="text-gray-500 text-lg">No outreach posts yet. Check back soon!</p>
          </div>
        ) : (
          posts.map((post) => (
            <Link
              to={`/outreach/${post.slug}`}
              key={post.id}
              className="border border-slate-300 rounded-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {post.images && post.images.length > 0 && (
                <img
                  src={post.images[0].image_url}
                  alt={post.title}
                  className="w-full h-40 border-b border-slate-300 object-cover"
                />
              )}

              <div className="p-3">
                <h3 className="text-sm font-bold text-sky-800 mb-1 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  {post.excerpt || post.content.replace(/<[^>]*>/g, "").substring(0, 120)}...
                </p>

                <Link
                  to={`/outreach/${post.slug}`}
                  className="inline-block mt-3 text-sm font-medium text-sky-700 hover:text-sky-900 transition"
                >
                  Read More
                </Link>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}