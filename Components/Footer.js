<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
<Typography variant="h6" align="center" gutterBottom>
  Footer
</Typography>
<Typography
  variant="subtitle1"
  align="center"
  color="text.secondary"
  component="p"
>
  Something here to give the footer a purpose!
</Typography>
</Box>

<Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>