import * as React from 'react'
import { Box, styled } from '@mui/material'
import TextField from '@mui/material/TextField'

export default function Input({ width, padding, label, type, height, background, placeholder, borderRadius,}) {
    return (
        <InputContainer width={width}>
            <Label width={width}>{label}</Label>
            <InputStayled
                height={height}
                width={width}
                borderRadius={borderRadius}
                padding={padding}
                type='text'
                background={background}
                placeholder={placeholder}
            />
        </InputContainer>
    )
}

const InputContainer = styled('div')(({ width }) => ({
    display: 'flex',
    flexDirection: 'column',
    width,
}))
const Label = styled('label')(({ width, padding }) => ({
    color: '#C1C1C3',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '100%',

}))
const InputStayled = styled(TextField)(({ width, padding, background,height, borderRadius}) => ({
    borderRadius: borderRadius,
    backgroundColor: background,

    color: '#0000',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',        
    },

    '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
        height: '36px'
    }

}))