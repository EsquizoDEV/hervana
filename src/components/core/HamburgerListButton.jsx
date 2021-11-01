import React, {useRef, useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import  ClickAwayListener  from '@mui/material/ClickAwayListener';
import {GreenBorderButton} from '../core/OutlinedButton'
import Grow from '@mui/material/Grow';
import Paper  from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { KeyboardArrowDown } from '@material-ui/icons';
import {styled} from '@mui/material/styles';
import colors from '../../utils/colorimetría'
import history from '../../history'
// import { ListButton } from './ListButton';
import { SimpleButton } from './SimpleButton';

const ToggleButton = styled(Button)(({ theme }) => ({
    color: colors.white,
    '&:hover': {
        backgroundColor: "",
        color: colors.limeGreen
    }
    
}));

export const HamburgerListButton = (props) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null)
    
    const handleToggle = e => {
        console.log(e)
        if (e.target.id !== 'list-about-us') {
            setOpen((prevOpen) => !prevOpen)
        }
    }
    
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)){ 
            return;
        }

        setOpen(false);
    }
    
    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open])
    
    return (
        <div>
            <ToggleButton
                id="mobile-nav"
                ref={anchorRef}
                onClick={handleToggle}
                endIcon={<KeyboardArrowDown/>}
             >
                 {props.children}

             </ToggleButton>

            <Popper 
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                style={{zIndex:999}}
             >
                 {({TransitionProps, placement}) => (
                     <Grow
                     {...TransitionProps}
                     style={{
                         transformOrigin:
                         placement === "bottom-start" ? 'left-top' : 'left-bottom'
                     }}
                     >
                     <Paper
                        sx={{
                            backgroundColor:'#101111'
                        }}
                     >
                         <ClickAwayListener onClickAway={handleClose}>
                             <MenuList
                                autoFocusItem={open}
                                id="menu-list"
                                onKeyDown={handleListKeyDown}
                             >
                                 <MenuItem onClick={handleClose}>
                                    <GreenBorderButton size="small" onClick={()=> {
                                        history.push("/proyecto");
                                        window.location.reload();
                                    }}>Tengo un proyecto</GreenBorderButton>
                                 </MenuItem>
                                 <MenuItem onClick={handleClose}>
                                    <SimpleButton size="small" onClick={() => {
                                        history.push("/services");
                                        window.location.reload();
                                    }}>Servicios</SimpleButton>
                                 </MenuItem>
                                 <MenuItem onClick={handleClose}>
                                    <SimpleButton size="small" onClick={() => {
                                        history.push("/ourfocus")
                                        window.location.reload();
                                    }}>Nuestro enfoque</SimpleButton>
                                 </MenuItem>
                                 <MenuItem onClick={handleClose}>
                                    <SimpleButton size="small" onClick={() => {
                                        history.push("/faq")
                                        window.location.reload();    
                                    }}>FAQ</SimpleButton>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <SimpleButton size="small" onClick={() => {
                                        history.push("/");
                                        window.location.reload();
                                    }}>Sobre nosotros</SimpleButton>
                                 </MenuItem>
                                 <MenuItem onClick={handleClose}>
                                    <SimpleButton size="small" onClick={() => {
                                        history.push("/")
                                        window.location.reload();
                                    }}>Nuestro equipo</SimpleButton>
                                 </MenuItem>
                                 <MenuItem onClick={handleClose}>
                                    <SimpleButton size="small" onClick={() => {
                                        history.push("/")
                                        window.location.reload();    
                                    }}>Nuestro proceso</SimpleButton>
                                </MenuItem>
                             </MenuList>
                         </ClickAwayListener>
                     </Paper>
                 </Grow>
                 )}
            </Popper>
        </div>
    )
}
