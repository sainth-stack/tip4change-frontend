import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardMedia,
} from "@mui/material";

const SustainabilityGuide = () => {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          Resource Library
        </Typography>
        {/* <Divider orientation="vertical" flexItem /> */}
        <Typography variant="h6">Webinars</Typography>
        {/* <Divider orientation="vertical" flexItem /> */}
        <Typography variant="h6">Video</Typography>
      </Box>
      <Grid container spacing={2.5} justifyContent="start">
        {/* First row */}
        <Grid item xs={12} sm={6} md={3}>
          <CardContent>
            <Typography
              style={{
                fontStyle: "Montserrat",
                width: "264px",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "6px",
                padding: "20px 11px 10px 12px",
                marginLeft: "-14px",
                fontSize: "15px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              This guide helps businesses navigate fair trade certifications,
              responsible sourcing policies, and sustainable supply chains to
              align with global environmental standards.
            </Typography>
          </CardContent>
          <Card>
            <CardMedia
              component="img"
              height="249px"
              width="255px"
              image="src/assets/images/resource1.png"
              alt="Sustainability icons and a light bulb"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3} marginTop="15px">
          <Card>
            <CardMedia
              component="img"
              height="249px"
              width="255px"
              image="src/assets/images/resource2.png"
              alt="Hands holding a plant"
            />
          </Card>
          <CardContent>
            <Typography
              style={{
                fontStyle: "Montserrat",
                width: "264px",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "6px",
                padding: "20px 11px 10px 12px",
                marginLeft: "-14px",
                fontSize: "15px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              As the global marketplace evolves, businesses are under increasing
              pressure to adopt ethical practices that ensure fair
              wages,transparent supply chains, and corporate social
              responsibility (CSR).
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardContent>
            <Typography
              style={{
                fontStyle: "Montserrat",
                width: "264px",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "6px",
                padding: "20px 11px 10px 12px",
                marginLeft: "-14px",
                fontSize: "15px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              In a bold move toward sustainability, Fashion Brand X has
              transitioned to using 100% recycled materials in its latest
              collections.
            </Typography>
          </CardContent>
          <Card>
            <CardMedia
              component="img"
              height="249px"
              width="255px"
              image="src/assets/images/resource3.png"
              alt="Clothing tag with recycling symbol"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3} marginTop="16px">
          <Card>
            <CardMedia
              component="img"
              height="249px"
              width="255px"
              image="src/assets/images/resource4.png"
              alt="ESG icons on a laptop screen"
            />
          </Card>
          <CardContent>
            <Typography
              style={{
                fontStyle: "Montserrat",
                width: "264px",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "6px",
                padding: "20px 11px 10px 12px",
                marginLeft: "-14px",
                fontSize: "15px",
                padding: "10px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              As sustainability becomes a priority for brands and retailers,
              live and recorded webinars are helping industry professionals stay
              ahead of the curve.
            </Typography>
          </CardContent>
        </Grid>

        {/* Second row */}
        <Grid item xs={12} sm={6} md={3}>
          <CardContent>
            <Typography
              style={{
                fontStyle: "Montserrat",
                width: "264px",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "6px",
                padding: "20px 11px 10px 12px",
                marginLeft: "-14px",
                fontSize: "15px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              This guide helps businesses navigate fair trade certifications,
              responsible sourcing policies, and sustainable supply chains to
              align with global environmental standards.
            </Typography>
          </CardContent>
          <Card>
            <CardMedia
              component="img"
              height="249px"
              width="255px"
              image="src/assets/images/resource1.png"
              alt="Sustainable fashion workshop"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3} marginTop="16px">
          <Card>
            <CardMedia
              component="img"
              height="249px"
              width="255px"
              image="src/assets/images/resource2.png"
              alt="Eco-friendly clothing materials"
            />
          </Card>
          <CardContent>
            <Typography
              style={{
                fontStyle: "Montserrat",
                width: "264px",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "6px",
                padding: "20px 11px 10px 12px",
                marginLeft: "-14px",
                fontSize: "15px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              As the global marketplace evolves, businesses are under increasing
              pressure to adopt ethical practices that ensure fair
              wages,transparent supply chains, and corporate social
              responsibility (CSR).
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardContent>
            <Typography
              style={{
                fontStyle: "Montserrat",
                width: "264px",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "6px",
                padding: "20px 11px 10px 12px",
                marginLeft: "-14px",
                fontSize: "15px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              In a bold move toward sustainability, Fashion Brand X has
              transitioned to using 100% recycled materials in its latest
              collections.
            </Typography>
          </CardContent>
          <Card>
            <CardMedia
              component="img"
              height="249px"
              width="255px"
              image="src/assets/images/resource3.png"
              alt="Fair trade market"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3} marginTop="15px">
          <Card>
            <CardMedia
              component="img"
              height="249px"
              width="255px"
              image="src/assets/images/resource4.png"
              alt="Green supply chain infographic"
            />
          </Card>
          <CardContent>
            <Typography
              style={{
                fontStyle: "Montserrat",
                width: "264px",
                height: "131px",
                background: "var(--lite-grey, rgba(244, 244, 244, 1))",
                fontWeight: "400",
                borderRadius: "6px",
                padding: "20px 11px 10px 12px",
                marginLeft: "-14px",
                fontSize: "15px",
                lineHeight: "18px",
                color: "var(--black, rgba(14, 14, 14, 1))",
              }}
            >
              As sustainability becomes a priority for brands and retailers,
              live and recorded webinars are helping industry professionals stay
              ahead of the curve.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default SustainabilityGuide;
