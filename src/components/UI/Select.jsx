import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Select as MuiSelect, styled } from '@mui/material'
import { SelectData } from '../../utils/constants.js'

export default function Select({ SelectData, labelText, width, marginBottom }) {
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    return (
        <StyledFormControl width={width} marginBottom={marginBottom}>
            <Label>{labelText}</Label>
            {/* <InputLabel id="demo-select-small-label">Select Category</InputLabel> */}
            <MuiSelect
                id="demo-select-small"
                value={selectedCategory}
                onChange={handleChange}
            >
                {SelectData.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                        {category.name}
                    </MenuItem>
                ))}
            </MuiSelect>
        </StyledFormControl>
    )
}

const Label = styled('label')(() => ({
    fontFamily: 'Nunito Sans',
    marginBottom:'8px',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left',
    width: '78px',
    height: '16px',
    color: '#C1C1C3',

}))

const StyledFormControl = styled(FormControl)(({ width, marginBottom }) => ({
  marginBottom: marginBottom,
    '& .MuiInput-root, & .MuiInputLabel-root, & .MuiSelect-root, & .MuiOutlinedInput-root':
        {
            minWidth: width,
            marginBottom: marginBottom,
          },
          '.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            borderColor: 'transparent',
            borderRadius: '10px',
            border: '1px solid #CDD3DD',
        },
    '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
        '.css-14lo706>span ': {
            display: 'none',
        },
    },
}))
