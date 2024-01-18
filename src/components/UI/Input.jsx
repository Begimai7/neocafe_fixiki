import * as React from 'react'
import { Box, styled } from '@mui/material'
import TextField from '@mui/material/TextField'

export default function Input({ width, padding, label }) {
    return (
        <div>
            <Label>{label}</Label>
            <InputStayled width={width} padding={padding} />
        </div>
    )
}

const Label = styled('label')(({ width, padding }) => ({
  color: '#C1C1C3',
  fontFamily: 'Nunito Sans',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '100%',
}))
const InputStayled = styled(TextField)(({ width, padding }) => ({
    borderRadius: '10px',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
    '.css-1d3z3hw-MuiOutlinedInput-notchedOutline ': {
        width: width,
        background: ' #EDEDED',
    },
}))
