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
        <Box sx={{
        }}>
            {/* Circulo de adorno 1*/}
            <Box id="PillarRightImage" 
            data-aos="fade-left"
            sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width: "400px",
                height: "400px",
                position:'relative',
                right:0,
                top:"240px"
            }}>
            </Box>
            <Box 
                data-aos="fade-left"
                sx={{position:"relative", bottom:"30px",marginBottom:"290px"}}
            >
                <Typography style={{fontSize:"40px",fontWeight: 'bold', color:"black", maxWidth:"90%", marginLeft:"20%"}} gutterBottom variant="h3" component="div">
                    <div style={{backgroundColor:"#1CF445",display:"inline-block"}}>Enfoque hacia la</div> <br/> <div style={{backgroundColor:"#1CF445",display:"inline-block"}}>digitalización</div>
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

            {/* Circulo de adorno 2*/}
            <Box id="PillarLeftImage" 
            data-aos="fade-right"
            sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                left:"400px",
            }}>
            </Box>
            <Box 
            data-aos="fade-right"
            sx={{position:"relative", bottom:"300px", right:180, marginBottom:"250px"}}>
                <Typography style={{fontSize:"40px",fontWeight: 'bold', color:"black", display:"flex", justifyContent:"end",}} gutterBottom variant="h3" component="div">
                    <div style={{ backgroundColor:"#1CF445", display:"inline-block"}}>Sustentabilidad</div>
                </Typography>
                <ImgInfoCard
                content={` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo consequat. Duis autem vel eum iriure dolor in hen`}
                
                media={Img2}

                side="left"
                />
            </Box>

            {/* Circulo de adorno 3*/}
            <Box id="PillarRightImage" 
            data-aos="fade-left"
            sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                right:"70px",
                bottom:"270px"
            }}>
            </Box>
            <Box 
            data-aos="fade-left"
            sx={{position:"relative", bottom:"570px", marginBottom:"280px"}}>
                <Typography style={{fontSize:"40px",fontWeight: 'bold', color:"black", width:"350px", position: 'relative', left:160}} gutterBottom variant="h3" component="div">
                    <div style={{ backgroundColor:"#1CF445", display:"inline-block"}}>Cannabis Latam</div>
                </Typography>
                <ImgInfoCard
                 content={` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                 diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                 aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                 exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                 ea commodo consequat. Duis autem vel eum iriure dolor in hen`}
                 
                 media={Img3}
 
                 side="right"
                />
            </Box>

             {/* Circulo de adorno 4*/}
            <Box id="PillarLeftImage" 
            data-aos="fade-right"
            sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                left:"400px",
                bottom:"550px"
            }}>
            </Box>
            <Box 
            data-aos="fade-right"
            sx={{position:"relative", bottom:"870px", display:"block", right:170}}>
                <Typography style={{fontSize:"40px",fontWeight: 'bold', color:"black",display:"flex", justifyContent:"end"}} gutterBottom variant="h3" component="div">
                    <div style={{backgroundColor:"#1CF445", display:"inline-block"}}>Agtech</div>
                </Typography>
                <ImgInfoCard
                 content={` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                 diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                 aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                 exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                 ea commodo consequat. Duis autem vel eum iriure dolor in hen`}
                 
                 media={Img4}
 
                 side="left"
                />
            </Box>
        </Box>
    )
}

export default PillarsM;