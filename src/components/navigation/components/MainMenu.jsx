import React from 'react'
import Stack from '@mui/material/Stack'
import {GreenBorderButton} from '../../core/OutlinedButton'
import {ListButton} from '../../core/ListButton'
import {SimpleButton} from '../../core/SimpleButton'
import history from '../../../history'
import {BrowserRouter as Router} from 'react-router-dom'


export const MainMenu = () => {
    return (
        <div>
            <Stack direction="row">
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
                
            </Router>    
            </Stack>            
        </div>
    )
}
