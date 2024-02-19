import Modal from '../UI/Modal'
import React from 'react'
import Coffee from '../../assets/img/barista/Capuchino.svg'
import cancelIcon from '../../assets/icon/cancel.svg'
import styled from 'styled-components'
import Button from '../UI/Button'

export const BaristaModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            handleClose={handleClose}
            backgroundColor="#FEFEFE"
            borderRadius="30px"
        >
            <Continer>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'end',
                    }}
                >
                    <TextStyled>Капучино</TextStyled>
                    <button
                        onClick={handleClose}
                        style={{
                            backgroundColor: '#FEFEFE',
                            borderColor: '#FEFEFE',
                            borderBottom: '#FEFEFE',
                            borderRight: '#FEFEFE',
                        }}
                    >
                        <img src={cancelIcon} alt="" />
                    </button>
                </div>
                <BodyStyled>
                    <div style={{ width: '465px', padding: '0px' }}>
                        <img src={Coffee} alt="" />
                    </div>
                    <div>
                        <Text>
                            Капучи́но — кофейный напиток итальянской кухни на
                            основе эспрессо с добавлением в него подогретого
                            вспененного молока.
                        </Text>
                    </div>
                </BodyStyled>
                <div>
                    <h3>Основные ингредиенты:</h3>
                    <ul>
                        <List1>кофе (эспрессо) – 60 мл;</List1>
                        <List2>молоко – 60 мл;</List2>
                        <List3>сахар – по вкусу.</List3>
                    </ul>
                </div>
                <div>
                    <Button
                        marginTop="18px"
                        padding="22px"
                        width="455px"
                        backgroundColor="#FF8B5B"
                        justifyContent="center"
                    >
                        Добавить
                    </Button>
                </div>
            </Continer>
        </Modal>
    )
}

const Continer = styled('div')({
    width: '450px',
    height: '400px',
    top: '148px',
    left: '355px',
    borderRadius: '30px',
})

const TextStyled = styled('h1')({
    fontFamily: 'Nunito Sans',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '33px',
    letterSpacing: '0em',
    textAlign: 'left',
    marginTop: '-15px',
})

const BodyStyled = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'end',
})
const Text = styled('p')({
    fontFamily: 'Nunito Sans',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '23px',
    letterSpacing: '0em',
    textAlign: 'left',
})
const List1 = styled('li')({
    fontFamily: 'Nunito Sans',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '23px',
})
const List2 = styled('li')({
    fontFamily: 'Nunito Sans',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '23px',
})
const List3 = styled('li')({
    fontFamily: 'Nunito Sans',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '23px',
})
