export default function SectionHeading({ tag, title, text }) {
  return (
    <div className="section-heading">
      {tag && <span className="section-subtitle-tag">{tag}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
