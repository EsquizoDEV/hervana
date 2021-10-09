import React from 'react'
import {IconButton} from '@mui/material'
// import { Facebook } from '@mui/icons-material'

export const CoreIconButton = (props) => {
    return (
        <div className="hide-on-mobile">
            <IconButton variant="icon" size={props.size}>
                {props.children}
            </IconButton>
        </div>
    )
}
