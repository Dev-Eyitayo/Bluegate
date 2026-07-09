import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "../../utils/apiClient";
import { LoaderCircle } from "lucide-react";

const CACHE_KEY = "outreach_posts_cache";
const CACHE_TTL = 5 * 60 * 1000;

const STATIC_CARE_PROJECT = {
  id: "static-care-project",
  title: "CARE PROJECT",
  slug: "care-project",
  excerpt: "Providing affordable household items, free medical screenings, and health education to underserved communities in Ibadan.",
  content: "The CARE Project is a community intervention initiative focused on supporting underserved populations through subsidised household items, free health screenings, medications, and public health education.",
  is_published: true,
  created_at: "2025-10-01T10:00:00.000Z",
  updated_at: null,
  images: [
    {
      image_url: "https://res.cloudinary.com/dopobzvog/image/upload/v1763990467/blog/care-project/puadeq3xnk2pazipefpy.jpg",
    },
  ],
};

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { timestamp, data } = JSON.parse(cachedData);
          if (Date.now() - timestamp < CACHE_TTL) {
            setPosts([STATIC_CARE_PROJECT, ...data]);
            setLoading(false);
            return;
          }
        }

        const data = await apiRequest("/blogs/?limit=50", "GET");
        const fetchedPosts = Array.isArray(data) ? data : data?.results || [];

        const filteredPosts = fetchedPosts.filter(
          (post) => post && post.slug !== "care-project"
        );

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: filteredPosts,
          })
        );

        setPosts([STATIC_CARE_PROJECT, ...filteredPosts]);
      } catch (err) {
        setError("Failed to load outreach posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3">
          <LoaderCircle className="h-12 w-12 animate-spin text-brand-600" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-2">
        <div className="text-center max-w-md">
          <p className="text-red-600 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded-full bg-brand-600 px-6 py-2.5 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-800">
      <section className="py-10 max-w-7xl mx-auto text-center px-4">
        <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
          Our Outreaches
        </h1>
        <span className="mt-3 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Insights, stories, and updates from the outreaches of our team at Blue
          Gate Initiative.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-2 pb-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {posts.length === 0 ? (
          <div className="col-span-full text-center py-6">
            <p className="text-slate-500 text-lg">
              No outreach posts yet. Check back soon!
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <Link
              to={`/outreach/${post.slug}`}
              key={post.id}
              className="group border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              {post.images && post.images.length > 0 && (
                <div className="overflow-hidden border-b border-slate-100">
                  <img
                    src={post.images[0].image_url}
                    alt={post.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-4">
                <h3 className="font-display text-sm font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-brand-700 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  {post.excerpt ||
                    (post.content || "")
                      .replace(/<[^>]*>/g, "")
                      .substring(0, 120)}
                  ...
                </p>

                <span className="inline-block mt-3 text-sm font-semibold text-brand-700">
                  Read More
                </span>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}