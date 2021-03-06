import React from 'react'
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import colors from '../../utils/colorimetría'

const OutlinedButton = styled(Button)(({ theme }) => ({
    color: colors.black,
    backgroundColor: colors.limeGreen,
    fontSize:"15px",
    fontWeight:"bold",
    '&:hover': {
        backgroundColor: colors.white,
    }
}));

export const GreenBorderButton = (props) => {
    return (
        <div>
            <OutlinedButton onClick={props.onClick} sx={{borderRadius:"30px",  fontSize:"2vh"}} variant="filled" size={props.size}>{props.children}</OutlinedButton>            
        </div>
    )
}
