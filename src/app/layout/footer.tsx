import themeColor from "@/app/constant/color";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <Grid
      bottom={0}
      left={0}
      right={0}
      px={3}
      height={80}
      padding={"0px 40px"}
      width={"100%"}
      sx={{ backgroundColor: themeColor.black.dark }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {/* Logo */}
      <Box
        component={"img"}
        src="/static/images/medcon-logo.svg"
        sx={{ width: { md: 130, xs: 100 } }}
      />

      {/* Links and Divider */}
      <Grid
        display="flex"
        alignItems="center" // Ensure vertical alignment
      >
        <Link href={"/privacy&policy"}>
          <Button color="light" size="small">
            <Typography variant="caption" color="#fff">
              Privacy Policy
            </Typography>
          </Button>
        </Link>

        {/* Divider Line */}
        <Box
          sx={{
            width: "1px", // Horizontal line
            height : 20, // Space between links
            backgroundColor: "#fff",
            mx: 1, // Horizontal margin
          }}
        />

        <Link href={"https://medcon-me.com/contact-us/"}>
          <Button color="light" size="small">
            <Typography variant="caption" color="#fff">
              Contact us
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Footer;
