import { NavLink } from "react-router";
import { Box, Stack, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        px: { xs: 2, sm: 4, lg: 8 },
        py: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.40)",
        }}
      >
        © 2026 Skill Garden
      </Typography>

      <Stack direction="row" spacing={1}>
        <NavLink to="https://github.com/Apurv7Gupta" style={{ display: "flex" }}>
          <IconButton
            sx={{
              color: "rgba(255,255,255,0.50)",
              transition: "all 100ms ease-out",
              borderRadius: "8px",
              p: 1,
              "&:hover": {
                color: "rgba(255,255,255,0.90)",
                background: "rgba(255,255,255,0.06)",
              },
            }}
          >
            <GitHubIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </NavLink>

        <NavLink to="/" style={{ display: "flex" }}>
          <IconButton
            sx={{
              color: "rgba(255,255,255,0.50)",
              transition: "all 100ms ease-out",
              borderRadius: "8px",
              p: 1,
              "&:hover": {
                color: "rgba(255,255,255,0.90)",
                background: "rgba(255,255,255,0.06)",
              },
            }}
          >
            <YouTubeIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </NavLink>

        <NavLink
          to="https://www.linkedin.com/in/apurv7gupta"
          style={{ display: "flex" }}
        >
          <IconButton
            sx={{
              color: "rgba(255,255,255,0.50)",
              transition: "all 100ms ease-out",
              borderRadius: "8px",
              p: 1,
              "&:hover": {
                color: "rgba(255,255,255,0.90)",
                background: "rgba(255,255,255,0.06)",
              },
            }}
          >
            <LinkedInIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </NavLink>
      </Stack>
    </Box>
  );
}
