import * as React from 'react'
import { Box, styled } from '@mui/material'
import TextField from '@mui/material/TextField'

export default function Input({ width, padding, label }) {
    return (
        <DivStaylet
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <label>{label}</label>
            <InputStaylet width={width} padding={padding} />
        </DivStaylet>
    )
}
const DivStaylet = styled(Box)(() => ({
    ' .css-9ddj71-MuiInputBase-root-MuiOutLinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutLine':
        {
            borderColor: 'none',
        },
}))

const InputStaylet = styled(TextField)(({ width, padding }) => ({
    padding,
    background: ' #EDEDED',
    width: '700px',
    borderRadius: '10px',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
}))
