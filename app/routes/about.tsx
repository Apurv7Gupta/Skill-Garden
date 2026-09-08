export function meta() {
  return [{ title: "About | Skill Garden" }];
}

const CARDS = [
  {
    title: "Curated Roadmaps",
    desc: "Follow expert-designed paths to master technologies faster. Stay focused, stay inspired.",
  },
  {
    title: "Build Your Own Paths",
    desc: "Prefer custom journeys? Create your own learning tracks tailored to your goals and interests.",
  },
  {
    title: "Track Every Step",
    desc: "Mark what's done, see what's next. Your progress, visualized clearly at every stage.",
  },
  {
    title: "Open & Collaborative",
    desc: "Share your roadmaps with the community. Learn from others building in the same space.",
  },
];

export default function About() {
  return (
    <section
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "80px 24px 120px",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.40)",
          textTransform: "uppercase",
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        About
      </p>

      {/* Hero heading */}
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 500,
          letterSpacing: "-0.04em",
          lineHeight: 1.1,
          color: "rgba(255,255,255,0.95)",
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Welcome to Skill Garden
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: "0.875rem",
          fontWeight: 400,
          color: "rgba(255,255,255,0.60)",
          lineHeight: 1.7,
          textAlign: "center",
          maxWidth: 600,
          margin: "0 auto 72px",
        }}
      >
        Skill Garden is your personal playground for growth. Map your learning
        journey, track your progress, and cultivate new skills — all at your
        own pace.
      </p>

      {/* Feature grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {CARDS.map((card, i) => (
          <div
            key={i}
            style={{
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              padding: "28px 24px",
              transition: "all 100ms ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "rgba(255,255,255,0.90)",
                marginBottom: 10,
              }}
            >
              {card.title}
            </h2>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Tech footer note */}
      <p
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.30)",
          textAlign: "center",
          marginTop: 64,
        }}
      >
        Built with React, React Flow, Tailwind CSS, and Material UI
      </p>
    </section>
  );
}
