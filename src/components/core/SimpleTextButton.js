import React from 'react'
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';

const TextButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#5F008B",
    '&:hover': {
        backgroundColor: "",
        color:"black"
    }
}));

//botoon de texto sencillo utilizado en barras de navegación o lugares de poco énfasis
export const SimpleTextButton = (props) => {
    return (
        <div>
            <TextButton variant="text" size={props.size}>{props.children}</TextButton>            
        </div>
    )
}
