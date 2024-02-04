import React from 'react'
import Modal from '../UI/Modal'
import cancelIcon from '../../assets/icon/cansel.svg'
import styled from '@emotion/styled'
import Button from '../UI/Button'
import Input from '../UI/Input'
import WorkingHours from '../UI/WorkingHours'
import Select from '../UI/Select'

export default function CreateNewEmpleyee(handleClose) {
    return (
        <Modal
            open={open}
            handleClose={handleClose}
            width="551px"
            borderRadius="30px"
        >
            <ModalContent>
                <ModalHeader style={{ width: '100%' }}>
                    <GlobalText id="unstyled-modal-title">
                        Новый филиал
                    </GlobalText>
                    <Button
                        padding={0}
                        backgroundColor="white"
                        onClick={handleClose}
                    >
                        <img src={cancelIcon} alt="" />
                    </Button>
                </ModalHeader>
                <div>
                    <AddFotoFilialText id="unstyled-modal-description">
                        Личные данные
                    </AddFotoFilialText>
                    <InputBlock>
                        <Input
                            label="Имя"
                            placeholder="Введите имя"
                            background="EDEDED"
                            width="487px"
                        />
                        <Select labelText="Должность" />
                        <Input
                            label="День рождения"
                            placeholder="Введите день рождения"
                            background="EDEDED"
                            width="487px"
                            type="date"
                        />
                        <Input
                            label="Номер телефона"
                            placeholder="Введите номер телефона"
                            background="EDEDED"
                            width="487px"
                        />
                        <Select labelText="Филиал" width="487px" />
                    </InputBlock>
                </div>
                <WorkingHours />
                <ModalButtonDiv>
                    <Button
                        background="white"
                        border="1px solid"
                        color="#00315D"
                    >
                        Отмена
                    </Button>
                    <Button color="white">Сохранить</Button>
                </ModalButtonDiv>
            </ModalContent>
        </Modal>
    )
}
const ModalContent = styled('div')(() => ({
    height: '800px',
    overflowX: 'scroll',
    fontFamily: 'sans-serif',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
}))
const ModalButtonDiv = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30px',
}))

const InputBlock = styled('div')(() => ({
    height: '514px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '16px',
}))
const AddFotoFilialText = styled('span')(() => ({
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 600,
}))

const ModalHeader = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
}))
const GlobalText = styled('h1')(() => ({
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
}))
