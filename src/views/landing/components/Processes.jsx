import * as React from 'react';
import { styled } from '@mui/material/styles';
import { 
    Grid, 
    Paper,
    Typography } from '@mui/material';
import { ImgCard } from '../../../components/UXComponents/Cards/Card';
import { ImgCardL } from '../../../components/UXComponents/Cards/CardL';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  //Cnvertir componentes IMGCARD a componentes que reciben propiedades IMG Y TEXT
  
const Processes = () => {

    return (
        <Box>
            <Box component="div" sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h2" style={{fontWeight:'bold', color:'black'}}>Nuestro proceso</Typography>
            </Box>

            <Grid item xd={12} md={12} lg={12}>
                <ImgCard/>
            </Grid>
            <Grid style={{marginTop:'50px'}} item xd={12} md={12} lg={12}>
                <ImgCardL/>
            </Grid>
            <Grid style={{marginTop:'50px'}} item xd={12} md={12} lg={12}>
                <ImgCard/>
            </Grid>
            <Grid style={{marginTop:'50px'}} item xd={12} md={12} lg={12}>
                <ImgCardL/>
            </Grid>
        </Box>
    )
}

export default Processes;