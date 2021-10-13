import {Typography } from '@mui/material';
import * as React from 'react';
import { ImgInfoCard } from '../../../components/UXComponents/Cards/CircleContent';
import Img1 from '../../../assets/images/Enfoque a la digitalización.png'
import Img2 from '../../../assets/images/Sustentabilidad.png'
import Img3 from '../../../assets/images/Greenhouse1.png'
import Img4 from '../../../assets/images/Cannabis Latam.png'
import { Box } from '@mui/system';

const Pillars = () => {

    return (
        <Box sx={{
        }}>
            {/* Circulo de adorno 1*/}
            <Box id="PillarRightImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                right:"130px",
                top:"270px"
            }}>
            </Box>
            <Box sx={{position:"relative", bottom:"30px",}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", width:"370px"}} gutterBottom variant="h3" component="div">
                    Enfoque hacia la <br/> digitalización
                </Typography>
                
                <ImgInfoCard 
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
            <Box id="PillarLeftImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                left:"540px",
            }}>
            </Box>
            <Box sx={{position:"relative", bottom:"300px"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", display:"flex", justifyContent:"end"}} gutterBottom variant="h3" component="div">
                    Sustentabilidad
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
            <Box id="PillarRightImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                right:"130px",
                bottom:"270px"
            }}>
            </Box>
            <Box sx={{position:"relative", bottom:"570px"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", width:"350px"}} gutterBottom variant="h3" component="div">
                    Cannabis Latam
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
            <Box id="PillarLeftImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                left:"540px",
                bottom:"550px"
            }}>
            </Box>
            <Box sx={{position:"relative", bottom:"870px", display:"block"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", display:"flex", justifyContent:"end"}} gutterBottom variant="h3" component="div">
                    Agtech
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

export default Pillars;