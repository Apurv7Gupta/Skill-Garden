export const HeroImage = () => {
  return (
    <section style={{ position: "relative" }}>
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(255,255,255,0.03)",
          padding: "3px",
        }}
      >
        <img
          src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Developer learning journey visualization"
          style={{
            borderRadius: "10px",
            display: "block",
            width: "100%",
            maxWidth: "580px",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Ambient glow behind the image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, transparent 70%)",
          zIndex: -1,
          transform: "scale(1.15)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
};
