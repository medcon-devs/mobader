"use client";

import React from "react";
import { Grid, Button, Box } from "@mui/material";
import HomeView from "./HomeView";
import ClinicalView from "./ClinicalView";
import themeColor from "../constant/color";

export default function TabBar({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.history.pushState(null, "", `/?tab=${tab}`); // Update the URL manually
  };


  return (
    <div>
      {/* Tab Navigation */}
      <Grid
        container
        bgcolor={themeColor.black.main}
        height={60}
        alignItems="center"
        justifyContent="center"
        sx={{ borderBottom: "2px solid #fff" }}
      >
        <Button
          onClick={() => handleTabChange("home")}
          sx={{
            padding: "10px 20px",
            fontWeight: activeTab === "home" ? "bold" : "normal",
            color: activeTab === "home" ? themeColor.white.main : "#ccc",
            fontSize: 18,
            textTransform: "none",
            transition: "color 0.3s ease",
            borderBottom: activeTab === "home" ? "2px solid #fff" : "none",
          }}
        >
          Home
        </Button>
        <Button
          onClick={() => handleTabChange("clinical")}
          sx={{
            padding: "10px 20px",
            fontWeight: activeTab === "clinical" ? "bold" : "normal",
            color: activeTab === "clinical" ? themeColor.white.main : "#ccc",
            fontSize: 18,
            textTransform: "none",
            transition: "color 0.3s ease",
            borderBottom: activeTab === "clinical" ? "2px solid #fff" : "none",
          }}
        >
          Clinical Series
        </Button>
      </Grid>

      {/* Tab Content */}
      <Box sx={{ marginTop: "14px" }}>
        {activeTab === "home" && <HomeView />}
        {activeTab === "clinical" && (
          <Grid justifySelf={"center"}>
            <ClinicalView />
          </Grid>
        )}
      </Box>
    </div>
  );
}
