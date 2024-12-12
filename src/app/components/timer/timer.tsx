"use client"
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
} from "@mui/material";
import themeColor from "@/app/constant/color";
import { LuCalendarDays } from "react-icons/lu";
import { GoLocation } from "react-icons/go";
type PropsType = {
  target: string;
  isactive:boolean
};

const Countdown = ({ target , isactive}: PropsType) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    if(!isactive){
      target = now.toISOString()
    }
    const targetDate = new Date(target);
    const difference = targetDate.getTime() - now.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    return {
      days,
      hours,
      minutes,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderItem = (value: any, title: string) => {
    return (
      <Card
        elevation={10}
        sx={{
          borderRadius: 2,
          width: "100",
        }}
      >
        <CardContent sx={{ p: { md: 2, xs: 1 }, pb: 0 }}>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Typography
              fontWeight={"bold"}
              variant="h3"
              color={themeColor.black.main}
              gutterBottom
            >
              {`${value}`}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions
          sx={{
            py: { md: 1, xs: 1 },
            backgroundColor: themeColor.black.dark,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: 18, xs: 12 },
              fontWeight: { md: "bold", xs: 500 },
            }}
            color={themeColor.white.dark}
            gutterBottom
          >
            {`${title}`}
          </Typography>
        </CardActions>
      </Card>
    );
  };

  return (
    <Grid
      sx={{flexDirection:{md:"row",xs :"column"}}}
      width={"100%"}
      display={"flex"}
      alignItems= {"center"}
      justifyContent={"space-between"}
      padding={"10px 0px"}
      alignContent={"center"}
      
    >
      <Grid
        container
        direction="column"
        // display={"flex"}
        //   width={400}
        width={"100%"}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* Calendar Section */}
        <Grid item xs={13}>
          <Grid
            container
            direction="row"
            alignItems="center"
            gap={1} // Spacing between icon and text
          >
            <LuCalendarDays size={50} color={themeColor.black.dark} />
            <Link
              href={"https://medcon.ae/ical/ehs_2024/ehs.ics"}
              target="_blank"
            >
              <Button sx={{ textTransform: "inherit" }}>
                <Grid>
                  <Typography
                    textAlign="center"
                    sx={{ fontSize: { md: 18, xs: 14 } ,justifySelf:"flex-start" }}
                    color={themeColor.black.dark}
                    fontWeight="bold"
                    dangerouslySetInnerHTML={{ __html: "Month 00, 2025" }}
                  />
                  <Typography
                    textAlign="center"
                    sx={{ fontSize: { md: 18, xs: 14 },justifySelf:"flex-start" }}
                    color={themeColor.black.dark}
                    dangerouslySetInnerHTML={{ __html: "Day" }}
                  />
                </Grid>
              </Button>
            </Link>
          </Grid>
        </Grid>

        {/* Location Section */}
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            alignItems="center"
            gap={2} // Spacing between icon and text
          >
            <GoLocation size={50} color={themeColor.black.dark} />
            <Link href={""} target="_blank">
              <Button sx={{ textTransform: "inherit" }}>
                <Grid>
                  <Typography
                    textAlign="center"
                    sx={{ fontSize: { md: 18, xs: 14 } ,justifySelf:"flex-start" }}
                    color={themeColor.black.dark}
                    fontWeight="bold"
                    dangerouslySetInnerHTML={{ __html: "Event Location" }}
                  />
                  <Typography
                    textAlign="center"
                    sx={{ fontSize: { md: 18, xs: 14 } ,justifySelf:"flex-start" }}
                    color={themeColor.black.dark}
                    dangerouslySetInnerHTML={{ __html: "Open Map" }}
                  />
                </Grid>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        my={4}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          container
          maxWidth={"400px"}
          spacing={1}
          //   width={400}
          // width={"0%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={3}>
            {renderItem(timeLeft.days, "Days")}
          </Grid>
          <Grid item xs={3}>
            {renderItem(timeLeft.hours, "Hours")}
          </Grid>
          <Grid item xs={3}>
            {renderItem(timeLeft.minutes, "Minutes")}
          </Grid>
        </Grid>
        <Typography
          mt={2}
          fontWeight={"bold"}
          variant="h5"
          color={themeColor.black.dark}
          gutterBottom
        >
         {isactive?"Left Before the Event":"Event Already Started" }
        </Typography>
      </Grid>
      <Grid width={"100%"}>
      {isactive? <Button
          sx={{
            my: 4,
            background: themeColor.black.main,
            color: themeColor.white.main,
            fontWeight: "bold",
          }}
        >
          Click to Register
        </Button>: <div></div>} 
      </Grid>
    </Grid>
  );
};

export default Countdown;
