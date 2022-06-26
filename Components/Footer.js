import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Creado por: Agustin Pereyra. Contacto: @agusabel_
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <Container maxWidth="md">
          <Typography variant="h6" align="center" gutterBottom>Formulario de Contacto</Typography>
            <Grid container spacing={4}>
              <Grid item xs={4} sm={6} md={6}>
                <TextField
                fullWidth
                  id="filled-basic"
                  label="Nombre y Apellido"
                  variant="filled"
                />
              </Grid>

              <Grid item xs={4} sm={6} md={6}>
                <TextField
                fullWidth
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                />
              </Grid>

              <Grid item xs={4} sm={6} md={12}>
                <TextField
                fullWidth
                  id="filled-basic"
                  label="Descripcion"
                  variant="filled"
                />
              </Grid>


              <Grid item xs={4} sm={6} md={12}>
              <Button variant="contained" color="grey">Enviar</Button>
              </Grid>
            </Grid>
          </Container>
        </Typography>
      </Box>
    </>
  );
}
