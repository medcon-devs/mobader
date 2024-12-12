"use client"
import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Divider, Grid } from "@mui/material";
import themeColor from "@/app/constant/color";
import { motion, AnimatePresence } from "framer-motion";

const TabPanel = (props: { children: React.ReactNode; value: number; index: number }) => {
  const { children, value, index } = props;

  // Animation variants for the TabPanel
  const panelVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {value === index && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={panelVariants}
          role="tabpanel"
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          style={{ padding: "16px", width: "80%", maxWidth: "1920px" }}
        >
          <Typography component="div" variant="body1">
            {children}
          </Typography>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function TabBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Animation variants for the tabs
  const tabVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1920px", margin: "0 auto", justifyItems: "center" }}>
      {/* Tabs Section */}
      <motion.div initial="hidden" animate="visible" variants={tabVariants}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable" // Enable scrolling for tabs
          scrollButtons="auto" // Display scroll buttons automatically
          textColor="primary"
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "center" },
            "& .MuiTabs-indicator": {
              height: "6px", // Adjust thickness
              backgroundImage: "url('/static/images/smLine.png')", // Path to your image
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundColor: "transparent",
            },
            "& .MuiTab-root": {
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
              margin: { xs: "0 6px", sm: "0 16px" }, // Responsive spacing between tabs
              minWidth: 120, // Prevent squished tabs
            },
            "& .MuiTab-root.Mui-selected": {
              color: themeColor.black.dark,
            },
            paddingX: { xs: 2, md: 0 }, // Add padding for mobile
            overflowX: "auto", // Allow horizontal scrolling
          }}
        >
          <Tab label="Overview" />
          <Tab label="Accreditation" />
          <Tab label="Faculty" />
          <Tab label="Scientific Program" />
        </Tabs>
      </motion.div>
      <Divider
        sx={{
          width: "90%",
          color: themeColor.secondary.dark,
          scale: 1,
          borderBottomWidth: "2px",
          maxWidth: "1920px",
          marginBottom: 2, // Add some spacing below the divider
        }}
        orientation="horizontal"
      />
      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Learning Objectives
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Accreditation
        </Typography>
        <Typography>
          Accreditation details go here. This is where you'll provide the relevant information.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Faculty
        </Typography>
        <Typography>
          Faculty information will be displayed here. Add details about the faculty members.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Scientific Program
        </Typography>
        <Typography>
          The Scientific Program details go here. Outline the program schedule and highlights.
        </Typography>
      </TabPanel>
    </Box>
  );
}
