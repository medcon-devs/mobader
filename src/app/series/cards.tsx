"use client";

import React from "react";
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
import themeColor from "@/app/constant/color";

interface Card {
  id: number;
  date: string;
  description: string;
  image: string;
  isactive: boolean;
}

export default function ClinicalCards() {
  const router = useRouter();

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const series: Card[] = [
    {
      id: 1,
      date: "Month 00, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/static/images/1.png",
      isactive: true,
    },
        {
      id: 2,
      date: "Month 00, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/static/images/2.png",
      isactive: false,
    },{  
      id: 3,
    date: "Month 00, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/static/images/3.png",
    isactive: false,
  },
  {   
      id: 4,
    date: "Month 00, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/static/images/4.png",
    isactive: false,
  },
  {
      id: 5,
    date: "Month 00, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/static/images/5.png",
    isactive: false,
  },
  {
      id: 6,
    date: "Month 00, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/static/images/6.png",
    isactive: false,
  },
  ];

  const handleCardClick = (cardId: number) => {
    router.push(`/series/${cardId}`);
  };

  const renderCards = () => {
    if (series.length === 1) {
      return (
        <Grid
          item
          xs={12}
          key={series[0].id}
          component={motion.div}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
          onClick={() => handleCardClick(series[0].id)}
        >
          <Card
            sx={{
              overflow: "hidden",
              opacity: 1,
              cursor: "pointer",
              width: "100%",
              height: "400px",
              "&:hover .card-media": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardMedia
               className="card-media"
               component="img"
               height="140"
               image={series[0].image}
               alt="Clinical Series"
               sx={{
                 transition: "transform 0.3s ease-in-out",
               }}
            />
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                {series[0].date}
              </Typography>
              <Typography variant="body1">{series[0].description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    } else if (series.length === 2) {
      return series.map((card) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={card.id}
          component={motion.div}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
          onClick={() => handleCardClick(card.id)}
        >
          <Box  sx={{ cursor: "pointer" }}>
          <Card
            sx={{
              overflow: "hidden",
                opacity: card.isactive ? 1 : 0.5,
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
              }}
            />
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                {card.date}
              </Typography>
              <Typography variant="body1">{card.description}</Typography>
            </CardContent>
            
          </Card>
          </Box>
        </Grid>
      ));
    } else {
      return series.map((card) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={card.id}
          component={motion.div}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
          onClick={() => handleCardClick(card.id)}
        >
          <Box sx={{ cursor: "pointer" }}>
            <Card
              sx={{
                overflow: "hidden",
                opacity: card.isactive ? 1 : 0.5,
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
                }}
              />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  {card.date}
                </Typography>
                <Typography variant="body1">{card.description}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ));
    }
  };

  return (
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
