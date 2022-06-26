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
              <CardMedia
                sx={{ height: "265px" }}
                component="img"
                image="https://frescoydelmar.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/e/merluza_fresco_y_del_mar.jpg"
                alt="image1"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Merluza Eviscerada
                </Typography>
                <Typography>
                  Merluza Eviscerada / Merluza Entera / Merluza Sucia es el
                  pescado completo sin ningun procedimiento mas que el
                  destripado
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ height: "265px" }}
                component="img"
                image="https://www.supermercadosdado.com.ar/wp-content/uploads/2022/05/2105288000006_32-2.jpg"
                width={"300px"}
                height={"300px"}
                alt="image2"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Filet de Merluza
                </Typography>
                <Typography>
                  Merluza fileteada y despinada, lo mas vendido!!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ height: "265px" }}
                component="img"
                image="https://i.pinimg.com/564x/c1/aa/4e/c1aa4e9b23f570993f66593fe9061d3a.jpg"
                width={"300px"}
                height={"300px"}
                alt="image2"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Tentaculos
                </Typography>
                <Typography>
                  Tentaculos de Calamar se mantienen y venden Congelados
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ height: "265px" }}
                component="img"
                image="https://img-global.cpcdn.com/recipes/26c11c2c71f0685c/1200x630cq70/photo.jpg"
                width={"300px"}
                height={"300px"}
                alt="image2"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Aletas de Calamar
                </Typography>
                <Typography>
                  Las Aletas de Calamar se mantienen y venden congeladas!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ height: "265px" }}
                component="img"
                image="https://1.bp.blogspot.com/-ZLtmsTUDiOo/XpGgdpgMZxI/AAAAAAACi28/jMDmk5JTzWMAlGokCIHommYht7E19TdvwCNcBGAsYHQ/s1600/paella%2Bde%2Bmarisco%2B%25284%2529.JPG"
                width={"300px"}
                height={"300px"}
                alt="image2"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Mariscos
                </Typography>
                <Typography>
                  Todos los mariscos para su paella! Ofrecemos bandejas de 1/2
                  kilo y 1 kilo para 4 u 8 personas con gran variedad!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ height: "265px" }}
                component="img"
                image="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/076/736/products/milanesas1-711ea4a260b88d341d16081521314831-1024-1024.jpg"
                width={"300px"}
                height={"300px"}
                alt="image2"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Medallones de Pollo y Merluza
                </Typography>
                <Typography>
                  Tenemos gran variedad de Medallones de Merluza: Merluza sola,
                  Tomate y Queso, Roquefort, Espinaca, Brocoli, Etc.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
