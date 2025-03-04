import themeColor from "@/app/constant/color";
import { Box, Card, Grid, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

function ShouldAttend() {
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const [inView, setInView] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2, // Delay each text
        duration: 0.5,
      },
    }),
  };
  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // Trigger animations
      textControls.start("visible");
      imageControls.start("visible");
    } else {
      // Reset animations
      textControls.start("hidden");
      imageControls.start("hidden");
    }
  }, [inView, textControls, imageControls]);

  return (
    //   <Grid container spacing={2} justifyContent="center">
    //   <Grid item xs={12} sm={12} md={12} lg={12}>
    //     <Card
    //       sx={{
    //         width: "100%", // Responsive width
    //         margin: "0 auto", // Center the card
    //         height: "auto", // Allow dynamic height
    //         aspectRatio: "30/11", // Maintain aspect ratio
    //         backgroundImage: 'url("/static/images/attendes_full.png")',
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: 0, // Optional rounded corners
    //       }}
    //     />
    //   </Grid>
    // </Grid>
    <Grid
    ref={componentRef}
      width={1}
      display={"flex"}
      flexDirection={{ md: "row", xs: "column" }}
      height={"auto"}
      sx={{ background: themeColor.black.main }}
    >
      {/* Left Empty Box */}
      <Box
        flex={2}
        display={{ md: "block", xs: "none" }}
        sx={{
          // height: { md: 600 }, // Ensure consistent height
          width: "60%",
          margin: 0,
          padding: 0,
          justifyItems: "center",
        }}
      >
        <Box sx={{ alignSelf: "center", padding: "20px" }}>
        <motion.div
            initial="hidden"
            animate={textControls}
            variants={textVariants}
            custom={0}
          >
          <Typography
            mb={1}
            style={{ color: themeColor.white.light, fontSize: "calc(3vw)" }}
          >
            Who Should Attend
          </Typography>
          </motion.div>
          {[
            "General Practitioners",
            "Family Medicine Physicians",
            "Medical Students",
            "Residents",
            "Internist",
            "Endocrinologists",
            "Cardiologists",
            "Nephrologists",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={textControls}
              variants={textVariants}
              custom={index + 1}
            >
              <Typography
                mb={0.2}
                style={{ color: themeColor.white.light, fontSize: "calc(1.5vw)" }}
              >
                {text}
              </Typography>
            </motion.div>
          ))}
          
        </Box>
      </Box>
      <Box
        display={{ md: "none", xs: "flex" }}
        sx={{
          height: { xs: 400 }, // Ensure consistent height
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <motion.div
        initial="hidden"
        animate={imageControls}
        variants={imageVariants}
        style={{
          flex: 3,
          width: "100%",
          height: "calc(30vw)",
          maxHeight: 600,
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          component={"img"}
          display={{ md: "none", xs: "block" }}
          src={"/static/images/attendesMobile.png"} // Add src for proper rendering
          sx={{
            borderRadius: "20px",
            margin: "20px auto",
            padding: 0,
            objectFit: "cover", // Ensure image covers the box
            width: "80%",
            height: { xs: 300 },
          }}
        />
        </motion.div>
      </Box>
      {/* Right Image Box */}
      <motion.div
        initial="hidden"
        animate={imageControls}
        variants={imageVariants}
        style={{
          flex: 3,
          width: "100%",
          height: "calc(30vw)",
          maxHeight: 600,
          margin: 0,
          padding: 0,
        }}
      >
      <Box
        flex={3}
        component={"img"}
        display={{ md: "block", xs: "none" }}
        src={"/static/images/attendes.png"} // Add src for proper rendering
        sx={{
          margin: 0,
          padding: 0,
          // objectFit: "cover", // Ensure image covers the box
          width: "100%",
          height: "calc(30vw)",
          maxHeight: 600,
        }}
      />
      </motion.div>
      <Box
        display={{ xs: "block", md: "none" }}
        sx={{  pb: "50px", width:"80%", margin: "20px auto",}}
      >
        <motion.div
            initial="hidden"
            animate={textControls}
            variants={textVariants}
            custom={0}
          >
        <Typography
          mb={1}
          variant="h4"
          style={{ color: themeColor.white.light }}
        >
          Who Should Attend
        </Typography>
        </motion.div>
        {[
            "General Practitioners",
            "Family Medicine Physicians",
            "Medical Students",
            "Residents",
            "Internist",
            "Endocrinologists",
            "Cardiologists",
            "Nephrologists",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={textControls}
              variants={textVariants}
              custom={index + 1}
            >
              <Typography
                mb={0.2}
                variant="h6"
                style={{ color: themeColor.white.light }}
              >
                {text}
              </Typography>
            </motion.div>
          ))}
        
      </Box>
    </Grid>
  );
}

export default ShouldAttend;
