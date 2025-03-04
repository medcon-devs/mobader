"use client";

import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Footer from "../layout/footer";
import RegisterForms from "./Forms";
import ResponsiveAppBar from "../layout/appBar";
import Banner from "../layout/banner";

export default function Registration() {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    // Fetch query parameters client-side with delay
    const params = new URLSearchParams(window.location.search);
    const fetchedSlug = params.get("slug");

    // Add delay before setting slug
    if (fetchedSlug) {
      const timer = setTimeout(() => {
        setSlug(fetchedSlug);
      }, 1000); // Delay of 1 second

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
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
        {/* Pass the slug to the RegisterForms component */}
        <RegisterForms slug={slug} />
      </Grid>
      <Footer />
    </Grid>
  );
}
