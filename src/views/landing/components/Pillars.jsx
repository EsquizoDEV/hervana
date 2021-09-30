import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import { ImgCard } from '../../../components/UXComponents/Cards/Card';
import { ImgInfoCardR } from '../../../components/UXComponents/Cards/InfoCardR';
import { ImgInfoCardL } from '../../../components/UXComponents/Cards/InfoCardL';
import { Box } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Pillars = () => {

    return (
        <Box sx={{
           
        }}>
            {/* Configurar componentes para poder pasar los parametros con el contenido (img, text) y no tener que crear 4 componentes */}
            <ImgInfoCardR/>
            <ImgInfoCardL/>
            <ImgInfoCardR/>
            <ImgInfoCardL/>
        </Box>
    )
}

export default Pillars;