import React, { useState } from 'react'
import Modal from './Modal'
import { IconButton, styled } from '@mui/material'
import IconX from '../../assets/icon/XXL.svg'
import IconMin from '../../assets/icon/X.svg'

const dataN = [
    {
        id: 1,
        data: '10:00',
        product: 'cnjdkbfk',
        filial: 'negfuk',
    },
]

const Notifications = () => {
    const [openClose, setOpenClose] = useState(false)
    const handlOpenModal = () => {
        setOpenClose(!openClose)
    }

    return (
        <div>
            <button onClick={handlOpenModal}>create</button>
            <Modal
                borderRadius={'30px'}
                open={openClose}
                handleClose={handlOpenModal}
                background={'#00315D'}
                width={'27%'}
            >
                <StyledDivBlock>
                    <StyledHthreeText>Уведомления</StyledHthreeText>
                    <IconButton onClick={handlOpenModal}>
                        <img src={IconX} alt="" />
                    </IconButton>
                </StyledDivBlock>
                <StyledDiVBorder></StyledDiVBorder>
                <StyledTextHthree>Очистить все</StyledTextHthree>
                <div>
                    <StyledCartDiv>
                        {/* <StyledMainBlock> */}
                        {dataN.map((el) => (
                            <div>
                                <StyledMainBlock>
                                    <h4 style={{ margin: '10px 0' }}>
                                        {el.data}
                                        <span></span>
                                        {el.time}
                                    </h4>
                                    <IconButton>
                                        <img
                                            style={{
                                                width: '19px',
                                                height: '19px',
                                            }}
                                            src={IconMin}
                                            alt=""
                                        />
                                    </IconButton>
                                </StyledMainBlock>
                                <StyledTitle>
                                    Заканчивается продукт:{' '}
                                    <StyledPtext>{el.product}</StyledPtext>
                                </StyledTitle>
                                <StyledTitle>
                                    Филиал:
                                    <StyledPtext> {el.product}</StyledPtext>
                                </StyledTitle>
                            </div>
                        ))}
                    </StyledCartDiv>
                </div>
            </Modal>
        </div>
    )
}

export default Notifications

const StyledDivBlock = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'end',
}))
const StyledHthreeText = styled('h3')(() => ({
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Nunito sans',
    fontWeight: 600,
    marginRight: '110px',
}))
const StyledDiVBorder = styled('div')(() => ({
    borderBottom: '2px solid white',
    width: '408px',
    height: '2px',
}))
const StyledCartDiv = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    background: 'white',
    padding: '2px 10px',
    borderRadius: '6px',
}))
const StyledTextHthree = styled('h3')(() => ({
    marginLeft: '305px',
    color: 'white',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontWeight: 600,
    borderBottom: '1px solid white',
    width: '102px',
}))
const StyledMainBlock = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Nunito Sans',
}))
const StyledTitle = styled('h3')(() => ({
    color: ' #171717',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontWeight: 400,
    margin: '0 0',
    display: 'flex',
    alignItems: 'center',
}))

const StyledPtext = styled('p')(() => ({
    color: '#00315D',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontWeight: 700,
}))
