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
}) {
    return (
        <InputContainer width={width} marginBottom={marginBottom}>
            <Label width={width}>{label}</Label>
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
}))
const Label = styled('label')(() => ({
    color: '#C1C1C3',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '100%',

}))
const InputStayled = styled(TextField)(({ background, borderRadius, height}) => ({
    borderRadius,
    backgroundColor: background,

    color: '#0000',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',        
    },

    '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
        height: height
    }

}))
