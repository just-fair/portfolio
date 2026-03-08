function FeedbackSection({ feedbacks }) {
  return (
    <section className="feedbacks">
      <h2>
        <span className="prompt">$</span> cat feedbacks.log
      </h2>
      <div className="feedback-grid">
        {feedbacks.map((feedback, index) => (
          <article
            key={feedback.id}
            className="feedback-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="feedback-head">
              <p className="meta">
                {feedback.client} · {feedback.role}
              </p>
              <a href={feedback.proofUrl} target="_blank" rel="noreferrer">
                {feedback.cta}
              </a>
            </div>
            <blockquote className="quote">"{feedback.quote}"</blockquote>
            <p className="project-label">project: {feedback.project}</p>
            <p className="impact">{feedback.impact}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeedbackSection;
