import { NavLink } from "react-router";
import { Box, Stack } from "@mui/material";
import LoginBtn from "./LoginBtn";
import SignInBtn from "./SignInBtn";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "Explore", label: "Explore" },
  { to: "create", label: "Create" },
  { to: "about", label: "About" },
];

const Navbar = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        backdropFilter: "blur(12px) saturate(150%)",
        WebkitBackdropFilter: "blur(12px) saturate(150%)",
        background: "rgba(10, 10, 10, 0.75)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 4, lg: 8 },
          height: { xs: 56, sm: 60 },
          gap: 2,
        }}
      >
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="./assets/LOGO.png"
            alt="Skill Garden"
            style={{ width: 28, height: 28, objectFit: "contain" }}
          />
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.90)",
            }}
          >
            Skill Garden
          </span>
        </NavLink>

        {/* Desktop nav links */}
        <Stack
          direction="row"
          spacing={0}
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 400,
                color: isActive
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(255,255,255,0.55)",
                padding: "6px 12px",
                borderRadius: "6px",
                transition: "all 100ms ease-out",
                letterSpacing: "0em",
              })}
            >
              {label}
            </NavLink>
          ))}
        </Stack>

        {/* Auth buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SignInBtn />
          <LoginBtn />
        </Box>
      </Box>

      {/* Mobile nav row */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          alignItems: "center",
          px: 2,
          pb: 1.5,
          gap: 0,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              textDecoration: "none",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: isActive
                ? "rgba(255,255,255,0.95)"
                : "rgba(255,255,255,0.45)",
              padding: "8px 10px",
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              transition: "all 100ms ease-out",
            })}
          >
            {label}
          </NavLink>
        ))}
      </Box>
    </nav>
  );
};

export default Navbar;
