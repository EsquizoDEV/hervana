import React from 'react'
import Stack from '@mui/material/Stack'
import { CoreIconButton } from '../../core/IconButton'
import { FacebookOutlined, LinkedIn, WhatsApp, Instagram } from '@mui/icons-material'
import { lightBlue } from '@mui/material/colors'
import {BrowserRouter as Router} from 'react-router-dom'

const SocialMenu = () => {
    return (
        <Router>
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
    )
}

export default SocialMenu;