import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid2
} from "@mui/material";

import resource1 from "../../assets/images/resource1.png";
import resource2 from "../../assets/images/resource2.png";
import resource3 from "../../assets/images/resource3.png";
import resource4 from "../../assets/images/resource4.png";

const resourceData = [
  {
    id: 1,
    image: resource1,
    alt: "Sustainability icons and a light bulb",
    description: "This guide helps businesses navigate fair trade certifications, responsible sourcing policies, and sustainable supply chains to align with global environmental standards.",
    textFirst: true
  },
  {
    id: 2,
    image: resource2,
    alt: "Hands holding a plant",
    description: "As the global marketplace evolves, businesses are under increasing pressure to adopt ethical practices that ensure fair wages, transparent supply chains, and corporate social responsibility (CSR).",
    textFirst: false
  },
  {
    id: 3,
    image: resource3,
    alt: "Clothing tag with recycling symbol",
    description: "In a bold move toward sustainability, Fashion Brand X has transitioned to using 100% recycled materials in its latest collections.",
    textFirst: true
  },
  {
    id: 4,
    image: resource4,
    alt: "ESG icons on a laptop screen",
    description: "As sustainability becomes a priority for brands and retailers, live and recorded webinars are helping industry professionals stay ahead of the curve.",
    textFirst: false
  },
  // Repeat for second row (or you can duplicate the array)
  {
    id: 5,
    image: resource1,
    alt: "Sustainable fashion workshop",
    description: "This guide helps businesses navigate fair trade certifications, responsible sourcing policies, and sustainable supply chains to align with global environmental standards.",
    textFirst: true
  },
  {
    id: 6,
    image: resource2,
    alt: "Eco-friendly clothing materials",
    description: "As the global marketplace evolves, businesses are under increasing pressure to adopt ethical practices that ensure fair wages, transparent supply chains, and corporate social responsibility (CSR).",
    textFirst: false
  },
  {
    id: 7,
    image: resource3,
    alt: "Fair trade market",
    description: "In a bold move toward sustainability, Fashion Brand X has transitioned to using 100% recycled materials in its latest collections.",
    textFirst: true
  },
  {
    id: 8,
    image: resource4,
    alt: "Green supply chain infographic",
    description: "As sustainability becomes a priority for brands and retailers, live and recorded webinars are helping industry professionals stay ahead of the curve.",
    textFirst: false
  }
];

const ResourceCard = ({ resource }) => {
  return (
    <>
      {resource.textFirst ? (
        <Grid2 sx={{display:'flex',flexDirection:'column',gap:"24px"}}>
          <CardContent sx={{padding:'0px',margin:'0px',borderRadius:'16px'}} style={{ padding: '0px' }}>
            <Typography
              style={{
                fontFamily: "Montserrat",
                // width: "100%",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "16px",
                padding: "20px 11px 10px 12px",
                fontSize: "15px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              {resource.description}
            </Typography>
          </CardContent>
          <CardMedia
              component="img"
              height="249px"
              width="100%"
              sx={{borderRadius:'16px'}}
              borderRadius="20px"
              image={resource.image}
              alt={resource.alt}
            />
        </Grid2>
      ) : (
        <Grid2 sx={{display:'flex',flexDirection:'column',gap:"24px"}}>
            <CardMedia
              component="img"
              height="249px"
              width="100%"
              sx={{borderRadius:'16px'}}
              borderRadius="20px"
              image={resource.image}
              alt={resource.alt}
            />
          <CardContent sx={{padding:'0px',margin:'0px',borderRadius:'16px'}} style={{ padding: '0px' }}>
            <Typography
              style={{
                fontFamily: "Montserrat",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "16px",
                padding: "20px 11px 10px 12px",
                fontSize: "15px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              {resource.description}
            </Typography>
          </CardContent>
        </Grid2>
      )}
    </>
  );
};

const ResourceLibrary = () => {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }} ml={3}>
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          Resource Library
        </Typography>
        <Typography variant="h6">Webinars</Typography>
        <Typography variant="h6">Video</Typography>
      </Box>
      
      <Grid container spacing={2} justifyContent="start" mt={"16px"}>
        {resourceData.map((resource, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={3} 
            key={resource.id}
            marginTop={index % 2 === 1 ? "15px" : "0px"}
          >
            <ResourceCard resource={resource} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ResourceLibrary;