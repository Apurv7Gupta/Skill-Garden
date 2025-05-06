import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router";

export function meta() {
  return [{ title: "Coming Soon | Skill Garden" }];
}

const ComingSoon = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "#0e0e0e",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        🚧 Coming Soon
      </Typography>
      <Typography variant="h6" color="gray" mb={4}>
        This page is under construction. Check back later.
      </Typography>
      <NavLink to="/">
        <Button
          variant="contained"
          sx={{ bgcolor: "#00C853", "&:hover": { bgcolor: "#00e676" } }}
        >
          Back to Home
        </Button>
      </NavLink>
    </Box>
  );
};

export default ComingSoon;
