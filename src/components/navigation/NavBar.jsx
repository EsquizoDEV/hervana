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
import Logo from '../../assets/images/HERVANA LOGO.png'
import { BrowserRouter as Router, Link }  from 'react-router-dom';

export const NavBar = () => {
    return (
        <div id="nav_container">
            <img id="logo" src={Logo}/>                

            <Stack className="justify-content:center" direction="row" spacing={2}>
                <Router>
                    <Link to="/services" />
                    
                    <Link to="/ourfocus" />
                    <GreenBorderButton size="medium">Tengo un proyecto</GreenBorderButton>
                    <ListButton>Nosotros</ListButton>
                    <SimpleButton size="medium" onClick={() => {
                        history.push("/services");
                        window.location.reload();
                    }}>Servicios</SimpleButton>
                    <SimpleButton size="medium" onClick={() => {
                        history.push("/ourfocus")
                        window.location.reload();
                    }}>Nuestro enfoque</SimpleButton>
                    <SimpleButton size="medium" onClick={() => {
                        history.push("/faq")
                        window.location.reload();    
                    }}>FAQ</SimpleButton>
                    <CoreIconButton id="face_icon" size="medium">
                        <FacebookOutlined sx={{color:lightBlue[50]}}/>
                    </CoreIconButton>
                    <CoreIconButton id="linkedin_icon" size="medium">
                        <LinkedIn sx={{color:lightBlue[50]}}/>
                    </CoreIconButton>
                    <CoreIconButton id="whatsapp_icon" size="medium">
                        <WhatsApp sx={{color:lightBlue[50]}}/>
                    </CoreIconButton>
                    <CoreIconButton id="insta_icon" size="medium">
                        <Instagram sx={{color:lightBlue[50]}}/>
                    </CoreIconButton>
                </Router>
            </Stack>
            
        </div>
    )
}
