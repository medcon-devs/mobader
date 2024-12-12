import { Box, Grid, PortalProps } from "@mui/material";
import React, { ReactNode } from "react";
type PropsType = {
  children?: ReactNode;
};

function Banner({ children }: PropsType) {
  return (
    <Grid sx={{ position: "relative" }}>
      <Grid
        sx={{
          backgroundImage: `url('/static/images/banner.png')`, // Add `url()` around the image path
          backgroundSize: { md: "cover", xs: "cover" },
          backgroundPosition: { md: "100% 0%", xs: "100% 0%" },
          backgroundRepeat: "no-repeat",

          width: "100%",
          height: { md: 650, xs: 550 },
        }}
      ></Grid>
      <Grid
        position={"absolute"}
        top={0}
        zIndex={1000}
        left={0}
        right={0}
        height={50}
      >
        <Grid pt={0}>{children}</Grid>
      </Grid>
      <Grid position={"absolute"} top={0} zIndex={1100} left={0} right={0}>
        <Grid pt={30} pr={10} justifySelf={"end"}>
          <Box
            component={"img"}
            width={700}
            //   height={200}
            marginLeft={5}
            sx={{ objectFit: "contain" }}
            alt="logo"
            src={"/static/images/logo.png"}
          />
        </Grid>

        <Grid pt={3} pr={10} justifySelf={"end"}>
          <Box
            component={"img"}
            width={350}
            //   height={200}
            marginLeft={5}
            sx={{ objectFit: "contain" }}
            alt="clin"
            src={"/static/images/clinical.png"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Banner;
