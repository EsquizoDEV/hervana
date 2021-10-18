import Box from '@mui/material/Box'

export const Footer = () => {
    return (
        <div>
            <Box 
                elevation={3}
                sx= {{
                    "width": true,
                    "height": 300,
                    "bgcolor": 'primary.main',
                    '&:hover': {
                      "backgroundColor": 'primary.main',
                      "opacity": [0.9, 0.8, 0.7],
                    },
                }}
            />
        </div>
    )
}