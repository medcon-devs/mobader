import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";

function ResponsiveAppBar() {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{ backgroundColor: "#000", height: 50 }}
    >
      {/* <Container maxWidth={false}>
        <Toolbar disableGutters>
          
            <Box
              component="img"
              width={300}
              height={200}
              pl={5}
              sx={{ objectFit: "contain", cursor: "pointer" }}
              alt="EHS"
              src="/static/images/ehs.png"
            />
        
        </Toolbar>
      </Container> */}
     
    </AppBar>
  );
}

export default ResponsiveAppBar;
