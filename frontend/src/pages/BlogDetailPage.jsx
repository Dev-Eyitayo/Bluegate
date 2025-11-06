// src/pages/BlogDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiRequest } from "../../utils/apiClient";
import BlogImages from "../components/BlogImages";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft } from "lucide-react";
import MainLayout from "../layouts/MainLayout"; 
import { LoaderCircle } from "lucide-react";

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
          <div className="flex items-center gap-3">
            <LoaderCircle className="h-12 w-12 animate-spin text-sky-600" />
            {/* <span className="text-lg text-gray-700">Loading posts...</span> */}
          </div>
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
      <div className="min-h-screen px-0 py-2">
        <div className="max-w-5xl mx-auto bg-white overflow-hidden">
          {/* Back link */}
          <div className="p-2 flex items-center justify-between">
            <Link
              to="/outreach"
              className="flex items-center gap-2 text-sky-700 hover:text-sky-900 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Outreaches
            </Link>
          </div>

          {/* Blog content */}
          <div className="p-2 md:p-4">
            <header className="mb-4">
              <h1 className="text-xl md:text-2xl font-bold text-sky-800 mb-3">
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
              className="prose prose-sky max-w-none leading-relaxed text-slate-800 whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\n/g, "<br />"),
              }}
            />

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
