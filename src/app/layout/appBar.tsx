import React, { MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { Button, Grid, Skeleton } from "@mui/material";
import Link from "next/link";

type PropsType = {
  logo?: string;
};
function ResponsiveAppBar({ logo }: PropsType) {
  return (
    <AppBar
    
      elevation={0}
      position="static"
      
      sx={{ backgroundColor: "#000", height:50 }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
        <Box
                  component={"img"}
                  width={300}
                  height={200}
                //   marginLeft={5}
                pl={5}
                  sx={{ objectFit: "contain" }}
                  alt="EHS"
                  src={"/static/images/ehs.png"}
                />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
