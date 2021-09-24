import React from 'react';
import Stack from '@mui/material/Stack';
import { GreenBorderButton } from '../core/OutlinedButton';
import {ListButton}  from '../core/ListButton';
import {CoreIconButton} from '../core/IconButton';
import { SimpleButton } from '../core/SimpleButton';
import './index.css'
import {ReactComponent as FacebookIcon} from '../../assets/svg/FACEBOOK.svg';


export const NavBar = () => {
    return (
        <div id="nav_container">
            <Stack direction="row" spacing={2}>
                <GreenBorderButton size="medium">Tengo un proyecto</GreenBorderButton>
                <ListButton>Nosotros</ListButton>
                <SimpleButton size="medium">Servicios</SimpleButton>
                <SimpleButton size="medium">Nuestro enfoque</SimpleButton>
                <SimpleButton size="medium">FAQ</SimpleButton>
                <CoreIconButton size="medium">
                    <FacebookIcon/>
                </CoreIconButton>
                <CoreIconButton size="medium">
                </CoreIconButton>
            </Stack>
        </div>
    )
}
