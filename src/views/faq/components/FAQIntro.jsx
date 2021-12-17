import * as React from 'react';
import { Grid,Typography } from '@mui/material';


const FAQIntro = ({ getText }) => {

    return (
        <Grid container sx={{backgroundColor:"black", height:"40vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Grid item sx={{marginTop:"40px"}}>
                <Typography sx={{padding:"50px", color:"white", fontSize:"100px", fontWeight:"bold"}} variant="h1">
                    {getText("faq", "start", "title")}
                </Typography>
            </Grid>
        </Grid>
    )

}

export default FAQIntro