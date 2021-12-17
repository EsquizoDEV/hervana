import { Grid, Typography } from '@mui/material'
import React from 'react'

export const FocusHeader = ({ isMobile }) => {
    return (
        <Grid sx={{marginTop:"10vh"}} item xs={12}>
            <Typography 
                variant={isMobile ? "h5" : "h2"} 
                style={{
                    paddingLeft: isMobile ? "5vh" : "10vh",
                    paddingRight: isMobile ? "5vh" : "60vh",
                    paddingTop: isMobile ? "5vh" : "10vh",
                    paddingBottom: isMobile ? "5vh" : "10vh",
                    maxWidth:"90%",
                    color:"white", 
                    fontWeight:"bold", 
                    fontSize: isMobile ? "4vh": "6vh"
                }}
            >
                <ul style={{listStyle:"none"}}>
                    <li>AgTech & Cultivo Data Driven.</li>
                    <li>Business Intelligence & analytics.</li>
                    <li>AgTech & Cultivo Data Driven.</li>
                    <li>Transformación Digital.</li>
                    <li>Cannabis en Latam.</li>
                    <li>CSustentabilidad</li>
                </ul>  
                  
            </Typography>
        </Grid>
    )
}
