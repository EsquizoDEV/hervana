import React from 'react'
import {Button} from '@mui/material'
import {ReactComponent as HervanaIcon} from '../../assets/svg/HERVANA LOGO.svg'

export const LogoButton = (props) => {
    return (
        <div>
            <Button variant="outlined" ><HervanaIcon/></Button>
        </div>
    )
}
