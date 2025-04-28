import { NavLink } from "react-router";
import { Container, Typography, Button, Box } from "@mui/material";
import { HeroImage } from "~/components/sections/HeroImage";
import { Blur } from "~/components/blur";
import Footer from "~/components/sections/Footer";
import Cards from "~/components/Cards";
import Preview from "~/components/Preview";

export function meta() {
  return [{ title: "Home | Skill Garden" }];
}

const home = () => {
  return (
    <>
      <Container disableGutters maxWidth={false} className="min-w-[450px]">
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
            p: 2,
            gap: 2,
          }}
        >
          {/* Text and Button Column */}
          <Box
            sx={{
              width: { lg: "50%", xs: "100%" },
              textAlign: { lg: "left", xs: "center" },
              alignSelf: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                background: "linear-gradient(to right, #2563EB, #7C3AED)",
                backgroundClip: "text",
                color: "transparent",
                pt: { lg: 10 },
                fontSize: {
                  xs: "1.75rem",
                  sm: "2.7rem",
                  lg: "3rem",
                },
                ml: "0.5rem",
              }}
            >
              <Blur />
              Build, Track & Share Your Dev Learning Journey
            </Typography>

            {/* Button outside Typography */}
            <Box
              sx={{
                pt: {
                  xs: 3,
                  sm: 5,
                },
              }}
            >
              <Button
                fullWidth
                sx={{
                  alignSelf: "center",
                  px: { xs: 2, sm: 4 },
                  py: { xs: 1, sm: 2 },
                }}
                variant="contained"
              >
                <Typography variant="h6">Explore Roadmaps</Typography>
              </Button>
            </Box>
          </Box>

          {/* Hero Section */}
          <HeroImage />
        </Container>

        <Cards />

        {/* Section 2*/}
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
            pt: { xs: 5 },
            pb: { lg: 10, sm: 10 },
            gap: 2,
          }}
        >
          {/* Text and Button Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", sm: "row", xs: "column-reverse" },
              width: "100%",
              textAlign: { lg: "right", xs: "center" },
              alignSelf: "center",
              p: 5,
            }}
          >
            {/* Button outside Typography */}
            <Box
              sx={{
                width: { xs: "100%", lg: "40%" },
                pt: {
                  xs: 3,
                },
                pr: {
                  lg: 3,
                  sm: 3,
                },
              }}
            >
              <NavLink to={"create"}>
                <Button
                  fullWidth
                  sx={{
                    alignSelf: "center",
                    px: { xs: 2, sm: 4 },
                    py: { xs: 1, sm: 2 },
                  }}
                  variant="contained"
                >
                  <Typography sx={{ fontSize: { lg: "2rem" } }}>
                    Create a path
                  </Typography>
                </Button>
              </NavLink>
            </Box>
            <Typography
              variant="h1"
              sx={{
                background: "linear-gradient(to right, #2563EB, #7C3AED)",
                backgroundClip: "text",
                color: "transparent",

                fontSize: {
                  xs: "1.6rem",
                  sm: "2rem",
                  lg: "3rem",
                },
              }}
            >
              create your own learning paths, and monitor your progress using
              interactive nodes
            </Typography>
          </Box>
        </Container>
        <Typography
          sx={{
            width: "100%",
            textAlign: "center",
            color: "white",
            p: 5,
            fontSize: {
              xs: "1.6rem",
              sm: "2rem",
              lg: "3rem",
            },
          }}
        >
          Try it yourself
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Preview />
          {/* <iframe
          src="https://codesandbox.io/embed/drx6s4?view=preview&module=%2Fsrc%2Fnodes%2Findex.js"
          className="lg:w-[500px] lg:h-[500px] border-0 rounded-sm overflow-hidden sm:w-auto sm:h-auto"
          title="unruffled-glade-drx6s4"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe> */}
        </Box>

        <Typography
          sx={{
            width: "100%",
            textAlign: "center",
            color: "white",
            p: 5,
            fontSize: {
              xs: "1.6rem",
              sm: "2rem",
              lg: "3rem",
            },
          }}
        >
          Plan. Learn. Track.
        </Typography>
        <Footer />
      </Container>
    </>
  );
};

export default home;
