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
          p: { xs: 2, sm: 4 },
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          gap: 2,
          bgcolor: "lavender",
          borderRadius: 2,
        }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            fontSize: {
              xs: "0.3rem",
              sm: "0.75rem",
              md: "0.875rem",
              lg: "1rem",
            },

            px: {
              xs: 1,
              sm: 2,
              md: 3,
            },
            py: {
              xs: 0.25,
              sm: 0.5,
              md: 1,
            },
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
              sm: "0.75rem",
              md: "0.875rem",
              lg: "1rem",
            },

            px: {
              xs: 1,
              sm: 2,
              md: 3,
            },
            py: {
              xs: 0.25,
              sm: 0.5,
              md: 1,
            },
          }}
        >
          Change Type
        </Button>
      </Box>
    </>
  );
}
