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
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex items-center gap-3">
            <LoaderCircle className="h-12 w-12 animate-spin text-brand-600" />
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
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" /> Back to Outreaches
            </Link>
          </div>

          {/* Blog content */}
          <div className="p-2 md:p-4">
            <header className="mb-6">
              <h1 className="font-display text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-3">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-brand-500" />
                  {format(new Date(post.created_at), "MMMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-brand-500" />
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
              <p className="text-lg text-slate-600 mb-6 italic border-l-4 border-brand-400 pl-4">
                {post.excerpt}
              </p>
            )}

            <div
              className="prose max-w-none leading-relaxed text-slate-700 whitespace-pre-wrap"
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
