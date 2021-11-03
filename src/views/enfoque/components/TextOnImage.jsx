import React from 'react'
import {Box, Typography} from '@mui/material'


const TextOnImage = (props)=> {
    console.log(props.text)
    return (
        <Box 
            sx={{
                display:"flex", 
                marginTop:"8vh", 
                paddingLeft:"10vw", 
                paddingRight:"10vw",
                overflow:"hidden",
            }}
        >
            {
            props.imagePosition === "left" 
            ?   <img style={{width: props.isMobile ? "80%" : "60%", height: props.isMobile ? "60%" : "90%", position:"absolute"}} src={props.img} alt="sustentabilidad"/> 
            :   null
            }
            <Box 
                sx={{
                    marginTop:"9vh",
                    height:`45vh`,
                    display:"flex",
                    alignItems:"center",
                    width:`100%`,
                    position:`${props.imagePosition === "right" ? "relative" : "relative" }`,
                    paddingLeft:`${props.imagePosition === "right" ? false : props.isMobile ? "5vw" : "40vw"}`,
                    paddingRight:`${props.imagePosition === "right" ? props.isMobile ? "5vw" : "40vw" : false}`,
                    zIndex:`${props.imagePosition === "right" ? 10 : false}`
                }}
            >
                <Typography 
                    variant="body2" 
                    style={{
                        width: props.isMobile ? "100%" :"65%",
                        fontWeight:"light",
                        fontSize: props.isMobile ? "2.4vh" : "1.2vw",
                        backgroundColor:"white",
                        marginRight: props.imagePosition === "right" ? "10vw" : false,
                        marginLeft: props.imagePosition === "right" ? false : "10vw",
                        paddingLeft:`${props.imagePosition === "right" ? false : props.isMobile ? "4vw" : "4vw"}`,
                        paddingRight:`${props.imagePosition === "right" ? props.isMobile ? "4vw" :  "4vw" : false}`,
                        height: "-webkit-fill-available",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center"
                    }}
                >
                    {props.text}
                </Typography>
            </Box>
            {
            props.imagePosition === "right" 
            ?   <div style={{width:"100vw", height:"100%",display:"flex", justifyContent:"flex-end", position:"absolute"}}>
                    <img 
                        style={{
                            width: props.isMobile ? "80%" : "60%", 
                            height: props.isMobile ? "60%" : "90%", 
                            position:"relative" ,
                            right:"15vw"
                        }} 
                        src={props.img} 
                        alt="sustentabilidad"
                    />
                </div>
            :   null}
        </Box>   
    )
}

export default TextOnImage