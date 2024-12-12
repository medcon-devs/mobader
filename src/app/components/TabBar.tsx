"use client";

import React, { useState, useEffect } from "react";
import { Grid, Button, Box } from "@mui/material";
import HomeView from "./HomeView";
import ClinicalView from "./ClinicalView";
import themeColor from "../constant/color";
import { useSearchParams, useRouter } from "next/navigation";

export default function TabBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read the current tab state from query parameters or default to "home"
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "home"
  );

  // Update the query parameter on tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/?tab=${tab}`, { shallow: true } as any); // Update the URL without a full reload
  };

  useEffect(() => {
    // Update activeTab when the URL changes (browser back/forward buttons)
    setActiveTab(searchParams.get("tab") || "home");
  }, [searchParams]);

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
