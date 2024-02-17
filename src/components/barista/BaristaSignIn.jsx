import React, { useState } from 'react'
import { styled } from '@mui/material'
import ArrowLeft from '../../assets/img/ArrowLeft.png'
import Button from '../UI/Button'
import Input from '../UI/Input'
const BaristaSignIn = () => {
    const [signIn, setSignIn] = useState(1)

    const getLoginHandlClick = () => {
        setSignIn(2)
    }

    const getCodingHandlClick = () => {
        setSignIn(3)
    }
    return (
        <StyledContainerBlock>
            <StyledContainerDiv>
                <StyledContainerBlockOne>
                    <StyledIconArrow>
                        <img
                            onClick={() =>
                                setSignIn(signIn > 1 ? signIn - 1 : 1)
                            }
                            src={ArrowLeft}
                            alt=""
                        />
                    </StyledIconArrow>
                    <h2
                        style={{
                            color: 'white',
                            fontFamily: 'Nunito Sans',
                            margin: '13px 0 0 0 ',
                        }}
                    >
                        Шаг {signIn} из 3
                    </h2>
                    <p style={{ fontFamily: 'Nunito Sans' }}>
                        Укажите номер телефона
                    </p>
                </StyledContainerBlockOne>
                {signIn === 1 && (
                    <div>
                        <StyledTextBlock>
                            <StyledHOneTitle>Вход</StyledHOneTitle>
                            <StyledPoragraf>
                                Введите номер телефона, на который придет код
                            </StyledPoragraf>
                        </StyledTextBlock>
                        <StyledBox>
                            <Input
                                width={'534px'}
                                height={'70px'}
                                label={'Номер телефона'}
                                placeholder={'(220) 269 907'}
                                textAlign={'center'}
                                padding={'0 50px 0 195px'}
                            />
                            <Button
                                onClick={getLoginHandlClick}
                                width={'534px'}
                                background={'#FFC1A8'}
                                height={'70px'}
                            >
                                Получить код
                            </Button>
                        </StyledBox>
                    </div>
                )}

                {signIn === 2 && (
                    <div>
                        <StyledShagBoxses>
                            <div>
                                <StyledShagHOneTitle>Вход</StyledShagHOneTitle>
                                <StyledShagPoragraf>
                                    Код подтверждения был отправлен на номер
                                </StyledShagPoragraf>
                                <StyledShagPoragrafTwo>
                                    +996 (220)269 907
                                </StyledShagPoragrafTwo>
                            </div>
                            <StyledShagBoxBI>
                                <Input
                                    width={'534px'}
                                    height={'70px'}
                                    label={'Код из СМС'}
                                    placeholder={' 0  0  0  0'}
                                    textAlign={'center'}
                                    padding={'0 0 0 210px'}
                                />
                                <Button
                                    onClick={getCodingHandlClick}
                                    width={'534px'}
                                    background={'#FFC1A8'}
                                    height={'70px'}
                                >
                                    Войти
                                </Button>
                                <div style={{ position: 'relative' }}>
                                    <StyledPtext>
                                        Отправить повторно
                                    </StyledPtext>
                                </div>
                            </StyledShagBoxBI>
                        </StyledShagBoxses>
                    </div>
                )}
                {signIn === 3 && (
                    <div>
                        <StyledShagThreeBox>
                            <Input
                                label={'Имя'}
                                width={'534px'}
                                height={'70px'}
                                textAlign={'center'}
                                placeholder={'Как вас зовут?'}
                                padding={'0 0 0 190px'}
                                background={'#EDEDED'}
                            />
                            <Input
                                label={'Фамилия'}
                                width={'534px'}
                                height={'70px'}
                                textAlign={'center'}
                                placeholder={'Ваша фамилия?'}
                                background={'#EDEDED'}
                                padding={'0 0 0 190px'}
                            />
                            <Input
                                label={'Дата рождения'}
                                width={'534px'}
                                height={'70px'}
                                textAlign={'center'}
                                placeholder={'10.24.2004'}
                                background={'#EDEDED'}
                                padding={'0 0 0 190px'}
                            />

                            <Button
                                width={'534px'}
                                height={'70px'}
                                background={'#FFC1A8'}
                            >
                                Войти
                            </Button>
                        </StyledShagThreeBox>
                    </div>
                )}
            </StyledContainerDiv>
        </StyledContainerBlock>
    )
}

export default BaristaSignIn
const StyledContainerDiv = styled('div')(() => ({
    width: '614px',
    height: '628px',
    borderRadius: '20px',
    background: 'white',
}))
const StyledContainerBlock = styled('div')({
    background: 'black',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
})
const StyledContainerBlockOne = styled('div')({
    background: '#FF8B5B',
    width: '614px',
    height: '90px',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '-10px',
    display: 'flex',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    p: {
        color: 'white',
        fontFamily: 'Nunito Sans',
        fontWeigt: 700,
        margin: '10px 0',
    },
})
const StyledTextBlock = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
}))
const StyledBox = styled('div')(() => ({
    position: 'absolute  ',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    bottom: '120px',
    left: '500px',
}))
const StyledHOneTitle = styled('h1')(() => ({
    Width: '172px',
    Height: '98px',
    fontFamily: 'Nunito Sans',
    fontSize: '72px',
    fontWeight: 700,
    lineHeight: '98px',
    margin: '20px 0',
}))
const StyledPoragraf = styled('p')(() => ({
    width: '431px',
    height: '62',
    textAlign: 'center',
    fontFamily: 'Nunito Sans',
    fontSize: '24px',
    margin: '0 0 0 30px',
    fontWeight: 700,
}))
const StyledShagHOneTitle = styled('h1')(() => ({
    Width: '172px',
    Height: '98px',
    fontFamily: 'Nunito Sans',
    fontSize: '72px',
    fontWeight: 700,
    margin: '20px 0',
    textAlign: 'center',
}))
const StyledShagPoragraf = styled('p')(() => ({
    width: '650px',
    height: '62',
    textAlign: 'center',
    fontFamily: 'Nunito Sans',
    fontSize: '24px',
    fontWeight: 700,
}))
const StyledShagBoxses = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
}))
const StyledShagBoxBI = styled('div')(() => ({
    position: 'absolute',
    bottom: '125px',
    display: 'flex',
    gap: '20px',
    flexDirection: 'column',
}))
const StyledShagPoragrafTwo = styled('p')(() => ({
    fontFamily: 'Nunito Sans',
    position: 'absolute',
    bottom: '320px',
    left: '638px',
    fontSize: '24px',
    fontWeight: 700,
}))
const StyledShagThreeBox = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '35px',
    marginTop: '50px',
}))
const StyledIconArrow = styled('div')(() => ({
    position: 'absolute',
    left: '480px',
    top: '80px',
}))
const StyledPtext = styled('p')(() => ({
    position: 'absolute',
    fontFamily: 'Nunito Sans',
    fontSize: '20px',
    fontWeight: 600,
    left: '160px',
}))
