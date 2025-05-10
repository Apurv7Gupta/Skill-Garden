import { Box, Typography, Button, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
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
        <Box
          sx={{
            flexWrap: "nowrap",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            bgcolor: "cornflowerblue",
            borderRadius: 2,
            px: { lg: 2, md: 1.5, sm: 1, xs: 0.3 },
          }}
        >
          <Search
            sx={{
              color: "white",
              fontSize: {
                xs: "0.3rem",
                sm: "0.4rem",
                md: "1.5rem",
                lg: "2rem",
              },
            }}
          ></Search>
          <Typography
            variant="button"
            sx={{
              p: 2,
              color: "white",
              fontSize: {
                xs: "0.3rem",
                sm: "0.4rem",
                md: "0.6rem",
                lg: "0.9rem",
              },
            }}
          >
            Search Node
          </Typography>
          <TextField
            color="primary"
            placeholder="Node Type/Name"
            sx={{
              color: "white",
              fontSize: {
                xs: "0.3rem",
                sm: "0.4rem",
                md: "0.6rem",
                lg: "0.9rem",
              },
            }}
          ></TextField>
        </Box>
      </Box>

      {/* {Button container} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
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
            color="success"
            sx={{
              fontSize: {
                xs: "0.3rem",
                sm: "0.4rem",
                md: "0.6rem",
                lg: "0.9rem",
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
              minWidth: 0,
              flexShrink: 1,
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
                sm: "0.4rem",
                md: "0.6rem",
                lg: "0.9rem",
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
              minWidth: 0,
              flexShrink: 1,
            }}
          >
            Add Branch
          </Button>
        </Box>
      </Box>
    </>
  );
}
