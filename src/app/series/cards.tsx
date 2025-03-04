"use client";

import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { format } from 'date-fns';
import { get } from "@/handler/api.handler";
import { routeConfig } from "../constant/route";
import { EventData } from "@/types/props.types";
import ClipLoader from "react-spinners/ClipLoader";
import themeColor from "../constant/color";
import EventDate from "../components/Events/dateFormate";
// interface Card {
//   id: number;
//   date: string;
//   description: string;
//   image: string;
//   isactive: boolean;
// }

export default function ClinicalCards() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<EventData[]>([]);

  const loadData = async () => {
    console.log("loadData called");
    setLoading(true);
    console.log("start");
    try {
      const res = await get(routeConfig.events, null);
      console.log("API Response22:", res);
      if (res && res.status_code === 200) {
        console.log("Setting message state");
        setEvents(res.data);
        console.log(events.length);
      }
    } catch (e) {
      console.error("Error loading data:", e);
    } finally {
      setLoading(false);
      console.log("loadData completed");
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    loadData();
  }, []);

  const router = useRouter();

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // const series: Card[] = [
  //   {
  //     id: 1,
  //     date: "Month 00, 2025",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     image: "/static/images/1.png",
  //     isactive: true,
  //   },
  //       {
  //     id: 2,
  //     date: "Month 00, 2025",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     image: "/static/images/2.png",
  //     isactive: false,
  //   },{
  //     id: 3,
  //   date: "Month 00, 2025",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "/static/images/3.png",
  //   isactive: false,
  // },
  // {
  //     id: 4,
  //   date: "Month 00, 2025",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "/static/images/4.png",
  //   isactive: false,
  // },
  // {
  //     id: 5,
  //   date: "Month 00, 2025",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "/static/images/5.png",
  //   isactive: false,
  // },
  // {
  //     id: 6,
  //   date: "Month 00, 2025",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "/static/images/6.png",
  //   isactive: false,
  // },
  // ];

  const handleCardClick = (slug: string) => {
    console.log("I am clicked")
    router.push(`/series?slug=${encodeURIComponent(slug)}`);
    // router.push(`/series/${slug}`);
  };

  const renderCards = () => {
    if (events.length === 1) {
      return (
        <Grid
          item
          xs={12}
          key={events[0].id}
          component={motion.div}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
          onClick={() => handleCardClick(events[0].slug)}
          
        >
          <Card
            sx={{
              overflow: "hidden",
              opacity: 1,
              cursor: "pointer",
              width: "100%",
              "&:hover .card-media": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardMedia
              className="card-media"
              component="img"
              height="140"
              image={events[0].image}
              alt="Clinical Series"
              sx={{
                transition: "transform 0.3s ease-in-out",
                height: "300px",
              }}
            />
            <CardContent>
              {/* <Typography variant="subtitle2" color="textSecondary">
                  {events[0].start_date}
                </Typography> */}
              <EventDate startDate={events[0].start_date} />
              <Typography variant="body1">{events[0].title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    } else if (events.length === 2) {
      return events.map((card) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={card.id}
          component={motion.div}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
          onClick={() => handleCardClick(card.slug)}
        >
          <Box sx={{ cursor: "pointer" }}>
            <Card
              sx={{
                overflow: "hidden",
                opacity: card.is_active ? 1 : 0.5,
                
                transition: "opacity 0.3s ease, transform 0.3s ease-in-out",
                "&:hover .card-media": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardMedia
                className="card-media"
                component="img"
                height="140"
                image={card.image}
                alt="Clinical Series"
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  height: "300px",
                }}
              />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                {format(new Date(card.start_date), 'MMMM dd, yyyy')}
                </Typography>
                <Typography variant="body1">{card.title}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ));
    } else {
      return events.map((card) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={card.id}
          component={motion.div}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
          onClick={() => handleCardClick(card.slug)}
        >
          <Box sx={{ cursor: "pointer" }}>
            <Card
              sx={{
                overflow: "hidden",
                opacity: card.is_active ? 1 : 0.5,
                transition: "opacity 0.3s ease, transform 0.3s ease-in-out",
                "&:hover .card-media": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardMedia
                className="card-media"
                component="img"
                height="140"
                image={card.image}
                alt="Clinical Series"
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  height: "300px",
                }}
              />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                {format(new Date(card.start_date), 'MMMM dd, yyyy')}
                </Typography>
                <Typography variant="body1">{card.title}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ));
    }
  };

  return loading ? (
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
    <Grid
      container
      spacing={5}
      padding={8}
      maxWidth={1500}
      component={motion.div}
      justifyContent={"center"}
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.2,
      }}
    >
      {renderCards()}
    </Grid>
  );
}