import React from 'react'
import AdminBG from '../../assets/img/adminBg.png'
import AdminExit from '../../assets/img/AdminExit.png'
import AdminIcon from '../../assets/icon/AdminIcon.svg'
import { Input, Button, Box, styled } from '@mui/material'

const AuthAdmin = () => {
    return (
        <AuthAdminStyled >
            <BoxStyled>
                <Title src={AdminExit} />
                <InputStyletLog
                    className="login"
                    placeholder="Логин"
                    type="text"
                />
                <RelativeBox>
                    <InputStyletPass
                        className="password"
                        type="password"
                        placeholder="Пароль"
                    />
                    <IconButton
                        src={AdminIcon}
                        alt=""
                        className="iconButtons"
                    />
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
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    borderBottom: 'none',
    margin: '0 auto',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    boxSizing:'border-box',
    flexDirection:'column'

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

const Title = styled('img')(() => ({
    fontFamily: 'Nunito',
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
  }))
  
const RelativeBox = styled('div')(()=>({
  position: 'relative'
}))
const InputStyletPass = styled(Input)(() => ({
  padding: '24px 16px 24px 16px',
    borderRadius: '10px',
    gap: '10px',
    width: '534px',
    backgroundColor: '#EDEDED',
    height: '75px',
    marginBottom: '20px',
    borderRadius: '10px',
    '::before': {
      borderBottom: 'none',
    },
    // '::after': {
    //     borderBottom: 'none ',
    // },
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
    marginBottom: '80px',
    borderRadius: '10px',
    animation: 'none',
}))
