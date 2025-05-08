import { Box, Button, Typography } from "@mui/material";

export default function LeftPanel() {
  return (
    <>
      <Button
        variant="contained"
        fullWidth
        sx={{
          borderRadius: "0",
          color: "white",
          fontWeight: 400,
          fontSize: {
            xs: "0.7rem",
            sm: "1rem",
            md: "1.5rem",
          },
        }}
      >
        Edit
      </Button>
      {/* Button Container */}
      <Box
        sx={{
          m: 2,
          p: { xs: 1, sm: 2, md: 3 },
          display: "flex",
          justifyContent: "center",
          gap: { xs: 1, sm: 2 },
          bgcolor: "lavender",
          borderRadius: 2,
          flexWrap: "nowrap", // stay in one row
        }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            fontSize: {
              xs: "0.3rem",
              sm: "0.4rem",
              md: "0.6rem",
              lg: "0.9rem",
            },
            px: {
              xs: 1,
              sm: 1.5,
              md: 2,
            },
            py: {
              xs: 0.25,
              sm: 0.5,
              md: 0.75,
            },
            minWidth: 0,
            flexShrink: 1,
          }}
        >
          Delete Edge
        </Button>
        <Button
          variant="contained"
          color="info"
          sx={{
            fontSize: {
              xs: "0.3rem",
              sm: "0.4rem",
              md: "0.6rem",
              lg: "0.9rem",
            },
            px: {
              xs: 1,
              sm: 1.5,
              md: 2,
            },
            py: {
              xs: 0.25,
              sm: 0.5,
              md: 0.75,
            },
            minWidth: 0,
            flexShrink: 1,
          }}
        >
          Change Type
        </Button>
      </Box>
    </>
  );
}
