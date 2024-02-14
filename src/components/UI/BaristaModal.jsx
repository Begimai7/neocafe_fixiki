import React from 'react'
import styled from 'styled-components'
import cansel from '../../assets/icon/BaristaCanselIcon.svg'

export default function ModalIfication(props) {
    return (
        <LeftEndRightBlock position={props.position}>
            <Card
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
            >
                <Tema>
                    <GlobalTextStyled>{props.text}</GlobalTextStyled>
                    <CloseImg src={cansel} alt="" onClick={props.close} />
                </Tema>
                {props.children}
            </Card>
        </LeftEndRightBlock>
    )
}

const CloseImg = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`

const GlobalTextStyled = styled.span`
    color: white;
    font-size: 26px;
    padding-left: 30%;
    font-family: sans-serif;
`

const Tema = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

const LeftEndRightBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.position || 'end'};
    height: 100%;
    position: fixed;
    overflow: hidden;
`

const Card = styled.div`
    height: 100%;
    width: 495px;
    background-color: #023462;
    padding: 32px 36px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
