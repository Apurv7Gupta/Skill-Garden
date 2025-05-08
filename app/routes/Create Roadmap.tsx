import { Box } from "@mui/material";
import CreateLeft from "~/components/sections/createSection/LeftPanel";
import CreateRight from "~/components/sections/createSection/createRight";
import Create from "~/components/sections/createSection/Create";

export function meta() {
  return [{ title: "Create | Skill Garden" }];
}

export default function CreateRoadmap() {
  return (
    <>
      {/* Left Panel */}
      <Box sx={{ display: "flex", height: "100vh" }}>
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
          <CreateLeft />
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
          <CreateRight />
        </Box>
      </Box>
    </>
  );
}
