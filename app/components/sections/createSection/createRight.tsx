import { Box, Typography, Button } from "@mui/material";

export default function CreateRight() {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        fullWidth
        sx={{
          color: "white",
          fontWeight: 600,
          fontSize: {
            xs: "0.7rem",
            sm: "1rem",
            md: "1.5rem",
          },
        }}
      >
        Add Nodes
      </Button>

      <Box
        sx={{
          pt: { xs: 2, sm: 4 },
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          gap: 2,
        }}
      >
        <Button
          variant="contained"
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
          Add Node
        </Button>
        <Button
          variant="contained"
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
          Add Branch
        </Button>
      </Box>
    </>
  );
}
