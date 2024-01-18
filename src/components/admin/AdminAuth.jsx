import React from 'react'
import AdminBG from '../../assets/img/adminBg.png'
import { styled, TextField } from '@mui/material'
import PasswordInput from '../UI/passwordInput'

const AuthAdmin = () => {
    return (
        <AuthAdminStyled>
            <BoxStyled>
                <Title>Вход</Title>
                <RelativeBox>
                    <InputStyletLog placeholder="Логин" type="text" />
                    <PasswordInput padding="20px 0" />
                </RelativeBox>

                <ButtonStylet className="clik">Войти</ButtonStylet>
            </BoxStyled>
        </AuthAdminStyled>
    )
}

export default AuthAdmin

const AuthAdminStyled = styled('div')(() => ({
    Input: {
        textAlign: 'center',
        lineHeight: '2em',
        color: 'C1C1C3',
    },
    backgroundImage: `url(${AdminBG}) `,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    borderBottom: 'none',
    margin: '0 auto',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    flexDirection: 'column',

    '.css-11oaws3-MuiInputBase-root-MuiInput-root::after': {
        borderBottom: 'none',
    },
}))

const BoxStyled = styled('form')(() => ({
    display: 'flex',
    margin: '0 auto',
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '20px',
    backgroundColor: '#FEFEFE',
}))

const Title = styled('h1')(() => ({
    fontFamily: 'Nunito Sans',
    fontSize: '72px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    marginBottom: '45px',
}))

const InputStyletLog = styled(TextField)(() => ({
    borderRadius: '10px',
    gap: '10px',
    width: '100%',
    outline: 'none',
    marginBottom: '20px',
    border: 'none',
    outline: 'none',
    background: '#EDEDED',
    borderBottom: 'none',
    '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root ': {
        borderRadius: '10px',
    },
    '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '17px 0',
    },
}))

const RelativeBox = styled('div')(() => ({
    width: '100%',
}))

const ButtonStylet = styled('button')(() => ({
    padding: '20px 0',
    border: 'none',
    borderRadius: '10px',
    gap: '10px',
    width: '100%',
    color: '#FEFEFE',
    backgroundColor: '#00315D',
    marginBottom: '50px',
    borderRadius: '10px',
    animation: 'none',

    ':hover': {
        background: '',
    },
}))
