import * as React from 'react'
import { Box, styled } from '@mui/material'
import TextField from '@mui/material/TextField'

export default function Input({
    width,
    padding,
    label,
    type,
    background,
    marginBottom,
    placeholder,
}) {
    return (
        <InputContainer width={width} marginBottom={marginBottom}>
            <Label width={width}>{label}</Label>
            <InputStayled
                width={width}
                placeholder={placeholder}
                padding={padding}
                type="text"
                background={background}
                placeholder={placeholder}
            />
        </InputContainer>
    )
}

const InputContainer = styled('div')(({ width, marginBottom }) => ({
    display: 'flex',
    flexDirection: 'column',
    width,
    gap: '8px',
    marginBottom,
}))
const Label = styled('label')(({ width, padding }) => ({
    color: '#C1C1C3',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '100%',
}))
const InputStayled = styled(TextField)(({ width, padding, background }) => ({
    borderRadius: '10px',
    backgroundColor: background,
    color: '#0000',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
}))
