// src/pages/BlogDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiRequest } from "../../utils/apiClient";
import BlogImages from "../components/BlogImages";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft } from "lucide-react";
import MainLayout from "../layouts/MainLayout"; // ✅ Make sure you wrap this in the same layout as BlogPage

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiRequest(`/blogs/${slug}`, "GET");
        setPost(data);
      } catch (err) {
        alert("Post not found");
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading)
    return (
      <MainLayout>
        <div className="min-h-screen bg-sky-200/10 flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </MainLayout>
    );

  if (!post)
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center text-red-600">
          Post not found
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="min-h-screen bg-sky-200/10 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl overflow-hidden">
          {/* Back link */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <Link
              to="/blogs"
              className="flex items-center gap-2 text-sky-700 hover:text-sky-900 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>

          {/* Blog content */}
          <div className="p-6 md:p-10">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {format(new Date(post.created_at), "MMMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Blue Gate Team
                </span>
              </div>
            </header>

            {post.images.length > 0 && (
              <div className="mb-10 rounded-xl overflow-hidden">
                <BlogImages
                  slides={post.images.map((img) => ({
                    src: img.image_url,
                    caption: img.caption,
                  }))}
                />
              </div>
            )}

            {post.excerpt && (
              <p className="text-lg text-slate-700 mb-6 italic border-l-4 border-sky-500 pl-4">
                {post.excerpt}
              </p>
            )}

            <div
              className="prose prose-sky max-w-none leading-relaxed text-slate-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
