import * as React from 'react';
import { styled } from '@mui/material/styles';
import { 
    Grid, 
    Paper,
    Typography } from '@mui/material';
import { ImgCard } from '../../../components/UXComponents/Cards/Card';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Processes = () => {

    return (
        <Grid sx={{borderTop:30}} container spacing={2}>
            <Grid item xs={12}>
                <Item>
                    <Typography variant="h3" style={{fontWeight:'bold'}}>Nuestro proceso</Typography>
                </Item>
            </Grid>

            <Grid item xd={12} md={12} lg={12}>
                <ImgCard/>
            </Grid>
        </Grid>
    )
}

export default Processes;