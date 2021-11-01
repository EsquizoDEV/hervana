import React from 'react'
import {Box, Typography} from '@mui/material'


const TextOnImage = (props)=> {
    console.log(props.text)
    return (
            <Box sx={
                {
                    display:"flex", 
                    marginTop:"40px", 
                    paddingLeft:"100px", 
                    paddingRight:"100px",
                }
                }>
              {props.imagePosition === "left" ? <img style={{width:"60%", height:"90%", position:"absolute"}} src={props.img} alt="sustentabilidad"/> : null}
              <Box sx={{
                marginTop:"50px",
                height:`350px`,
                display:"flex",
                alignItems:"center",
                width:`100%`,
                position:`${props.imagePosition === "right" ? "relative" : "relative" }`,
                paddingLeft:`${props.imagePosition === "right" ? false : "40vw"}`,
                paddingRight:`${props.imagePosition === "right" ? "40vw" : false}`,
                zIndex:`${props.imagePosition === "right" ? 10 : false}`

              }}>
                <Typography variant="body2" style={
                  {
                    fontWeight:"light",
                    fontSize:"1.5vw",
                    backgroundColor:"white",
                    paddingLeft:`${props.imagePosition === "right" ? false : "50px"}`,
                    paddingRight:`${props.imagePosition === "right" ? "50px" : false}`,
                    height: "-webkit-fill-available",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center"
                    
                  }
                  }>
                   {props.text}
                </Typography>
              </Box>
              {props.imagePosition === "right" ?
              <div style={{width:"100vw", height:"100%",display:"flex", justifyContent:"flex-end", position:"absolute"}}>
                  <img style={{width:"60%", height:"90%", position:"relative" ,right:"12vw"}} src={props.img} alt="sustentabilidad"/>
              </div>
                : null}
            </Box>
          
    )
}

export default TextOnImage