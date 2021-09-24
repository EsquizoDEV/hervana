import React from 'react';
import Stack from '@mui/material/Stack';
import { GreenBorderButton } from '../core/OutlinedButton';
import {ListButton}  from '../core/ListButton';
import {CoreIconButton} from '../core/IconButton';
import { SimpleButton } from '../core/SimpleButton';
import {FacebookIcon} from '../core/svg/Facebook';

export const NavBar = () => {
    return (
        <div>
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
