import React from 'react';
import Stack from '@mui/material/Stack';
import './index.css'
import MenuIcon from '@mui/icons-material/Menu' 
import { makeStyles } from '@material-ui/core/styles'
import MainMenu from './components/MainMenu';
import SocialMenu from './components/SocialMenu'

const useStyles = makeStyles((theme) => ({
    logo:{
        "height": "60px",
        "background-color": "#101111"
    },
    container: {
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: '60px',
        backgroundColor: "#101111",
        borderBottom: `1px solid #101111`,
        fontWeight: "bold",
        padding: "0px 20px",
        boxSizing: "border-box"
    }
}))

export const NavBar = ({ isMobile, theme }) => {
    const classes = useStyles();
    return (
        <div id="nav_container" >
            <MenuIcon id="menu-icon"/>

            <Stack id="items-container" direction="row" alignItems="center" spacing={2} className={classes.container}>
                <MainMenu isMobile={isMobile} classes={classes} />
                { isMobile
                ? undefined 
                : <SocialMenu />
                }

            </Stack>
        </div>
    )
}
