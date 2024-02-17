import React from 'react'
import bellSimple from '../../assets/icon/BellSimple.svg'
import styled from 'styled-components'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { useLocation } from 'react-router-dom'

function Navbar({ openChangeHandler }) {
    const { pathname } = useLocation()
    const navTitle = pathname.split('/')[2]

    let title = ''

    if (navTitle === 'menu') {
        title = 'Меню'
    }
    if (navTitle === 'sklad') {
        title = 'Склад'
    }
    if (navTitle === 'branches') {
        title = 'Филиалы'
    }
    if (navTitle === 'emplyees') {
        title = 'Сотрудники'
    }

    return (
        <header style={{ height: '140px', marginBottom: '60px' }}>
            <HeaderText>
                <HeaderTitle>{title}</HeaderTitle>
                <BellSimpleButton>
                    <img src={bellSimple} alt="img" />
                </BellSimpleButton>
            </HeaderText>
            <SearchDivStyle>
                <Input
                    background="#E7E7E7"
                    borderRadius="6px"
                    placeholder="Поиск"
                    width="86%"
                    type="search"
                />
                <Button
                    padding="10px 47px"
                    onClick={openChangeHandler}
                >
                    Создать
                </Button>
            </SearchDivStyle>
        </header>
    )
}

export default Navbar

const BellSimpleButton = styled.div`
    padding: 10px;
    border-radius: 50%;
    background-color: #00315d;
    display: flex;
    align-items: center;
`
const SearchDivStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 26px 0px 22px;
`
const HeaderText = styled.div`
    display: flex;
    flex-direction: row;
    height: 74px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 26px 0px 22px;
`

const HeaderTitle = styled.h2`
    color: var(--black, #171717);
    font-family: 'Nunito Sans';
    font-size: 48px;
    font-style: normal;
    line-height: 120%;
    font-weight: 600;
`
