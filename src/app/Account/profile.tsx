"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import themeColor from "../constant/color";
import { useRouter } from "next/navigation";
import QRCodeGenerator from "../components/QrCode";

import { routeConfig } from "../constant/route";
import { get } from "@/handler/api.handler";
import { User } from "@/types/props.types";
import ClipLoader from "react-spinners/ClipLoader";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>();
  const router = useRouter();

  const handleLogoutSubmit = () => {
    router.replace("/");
    localStorage.removeItem("token");
    localStorage.removeItem("event");
    // setLoading(true);
  };
  const loadData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
   
  

    if (token) {
      try {
        const res = await get(routeConfig.user, token);
        // console.log("API Response22:", res.data);
        if (res && res.status_code === 200) {
          // console.log("Setting message state");
          setUser(res.user);
          // console.log("event",event);

          // event=res.data;
          setLoading(false);
          // console.log(events.length);
        }
      } catch (e) {
        setLoading(false);
        console.error("Error loading data:", e);
      } finally {
        setLoading(false);
        console.log("loadData completed");
      }
    } else {
      router.replace("/");
      // console.log("No token found.");
      // setIsToken(false);
      // Redirect to login or show an appropriate message
    }
  };

  useEffect(() => {
    // loadData();
    loadData();
  }, []);
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
        <Grid container direction="column">
          {/* Header */}

          <Grid
            sx={{
              background: themeColor.black.main,
              height: 70,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              color={themeColor.white.main}
              sx={{
                padding: "15px",
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.75rem",
                  md: "2rem",
                },
              }}
            >
              My Account
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
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
                // marginBottom: 2,
              }}
            />
          </Grid>
          <Grid
            px={2}
            container
            maxWidth={"90%"}
            justifySelf={"center"}
            alignSelf={"center"}
          >
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Button
                onClick={handleLogoutSubmit}
                sx={{
                  textTransform: "none", // Ensures the text is not uppercase
                  color: themeColor.black.main, // Text color
                  // fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Logout
              </Button>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              sx={{ alignItems: "center" }}
            >
              <Grid>
                <Typography
                  variant="h3"
                  fontWeight={"bold"}
                  color={themeColor.black.dark}
                  mb={4}
                  textAlign={"left"}
                >
                  Profile
                </Typography>
                <Grid display={"flex"} alignItems={"center"}>
                  <Typography
                    fontWeight={"bold"}
                    color={themeColor.black.dark}
                    variant="subtitle1"
                    width={180}
                  >
                    First Name:
                  </Typography>
                  <Typography variant="subtitle1" color={themeColor.black.dark}>
                    {/* {auth.user?.name ?? "-"} */}
                    {user?.first_name??""}
                  </Typography>
                </Grid>
                <Grid display={"flex"} alignItems={"center"}>
                  <Typography
                    fontWeight={"bold"}
                    color={themeColor.black.dark}
                    variant="subtitle1"
                    width={180}
                  >
                    Last Name:
                  </Typography>
                  <Typography variant="subtitle1" color={themeColor.black.dark}>
                    {/* {auth.user?.email ?? "-"} */}
                    {user?.last_name??""}
                  </Typography>
                </Grid>
                <Grid display={"flex"} alignItems={"center"}>
                  <Typography
                    fontWeight={"bold"}
                    color={themeColor.black.dark}
                    variant="subtitle1"
                    width={180}
                  >
                    Email:
                  </Typography>
                  <Typography variant="subtitle1" color={themeColor.black.dark}>
                    {/* {auth.user?.memberType ?? "-"} */}
                    {user?.email??""}
                  </Typography>
                </Grid>
                <Grid display={"flex"} alignItems={"center"}>
                  <Typography
                    fontWeight={"bold"}
                    color={themeColor.black.dark}
                    variant="subtitle1"
                    width={180}
                  >
                    Speciality:
                  </Typography>
                  <Typography variant="subtitle1" color={themeColor.black.dark}>
                    {/* {auth.user?.phone ?? "-"} */}
                    {user?.speciality??""}
                  </Typography>
                </Grid>

                <Grid></Grid>
              </Grid>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              sx={{
                alignItems: { md: "center", xs: "center" },
              }}
            >
              <QRCodeGenerator
                value={user?.email??""}
                // {auth.user?.email ?? "-"}
              />
            </Grid>
          </Grid>
          <Box
            component="img"
            src="/static/images/line2.png"
            alt="logo"
            mb={5}
            mt={5}
            sx={{
              width: "90%",
              height: 10,
              alignSelf: "center",
            }}
          />
        </Grid>
      )}
    </Grid>
  );
}
