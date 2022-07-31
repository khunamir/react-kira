import React, {useState, useEffect} from 'react';
import { Grid, Card, Box, Container, CssBaseline, Skeleton, TextField, InputAdornment, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiOutlinedInput-input': {
        color: 'white'
    }
});

function Kira() {

    const [loading, setLoading] = useState(true);
    const [values, setValues] = useState({
        orang: 1,
        bola: 0.0,
        court: 0.0,
        qtyBola: 1
    });

    const handleChange = (prop) => (event) => {
        if (prop === 'orang' || prop === 'qtyBola')
            if (event.target.value > 0)
                setValues({ ...values, [prop]: event.target.value });
            else
                setValues({ ...values, [prop]: 1 });
        else
            setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() => {
        document.body.style.background = '#eeeeee';
        setTimeout(() => {
        setLoading(false)
        }, 1800);
    }, []);

    var jumlah = (((parseFloat(values.bola) / 12) * values.qtyBola) + parseFloat(values.court)) / parseInt(values.orang);

    return (
        loading
        ?
        <Container sx={{ width: '100%' }}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }} >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={10}>
                        <Card elevation={7} sx={{ minHeight: '60vh', backgroundColor: '#2196f3'}}>
                                <Box sx={{ height: '60vh', width:'100%'}}>
                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{height: '100%', width: '100%'}}
                                    >
                                        <Grid item xs={2}>
                                            <Box>
                                                <Skeleton variant='text' width={185} height={80} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box>
                                                <Skeleton variant='text' width={185} height={80} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box>
                                                <Skeleton variant='text' width={185} height={80} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box>
                                                <Skeleton variant='text' width={185} height={80} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        :
        <Container sx={{ width: '100%' }} >
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
                        <Card elevation={7} sx={{ backgroundColor: '#2196f3'}}>
                            <Box sx={{ height: 500, width:'100%'}}>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{ height: '100%', width: '100%' }}
                                >
                                    <Grid item xs={2}>
                                        <Box>
                                            <CssTextField 
                                                InputProps={{
                                                    startAdornment: 
                                                        <InputAdornment sx={{ color: 'white' }} position="start">
                                                            <Typography>RM</Typography>
                                                        </InputAdornment>,
                                                }}
                                                value={values.court} 
                                                label="Harga court" 
                                                InputLabelProps={{style : {color : 'white'} }}
                                                sx={{ width: 250 }}
                                                required
                                                margin='normal'
                                                onChange={handleChange('court')}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box>
                                            <CssTextField 
                                                InputProps={{
                                                    startAdornment: 
                                                        <InputAdornment sx={{ color: 'white' }} position="start">
                                                            <Typography>RM</Typography>
                                                        </InputAdornment>,
                                                }}
                                                value={values.bola} 
                                                label="Harga bola (setabung)" 
                                                InputLabelProps={{style : {color : 'white'} }}
                                                fullWidth
                                                sx={{ width: 250 }}
                                                required
                                                margin='normal'
                                                onChange={handleChange('bola')}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box>
                                            <CssTextField 
                                                value={values.qtyBola} 
                                                label="Berapa banyak bola pakai" 
                                                InputLabelProps={{style : {color : 'white'} }}
                                                type='number'
                                                sx={{ width: 250 }}
                                                required
                                                margin='normal'
                                                onChange={handleChange('qtyBola')}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box>
                                            <CssTextField 
                                                value={values.orang} 
                                                label="Berapa orang" 
                                                InputLabelProps={{style : {color : 'white'} }}
                                                type='number'
                                                sx={{ width: 250 }}
                                                required
                                                margin='normal'
                                                onChange={handleChange('orang')}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                        { 
                                            jumlah > 0 && values.court > 0
                                            ?
                                            <Paper elevation={4}  sx={{ backgroundColor: '#0b4ba3', width: 250, padding: 2, marginTop: 3 }}>
                                                <Box sx={{ color: '#fff', textAlign: 'center'}}>
                                                    <Typography>
                                                        RM { Math.round(jumlah) } seorang
                                                    </Typography>
                                                </Box>
                                            </Paper>
                                            :
                                            null
                                        }
                                    </Grid>
                                </Grid>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Kira;