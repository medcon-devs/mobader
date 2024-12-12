"use client";

import React from "react";
import Sponsors from "@/app/components/sponsors/sponsors";
import Countdown from "@/app/components/timer/timer";
import themeColor from "@/app/constant/color";
import TabPanel from "../TabPanel/TabPanel";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { useRouter } from "next/navigation";

interface Card {
  id: number;
  date: string;
  description: string;
  image: string;
  isactive: boolean;
}

export default function ClinicalDetailsClient({ selectedCard }: { selectedCard: Card }) {
  const router = useRouter();
  const now = new Date();
  const targetDate = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);

  const handleBackClick = () => {
    router.push("/?tab=clinical"); // Navigate back to the "clinical" tab
  };

  return (
    <Grid container direction="column" width={1} maxWidth={1920}>
      {/* Background Image Section */}
      {/* <Grid sx={{background:themeColor.black.dark ,height:30}} ></Grid> */}
      <Grid
        sx={{
          position: "relative",
          height: { md: 180, xs:100 },
          backgroundImage: `url('/static/images/header.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Grid>
      <Grid
        sx={{
          position: "relative",
          height: { md: 550, xs: 450 },
          backgroundImage: `url(${selectedCard.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            width: "100%",
            maxWidth: 500,
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color={themeColor.white.main}
            sx={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontSize: {
                xs: "1.25rem", // Small screen (h6 equivalent)
                sm: "1.5rem",
                md: "2.125rem", // Medium to large screens (h4 equivalent)
              },
            }}
          >
            {selectedCard.description}
          </Typography>
        </Box>
        <Box
          component="img"
          src="/static/images/line2.png"
          alt="logo"
          sx={{
            position: "absolute",
            bottom: 0,
            left: "49.5%",
            transform: "translateX(-50%)",
            zIndex: 10,
            width: { xs: "80%", sm: "60%", md: "40%" },
            minWidth: 300,
            maxWidth: 700,
            objectFit: "contain",
          }}
        />
         <Box
         onClick={handleBackClick}
          component="img"
          src="/static/images/cliniclBtn.png"
          alt="logo"
          sx={{
            position: "absolute",
            // bottom: "50%",
            cursor: "pointer" ,
            top:"15%",
            left: { xs: 7, sm: 8, md: 10 },
            transform: "translateX(-50%)",
            zIndex: 10,
            height: { xs: "60%", sm: "70%", md: "60%" },
            minWidth: 30,
            maxWidth: 50,
            // height:200,
            objectFit: "contain",
          }}
        />
      </Grid>

      {/* Countdown Timer Section */}
      <Box textAlign="center" mt={4}>
        <Countdown target={targetDate.toISOString()} isactive={selectedCard.isactive} />
      </Box>

      {/* Divider Section */}
      <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
        <Box
          component="img"
          src="/static/images/line.png"
          alt="Divider"
          sx={{
            width: { xs: "80%", sm: "60%", md: "40%" },
            objectFit: "contain",
            minWidth: 300,
            
            maxWidth: 700,
          }}
        />
        <Divider
          sx={{
            width: "90%",
            borderBottomWidth: 2,
            color: themeColor.secondary.dark,
            marginBottom: 2,
          }}
        />
      </Grid>

      {/* TabPanel Section */}
      <Grid sx={{ width: "100vw", maxWidth: "1920px" }}>
        <TabPanel />
      </Grid>

      {/* Sponsors Section */}
      <Sponsors />

      {/* Back Button */}
      {/* <Box textAlign="center" mt={4}>
        <button
          onClick={handleBackClick}
          style={{
            backgroundColor: themeColor.black.main,
            color: themeColor.white.main,
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Back to Clinical Series
        </button>
      </Box> */}
    </Grid>
  );
}
