import { NavLink } from "react-router";
import { Container, Typography, Button, Box } from "@mui/material";
import { HeroImage } from "~/components/sections/HeroImage";
import Footer from "~/components/sections/Footer";
import Cards from "~/components/Cards";
import Preview from "~/components/Preview";

export function meta() {
  return [{ title: "Home | Skill Garden" }];
}

const home = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          background: '#0A0A0A',
          minHeight: '100vh',
        }}
      >
        {/* Hero Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, sm: 4, lg: 8 },
            pt: { xs: 6, lg: 10 },
            pb: { xs: 4, lg: 8 },
            gap: { xs: 4, lg: 6 },
          }}
        >
          {/* Text and Button Column */}
          <Box
            sx={{
              width: { lg: "50%", xs: "100%" },
              textAlign: { lg: "left", xs: "center" },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3rem",
                  lg: "4rem",
                },
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: 'rgba(255, 255, 255, 0.95)',
                mb: 3,
              }}
            >
              Build, Track & Share Your Dev Learning Journey
            </Typography>

            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.65)',
                mb: 4,
                lineHeight: 1.6,
                maxWidth: { lg: "90%", xs: "100%" },
                mx: { xs: "auto", lg: 0 },
              }}
            >
              Create interactive roadmaps, visualize your progress, and connect your learning path—node by node.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', lg: 'flex-start' },
              }}
            >
              <NavLink to="/Explore" style={{ textDecoration: 'none', width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
                <Button
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textTransform: 'none',
                    borderRadius: '8px',
                    background: 'rgba(139, 92, 246, 1)',
                    color: '#FAFAFA',
                    border: 'none',
                    transition: 'all 100ms ease-out',
                    width: { xs: '100%', sm: 'auto' },
                    minHeight: { xs: '44px', sm: '40px' },
                    '&:hover': {
                      background: 'rgba(124, 58, 237, 1)',
                      transform: 'scale(0.98)',
                    },
                    '&:focus': {
                      outline: 'none',
                      boxShadow: '0 0 0 2px #0A0A0A, 0 0 0 4px rgba(139, 92, 246, 0.6)',
                    },
                  }}
                >
                  Explore Roadmaps
                </Button>
              </NavLink>
            </Box>
          </Box>

          {/* Hero Image */}
          <HeroImage />
        </Container>

        {/* Feature Cards */}
        <Cards />

        {/* Create Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            px: { xs: 2, sm: 4, lg: 8 },
            pt: { xs: 8, lg: 12 },
            pb: { xs: 6, lg: 10 },
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 4, lg: 6 },
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  lg: "3rem",
                },
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: { xs: "center", lg: "left" },
                flex: 1,
              }}
            >
              Create your own learning paths, and monitor your progress using interactive nodes
            </Typography>

            <Box sx={{ width: { xs: '100%', lg: 'auto' } }}>
              <NavLink to="create" style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textTransform: 'none',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#FAFAFA',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    transition: 'all 100ms ease-out',
                    width: { xs: '100%', lg: 'auto' },
                    minHeight: { xs: '44px', sm: '40px' },
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.10)',
                      borderColor: 'rgba(255, 255, 255, 0.20)',
                    },
                    '&:focus': {
                      outline: 'none',
                      boxShadow: '0 0 0 2px #0A0A0A, 0 0 0 4px rgba(139, 92, 246, 0.6)',
                    },
                  }}
                >
                  Create a Path
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Container>

        {/* Interactive Preview Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            px: { xs: 2, sm: 4, lg: 8 },
            pt: { xs: 8, lg: 12 },
            pb: { xs: 12, lg: 16 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                lg: "3rem",
              },
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: "center",
              mb: 6,
            }}
          >
            Try it yourself
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
            <Preview />
          </Box>

          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                lg: "3rem",
              },
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: "center",
            }}
          >
            Plan. Learn. Track.
          </Typography>
        </Container>

        <Footer />
      </Container>
    </>
  );
};

export default home;
