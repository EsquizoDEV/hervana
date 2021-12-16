import * as React from 'react';
import { 
    Grid, 
    Typography } from '@mui/material';
import { ImgCard } from '../../../components/UXComponents/Cards/CardIndex';
import ImgSt1 from '../../../assets/images/Paso 1.png'
import ImgSt2 from '../../../assets/images/Paso 2.png'
import ImgSt3 from '../../../assets/Paso 3.png'
import ImgSt4 from '../../../assets/Paso 4.png'
import { Box } from '@mui/system';
import useLanguage from '../../../hooks/useLanguage';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

  //Cnvertir componentes IMGCARD a componentes que reciben propiedades IMG Y TEXT
  
const Processes = ({ isMobile }) => {

    let { getText } = useLanguage();

    return (
        <Box sx={{width:"100%"}}>

            <Grid container style={{display:"flex", justifyContent:"center"}}>
                <Grid item md={12} sx={isMobile ? {display: 'flex', justifyContent: 'center', marginX:"15px", padding:"16px"} : {display: 'flex', justifyContent: 'center'}}>
                    <Typography variant="h2" style={{fontWeight:'bold', color:'black'}}> <div>{getText('landing', 'process', 'title')}</div></Typography>
                </Grid>
                <ImgCard
                isMobile={isMobile} 
                left={false} 
                title={getText('landing', 'process', 's1_title')} 
                subtitle={getText('landing', 'process', 's1_subt')} 
                content={getText('landing', 'process', 's1_text')} 
                img={ImgSt1}/>
            </Grid>
            <Grid style={{marginTop:'50px', display:"flex", justifyContent:"center"}} container>
                {/* Resolver problemática de bullets en renderizado de contenido con props */}
                <ImgCard 
                isMobile={isMobile}
                left={true} 
                title={getText('landing', 'process', 's2_title')} 
                subtitle={getText('landing', 'process', 's2_subt')} 
                content={getText('landing', 'process', 's2_text')} 
                img={ImgSt2}/>
            </Grid>
            <Grid style={{marginTop:'50px', display:"flex", justifyContent:"center"}} container>
                {/* Pedir foto con correciones de margen */}
                <ImgCard
                isMobile={isMobile}
                 left={false} 
                 title={getText('landing', 'process', 's3_title')} 
                 subtitle={getText('landing', 'process', 's3_subt')} 
                 content={getText('landing', 'process', 's3_text')} 
                 img={ImgSt3}
                />
            </Grid>
            <Grid style={{marginTop:'50px', display:"flex", justifyContent:"center"}} container>
                <ImgCard 
                isMobile={isMobile}
                left={true} 
                title={getText('landing', 'process', 's4_title')} 
                subtitle={getText('landing', 'process', 's4_subt')} 
                content={getText('landing', 'process', 's4_text')} 
                img={ImgSt4}/>
            </Grid>
        </Box>
    )
}

export default Processes;