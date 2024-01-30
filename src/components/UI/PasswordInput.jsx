import React, { forwardRef, useState } from 'react'
import { IconButton, Input, TextField, styled } from '@mui/material'
import Open from '../../assets/icon/eye.svg'
import Close from '../../assets/icon/eyeOff.svg'

const PasswordInput = forwardRef((props, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <StyledPasswordInput
                placeholder="Пароль"
                label={props.label}
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                onBlur={props.onBlur}
                width={props.width}
                padding={props.padding}
                id={props.id}
                ref={ref}
                name={props.name}
                {...props}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <img src={Open} />
                                ) : (
                                    <img src={Close} />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                {...props}
            />
        </div>
    )
})

export default PasswordInput

const StyledPasswordInput = styled(TextField)(({ error }) => ({
    width: '100%',
    '& .MuiOutlinedInput-root': {
        width: '100%',
        heigth: '66px',
        borderRadius: '10px',
        marginBottom: '20px',
        backgroundColor: '#EDEDED',
        border: error ? '1px solid red' : '',
        color: error ? 'red' : '',
    },
    '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {},
}))

const InputAdornment = styled('div')(() => ({
    '::before': {
        borderBottom: 'none',
    },
}))
