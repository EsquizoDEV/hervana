import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import{Box, Typography, useMediaQuery} from '@mui/material'
import dashboard from '../../../assets/Artboard 63.png'
import robotica from '../../../assets/Artboard 64.png'
import ai from '../../../assets/Artboard 65.png'
import useLanguage from '../../../hooks/useLanguage'

export const HexagonsDesk = () => {
    const theme = useTheme()
    const {getText} = useLanguage() 
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div>
            <Box sx={
              {
                paddingLeft:"5vw",
                paddingRight:"5vw",
              }}
            >
                <Box sx={
                    {
                    display:isMobile ? "" : "flex",
                    justifyContent:"space-evenly",
                    flexDirection:isMobile ? "column" : "",
                    height:isMobile ? "auto" : "50vh",
                    }
                }>
                    <Box sx={
                        {
                            display:"flex", 
                            flexDirection:"column",
                            alignItems:"center", 
                            justifyContent:"center",
                            width:isMobile ? "100%" : "33%"
                        }
                    }>
                        <div style={
                            {
                            display:isMobile ? "" : "flex", 
                            alignItems:isMobile ? " " : "center",
                            justifyContent:isMobile ? "" : "center", 
                            height:isMobile ? "auto" : "10vh",
                            }
                        }>
                        
                            <Typography
                            variant="body2"
                            sx={
                            {
                                fontSize: isMobile ? "4vw": "2vw",
                                fontWeight:"bold",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center"
                            }}
                            >
                                {getText('ourfocus','focus', 'cloud')}
                            </Typography>
                        </div>
                        <div style={
                            {
                            display:"flex", 
                            alignItems:"center", 
                            justifyContent:"center", 
                            height:isMobile ? "auto" : "30vh",
                            width:isMobile ? "33%" : "auto"
                            }
                        }>
                            
                            <img style={
                            {
                                width:isMobile  ? "100%" : "75%",
                                height:"auto"
                            }} alt="dashboards_cloud" src={dashboard}/>
                        </div>
                    </Box>
                    <Box sx={
                        {
                            display:"flex", 
                            flexDirection:"column",
                            alignItems:"center", 
                            justifyContent:"center",
                            width:isMobile ? "100%" : "33%"
                        }
                    }>
                    <div style={
                        {
                            display:isMobile ? "" : "flex", 
                            alignItems:isMobile ? " " : "center",
                            justifyContent:isMobile ? "" : "center", 
                            height:isMobile ? "auto" : "10vh",
                        }
                    }>
                        
                        <Typography
                        variant="body2"
                        sx={
                        {
                             fontSize: isMobile ? "4vw": "2vw",
                            fontWeight:"bold",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                        >
                            {getText('ourfocus','focus', 'robotics')}
                        </Typography>
                    </div>
                    <div style={
                        {
                        display:"flex", 
                        alignItems:"center", 
                        justifyContent:"center", 
                        height:isMobile ? "auto" : "30vh",
                        width:isMobile ? "33%" : "auto"
                        }
                    }>
                        
                        <img style={
                        {
                            width:isMobile  ? "100%" : "75%",
                            height:"auto"
                        }} alt="robotics" src={robotica}/>
                    </div>
                    </Box>
                    <Box sx={
                        {
                            display:"flex", 
                            flexDirection:"column",
                            alignItems:"center", 
                            justifyContent:"center",
                            width:isMobile ? "100%" : "33%"
                        }
                    }>
                    <div style={
                        {
                            display:isMobile ? "" : "flex", 
                            alignItems:isMobile ? " " : "center",
                            justifyContent:isMobile ? "" : "center", 
                            height:isMobile ? "auto" : "10vh",
                        }
                    }>
                        
                        <Typography
                        variant="body2"
                        sx={
                        {
                            fontSize: isMobile ? "4vw": "2vw",
                            fontWeight:"bold",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                        >
                        {getText('ourfocus','focus', 'ai')}
                        </Typography>
                    </div>
                    <div style={
                        {
                        display:"flex", 
                        alignItems:"center", 
                        justifyContent:"center", 
                        height:isMobile ? "auto" :"30vh",
                        width:isMobile ? "33%" : "auto"    
                        }
                    }>
                        
                        <img style={
                        {
                            width:isMobile  ? "100%" : "75%",
                            height:"auto"
                        }} alt="ai" src={ai}/>
                    </div>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
