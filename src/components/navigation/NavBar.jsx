import React from 'react';
import Stack from '@mui/material/Stack';
import './index.css'
import { makeStyles } from '@material-ui/core/styles'
import MainMenu from './components/MainMenu';
import SocialMenu from './components/SocialMenu'
import {BrowserRouter as Router} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
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
        boxSizing: "border-box",
        cursor:"pointer",
        zIndex:999
    }
}))

export const NavBar = ({ isMobile, theme }) => {
    const classes = useStyles();
    return (
        <div id="nav_container" >
            {/* <MenuIcon id="menu-icon"/> */}
            <Router>
                <Stack 
                    id="items-container" 
                    direction="row"
                    justifyContent={isMobile ? "flex-start" : "space-evenly"}
                    alignItems="center"
                    className={classes.container}
                    sx={{width: "100%"}}
                >
                    <MainMenu isMobile={isMobile} />
                    { isMobile
                    ? undefined 
                    : <SocialMenu />
                    }

                </Stack>
            </Router>
        </div>
    )
}
