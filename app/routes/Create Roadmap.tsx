import { Box } from "@mui/material";

import Create from "~/components/sections/Create";

export function meta() {
  return [{ title: "Create | Skill Garden" }];
}

export default function CreateRoadmap() {
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Left Panel */}
        <Box
          sx={{
            flexBasis: {
              xs: "20%", // 20% width on extra small screens
              sm: "20%",
              md: "20%",
            },
            minWidth: 100,
            bgcolor: "#f0f0f0",
          }}
        >
          {/* Left panel content */}
        </Box>

        {/* Center React Flow Panel */}
        <Create />

        {/* Right Panel */}
        <Box
          sx={{
            flexBasis: {
              xs: "20%",
              sm: "20%",
              md: "20%",
            },
            minWidth: 100,
            bgcolor: "#f0f0f0",
          }}
        >
          {/* Right panel content */}
        </Box>
      </Box>
    </>
  );
}
