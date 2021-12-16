import * as React from 'react';
import { useEffect } from 'react';
import {Typography } from '@mui/material';
import { ImgInfoCard } from '../../../components/UXComponents/Cards/CircleContent';
import Img1 from '../../../assets/circulares/image00003.png'
import Img2 from '../../../assets/circulares/image00005.png'
import Img3 from '../../../assets/circulares/image00004.png'
import Img4 from '../../../assets/circulares/image00001.png'
import { Box } from '@mui/system';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Pillars = ({ isMobile }) => {

    useEffect(()=> {
        Aos.init({duration:1000, offset:300})
    },[])

    return (
        <Box sx={{
            width:"70%"
        }}>
            <Box sx={{marginBottom:"-30vh"}}>
                {/* Circulo de adorno 1*/}
                <Box id="PillarRightImage" 
                data-aos="fade-left"
                sx={{
                    marginTop:"2vh",
                    border:'solid 1px', 
                    backgroundColor:'',
                    borderRadius:"50%",
                    width: isMobile ? "auto" : "30vw",
                    height: isMobile ? "auto" : "30vw",
                }}>
                </Box>
                <Box 
                    data-aos="fade-left"
                    sx={{position:"relative", bottom:"45vh"}}
                >
                    <Typography style={{fontSize:"6vh",fontWeight: 'bold', color:"black", width:"27vw", marginLeft:"6vw"}} gutterBottom variant="h3" component="div">
                        <div style={{backgroundColor:"#1CF445",display:"inline-block"}}>Enfoque hacia la</div> <br/> <div style={{backgroundColor:"#1CF445",display:"inline-block"}}>digitalización</div>
                    </Typography>
                    
                    <ImgInfoCard 
                    content={`  La agricultura en ambientes controlados es
                    por mucho la manera más eficiente y
                    sustentable de producción en la actualidad.
                    Utilizando 90% menos agua y produciendo
                    hasta 30 veces mas a comparación de la
                    agricultura tradicional, sin mencionar que
                    esta está a merced de los cada vez más
                    desafiantes condiciones climáticas.`}
                    
                    media={Img1}

                    side="right"
                    
                />
                </Box>
            </Box>
            

            <Box sx={{marginBottom:"-30vh"}}>
                {/* Circulo de adorno 2*/}
                <Box id="PillarLeftImage" 
                data-aos="fade-right"
                sx={{
                    display:"flex",
                    justifyContent:"flex-end"
                    
                }}>
                    <div style={{border:'solid 1px', 
                    backgroundColor:'',
                    borderRadius:"50%",
                    width:"30vw",
                    height:"30vw",}}>

                    </div>
                </Box>
                <Box 
                data-aos="fade-right"
                sx={{position:"relative", bottom:"45vh"}}>
                    <Typography style={{fontSize:"6vh",fontWeight: 'bold', color:"black", display:"flex", justifyContent:"end", width:"", marginRight:"3vw"}} gutterBottom variant="h3" component="div">
                        <div style={{ backgroundColor:"#1CF445", display:"inline-block"}}>Sustentabilidad</div>
                    </Typography>
                    <ImgInfoCard
                    content={` Combinar el conocimiento profundo de las
                    recetas de cultivo, principios de plant
                    empowerment y analitica tecnica en la
                    "mente" de nuestros horticultores con las
                    posibilidades de datos, robótica e IA ofrece la
                    oportunidad de incrementar sustancialmente
                    la eficiencia y calidad de la producción.`}
                    
                    media={Img2}

                    side="left"
                    />
                </Box>
            </Box>

            <Box sx={{marginBottom:"-30vh"}}>
                {/* Circulo de adorno 3*/}
                <Box id="PillarRightImage" 
                data-aos="fade-left"
                sx={{
                    border:'solid 1px', 
                    backgroundColor:'',
                    borderRadius:"50%",
                    width:"30vw",
                    height:"30vw",
                }}>
                </Box>
                <Box 
                data-aos="fade-left"
                sx={{position:"relative", bottom:"45vh"}}>
                    <Typography style={{fontSize:"6vh",fontWeight: 'bold', color:"black", width:"27vw", marginLeft:"6vw"}} gutterBottom variant="h3" component="div">
                        <div style={{ backgroundColor:"#1CF445", display:"inline-block"}}>Cannabis Latam</div>
                    </Typography>
                    <ImgInfoCard
                    content={`Los productores en Latam pueden
                    conseguir
                    liderar la industria mundial en calidad y
                    costos por las condiciones favorables
                    para la
                    producción, como los bajos costos
                    laborales,
                    el clima, y la luminosidad, entre otros
                    factores propicios. Hay una gran
                    oportunidad de crear una verdadera y
                    profunda revolución industria y
                    económica
                    en el continente.`}
                    
                    media={Img3}
    
                    side="right"
                    />
                </Box>
            </Box>

            <Box>

                {/* Circulo de adorno 4*/}
                <Box id="PillarLeftImage" 
                data-aos="fade-right"
                sx={{
                    display:"flex",
                    justifyContent:"flex-end"
                    
                }}>
                    <div style={{border:'solid 1px', 
                    backgroundColor:'',
                    borderRadius:"50%",
                    width:"30vw",
                    height:"30vw",}}>

                    </div>
                </Box>
                <Box 
                data-aos="fade-right"
                sx={{position:"relative", bottom:"45vh"}}>
                    <Typography style={{fontSize:"6vh",fontWeight: 'bold', color:"black",display:"flex", justifyContent:"end", marginRight:"3vw"}} gutterBottom variant="h3" component="div">
                        <div style={{backgroundColor:"#1CF445", display:"inline-block"}}>Agtech</div>
                    </Typography>
                    <ImgInfoCard
                    content={` Definimos la estrategia de transformación
                    digital como una estrategia que coordina
                    el uso de tecnologías emergentes para
                    desbloquear nuevas fuentes de valor para
                    clientes y empleados, impulsar el
                    crecimiento de los ingresos y crear
                    agilidad / eficiencia operativa al servicio
                    de los resultados comerciales.`}
                    
                    media={Img4}
    
                    side="left"
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Pillars;