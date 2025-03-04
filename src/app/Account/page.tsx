import { Grid, } from "@mui/material";
import ResponsiveAppBar from "../layout/appBar";
import Banner from "../layout/banner";
import Footer from "../layout/footer";
import Profile from "./profile";
// import RegisterForms from "../Forms";

export default  function  Account() {
   
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
       <Grid  position={"relative"} >
      
     <Profile/>
       </Grid >
      
      <Footer/>
      
      </Grid>
    );
  }
  