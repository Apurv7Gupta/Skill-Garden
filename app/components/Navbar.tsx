import { NavLink } from "react-router";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow p-4 min-w-[450px]">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        <div className=" flex items-center justify-between mb-4 sm:mb-0">
          <NavLink to="/" className="flex text-2xl font-bold text-emerald-400">
            <Box sx={{ width: 120, height: "auto" }}>
              <img
                src="./assets/LOGO.png"
                alt="Skill Garden"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              sx={{
                alignSelf: "center",
                fontSize: {
                  xs: "1.25rem", // ~20px
                  sm: "1.5rem", // ~24px
                  md: "2rem", // ~32px
                  lg: "2.5rem", // ~40px
                },
                fontWeight: "bold",
              }}
            >
              Skill Garden
            </Typography>
          </NavLink>
          <Button
            variant="contained"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            Sign In
          </Button>
        </div>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `text-emerald-400` : `text-gray-100`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="roadmaps"
            className={({ isActive }) =>
              isActive ? "text-emerald-400" : `text-gray-100`
            }
          >
            Roadmaps
          </NavLink>

          <NavLink
            to="create"
            className={({ isActive }) =>
              isActive ? "text-emerald-400" : `text-gray-100`
            }
          >
            Create Roadmap
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "text-emerald-400" : `text-gray-100`
            }
          >
            About
          </NavLink>

          {/* Sign In Button */}
          <Button variant="contained" sx={{ ml: 2 }}>
            Sign In
          </Button>
        </Box>

        {/* Mobile Menu Items */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `text-emerald-400` : `text-gray-600`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="Roadmaps"
              className={({ isActive }) =>
                isActive ? "text-emerald-400" : `text-gray-600`
              }
            >
              Roadmaps
            </NavLink>
            <NavLink
              to="create"
              className={({ isActive }) =>
                isActive ? "text-emerald-400" : `text-gray-600`
              }
            >
              Create Path
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "text-emerald-400" : `text-gray-600`
              }
            >
              About
            </NavLink>
          </Stack>

          {/* Hamburger Icon */}
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ fontSize: 30 }}
          >
            <MenuRoundedIcon />
          </Button>
        </Box>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <Box sx={{ display: { xs: "block", sm: "none" }, mt: 2 }}>
          <Stack direction="column" spacing={2} alignItems="center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `text-emerald-400` : `text-gray-600`
              }
            >
              Home
            </NavLink>
          </Stack>
        </Box>
      )}
    </nav>
  );
};

export default Navbar;

// ORIGINAL

// import { NavLink } from "react-router";
// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <NavLink to="/" className="text-2xl font-bold text-emerald-400">
//           Skill Garden
//         </NavLink>
//         <div className="space-x-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? `text-emerald-400` : `text-gray-600`
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="Roadmaps"
//             className={({ isActive }) =>
//               isActive ? "text-emerald-400" : `text-gray-600`
//             }
//           >
//             Roadmaps
//           </NavLink>

//           <NavLink
//             to="Create Path"
//             className={({ isActive }) =>
//               isActive ? "text-emerald-400" : `text-gray-600`
//             }
//           >
//             Create Path
//           </NavLink>

//           <NavLink
//             to="about"
//             className={({ isActive }) =>
//               isActive ? "text-emerald-400" : `text-gray-600`
//             }
//           >
//             About
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
