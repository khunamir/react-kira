import React, {useState, useEffect} from 'react';
import './App.css';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { Grid, Card, Typography, Box, Container, CssBaseline, CardMedia, CardActionArea, CircularProgress, Grow } from '@mui/material';
import { Link } from 'react-router-dom';

let theme = createTheme();

theme = responsiveFontSizes(theme, { factor: 2.5 });

function App() {

  const [loading, setLoading] = useState(true);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.body.style.background = '#eeeeee';
    setTimeout(() => {
      setLoading(false)
      setChecked(true)
    }, 1800);
  }, []);

  return (
    loading
    ?
    <Container sx={{width: '100%'}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item>
          <CircularProgress size={75} thickness={5} />
        </Grid>
      </Grid>
    </Container>
    :
    <Grow in={checked} {...(checked ? { timeout: 800 } : {})}>
      <Container sx={{width: '100%'}}>
        <CssBaseline />
          <Box sx={{ flexGrow: 1 }} >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: '100vh' }}
            >
              <Grid item xs={12} md={10}>
                <Card elevation={7} sx={{ minHeight: '60vh', backgroundColor: '#2196f3'}}>
                  <CardActionArea>
                  <Link to='/kira' style={{ textDecoration: 'none' }}>
                      <Box sx={{ height: '60vh', width:'100%'}}>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          sx={{height: '100%', width: '100%' }}
                        >
                          <Grid item>
                            <CardMedia
                              component="img"
                              height="120"
                              image={require('./LogoBad.png')}
                            />
                          </Grid>
                          <Grid item>
                            <Box sx={{ color: '#ffffff' }}>
                              <ThemeProvider theme={theme}>
                                <Typography variant="h1">
                                  Kira App
                                </Typography>
                              </ThemeProvider>
                            </Box>
                          </Grid>
                          <Grid item>
                            <Box sx={{color: '#ffffff', height: '100%'}}>
                              <ThemeProvider theme={theme}>
                                <Typography variant="subtitle2">
                                  Dah kira jangan lupa bayar pulak!
                                </Typography>
                              </ThemeProvider>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
      </Container>
    </Grow>
  );
}

export default App;
