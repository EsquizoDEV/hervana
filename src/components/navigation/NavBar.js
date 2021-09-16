import React from 'react';
import Stack from '@mui/material/Stack';
import { SimpleTextButton } from '../core/SimpleTextButton';
import {ListButton}  from '../core/ListButton';

export const NavBar = () => {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <SimpleTextButton size="medium">Tengo un proyecto</SimpleTextButton>
                <ListButton>Nosotros</ListButton>
                {/* Boton que despliega lista */}
                <SimpleTextButton size="medium">Nuestro enfoque</SimpleTextButton>
            </Stack>
        </div>
    )
}
