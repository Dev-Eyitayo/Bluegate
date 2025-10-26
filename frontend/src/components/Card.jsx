export default function Card({ title, description }) {
  return (
    <article className="bg-white p-5 rounded-lg shadow-md hover:-translate-y-1 transition-transform">
      <h3 className="text-mid font-bold mb-2.5">{title}</h3>
      <p className="text-muted text-sm">{description}</p>
    </article>
  );
}