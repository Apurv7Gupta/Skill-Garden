import { NavLink } from "react-router";

export function meta() {
  return [{ title: "Coming Soon | Skill Garden" }];
}

const ComingSoon = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
        textAlign: "center",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.40)",
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        Status
      </p>

      {/* Heading */}
      <h1
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 500,
          letterSpacing: "-0.04em",
          lineHeight: 1.1,
          color: "rgba(255,255,255,0.95)",
          marginBottom: 16,
        }}
      >
        Coming Soon
      </h1>

      <p
        style={{
          fontSize: "0.875rem",
          fontWeight: 400,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          maxWidth: 400,
          marginBottom: 48,
        }}
      >
        This page is under construction. Check back later for something great.
      </p>

      <NavLink to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#FAFAFA",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "8px",
            padding: "10px 24px",
            cursor: "pointer",
            minHeight: 44,
            transition: "all 100ms ease-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.11)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.07)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
          }}
        >
          Back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default ComingSoon;
