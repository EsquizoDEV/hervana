import {Typography } from '@mui/material';
import Box from '@mui/material/Box'
import colors from '../../utils/colorimetría';
import SocialMenu from '../navigation/components/SocialMenu'
import Logo from '../../assets/logos/hervana logo 2.png'
import history from '../../history';
import useLanguage from '../../hooks/useLanguage';
import { Button, ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            alignItems: 'baseline',
          },
        },
      },
    },
  });

export const Footer = ({ isMobile }) => {

    let { getText } = useLanguage();

    return (
        <div>
            <Box sx={
                    {
                        width:"100%", 
                        height:isMobile ? "30%" : "30vh",
                        background:"black",
                    }}
            >
                <div style={
                    {
                        display:"flex", 
                        alignItems:"flex-start", 
                        justifyContent:"center",
                        height:"70%",
                        width:"100%"
                    }}
                >
                    <Box id="container_interno" sx={{marginTop:"5vh",display:"flex",justifyContent:"space-evenly", width:"100%"}}>
                        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                            <Typography variant="body1" sx={{color: colors.white,fontSize:isMobile ? "4vw" : "1.2vw", alignSelf:"center"}}>{getText('general', 'footer', 'contact_us')}</Typography>
                            <SocialMenu />
                        </Box>
                        
                        <ThemeProvider theme = {theme}>
                            <Button onClick={()=> {
                                history.push('services')
                                window.location.reload()
                            }}>
                                <Typography variant="body1" sx={{color: colors.white, fontSize: isMobile ? "4vw" : "1.2vw"}}>{getText('general', 'footer', 'serv')}</Typography>
                            </Button>
                        </ThemeProvider>
                        <Typography variant="body1" sx={{color: colors.white, fontSize: isMobile ? "4vw" : "1.2vw"}}>{getText('general', 'footer', 'priv')}</Typography>
                        <Typography variant="body1" sx={{color: colors.white, fontSize: isMobile ? "4vw" : "1.2vw"}}>{getText('general', 'footer', 'tyc')}</Typography>
                    </Box>
                </div>
                <div style={{width:"100%", height:"20%", display:"flex", justifyContent:"center"}}>
                    <img style={{height:"100%", width:"auto"}} alt="logo" src={Logo}/>
                </div>
            </Box>
        </div>
    )
}