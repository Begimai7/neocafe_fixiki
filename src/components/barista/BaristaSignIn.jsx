import React, { useState } from 'react'
import { styled } from '@mui/material'
import ArrowLeft from '../../assets/img/ArrowLeft.png'
import Button from '../UI/Button'
import Input from '../UI/Input'
import phone from '../../assets/img/phone.png'
const BaristaSignIn = () => {
    const [signIn, setSignIn] = useState(1)

    const getLoginHandlClick = () => {
        setSignIn(2)
    }

    const getCodingHandlClick = () => {
        setSignIn(3)
    }

    return (
        <div
            style={{
                background: `url(${phone})`,
                width: '100%',
                height: '100vh',
                position: 'relative',
            }}
        >
            <StyledMainBlock>
                <StyledContainerBlock>
                    <div>
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
                                margin: ' 10px 0 0 0 ',
                            }}
                        >
                            Шаг {signIn} из 3
                        </h2>
                        <p
                            style={{
                                color: 'white',
                                fontFamily: 'Nunito Sans',
                                margin: ' 8px 0 5px 0 ',
                            }}
                        >
                            Укажите номер телефона
                        </p>
                    </div>
                </StyledContainerBlock>
                {signIn === 1 && (
                    <StyledShagBoxBI>
                        <div>
                            <StyledShagHOneTitle>Вход</StyledShagHOneTitle>
                            <StyledShagPoragraf>
                                Введите номер телефона, на который придет код
                            </StyledShagPoragraf>
                        </div>
                        <StyledShagBoxses>
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
                        </StyledShagBoxses>
                    </StyledShagBoxBI>
                )}

                {signIn === 2 && (
                    <div>
                        <StyledBoxxBlock>
                            <div>
                                <StyledShagPfTwo>Вход</StyledShagPfTwo>
                                <StyledTextP>
                                    Код подтверждения был отправлен на номер
                                </StyledTextP>
                                <StyledTextPTwo>
                                    +996 (220)269 907
                                </StyledTextPTwo>
                            </div>
                            <StyledBox>
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
                            </StyledBox>
                        </StyledBoxxBlock>
                    </div>
                )}
                {signIn === 3 && (
                    <div>
                        <StyledContainerBlockOne>
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
                        </StyledContainerBlockOne>
                    </div>
                )}
            </StyledMainBlock>
        </div>
    )
}

export default BaristaSignIn
const StyledMainBlock = styled('div')(() => ({
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'white',
    width: '614px',
    height: '600px',
    borderRadius: '20px',
    left: '460px',
    top: '70px',
}))
const StyledContainerBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    background: '#FF8B5B',
    textAlign: 'center',
    width: '614px',
    height: '90px',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
})
const StyledShagHOneTitle = styled('h1')(() => ({
    Width: '172px',
    Height: '98px',
    fontFamily: 'Nunito Sans',
    fontSize: '72px',
    fontWeight: 700,
    margin: '20px 0 0 0 ',
    textAlign: 'center',
}))
const StyledShagPoragraf = styled('p')(() => ({
    width: '495px',
    height: '62',
    textAlign: 'center',
    fontFamily: 'Nunito Sans',
    fontSize: '24px',
    fontWeight: 700,
    alignItems: 'center',
    marginLeft: '60px',
}))
const StyledShagBoxses = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25px',
}))
const StyledShagBoxBI = styled('div')(() => ({
    bottom: '55px',
    display: 'flex',
    gap: '20px',
    flexDirection: 'column',
    marginTop: '50px',
}))
const StyledIconArrow = styled('div')(() => ({
    position: 'absolute',
    left: '25px',
    top: '25px',
}))
const StyledPtext = styled('p')(() => ({
    position: 'absolute',
    fontFamily: 'Nunito Sans',
    fontSize: '20px',
    fontWeight: 600,
    left: '160px',
}))
const StyledShagPfTwo = styled('p')(() => ({
    Width: '172px',
    Height: '98px',
    fontFamily: 'Nunito Sans',
    fontSize: '72px',
    fontWeight: 700,
    margin: '20px 0 0 0 ',
    textAlign: 'center',
}))
const StyledTextP = styled('p')(() => ({
    fontFamily: 'Nunito Sans',
    fontSize: '20px',
    fontWeight: 600,
    left: '160px',
}))
const StyledTextPTwo = styled('p')(() => ({
    fontFamily: 'Nunito Sans',
    fontSize: '20px',
    fontWeight: 600,
    borderBottom: '2px solid black',
    width: '180px',
    marginLeft: '125px',
}))
const StyledBoxxBlock = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '30px',
}))
const StyledBox = styled('div')(() => ({
    display: 'flex',
    gap: '15px',
    flexDirection: 'column',
    marginTop: '20px',
}))
const StyledContainerBlockOne = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '35px',
    marginTop: '75px',
})
