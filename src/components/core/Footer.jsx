import { Icon, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import colors from '../../utils/colorimetría';
import SocialMenu from '../navigation/components/SocialMenu'

export const Footer = () => {
    return (
        <div>
            <Box 
                elevation={3}
                sx= {{
                    "width": true,
                    "height": 300,
                    "bgcolor": colors.black,
                    '&:hover': {
                      "backgroundColor": 'primary.main',
                      "opacity": [0.9, 0.8, 0.7],
                    },
                }}
            >
                <Stack
                    id="items-container" 
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    //className={classes.container}
                >
                    <div>
                        <Typography sx={{color: colors.white}}>Contáctanos a través de</Typography>
                        <SocialMenu />
                    </div>
                    <Typography sx={{color: colors.white}}>Servicios</Typography>
                    <Typography sx={{color: colors.white}}>Privacidad</Typography>
                    <Typography sx={{color: colors.white}}>Términos y condiciones</Typography>
                        
                </Stack>
                <Typography sx={{color: colors.white}}>hervana</Typography>
                <Typography sx={{color: colors.white}}>2021<Icon></Icon></Typography>
            </Box>
        </div>
    )
}