import React from 'react';
import Stack from '@mui/material/Stack';
import { GreenBorderButton } from '../core/OutlinedButton';
import {ListButton}  from '../core/ListButton';
import {CoreIconButton} from '../core/IconButton';
import { SimpleButton } from '../core/SimpleButton';
import './index.css'
import history from "../../history"
import { lightBlue } from '@mui/material/colors';
import { FacebookOutlined, LinkedIn, WhatsApp, Instagram } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../../assets/images/HERVANA LOGO.png'
import { BrowserRouter as Router }  from 'react-router-dom';
import { Box } from '@mui/system';
import { AppBar, Toolbar } from '@mui/material';
import ResponsiveMenu from 'react-responsive-navbar';
import { Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    "large-menu-classname": {
        "height": "60px",
        "display":"flex",
        "align-items": "center",
        "background-color": "#101111",
        "overflow": "hidden",
    },
    "small-menu-classname": {
        "height": "60px",
        "display":"flex",
        "align-items": "center",
        "background-color": "#101111",
        "overflow": "hidden",
    },
    "logo":{
        "height": "60px",
        "background-color": "#101111"
    },
    container: {
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: '60px',
        backgroundColor: "#101111",
        borderBottom: `1px solid #101111`,
        fontWeight: "bold",
        padding: "0px 20px",
        boxSizing: "border-box"
    }
}))

export const NavBar = () => {
    const classes = useStyles();
    return (
        // <div id="nav_container">
            <AppBar id="nav_container" className={classes.container}>
                <Toolbar>
                    <MenuIcon id="menu-icon" className={classes.logo}/>
                    <Stack id="items-container" direction="row" alignItems="center" spacing={2}>
                        <Box sx={{backgroundColor:'#101111', height:'60px' }}>
                            <img alt="hervana-logo" id="logo" src={Logo}/>                
                        </Box>

                        <Router>
                            <GreenBorderButton size="small">Tengo un proyecto</GreenBorderButton>
                            
                            <ListButton>Nosotros</ListButton>
                            
                            <SimpleButton size="small" onClick={() => {
                                history.push("/services");
                                window.location.reload();
                            }}>Servicios</SimpleButton>
                            
                            <SimpleButton size="small" onClick={() => {
                                history.push("/ourfocus")
                                window.location.reload();
                            }}>Nuestro enfoque</SimpleButton>
                            
                            <SimpleButton size="small" onClick={() => {
                                history.push("/faq")
                                window.location.reload();    
                            }}>FAQ</SimpleButton>

                            <CoreIconButton id="face_icon" size="medium" className="hide-on-mobile">
                                <FacebookOutlined sx={{color:lightBlue[50]}}/>
                            </CoreIconButton>
                            <CoreIconButton id="linkedin_icon" size="medium" className="hide-on-mobile">
                                <LinkedIn sx={{color:lightBlue[50]}}/>
                            </CoreIconButton>
                            <CoreIconButton id="whatsapp_icon" size="medium" className="hide-on-mobile">
                                <WhatsApp sx={{color:lightBlue[50]}}/>
                            </CoreIconButton>
                            <CoreIconButton id="insta_icon" size="medium" className="hide-on-mobile">
                                <Instagram sx={{color:lightBlue[50]}}/>
                            </CoreIconButton>
                        </Router>    
                    </Stack>
                </Toolbar>
            </AppBar>
        // </div>
    )
}
