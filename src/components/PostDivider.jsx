// Recurring "post and panel" section-transition motif: a thin vertical rule
// with a bolt/dot mark, echoing a sign mounted on a post.
export default function PostDivider({ className = "" }) {
  return (
    <div className={`flex justify-center py-2 ${className}`} aria-hidden="true">
      <div className="post-divider h-10" />
    </div>
  );
}
