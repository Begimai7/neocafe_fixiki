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
                placeholder='Пароль'
                label={props.label}
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                onBlur={props.onBlur}
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
    '& .MuiOutlinedInput-root': {
        width: '534px',
        height: '70px',
        borderRadius: '10px',
        marginBottom: '20px',
        backgroundColor: '#EDEDED',
        border: error ? '1px solid red' : '',
        color: error ? 'red' : '',
        '&:hover fieldset': {
            borderColor: error ? 'red' : '#6200EE',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6200EE',
        },
        '::before': {
            borderColor: 'none',
        },
        '::after': {
            borderColor: 'none',
        },
    },
}))

const InputAdornment = styled('div')(() => ({
    // padding: '24px 16px 24px 16px',
    // borderRadius: '10px',
    // gap: '10px',
    // width: '534px',
    // backgroundColor: '#EDEDED',
    // height: '75px',
    // marginBottom: '20px',
    // borderRadius: '10px',
    // '::before': {
    //     borderBottom: 'none',
    // },
}))
