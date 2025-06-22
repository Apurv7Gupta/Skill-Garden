import { Box, Typography, Button, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";

export default function TopPanel() {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        fullWidth
        sx={{
          borderRadius: 0,
          color: "white",
          fontWeight: 400,
          fontSize: { xs: "0.7rem", sm: "1rem", md: "1.5rem" },
        }}
      >
        Add
      </Button>

      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "teal",
            borderRadius: 2,
            px: { xs: 0.5, sm: 1, md: 2 },
            gap: 1,
          }}
        >
          <Search
            sx={{
              color: "white",
              fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2rem" },
            }}
          />

          <TextField
            color="primary"
            placeholder="Node Type/Name"
            fullWidth
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
              maxWidth: 500,
              flexGrow: 1,
              bgcolor: "teal",
              border: "none",
            }}
          />
        </Box>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          px: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            width: "100%",
            maxWidth: 600,
            bgcolor: "lavender",
            borderRadius: 2,
            p: { xs: 1, sm: 2 },
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              px: 3,
              py: 1,
              width: "100%",
              flex: 1,
            }}
          >
            Add Node
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              px: 3,
              py: 1,
              width: "100%",
              flex: 1,
            }}
          >
            Add Branch
          </Button>
        </Box>
      </Box>
    </>
  );
}
