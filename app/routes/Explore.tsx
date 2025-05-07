import { Search } from "@mui/icons-material";
import { Box, Container, TextField, Typography } from "@mui/material";

export function meta() {
  return [{ title: "Explore | Skill Garden" }];
}

export default function Explore() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ minWidth: "450px" }}>
        <Typography
          variant="h1"
          sx={{
            background: "linear-gradient(to right, #2563EB, #7C3AED)",
            backgroundClip: "text",
            color: "transparent",
            pt: 8,
            pb: 1,
            fontSize: {
              xs: "1.75rem",
              sm: "2.7rem",
              lg: "3rem",
            },
            ml: 6,
          }}
        >
          Explore Roadmaps Made By Other People
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, p: 5 }}>
          <Search sx={{ color: "white", fontSize: 50 }}></Search>
          <TextField
            placeholder="Search Roadmap"
            sx={{
              width: "100%",
              borderRadius: 2,
              bgcolor: "white",
            }}
          ></TextField>
        </Box>
        <Container sx={{ p: 5 }}> {/*Uploaded Roadmaps*/} </Container>
      </Container>
    </>
  );
}
