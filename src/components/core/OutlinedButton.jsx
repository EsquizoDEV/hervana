import React from 'react'
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import colors from '../../utils/colorimetría'

const OutlinedButton = styled(Button)(({ theme }) => ({
    color: colors.limeGreen,
    borderColor: colors.limeGreen,
    backgroundColor: "transparent",
    '&:hover': {
        backgroundColor: "",
    }
}));

export const GreenBorderButton = (props) => {
    return (
        <div>
            <OutlinedButton variant="outlined" size={props.size}>{props.children}</OutlinedButton>            
        </div>
    )
}
