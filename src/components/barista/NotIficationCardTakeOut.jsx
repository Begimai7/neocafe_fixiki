import React, { useState } from 'react'
import ModalIfication from '../UI/BaristaModal'
import { notificationProdacts } from '../../utils/constants'
import styled from 'styled-components'
import Button from '../UI/Button'
import minus from '../../assets/icon/minus.svg'
import plus from '../../assets/icon/plus.svg'
import dalete from '../../assets/icon/daleteIcon.svg'

export default function NotificationCard(props) {
    const [selectedItemId, setSelectedItemId] = useState(null)
    const [counts, setCounts] = useState(notificationProdacts.map(() => 0))
    const [deleteBtns, setDeleteBtns] = useState(
        notificationProdacts.map(() => false),
    )

    // useEffect(() => {
    //     Aos.init();
    // }, []);
    const handleObjectClick = (index) => {
        const newDeleteBtns = [...deleteBtns]
        newDeleteBtns[index] = !newDeleteBtns[index]
        setDeleteBtns(newDeleteBtns)
        // A.refresh(); // Обновление анимаций
    }

    const handleDeleteButtonClick = (index) => {
        console.log(`Product at index ${index} deleted`)
    }

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

    const changeStyle = (id) => {
        if (selectedItemId === id) {
            setSelectedItemId(null)
        } else {
            setSelectedItemId(id)
        }

        console.log(selectedItemId, 'selcted')
    }

    return (
        <ModalIfication text="Заказ на вынос" close={props.closeModal}>
            <ProdactBock>
                {notificationProdacts.map((el, index) => (
                    <ProductBlockDiv>
                        <GlobalBlock
                            style={{
                                transform:
                                    selectedItemId === el.id
                                        ? 'translateX(-160px)'
                                        : 'none',
                                transitionDuration: '500',
                                position: 'relative',
                            }}
                            key={el.id}
                        >
                            <ProductContainer
                                onClick={() => handleObjectClick(index)}
                            >
                                <ProductImgStyled src={el.src} alt="product" />

                                <CommetBlock onClick={() => changeStyle(el.id)}>
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
                                        <CountStyled>
                                            {counts[index]}
                                        </CountStyled>
                                        <PlustButtonstyled
                                            onClick={() => increment(index)}
                                        >
                                            <img src={plus} alt="yubniom" />
                                        </PlustButtonstyled>
                                    </CounterBlock>
                                </CountBlock>
                            </ProductContainer>
                            <DeleteButton
                                style={{
                                    transform: 'none',
                                    transition: 'transform 500ms',
                                    position: 'absolute',
                                    right: '-160px',
                                }}
                                onClick={() => handleDeleteButtonClick(index)}
                            >
                                <img src={dalete} alt="" />
                            </DeleteButton>
                        </GlobalBlock>
                    </ProductBlockDiv>
                ))}
            </ProdactBock>
            <AddButtonBlock>
                <Button
                    padding="19px 210px"
                    color="#FF8B5B"
                    border="1px solid #FF8B5B"
                >
                    Добавить
                </Button>
            </AddButtonBlock>
            <TotalPriceBlock>
                <TotalPriceText>Итого</TotalPriceText>
                <TotalPriceText>{getTotalPrice()} с</TotalPriceText>
            </TotalPriceBlock>
            <AddButtonBlock>
                <Button padding="19px 198px" color="white" background="#FF8B5B">
                    Закрыть счет
                </Button>
            </AddButtonBlock>
        </ModalIfication>
    )
}

const ProductBlockDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    width: 500px;
    padding: 0;
    overflow: hidden;
`
const DeleteButton = styled.button`
    padding: 10px 56px;
    background: #ff7777;
    color: white;
    border: none;
    cursor: pointer;
    height: 150px;
`

const ProductContainer = styled.div`
    width: 495px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transform: translateX(100px, 200px);
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
    z-index: 23;
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
    height: 412px;
    margin-top: 20px;
`
const GlobalBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 0px;
    transition-duration: 500ms;
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
