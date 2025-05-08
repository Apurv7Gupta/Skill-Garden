import { NavLink } from "react-router";
import { Box, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "rgba(0, 0, 0, 0.1)",
        mt: 5,
        textAlign: "center",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center">
        <NavLink to="https://github.com/Apurv7Gupta">
          <IconButton>
            <GitHubIcon
              sx={{
                fontSize: {
                  xs: 28,
                  sm: 32,
                  md: 30,
                  lg: 35,
                },
                color: "#fff", // initial icon color
                "&:hover": {
                  color: "#90caf9", // hover color
                },
              }}
            />
          </IconButton>
        </NavLink>

        <NavLink to="/">
          <IconButton>
            <YouTubeIcon
              sx={{
                fontSize: {
                  xs: 28,
                  sm: 32,
                  md: 30,
                  lg: 35,
                },
                color: "#fff", // initial icon color
                "&:hover": {
                  color: "#90caf9", // hover color
                },
              }}
            />
          </IconButton>
        </NavLink>

        <NavLink to="https://www.linkedin.com/in/apurv7gupta">
          <IconButton>
            <LinkedInIcon
              sx={{
                fontSize: {
                  xs: 28,
                  sm: 32,
                  md: 30,
                  lg: 35,
                },
                color: "#fff", // initial icon color
                "&:hover": {
                  color: "#90caf9", // hover color
                },
              }}
            />
          </IconButton>
        </NavLink>
      </Stack>
    </Box>
  );
}
