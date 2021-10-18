import React from 'react'
import { Button } from '@mui/material'
import {styled} from '@mui/material/styles'
import colors from '../../utils/colorimetría'


const StyledTextButton = styled(Button)(() => ({
    color:colors.white
}))

export const SimpleButton = (props) => {
    return (
        <div>
            <StyledTextButton 
            type={props.type} 
            sx={props.sx} 
            variant={props.variant} 
            onClick={props.onClick} 
            size={props.size}
            >
                {props.children}
                
            </StyledTextButton>
            
        </div>
    )
}
