import React from 'react';
import Stack from '@mui/material/Stack';
import { GreenBorderButton } from '../core/OutlinedButton';
import {ListButton}  from '../core/ListButton';
import {CoreIconButton} from '../core/IconButton';
import { SimpleButton } from '../core/SimpleButton';
import './index.css'
import {ReactComponent as FacebookIcon} from '../../assets/svg/FACEBOOK.svg';
import history from "../../history"
import HervanaLogo from "../../assets/svg/HERVANA LOGO.svg";


export const NavBar = () => {
    return (
        <div id="nav_container">
            <Stack direction="row" spacing={2}>
                <a onClick={() => history.push("/")}>
                <img src={HervanaLogo} style={{
                    width: '50%',
                }} alt="HervanaLogo" />
                </a>
                <GreenBorderButton size="medium">Tengo un proyecto</GreenBorderButton>
                <ListButton>Nosotros</ListButton>
                <SimpleButton size="medium" onClick={() => history.push("/services")} >Servicios</SimpleButton>
                <SimpleButton size="medium" onClick={() => history.push("/ourfocus")} >Nuestro enfoque</SimpleButton>
                <SimpleButton size="medium" onClick={() => history.push("/faq")} >FAQ</SimpleButton>
                <CoreIconButton size="medium">
                    <FacebookIcon/>
                </CoreIconButton>
                <CoreIconButton size="medium">
                </CoreIconButton>
            </Stack>
        </div>
    )
}
