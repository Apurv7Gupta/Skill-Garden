import Search from "@mui/icons-material/Search";
import { Box, Container, TextField, Typography } from "@mui/material";

export function meta() {
  return [{ title: "Explore | Skill Garden" }];
}

export default function Explore() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        px: { xs: 2, sm: 4, lg: 8 },
        pt: { xs: 6, lg: 10 },
        pb: 16,
      }}
    >
      {/* Page heading */}
      <Typography
        component="h1"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
          fontWeight: 500,
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,0.95)",
          mb: 2,
        }}
      >
        Explore Roadmaps
      </Typography>
      <Typography
        sx={{
          fontSize: "0.875rem",
          color: "rgba(255,255,255,0.55)",
          mb: 5,
        }}
      >
        Discover learning paths built by the community.
      </Typography>

      {/* Search bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 8,
          p: "10px 14px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(255,255,255,0.03)",
          maxWidth: 560,
          transition: "all 100ms ease-out",
          "&:focus-within": {
            borderColor: "rgba(139,92,246,0.50)",
            background: "rgba(255,255,255,0.05)",
          },
        }}
      >
        <Search sx={{ color: "rgba(255,255,255,0.35)", fontSize: 18, flexShrink: 0 }} />
        <TextField
          placeholder="Search roadmaps..."
          variant="standard"
          fullWidth
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.80)",
              "& input::placeholder": {
                color: "rgba(255,255,255,0.35)",
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {/* Empty state */}
      <Box
        sx={{
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
          py: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.02em",
          }}
        >
          No roadmaps yet
        </Typography>
        <Typography
          sx={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Be the first to create and share one.
        </Typography>
      </Box>
    </Container>
  );
}
