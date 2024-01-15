import React from 'react'
import AdminBG from '../../assets/img/adminBg.png'
import { Input, Button, Box, styled } from '@mui/material'
import PasswordInput from '../UI/PasswordInput'

const AuthAdmin = () => {
    return (
        <AuthAdminStyled>
            <BoxStyled>
                <Title>Вход</Title>
                <InputStyletLog
                    className="login"
                    placeholder="Логин"
                    type="text"
                />
                <RelativeBox>
                    <PasswordInput />
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

const ImgStyled = styled('img')(() => ({
    position: 'relative',
}))

const BoxStyled = styled(Box)(() => ({
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    // marginTop:'800px',
    // position: 'absolute',
    // width: '614px',
    // height: '548px',
    // top: '176px',
    // left: '413px',
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

const InputStyletLog = styled(Input)(() => ({
    padding: '24px 16px 24px 16px',
    borderRadius: '10px',
    gap: '10px',
    width: '534px',
    height: '75px',
    marginBottom: '20px',
    background: '#EDEDED',
    borderBottom: 'none',
    '::before': {
        borderBottom: 'none',
    },
    '.css-11oaws3-MuiInputBase-root-MuiInput-root::after': {
        borderBottom: 'none',
    },
}))

const RelativeBox = styled('div')(() => ({
    position: 'relative',
}))

const IconButton = styled('img')(() => ({
    zIndex: '10',
    position: 'absolute',
    right: 22,
    top: 25,
    width: '22px',
    height: '22px',
    flexShrink: '0',
}))

const ButtonStylet = styled('button')(() => ({
    padding: '24px 16px 24px 16px',
    borderRadius: '10px',
    gap: '10px',
    width: '534px',
    color: '#FEFEFE',
    backgroundColor: '#00315D',
    height: '75px',
    marginBottom: '50px',
    borderRadius: '10px',
    animation: 'none',
}))
