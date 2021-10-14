import React, {useRef, useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import  ClickAwayListener  from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper  from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { KeyboardArrowDown } from '@material-ui/icons';
import {styled} from '@mui/material/styles';
import colors from '../../utils/colorimetría'

const ToggleButton = styled(Button)(({ theme }) => ({
    color: colors.white,
    '&:hover': {
        backgroundColor: "",
        color:colors.limeGreen,
    }
}));

export const ListButton = (props) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null)
    
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
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
             id="list-about-us"
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
             >
                 {({TransitionProps, placement}) => (
                     <Grow
                     {...TransitionProps}
                     style={{
                         transformOrigin:
                         placement === "bottom-start" ? 'left-top' : 'left-bottom'
                     }}
                     >
                     <Paper>
                         <ClickAwayListener onClickAway={handleClose}>
                             <MenuList
                             autoFocusItem={open}
                             id="menu-list"
                             onKeyDown={handleListKeyDown}
                             >
                                 <MenuItem onClick={handleClose}>Sobre nosotros</MenuItem>
                                 <MenuItem onClick={handleClose}>Nuestro equipo</MenuItem>
                                 <MenuItem onClick={handleClose}>Nuestro proceso</MenuItem>
                             </MenuList>
                         </ClickAwayListener>
                     </Paper>
                 </Grow>
                 )}
            </Popper>
        </div>
    )
}
