import * as React from "react";
import Hero from "../Components/Hero";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image1 from "../public/aaaa.jpg";


export default function Main() {
  return (
    <>
      <Hero></Hero>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia component="img" width="100%" height="250"  image={Image1} alt="image1" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Cornalitos
                </Typography>
                <Typography>
                  aaaaaaaaaaaaaaaasfdasfassssssss
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
