import React, { useState } from 'react'
import {
    Icon,
    IconButton,
    MenuItem,
    Avatar,
    useMediaQuery,
    Hidden,
} from '@material-ui/core'

import { lightBlue } from '@mui/material/colors';
import history from "../../history"
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import { GreenBorderButton } from '../core/OutlinedButton'
import { ListButton } from '../core/ListButton'
import { SimpleButton } from '../core/SimpleButton'
import { Instagram, LinkedIn, WhatsApp } from '@material-ui/icons'
import { FacebookOutlined } from '@mui/icons-material'
import { CoreIconButton } from '../core/IconButton'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    topbar: {
        top: 0,
        zIndex: 96,
        transition: 'all 0.3s ease',
        background: '#101111',

        '& .topbar-hold': {
            backgroundColor: '#101111',
            height: 80,
            paddingLeft: 18,
            paddingRight: 20,
            [theme.breakpoints.down('sm')]: {
                paddingLeft: 16,
                paddingRight: 16,
            },
            [theme.breakpoints.down('xs')]: {
                paddingLeft: 14,
                paddingRight: 16,
            },
        },
        '& .fixed': {
            boxShadow: theme.shadows[8],
            height: 64,
        },
    },
    userMenu: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 24,
        padding: 4,
        '& span': {
            margin: '0 8px',
            // color: palette.text.secondary
        },
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        minWidth: 185,
    },
}))

const ResponsiveNavBar = () => {
    const theme = useTheme()
    const classes = useStyles()
    const [ settings, updateSettings ] = useState( {
        leftSidebar: {
            show: true,
            mode: 'full', // full, close, compact, mobile,
            theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
            bgImgURL: '/assets/images/sidebar/sidebar-bg-dark.jpg',
        },
        topbar: {
            show: true,
            fixed: true,
            theme: 'whiteBlue', // View all valid theme colors inside MatxTheme/themeColors.js
        },
    })
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'))
    const fixed = settings?.layout1Settings?.topbar?.fixed

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    const handleSidebarToggle = () => {
        let { layout1Settings } = settings
        let mode

        if (isMdScreen) {
            mode =
                layout1Settings.leftSidebar.mode === 'close'
                    ? 'mobile'
                    : 'close'
        } else {
            mode =
                layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full'
        }

        updateSidebarMode({ mode })
    }

    return (
        <div className={classes.topbar}>
            <div className={clsx({ 'topbar-hold': true, fixed: fixed })}>
                <div className="flex justify-between items-center h-full">
                    <div className="flex">
                        <IconButton
                            onClick={handleSidebarToggle}
                            className="hide-on-pc"
                        >
                            <Icon>menu</Icon>
                        </IconButton>

                    </div>
                    <div className="flex items-center">
                        
                        <GreenBorderButton size="small">Tengo un proyecto</GreenBorderButton>
                        
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
                        
                        <div className="hide-on-mobile flex">

                            <CoreIconButton id="face_icon" size="medium" className="hide-on-mobile">
                                <FacebookOutlined sx={{color:lightBlue[50]}}/>
                            </CoreIconButton>
                            <CoreIconButton id="linkedin_icon" size="medium" className="hide-on-mobile">
                                <LinkedIn sx={{color:lightBlue[50]}}/>
                            </CoreIconButton>
                            <CoreIconButton id="whatsapp_icon" size="medium" className="hide-on-mobile">
                                <WhatsApp sx={{color:lightBlue[50]}}/>
                            </CoreIconButton>
                            <CoreIconButton id="insta_icon" size="medium" className="hide-on-mobile">
                                <Instagram sx={{color:lightBlue[50]}}/>
                            </CoreIconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ResponsiveNavBar)
