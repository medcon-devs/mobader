import { themeColor } from "@/app/constant/color";
import { routeConfig } from "@/app/constant/route";
import { get } from "@/handler/api.handler";
import { MessageType } from "@/types/props.types";
import { Typography,CardContent, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
export default function DirectorMessage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<MessageType>();
  const [cardWidth, setCardWidth] = useState("90%");

  const loadData = async () => {
    console.log("loadData called");
    setLoading(true);
    console.log("start");
    try {
      const res = await get(routeConfig.message, null);
      console.log("API Response:", res);
      if (res && res.status_code === 200) {
        console.log("Setting message state");
        setMessage(res.data);
      }
    } catch (e) {
      console.error("Error loading data:", e);
    } finally {
      setLoading(false);
      console.log("loadData completed");
      
    }
  };
  

  useEffect(() => {
    console.log("useEffect triggered");
    loadData();

    const updateCardWidth = () => {
      const newWidth = window.innerWidth * 0.8;
      setCardWidth(newWidth > 1400 ? "1400px" : `${newWidth}px`);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);
  return (
    <Box
      sx={{
        width: cardWidth,
        margin: "20px auto", // Center the card with margin
        borderRadius: 20,
        height: "auto", 
        // padding:0,
        maxWidth:1400,
        minWidth:400,
        maxHeight:800,
        minHeight:700,
        backgroundImage: 'url("/static/images/Message.png")', // Update with your image path
          // Use 'cover' to ensure the image covers the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",// Fallback color for background
        backgroundSize:"cover"
      }}
    >
     {loading ? (
            <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 600, // Full height of the parent container
            }}
          >
            <ClipLoader color={themeColor.black.dark} size={40} />
          </Box>
      
          ):
      (<CardContent
        sx={{
          padding: "24px",
          fontFamily: "'Roboto', sans-serif",
          borderRadius: 20, // Ensure the content aligns with the card's rounded corners
          // Semi-transparent overlay for better readability
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign="center"
          sx={{
            fontSize: "clamp(20px, 4vw, 30px)", // Responsive font size
            marginBottom: "16px",
            pt: 6,
          }}
          color="#000000"
        >
         {message?.title}
        </Typography>

        {/* Text */}
        <Typography
          variant="body1"
          sx={{
            color: "#000000", // Text color for visibility
            fontWeight: 100, // Light font weight
            lineHeight: 2,
            textAlign: "justify",
            fontSize: "clamp(12px, 2vw, 18px)", // Responsive font size
            padding: "clamp(12px, 2vw, 18px)",
            whiteSpace: "pre-line"
            
          }}
        >
          {message?.description}
        </Typography>

        {/* <Typography
          variant="body1"
          sx={{
            color: "#000000",
            fontWeight: 100, // Light font weight
            lineHeight: 2,
            marginTop: "16px",
            fontSize: "clamp(12px, 2vw, 18px)", // Responsive font size
            padding: "clamp(12px, 2vw, 18px)",
            textAlign: "justify",
          }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </Typography> */}
      </CardContent>)}
    </Box>
  );
}
