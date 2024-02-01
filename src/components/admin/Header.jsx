import React, { useState } from 'react'
import bellSimple from '../../assets/icon/BellSimple.svg'
import styled from 'styled-components'
import Input from '../UI/Input'
import Button from '../UI/Button'

function Header() {
    const { pathname } = window.location

    // let title = ''

    // if(pathname === '/menu'){
    //    return title = 'Меню'
    // }
    // if(pathname === '/sklad'){
    //     return title = 'Склад'
    // }
    // if(pathname === '/filial'){
    //     return title = 'Филиалы'
    // }
    // if(pathname === '/sotrudniki'){
    //    title = 'Сотрудники'
    // }

    return (
        <header style={{ height: '140px' }}>
            <HeaderText>
                <HeaderTitle>Меню</HeaderTitle>
                <BellSimpleButton>
                    <img src={bellSimple} alt="img" />
                </BellSimpleButton>
            </HeaderText>
            <SearchDivStyle>
                <Input
                    background="#E7E7E7"
                    borderRadius="6px"
                    padding="0px"
                    placeholder="Поиск"
                    width="80%"
                    height="40px"
                    type="text"
                />
                <Button padding="10px 47px">Создать</Button>
            </SearchDivStyle>
        </header>
    )
}

export default Header

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
