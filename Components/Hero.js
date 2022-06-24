import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function Hero() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Pescaderia Martin
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Bienvenido a nuestra pagina de exhibicion! Encontranos en Albardon
            en Calle Ignacio de la Rosa entre Sarmiento e Italia.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
