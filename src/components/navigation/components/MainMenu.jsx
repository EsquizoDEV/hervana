import React from 'react'
import {GreenBorderButton} from '../../core/OutlinedButton'
import {ListButton} from '../../core/ListButton'
import {SimpleButton} from '../../core/SimpleButton'
import history from '../../../history'
import { HamburgerListButton } from '../../core/HamburgerListButton'
import { Icon} from '@mui/material'
import { Box } from '@mui/system'
import Logo from '../../../assets/images/HERVANA LOGO.png'


const MainMenu = ({ isMobile }) => {
    return (
        <>
            { isMobile
            ?   <>
                    <HamburgerListButton sx={{zIndex: 9999}}>
                        <Icon>menu</Icon>
                    </HamburgerListButton>
                    {/* <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        sx={{width: "100%"}}
                    > */}
                        <Box 
                            onClick={()=>{
                                history.push('/'); 
                                window.location.reload();}
                            } 
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="stretch"
                            spacing={1}
                            sx={{backgroundColor:"#101111", width:"100%"}}
                        >
                            <img alt="hervana-logo" id="logo" src={Logo} style={{marginLeft:"25%", height:"90%"}}/>                
                        </Box>
                    {/* </Stack> */}
                </>
            :   <>
                    <Box 
                        onClick={()=>{
                            history.push('/'); 
                            window.location.reload();}
                        }
                        sx={{backgroundColor:"#101111"}}
                    >
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
        
        </>    
    )
}

export default MainMenu