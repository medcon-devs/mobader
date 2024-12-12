import { Box, Typography } from "@mui/material";

export default function Sponsors() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", padding: "60px 60px" }}
    >
      {/* Left Line */}
      <Box
        sx={{
          flexGrow: 1,
          height: "1px",
          backgroundColor: "#ddd",
        }}
      />

      {/* Text */}
      <Typography
        sx={{
          margin: "0 10px",
          fontSize: "16px",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        Sponsor
      </Typography>

      {/* Right Line */}
      <Box
        sx={{
          flexGrow: 1,
          height: "1px",
          backgroundColor: "#ddd",
        }}
      />
    </Box>
  );
}
