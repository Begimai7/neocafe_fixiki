import React from 'react'
import { IconButton, styled } from '@mui/material'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import Button from '../UI/Button'
import IconX from '../../assets/icon/X.svg'
function CreateNewCategory({ open, handleClose, width }) {
    return (
        <div width="100%">
            <Modal
                open={open}
                handleClose={handleClose}
                width={width}
                border="30px"
                borderRadius={'30px'}
            >
                <div>
                    <BoxBlockStyle>
                        <TextHtwoStyle>Новая категория</TextHtwoStyle>

                        <IconButton onClick={handleClose}>
                            <img src={IconX} alt="" />
                        </IconButton>
                    </BoxBlockStyle>
                    <div>
                        <TextHthreeStyle>Наименование</TextHthreeStyle>
                    </div>
                    <Input
                        placeholder="Введите название категории"
                        label={'Наименование'}
                    ></Input>
                    <BlockButtonStyle>
                        <Button
                            borderRadius={'6px'}
                            backgroundColor="white"
                            color="#00315D"
                            padding={'16px 73px'}
                            border="1px solid #00315D"
                            fontSize={'18px'}
                        >
                            Отмена
                        </Button>
                        <Button
                            borderRadius={'6px'}
                            color="white"
                            padding={'16px 73px'}
                            fontSize={'18px'}
                        >
                            Добавить
                        </Button>
                    </BlockButtonStyle>
                </div>
            </Modal>
        </div>
    )
}
export default CreateNewCategory

const TextHtwoStyle = styled('h2')(() => ({
    margin: '5px 0 0 0',
    fontFamily: 'Nunito Sans',
    fontSize: '24px',
    fontWeight: '700',
}))
const TextHthreeStyle = styled('h3')(() => ({
    margin: '10px 0',
    fontFamily: 'Nunito Sans',
    fontSize: '22px',
    fontWeight: '600',
}))
const BoxBlockStyle = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))
const BlockButtonStyle = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '35px 1px 0 1px',
}))
