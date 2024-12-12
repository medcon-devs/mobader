import { Box, Button, createTheme, Grid, Link, Typography } from "@mui/material";
import Banner from "./layout/banner";
import ResponsiveAppBar from "./layout/appBar";
import themeColor from "./constant/color";
import CustomMenu from "./layout/menu";
import TabBar from "./components/TabBar";
import Footer from "./layout/footer";
import { useRouter } from 'next/router';
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
}

const theme = createTheme({
  typography: {
    fontFamily: `"Open-Sans", "Helvetica", "Arial", sans-serif`,
    h1: {
      "@media (min-width:360px)": {
        fontSize: "2rem",
      },
      "@media (min-width:480px)": {
        fontSize: "3rem",
      },
      "@media (min-width:600px)": {
        fontSize: "5em",
      },
    },
    h2: {
      "@media (min-width:360px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:480px)": {
        fontSize: "2rem",
      },
      "@media (min-width:600px)": {
        fontSize: "4em",
      },
    },
    h3: {
      "@media (min-width:360px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:480px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:600px)": {
        fontSize: "3em",
      },
    },
    h6: {
      "@media (min-width:360px)": {
        fontSize: "1rem",
      },
      "@media (min-width:480px)": {
        fontSize: "1rem",
      },
      "@media (min-width:600px)": {
        fontSize: "1.2em",
      },
    },
    subtitle1: {
      "@media (min-width:360px)": {
        fontSize: "1rem",
      },
      "@media (min-width:480px)": {
        fontSize: "1rem",
      },
      "@media (min-width:600px)": {
        fontSize: "1.2em",
      },
    },
  },

  palette: {
    primary: themeColor.primary,
    secondary: themeColor.secondary,
    light: themeColor.white,
    dark: themeColor.black,
    lightBlack: themeColor.lightBlack,
    greyBlack: themeColor.greyBlack,
    black: themeColor.black,
    yallowdark: themeColor.yallowdark,
    background: {
      default: "#fdfbf7",
    },
  },
});

export default function Home() {
  return (
    <Grid width={1} maxWidth={1920} sx={{overflowX: "hidden", }}>
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
     
     <TabBar />
    
     <Footer/>
     </Grid>
    </Grid>
  );
}
