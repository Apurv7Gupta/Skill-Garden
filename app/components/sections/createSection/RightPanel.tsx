import { Search } from "@mui/icons-material";
import { Box, Typography, Button, TextField } from "@mui/material";

export default function RightPanel() {
  return (
    <>
      <Button
        variant="contained"
        color="success"
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
        Add
      </Button>
      <Box
        sx={{
          p: 2,
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "cornflowerblue",
            borderRadius: 2,
            px: 2,
          }}
        >
          <Search sx={{ color: "white" }}></Search>
          <Typography variant="button" sx={{ p: 2, color: "white" }}>
            Search Node
          </Typography>
          <TextField
            color="primary"
            placeholder="Node Type/Name"
            sx={{ color: "white", fontSize: "0.9rem" }}
          ></TextField>
        </Box> */}
      </Box>

      {/* {Button container} */}

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
          color="success"
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
          color="secondary"
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
