import * as React from 'react';
import { useEffect } from 'react';
import {Typography } from '@mui/material';
import { ImgInfoCard } from '../../../components/UXComponents/Cards/CircleContentM';
import Img1 from '../../../assets/images/Enfoque a la digitalización.png'
import Img2 from '../../../assets/images/Sustentabilidad.png'
import Img3 from '../../../assets/images/Greenhouse1.png'
import Img4 from '../../../assets/images/Cannabis Latam.png'
import { Box } from '@mui/system';
import Aos from 'aos'
import 'aos/dist/aos.css'

const PillarsM = ({ isMobile }) => {

    useEffect(()=> {
        Aos.init({duration:1000, offset:300})
    },[])

    return (
        <Box id="container_pillars" sx={{
            
        }}> 
            {/* //*Circulo de adorno 1*/}
            <Box id="PillarRightImage" 
            sx={{
                backgroundColor:'',
                borderRadius:"50%",
                width: "30vw",
                height: "30vw",
                margin:"5vh",
                display:"table"
            }}>
                <Box 
                    data-aos="fade-left"
                    sx={{width:"80vw"}}
                >
                    <Typography style={{fontSize:"4vh",fontWeight: 'bold', color:"black", maxWidth:"100%"}}  variant="h3" component="div">
                        <div style={{backgroundColor:"#1CF445"}}>Enfoque hacia la digitalización </div>
                    </Typography>
                    
                    <ImgInfoCard
                    isMobile={true}
                    
                    content={` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                    exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                    ea commodo consequat. Duis autem vel eum iriure dolor in hen`}
                    
                    media={Img1}
                    side="right"
                />
                </Box>
            </Box>

            {/* //*Circulo de adorno 2 */}
            <Box id="PillarRightImage" 
            sx={{
                backgroundColor:'',
                borderRadius:"50%",
                width: "30vw",
                height: "30vw",
                margin:"5vh",
                display:"table"
            }}>
                <Box 
                    data-aos="fade-right"
                    sx={{width:"80vw"}}
                >
                    <Typography style={{fontSize:"4vh",fontWeight: 'bold', color:"black", maxWidth:"90%", display:"flex", justifyContent:"end"}}  variant="h3" component="div">
                        <div style={{backgroundColor:"#1CF445",display:"inline-block"}}>Sustentabilidad</div>
                    </Typography>
                    
                    <ImgInfoCard
                    isMobile={true}
                    
                    content={` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                    exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                    ea commodo consequat. Duis autem vel eum iriure dolor in hen`}
                    
                    media={Img2}
                    side="left"
                />
                </Box>
            </Box>

             {/* //*Circulo de adorno 3*/}
             <Box id="PillarRightImage" 
                sx={{
                    backgroundColor:'',
                    borderRadius:"50%",
                    width: "30vw",
                    height: "30vw",
                    margin:"5vh",
                    display:"table"
                }}
            >
                <Box 
                    data-aos="fade-left"
                    sx={{width:"80vw"}}
                >
                    <Typography style={{fontSize:"4vh",fontWeight: 'bold', color:"black", maxWidth:"90%"}}  variant="h3" component="div">
                        <div style={{backgroundColor:"#1CF445",display:"inline-block"}}>Cannabis Latam</div>
                    </Typography>
                    
                    <ImgInfoCard
                    isMobile={true}
                    
                    content={` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                    exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                    ea commodo consequat. Duis autem vel eum iriure dolor in hen`}
                    
                    media={Img3}
                    side="right"
                />
                </Box>
            </Box>


             {/* //*Circulo de adorno 4*/}
             <Box id="PillarRightImage" 
            sx={{
                backgroundColor:'',
                borderRadius:"50%",
                width: "30vw",
                height: "30vw",
                margin:"5vh",
                display:"table"
            }}>
                <Box 
                    data-aos="fade-right"
                    sx={{width:"80vw"}}
                >
                    <Typography style={{fontSize:"4vh",fontWeight: 'bold', color:"black", maxWidth:"90%",display:"flex", justifyContent:"end"}}  variant="h3" component="div">
                        <div style={{backgroundColor:"#1CF445",display:"inline-block"}}>Agtech</div>
                    </Typography>
                    
                    <ImgInfoCard
                    isMobile={true}
                    
                    content={` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                    exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                    ea commodo consequat. Duis autem vel eum iriure dolor in hen`}
                    
                    media={Img1}
                    side="left"
                />
                </Box>
            </Box>
        </Box>
    )
}

export default PillarsM;