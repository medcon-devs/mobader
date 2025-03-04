"use client";

import { useEffect, useState } from "react";
import Sponsors from "@/app/components/sponsors/sponsors";
import Countdown from "@/app/components/timer/timer";
import themeColor from "@/app/constant/color";
import { Box, Typography, Grid, Divider } from "@mui/material";

import { EventData } from "@/types/props.types";
import { get } from "@/handler/api.handler";
import { routeConfig } from "@/app/constant/route";
import { useRouter, useSearchParams } from "next/navigation";
import { ClipLoader } from "react-spinners";
import Footer from "@/app/layout/footer";
import TabPanel from "./TabPanel/TabPanel";

export default function ClinicalDetailsx() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [istoken, setIsToken] = useState(false);
  const [event, setEvent] = useState<EventData | null>(null);

  
  
  const loadData = async () => {
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    console.log("slug", slug)
    const token = localStorage.getItem("token");
    const rememberEvent = localStorage.getItem("event");

    if (token && rememberEvent && rememberEvent === slug) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }

    try {
      const res = await get(`${routeConfig.slug}${slug}`, null);
      if (res?.status_code === 200) {
        setEvent(res.data);
      }
    } catch (e) {
      console.error("Error loading data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleBackClick = () => {
    router.push("/?tab=clinical"); // Navigate back to the "clinical" tab
  };

  return (
    <Grid>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 600, // Full height of the parent container
          }}
        >
          <ClipLoader color={themeColor.black.dark} size={40} />
        </Box>
      ) : (
        <Grid container direction="column" width={"100%"} maxWidth={1920}>
          {/* Background Image Section */}
          <Grid
            sx={{
              position: "relative",
              height: { md: 180, xs: 100 },
              backgroundImage: `url('/static/images/header.png')`,
              backgroundSize: "cover",
              backgroundPosition: { md: "100% 0%", xs: "50% 0%" },
              backgroundRepeat: "no-repeat",
              maxWidth: "100%",
            }}
          ></Grid>
          <Grid
            sx={{
              position: "relative",
              height: { md: 550, xs: 450 },
              backgroundImage: `url('${event?.image}')`,
              backgroundSize: "cover",
              backgroundPosition: { md: "100% 0%", xs: "50% 0%" },
              backgroundRepeat: "no-repeat",
              maxWidth: "100%",
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
                {event?.title}
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
                cursor: "pointer",
                top: "15%",
                left: { xs: 7, sm: 8, md: 10 },
                transform: "translateX(-50%)",
                zIndex: 10,
                height: { xs: "60%", sm: "70%", md: "60%" },
                minWidth: 30,
                maxWidth: 50,
                objectFit: "contain",
              }}
            />
          </Grid>

          {/* Countdown Timer Section */}
          <Box textAlign="center" mt={4} maxWidth={"100%"}>
            <Countdown
              target={event?.start_date}
              isactive={event?.is_active}
              event={event}
              isLogedIn={istoken}
            />
          </Box>

          {/* Divider Section */}
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
            maxWidth={"100%"}
          >
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
          <Grid sx={{ maxWidth: "100%" }}>
            <TabPanel event={event} />
          </Grid>

          {/* Sponsors Section */}
          <Sponsors />
          <Footer />
        </Grid>
      )}
    </Grid>
  );
}
