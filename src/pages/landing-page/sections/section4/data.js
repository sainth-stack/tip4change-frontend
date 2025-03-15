import { Card } from "@mui/material";
import { styled } from "@mui/system";
import img1 from '../../../../assets/images/s4img1.png'
import img2 from '../../../../assets/images/s4img2.png'
import img3 from '../../../../assets/images/s4img3.png'
import img4 from '../../../../assets/images/s4img4.png'




export const cards = [
  {
    title: "Drinking water",
    description: "Support the installation of safe drinking water systems in local schools and communities.",
    image: img1,
   
  },
  {
    title: "Girls Education",
    description: "Empower girls through education and provide them with the tools they need to succeed.",
    image: img2,
   
  },
  {
    title: "Wildlife conservation",
    description: "Protect and preserve local wildlife habitats and ecosystems.",
    image: img3,

  }, 
  {
    title: "Rainwater harvesting",
    description: "Support the installation of rainwater harvesting systems to conserve water and reduce waste.",
    image: img4,
    
  }
];

export const StyledCard = styled(Card)({
  width: "100%",  // Width from Figma
  height: "503.86px", // Fixed height from Figma
  borderRadius: "10px",
  paddingBottom: "30.89px", // Padding bottom from Figma
  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.25)", // Drop shadow from Figma
  margin: "auto",
});

export const GoalRiseContainer = styled("div")({
  width: "251px",  // Adjusted width from Figma
  height: "50.18px", // Adjusted height from Figma
  display: "flex",
  justifyContent: "space-between", // Align items properly
  alignItems: "center",
});

