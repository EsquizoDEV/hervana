import React from 'react'
import {IconButton} from '@mui/material'
// import { Facebook } from '@mui/icons-material'

export const CoreIconButton = (props) => {
    // console.log(Facebook)
    console.log(props.children)
    return (
        <div>
            <IconButton variant="icon" size={props.size}>
                {props.children}
            </IconButton>
        </div>
    )
}
