"use client";

import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Banner from "./layout/banner";
import ResponsiveAppBar from "./layout/appBar";
import TabBar from "./components/TabBar";
import Footer from "./layout/footer";

// Extend Material-UI theme to include custom color palettes
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    light: true;
    dark: true;
    greyBlack: true;
    lightBlack: true;
    yallowdark: true;
    black: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    light: Palette["primary"];
    greyBlack: {
      main: string;
      light: string;
      dark: string;
    };
    lightBlack: {
      main: string;
      light: string;
      dark: string;
    };
    yallowdark: {
      main: string;
      light: string;
      dark: string;
    };
    black: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    light?: PaletteOptions["primary"];
    dark?: PaletteOptions["primary"];
    greyBlack?: {
      main: string;
      light: string;
      dark: string;
    };
    lightBlack?: {
      main: string;
      light: string;
      dark: string;
    };
    yallowdark?: {
      main: string;
      light: string;
      dark: string;
    };
    black?: {
      main: string;
      light: string;
      dark: string;
    };
  }
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  // Fetch query params in a client-side environment
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab") || "home";
    setActiveTab(tab);
  }, []);
  return (
    <Grid width={1} maxWidth={1920} sx={{ overflowX: "hidden" }}>
      <Grid
        position={"relative"}
        width={1}
        sx={{ height: { md: 650, xs: "auto" } }}
      >
        <Banner>
          <ResponsiveAppBar />
        </Banner>
      </Grid>
      <Grid position={"relative"}>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Footer />
      </Grid>
    </Grid>
  );
}
