import React, { useState } from 'react'
import ModalIfication from '../UI/BaristaModal'
import { notificationProdacts } from '../../utils/constants'
import styled from 'styled-components'
import Button from '../UI/Button'
import minus from '../../assets/icon/minus.svg'
import plus from '../../assets/icon/plus.svg'

export default function NotIficationCardTakeOut(props) {

    const [counts, setCounts] = useState(notificationProdacts.map(() => 0))

    


    const increment = (index) => {
        const newCounts = [...counts]
        newCounts[index] += 1
        setCounts(newCounts)
    }

    const decrement = (index) => {
        if (counts[index] > 0) {
            const newCounts = [...counts]
            newCounts[index] -= 1
            setCounts(newCounts)
        }
    }

    const getTotalPrice = () => {
        let totalPrice = 0
        notificationProdacts.forEach((el, index) => {
            totalPrice += el.price * counts[index]
        })
        return totalPrice
    }

    return (
        <ModalIfication text="Заказ в заведении" close={props.closeModal}>
            <ProdactBock>
                {notificationProdacts.map((el, index) => (
                    <GlobalBock key={el.id}>
                        <ProductContainer>
                            <ProductImgStyled
                                onClick={() => handleObjectClick(index)}
                                src={el.src}
                                alt="product"
                            />
                            <CommetBlock>
                                <ProductName>{el.name}</ProductName>
                                <ProductCommit>{el.commet}</ProductCommit>
                            </CommetBlock>
                            <CountBlock>
                                <PriceStyled>
                                    {el.price * counts[index]} с
                                </PriceStyled>
                                <CounterBlock>
                                    <MinusButtonstyled
                                        onClick={() => decrement(index)}
                                    >
                                        <img src={minus} alt="rytugi" />
                                    </MinusButtonstyled>
                                    <CountStyled>{counts[index]}</CountStyled>
                                    <PlustButtonstyled
                                        onClick={() => increment(index)}
                                    >
                                        <img src={plus} alt="yubniom" />
                                    </PlustButtonstyled>
                                </CounterBlock>
                            </CountBlock>
                        </ProductContainer>
                    </GlobalBock>
                ))}
            </ProdactBock>
            <TotalPriceBlock>
                <TotalPriceText>Итого</TotalPriceText>
                <TotalPriceText>{getTotalPrice()} с</TotalPriceText>
            </TotalPriceBlock>
            <AddButtonBlock>
                    
                <Button padding="19px 198px" color="white" background="#FF8B5B" >
                    Закрыть счет
                </Button>
            </AddButtonBlock>
        </ModalIfication>
    )
}

const DeleteButton = styled.button`
    width: 800px;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
`

const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 0px;
    border-bottom: 2px solid white;
 `

const TotalPriceBlock = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TotalPriceText = styled.span`
    color: white;
    font-size: 20px;
    font-weight: bold;
`

// Остальные стили остаются неизменными

const AddButtonBlock = styled.div`
    margin-top: 20px;
`
const CountBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: end;
    padding: 28px 0 0 0;
`
const PriceStyled = styled.span`
    color: #ff8b5b;
    font-size: 20px;
    font-weight: bold;
`
const ProductName = styled.h2`
    color: white;
    font-size: 20px;
    font-weight: bold;
`
const ProductCommit = styled.span`
    color: white;
    font-size: 18px;
    font-weight: 400;
`
const ProductImgStyled = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 24px;
`

const CommetBlock = styled.div`
    color: white;
    width: 230px;
`
const ProdactBock = styled.div`
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    height: 500px;
    margin-top: 20px;
    
`
const GlobalBock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 0px;
`

const CounterBlock = styled.div`
    width: 118px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MinusButtonstyled = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #8f8f8f;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`
const PlustButtonstyled = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #ff8b5b;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`
const CountStyled = styled.span`
    color: white;
    font-size: 18px;
`
