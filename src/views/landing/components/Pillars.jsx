import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import { ImgCard } from '../../../components/UXComponents/Cards/Card';
import { ImgInfoCardR } from '../../../components/UXComponents/Cards/InfoCardR';
import { ImgInfoCardL } from '../../../components/UXComponents/Cards/InfoCardL';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Pillars = () => {

    return (
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <Item>
                    <ImgInfoCardR/>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <ImgInfoCardL/>
                </Item>
            </Grid>
        </Grid>
    )
}

export default Pillars;