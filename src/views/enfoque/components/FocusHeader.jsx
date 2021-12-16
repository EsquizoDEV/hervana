import { Grid, Typography } from '@mui/material'
import useLanguage from '../../../hooks/useLanguage'
import React from 'react'

export const FocusHeader = ({ isMobile }) => {

    let {getText} = useLanguage()
    return (
        <Grid sx={{marginTop:"10vh"}} item xs={12}>
            <Typography 
                variant={isMobile ? "h5" : "h2"} 
                style={{
                    paddingLeft: isMobile ? "15vh" : "10vh",
                    paddingRight: isMobile ? "15vh" : "50vh",
                    paddingTop: isMobile ? "5vh" : "5vh",
                    paddingBottom: isMobile ? "15vh" : "10vh",
                    maxWidth:"100%",
                    color:"white", 
                    fontWeight:"bold", 
                    fontSize: isMobile ? "4vh": "6vh"
                }}
            >
                <ul style={{listStyle:"none"}}>
                    <li>{getText('ourfocus', 'focusHeader', 'i_2')}</li>
                    <li>{getText('ourfocus', 'focusHeader', 'i_3')}</li>
                    <li>{getText('ourfocus', 'focusHeader', 'i_4')}</li>
                    <li>{getText('ourfocus', 'focusHeader', 'i_5')}</li>
                    <li>{getText('ourfocus', 'focusHeader', 'i_6')}</li>
                </ul>  
                  
            </Typography>
        </Grid>
    )
}
