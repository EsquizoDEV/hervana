import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import colors from '../../utils/colorimetría';
import SocialMenu from '../navigation/components/SocialMenu'
import Logo from '../../assets/images/HERVANA LOGO.png'
import history from '../../history';


export const Footer = ({ isMobile }) => {
    return (
        <div>
            <Box 
                elevation={3}
                sx= {{
                    "width": true,
                    "height": 300,
                    "bgcolor": colors.black,
                }}
            >
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Stack
                        id="items-container" 
                        direction={isMobile ? "column" : "row" }
                        justifyContent="space-evenly"
                        alignItems="center"
                        //className={classes.container}
                        >
                        <div sx={{marginLeft:3}}>
                            <Typography sx={{color: colors.white, marginTop: 5}}>Contáctanos a través de</Typography>
                            <SocialMenu />
                        </div>
                        <Typography sx={{color: colors.white}}>Servicios</Typography>
                        <Typography sx={{color: colors.white}}>Privacidad</Typography>
                        <Typography sx={{color: colors.white}}>Términos y condiciones</Typography>
                            
                    </Stack>
                    <Stack
                        id="hervana-mark"
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-end"
                        spacing={2}
                    >
                        <Box 
                            onClick={()=>{
                                history.push('/'); 
                                window.location.reload();}
                            } 
                            sx={{backgroundColor:"#101111"}}
                        >
                            <img alt="hervana-logo" id="logo" src={Logo} />                
                        </Box>
                        {/* <Typography variant="h4" sx={{color: colors.white}}>hervana</Typography> */}
                        <Typography variant="h4" sx={{color: colors.limeGreen}}>2021</Typography>
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}