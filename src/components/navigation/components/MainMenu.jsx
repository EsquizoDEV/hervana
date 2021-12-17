import React from 'react'
import {GreenBorderButton} from '../../core/OutlinedButton'
import {ListButton} from '../../core/ListButton'
import {SimpleButton} from '../../core/SimpleButton'
import history from '../../../history'
import { HamburgerListButton } from '../../core/HamburgerListButton'
import { FormControlLabel, Icon, Switch } from '@mui/material'
import { Box } from '@mui/system'
import Logo from '../../../assets/images/HERVANA LOGO.png'
import { FormGroup } from '@material-ui/core'
import colors from '../../../utils/colorimetría';
import useLanguage from '../../../hooks/useLanguage';


const MainMenu = ({ isMobile }) => {

    let {getText, changeLanguage} = useLanguage();

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
                    
                    <SimpleButton size="small" onClick={() => {
                        history.push("/services");
                        window.location.reload();
                    }} sx={{fontSize:"2vh"}}>{getText('general', 'navbar','serv')}</SimpleButton>

                    <SimpleButton size="small" onClick={() => {
                        history.push("/ourfocus")
                        window.location.reload();
                    }} sx={{fontSize:"2vh"}}>{getText('general', 'navbar','foc')}</SimpleButton>

                    <ListButton>{getText('general', 'navbar','aboutus')}</ListButton>
                    
                    <GreenBorderButton size="large" onClick={()=> {
                        history.push("/proyecto");
                        window.location.reload();
                    }} sx={{}}>{getText('general', 'navbar','but_proy')}</GreenBorderButton>

                    <FormGroup>
                        <FormControlLabel
                            value="end" 
                            label="ES/EN"
                            sx={{color: colors.white}}
                            control={
                                <Switch 
                                    color="success"
                                    onChange={changeLanguage}
                                    size="large"
                                    defaultChecked
                                    // checked={lang.language ? 'en' : 'es'}
                                />
                            }
                        />
                    </FormGroup>
                    
                    
                    {/* <SimpleButton size="small" onClick={() => {
                        history.push("/faq")
                        window.location.reload();    
                    }}>FAQ</SimpleButton> */}
                </>
            }
        
        </>    
    )
}

export default MainMenu