import * as React from 'react'
import { Box, styled } from '@mui/material'
import TextField from '@mui/material/TextField'


export default function Input({
    width,
    height,
    padding,
    label,
    type,
    background,
    borderRadius,
    marginBottom,
    placeholder,
    textAlign,
}) {
    return (
        <InputContainer width={width} marginBottom={marginBottom}>
            <Label width={width} textAlign={textAlign}>
                {label}
            </Label>
            <InputStayled
                height={height}
                width={width}
                borderRadius={borderRadius}
                placeholder={placeholder}
                padding={padding}
                type={type}
                background={background}
            />
        </InputContainer>
    )
}

const InputContainer = styled('div')(({ width, marginBottom }) => ({
    display: 'flex',
    flexDirection: 'column',
    width,
    marginBottom,
    '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root ': {
        borderRadius: '10px',
    },
}))
const Label = styled('label')(({ textAlign }) => ({
    color: '#C1C1C3',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '100%',
    textAlign,
}))
const InputStayled = styled(TextField)(({ background, padding,  }) => ({
    borderRadius,
    backgroundColor: background,
    color: '#0000',
    // padding,
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
    '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
        padding: padding,
        height: height,
    },
}))
