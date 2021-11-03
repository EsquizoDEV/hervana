import { Grid, Typography } from '@mui/material'
import React from 'react'

export const FocusHeader = ({ isMobile }) => {
    return (
        <Grid sx={{marginTop:"10vh"}} item xs={12}>
            <Typography 
                variant={isMobile ? "h5" : "h2"} 
                style={{
                    paddingLeft: isMobile ? "15vh" : "40vh",
                    paddingRight: isMobile ? "15vh" : "40vh",
                    paddingTop: isMobile ? "5vh" : "10vh",
                    paddingBottom: isMobile ? "15vh" : "10vh",
                    maxWidth:"90%",
                    color:"white", 
                    fontWeight:"bold", 
                    fontSize: isMobile ? "6vh": "10vh"
                }}
            >
                AgTech & Cultivo Data Driven. Business Intelligence & analytics. 
                Transformación Digital. Cannabis en Latam. Sustentabilidad
            </Typography>
        </Grid>
    )
}
