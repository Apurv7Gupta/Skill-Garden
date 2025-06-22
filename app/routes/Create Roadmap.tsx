import { Box } from "@mui/material";
import TopPanel from "~/components/sections/createSection/TopPanel";
import Create from "~/components/sections/createSection/Create";
import BottomPanel from "~/components/sections/createSection/BottomPanel";

export function meta() {
  return [{ title: "Create | Skill Garden" }];
}

export default function CreateRoadmap() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // stack on mobile
          height: "100vh",
          width: "100%",
          overflowX: "auto", // prevent overflow zoom
        }}
      >
        {/* Top Panel */}
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            minWidth: { md: 100 },
            bgcolor: "#05365e",
          }}
        >
          <TopPanel />
        </Box>

        {/* Center Panel */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0, // important for flex children to not overflow
            overflow: "hidden", // no accidental scrollbars
          }}
        >
          <Create />
        </Box>

        {/* Bottom Panel */}
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            minWidth: { md: 100 },
            bgcolor: "#05365e",
          }}
        >
          <BottomPanel />
        </Box>
      </Box>
    </>
  );
}
