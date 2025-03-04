import React from "react";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import ClinicalCards from "../series/cards";



export default function ClinicalView() {
  // Animation Variants for Transition
  const variants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0 }, // Slide into view
    exit: { opacity: 0, x: -100 }, // Exit off-screen to the left
  };

  return (
    <Grid container spacing={2}  >
      <AnimatePresence mode="wait"> {/* Ensure animations on mount/unmount */}
      <motion.div
            key="cards-view"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth animation
            style={{ width: "100%" }} // Full width for smooth transitions
          >
            <ClinicalCards />
          </motion.div>
      </AnimatePresence>
    </Grid>
  );
}
