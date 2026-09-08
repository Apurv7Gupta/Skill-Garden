import { Box, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";

export default function TopPanel() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {/* Section label */}
      <Box
        sx={{
          px: 2,
          pt: 2.5,
          pb: 1,
        }}
      >
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
          Add Nodes
        </p>
      </Box>

      {/* Search bar */}
      <Box sx={{ px: 2, pb: 1.5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 1.5,
            py: "8px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.03)",
            transition: "all 100ms ease-out",
            "&:focus-within": {
              borderColor: "rgba(139,92,246,0.50)",
              background: "rgba(255,255,255,0.05)",
            },
          }}
        >
          <Search
            sx={{ color: "rgba(255,255,255,0.35)", fontSize: 16, flexShrink: 0 }}
          />
          <TextField
            placeholder="Node type / name"
            variant="standard"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: "0.813rem",
                color: "rgba(255,255,255,0.80)",
                "& input::placeholder": {
                  color: "rgba(255,255,255,0.30)",
                  opacity: 1,
                },
              },
            }}
          />
        </Box>
      </Box>

      {/* Action buttons */}
      <Box
        sx={{
          px: 2,
          pb: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* Add Node */}
        <button
          style={{
            width: "100%",
            padding: "9px 16px",
            fontSize: "0.813rem",
            fontWeight: 500,
            color: "#FAFAFA",
            background: "rgba(139,92,246,1)",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 100ms ease-out",
            textAlign: "center",
            minHeight: 36,
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
          Add Node
        </button>

        {/* Add Branch */}
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
          Add Branch
        </button>
      </Box>

      {/* Structural separator */}
      <Box
        sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", mx: 0 }}
      />
    </Box>
  );
}
