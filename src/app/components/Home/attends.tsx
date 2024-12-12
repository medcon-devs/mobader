
import {
  Card,
  Grid,
} from "@mui/material";

function ShouldAttend() {
 

  return (
    <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Card
        sx={{
          width: "100%", // Responsive width
          margin: "0 auto", // Center the card
          height: "auto", // Allow dynamic height
          aspectRatio: "30/11", // Maintain aspect ratio
          backgroundImage: 'url("/static/images/attendes_full.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 0, // Optional rounded corners
        }}
      />
    </Grid>
  </Grid>
  );
}

export default ShouldAttend;
