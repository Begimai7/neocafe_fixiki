import React from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import styled from 'styled-components'
import Button from '../UI/Button'

export const EditSkladModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            handleClose={handleClose}
            borderRadius="16px"
            backgroundColor="#FEFEFE"
        >
            <TextStyled>Редактирование</TextStyled>
            <SpanStyled>Наименование, категория и стоимость</SpanStyled>

            <DivStyled>
                <Input label="Наименование" width="100%" marginBottom="20px" />

                <StyledDiv>
                    <div>
                        <Input
                            label="Кол-во (в гр, мл, л, кг)"
                            width="98%"
                            marginBottom="20px"
                        />
                        <Input
                            label="Минимальный лимит"
                            width="98%"
                            marginBottom="20px"
                        />
                        <Button
                            borderRadius="8px"
                            color=" #00315D"
                            borderColor="blue"
                            border="1px solid #00315D "
                        >
                            Отмена
                        </Button>
                    </div>
                    <div>
                        <Input
                            label="Категория"
                            width="98%"
                            marginBottom="20px"
                        />
                        <Input
                            label="Дата прихода"
                            width="98%"
                            marginBottom="20px"
                            type="date"
                        />
                        <Button
                            borderRadius="8px"
                            color="white"
                            background="blue"
                        >
                            Сохранить
                        </Button>
                    </div>
                </StyledDiv>
                <diDivButtonStyledv></diDivButtonStyledv>
            </DivStyled>
        </Modal>
    )
}

const DivStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '4px',
    marginLeft: '5px',
    borderRadius: '300px',
    display: 'flex',
})
const TextStyled = styled('h5')({
    marginBottom: '24px',
    marginTop: '3px',
    marginLeft: 'px',
    fontFamily: 'Nunito Sans',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '33px',
    letterSpacing: '0em',
    textAlign: 'left',
})

const SpanStyled = styled('span')({
    fontFamily: 'Nunito Sans',
    gap: '15px',
    height: '26px',
    marginTop: '89px',
    marginLeft: '3px',
    marginBottom: '16px',
})

const StyledDiv = styled('div')({
    display: 'flex',
    gap: '16px',
})
