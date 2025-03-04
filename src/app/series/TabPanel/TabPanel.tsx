"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Divider } from "@mui/material";
import themeColor from "@/app/constant/color";
import { motion, AnimatePresence } from "framer-motion";
import { EventData } from "@/types/props.types";

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
          style={{ padding: "16px", width: "100%", maxWidth: "1200px", margin: "auto" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
interface tabBarEvent {
  event: EventData;
}
export default function TabBar({event}:tabBarEvent) {
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
    <Box sx={{ width: "100%", margin: "auto", textAlign: "center" }}>
      {/* Tabs Section */}
      <motion.div initial="hidden" animate="visible" variants={tabVariants}>
        <Tabs
          
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          
          sx={{
            maxWidth: "90%",
            
            margin:{ md: "0", xs: "auto" },
            // alignContent:"center",
            // alignItems:"center",
            // justifyContent:"center",
            // justifyItems:"center",
            // alignSelf:"center",
            justifySelf:"center",
            "& .MuiTabs-indicator": {
              height: "4px",
              backgroundImage: "url('/static/images/smLine.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundColor: "transparent",
            },
            "& .MuiTab-root": {
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
              minWidth: 120,
              color: themeColor.black.light,
            },
            "& .MuiTab-root.Mui-selected": {
              color: themeColor.black.dark,
            },
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
          margin: "auto",
          color: themeColor.secondary.dark,
          borderBottomWidth: "2px",
          marginBottom: 2,
        }}
        orientation="horizontal"
      />

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        <Typography variant="h5" fontWeight="bold" gutterBottom textAlign={"left"}>
          {event?.overview.title}
        </Typography>
        <Typography textAlign={"left"} dangerouslySetInnerHTML={{ __html: event?.overview.description.replace(/\n/g, "<br>"), }}/ >
     

      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5" fontWeight="bold" gutterBottom textAlign={"left"}>
        {event?.accreditation.title}
        </Typography>
        <Typography textAlign={"left"} dangerouslySetInnerHTML={{ __html: event?.accreditation.description.replace(/\n/g, "<br>"), }}/ >

      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h5" fontWeight="bold" gutterBottom textAlign={"left"}>
        {event?.faculty.title}
        </Typography>
        <Typography textAlign={"left"} dangerouslySetInnerHTML={{ __html: event?.faculty.description.replace(/\n/g, "<br>"), }}/ >

      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h5" fontWeight="bold" gutterBottom textAlign={"left"}>
        {event?.scientific_program.title}
        </Typography>
        <Typography textAlign={"left"} dangerouslySetInnerHTML={{ __html: event?.scientific_program.description.replace(/\n/g, "<br>"), }}/ >

      </TabPanel>
    </Box>
  );
}
