import React from 'react'
import ModalIfication from '../UI/BaristaModal'
import { notifacation } from '../../utils/constants'
import styled from 'styled-components'

export default function Notifications(props) {
  return (
    <ModalIfication text='Уведомления' close={props.closeModal} position='start '>
      <NotiBlock>
      {notifacation.map((el) => (
            <Noti key={el.id}>
                <GlobalDivStyled>
                    <GlobalTextStyled>{el.where}</GlobalTextStyled>
                    <GlobalTextStyled>{el.time}</GlobalTextStyled>
                </GlobalDivStyled>
                <div>
                    <CodeTextStyled>{el.code}</CodeTextStyled>
                    <CodeTextStyled>{el.for}</CodeTextStyled>
                </div>
                <div>
                    <CodeTextStyled>{el.products}</CodeTextStyled>
                </div>
          </Noti>

            ))}
        </NotiBlock>
    </ModalIfication>
  )
}

const GlobalDivStyled = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`
const CodeTextStyled = styled.span`
    font-size: 18px;
    color: white;
    font-weight: 100;
`
const GlobalTextStyled = styled.span`
    font-size: 20px;
    color: white;
    font-weight: bold;
`
const NotiBlock = styled.div`
            width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    height: 412px;
    margin-top: 20px;

`

const Noti = styled.div`
    width: 100%;
    display: flex;
    height: 104px;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 0px;
    border-bottom: 2px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`