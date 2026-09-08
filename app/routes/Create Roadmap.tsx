import { Box } from "@mui/material";
import TopPanel from "~/components/sections/createSection/TopPanel";
import Create from "~/components/sections/createSection/Create";
import BottomPanel from "~/components/sections/createSection/BottomPanel";

export function meta() {
  return [{ title: "Create | Skill Garden" }];
}

export default function CreateRoadmap() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "calc(100vh - 60px)", // account for navbar height
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Left Panel */}
      <Box
        sx={{
          width: { xs: "100%", md: 220 },
          flexShrink: 0,
          borderRight: { md: "1px solid rgba(255,255,255,0.08)" },
          borderBottom: { xs: "1px solid rgba(255,255,255,0.08)", md: "none" },
          background: "#111111",
          overflowY: "auto",
        }}
      >
        <TopPanel />
      </Box>

      {/* Center Canvas */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <Create />
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          width: { xs: "100%", md: 220 },
          flexShrink: 0,
          borderLeft: { md: "1px solid rgba(255,255,255,0.08)" },
          borderTop: { xs: "1px solid rgba(255,255,255,0.08)", md: "none" },
          background: "#111111",
          overflowY: "auto",
        }}
      >
        <BottomPanel />
      </Box>
    </Box>
  );
}
