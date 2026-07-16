export default function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="card p-6 flex flex-col h-full">
      <div className="flex gap-0.5 text-accent mb-3" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-ink/80 text-base flex-1">« {quote} »</blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold text-primary">{author}</span>
        <span className="text-ink/50">, {role}</span>
      </figcaption>
    </figure>
  )
}
