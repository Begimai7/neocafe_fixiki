import React from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import styled from 'styled-components'
import Button from '../UI/Button'
import Select from '../UI/Select'
import { editSklad } from '../../utils/constants'

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
                <Input label="Наименование" width="100%" marginBottom="10px" />

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
                    </div>
                    <div>
                        <Select
                            labelText="Категория"
                            width="190px"
                            marginBottom="10px"
                            SelectData={editSklad}
                        />
                        <Input
                            label="Дата прихода"
                            width="190px"
                            marginBottom="20px"
                        />
                    </div>
                </StyledDiv>
                <diDivButtonStyledv></diDivButtonStyledv>
            </DivStyled>
            <div>
                <Button
                    width="48%"
                    borderRadius="8px"
                    color=" #00315D"
                    borderColor="blue"
                    border="1px solid #00315D "
                    backgroundColor=" #FEFEFE"
                    
                >
                    Отмена
                </Button>
                <Button
                    marginLeft="4%"
                    borderRadius="8px"
                    color="white"
                    background=" #00315D"
                    width="48%"
                >
                    Сохранить
                </Button>
            </div>
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
    marginLeft: '5px',
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
