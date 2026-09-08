import { Container, Box, Typography } from "@mui/material";

const FEATURES = [
  {
    icon: "◈",
    title: "Interactive Visual Paths",
    desc: "Explore roadmaps built with interactive nodes. Click through skills, track progress, and shape your own learning path.",
  },
  {
    icon: "⬡",
    title: "Custom Roadmap Builder",
    desc: "Design your own learning or project roadmap—node by node. Visualize progress. Connect ideas. Stay on track.",
  },
  {
    icon: "◎",
    title: "Track Your Progress",
    desc: "Visualize every step, mark what's done, and see what's next. Your path, your pace—clearly mapped.",
  },
];

export default function Cards() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        px: { xs: 2, sm: 4, lg: 8 },
        py: { xs: 6, lg: 10 },
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.50)",
          textTransform: "uppercase",
          mb: 6,
          textAlign: "center",
        }}
      >
        Everything you need to grow
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
          },
          gap: { xs: 2, lg: 4 },
        }}
      >
        {FEATURES.map((card, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              background: "rgba(255, 255, 255, 0.03)",
              p: { xs: 3, lg: 4 },
              transition: "all 100ms ease-out",
              cursor: "default",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.06)",
                borderColor: "rgba(255, 255, 255, 0.14)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                mb: 2,
                color: "rgba(139, 92, 246, 0.9)",
                lineHeight: 1,
              }}
            >
              {card.icon}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", lg: "1.125rem" },
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "rgba(255,255,255,0.90)",
                mb: 1.5,
              }}
            >
              {card.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.6,
              }}
            >
              {card.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
