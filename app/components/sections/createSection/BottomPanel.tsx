import { Box } from "@mui/material";

export default function BottomPanel() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Section label */}
      <Box sx={{ px: 2, pt: 2.5, pb: 1 }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            color: "rgba(255,255,255,0.40)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Edit
        </p>
      </Box>

      {/* Edge action buttons */}
      <Box
        sx={{
          px: 2,
          pb: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* Delete Edge */}
        <button
          style={{
            width: "100%",
            padding: "9px 16px",
            fontSize: "0.813rem",
            fontWeight: 500,
            color: "rgba(248,113,113,0.90)",
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.20)",
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 100ms ease-out",
            textAlign: "center",
            minHeight: 36,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239,68,68,0.14)";
            e.currentTarget.style.borderColor = "rgba(239,68,68,0.35)";
            e.currentTarget.style.color = "rgba(248,113,113,1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(239,68,68,0.08)";
            e.currentTarget.style.borderColor = "rgba(239,68,68,0.20)";
            e.currentTarget.style.color = "rgba(248,113,113,0.90)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.98)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Delete Edge
        </button>

        {/* Change Type */}
        <button
          style={{
            width: "100%",
            padding: "9px 16px",
            fontSize: "0.813rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 100ms ease-out",
            textAlign: "center",
            minHeight: 36,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.09)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            e.currentTarget.style.color = "rgba(255,255,255,0.95)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
            e.currentTarget.style.color = "rgba(255,255,255,0.75)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.98)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Change Type
        </button>
      </Box>

      {/* Structural separator */}
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      {/* Save — pinned to bottom via flex spacer */}
      <Box sx={{ flex: 1 }} />
      <Box sx={{ px: 2, pb: 2.5 }}>
        <button
          style={{
            width: "100%",
            padding: "10px 16px",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#FAFAFA",
            background: "rgba(139,92,246,1)",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 100ms ease-out",
            textAlign: "center",
            minHeight: 40,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(124,58,237,1)";
            e.currentTarget.style.transform = "scale(0.98)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(139,92,246,1)";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.97)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(0.98)";
          }}
        >
          Save Roadmap
        </button>
      </Box>
    </Box>
  );
}
