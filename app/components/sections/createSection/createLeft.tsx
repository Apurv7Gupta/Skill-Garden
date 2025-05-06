import { Box, Button, Typography } from "@mui/material";

export default function CreateLeft() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "rgb(25, 118, 210)",
          width: "100%",
          py: 2,
          px: { xs: 2, sm: 4, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
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
          Edit Components
        </Typography>
      </Box>

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
          Delete Edge
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
          Button 2
        </Button>
      </Box>
    </>
  );
}
