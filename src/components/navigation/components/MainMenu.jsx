import React from 'react'
import {GreenBorderButton} from '../../core/OutlinedButton'
import {ListButton} from '../../core/ListButton'
import {SimpleButton} from '../../core/SimpleButton'
import history from '../../../history'
import {BrowserRouter as Router} from 'react-router-dom'
import { HamburgerListButton } from '../../core/HamburgerListButton'
import { Icon, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Logo from '../../../assets/images/HERVANA LOGO.png'


const MainMenu = ({ isMobile, classes }) => {
    return (
        <Router>
            { isMobile
            ?   <>
                    <HamburgerListButton sx={{zIndex: 9999}}>
                        <Icon>menu</Icon>
                    </HamburgerListButton>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        sx={{width: "100%"}}
                    >
                        <Box 
                            onClick={()=>{
                                history.push('/'); 
                                window.location.reload();}
                            } 
                            className={classes.logo} 
                            sx={{backgroundColor:"#101111", alignItems:'center', width:"100%"}}
                        >
                            <img alt="hervana-logo" id="logo" src={Logo}/>                
                        </Box>
                    </Stack>
                </>
            :   <>
                    <Box onClick={
                        ()=>{
                        history.push('/'); 
                        window.location.reload();}
                        } className={classes.logo} sx={{backgroundColor:"#101111"}}>
                        <img alt="hervana-logo" id="logo" src={Logo}/>                
                    </Box>
                    <GreenBorderButton size="small" onClick={()=> {
                        history.push("/proyecto");
                        window.location.reload();
                    }}>Tengo un proyecto</GreenBorderButton>
                    
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
                </>
            }
        
        </Router>    
    )
}

export default MainMenu