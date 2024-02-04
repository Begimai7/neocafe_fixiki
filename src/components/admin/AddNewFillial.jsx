import * as React from 'react'
import { styled, css } from '@mui/system'
import Modal  from '../UI/Modal'
import addFotoIcon from '../../assets/icon/addFoto.svg'
import Input from '../UI/Input'
import cancelIcon from '../../assets/icon/cansel.svg'
import Button from '../UI/Button'
import WorkingHours from '../UI/WorkingHours'

export default function ModalUnstyled({ handleClose }) {
    const [selectedPhoto, setSelectedPhoto] = React.useState(null)
    const [isCheckboxChecked, setIsCheckboxChecked] = React.useState({
        1: false, 
        2: false, 
        3: false,
        4: false, 
        5: false, 
        6: false,
        7: false
      });
    

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedPhoto(reader.result)
                setPhotos([...photos, selectedPhoto])
                setSelectedPhoto(null)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div>
            <Modal
                open={open}
                handleClose={handleClose}
                width={'551px'}
                borderRadius='30px'
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
                    <AddNewImgDiv>
                        <div>
                            <AddFotoFilialText id="unstyled-modal-description">
                                Добавьте фотографию филиала
                            </AddFotoFilialText>
                        </div>

                        <AddNewImgButtonAndText>
                            <BorderDashed>
                                {(selectedPhoto && (
                                    <NewImgStyle
                                        src={selectedPhoto}
                                        alt="Выбранное фото"
                                    />
                                )) || <img src={addFotoIcon} />}
                                <AddFotoText>
                                    <AddImgTextSpan>
                                        Перетащите изображение для изменения
                                    </AddImgTextSpan>
                                    <AddImgTextSpan>или <AddNewImgText htmlFor="file-input">
                                            обзор
                                        </AddNewImgText>
                                        <input
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                            id="file-input"
                                            type="file"
                                        />
                                    </AddImgTextSpan>
                                </AddFotoText>
                            </BorderDashed>
                        </AddNewImgButtonAndText>
                    </AddNewImgDiv>
                    <div style={{ width: '100%' }}>
                        <GlobalText
                            id="unstyled-modal-title"
                            className="modal-title"
                        >
                            Название и адрес
                        </GlobalText>
                    </div>
                    <InputsBlock>
                        <Input
                            label="Название кофейни"
                            placeholder="Название филиала"
                            background='EDEDED'
                        />
                        <Input
                            label="Адрес"
                            placeholder="Адрес нового филиала"
                            background='EDEDED'

                        />
                        <Input
                            label="Номер телефона"
                            placeholder="Введите номер телефона"
                            background='EDEDED'
                            
                        />
                    </InputsBlock>

                    <div style={{ width: '100%' }}>
                        <GlobalText id="unstyled-modal-title">
                            Заполните график работы
                        </GlobalText>
                    </div>
                    <WorkGraficksText>
                        <GraphicksText>День недели</GraphicksText>
                        <GraphicksText style={{ marginRight: '77px' }}>
                            Время работы
                        </GraphicksText>
                    </WorkGraficksText>
                            <WorkingHours/>

                    <ModalButtonDiv   >
                        <Button background='white' border='1px solid' color='#00315D'>Отмена</Button>
                        <Button color="white" >Сохранить</Button>
                    </ModalButtonDiv>
                </ModalContent>
            </Modal>
        </div>
    )
}





const ModalButtonDiv = styled('div')(() => ({
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'30px'
}))

const ModalContent = styled('div')(() => ({
    height: '800px',
    overflowX: 'scroll',
    fontFamily:'sans-serif',
    '&::-webkit-scrollbar': {
        display: 'none',
    }
    
}))


const GraphicksText = styled('span')(() => ({
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 700,
}))
const WorkGraficksText = styled('div')(() => ({
    width: '100%',
    borderBottom: '1px solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '12px 0px',
}))
const AddImgTextSpan = styled('span')(() => ({
    fontSize: '16px',
}))
const NewImgStyle = styled('img')(() => ({
    borderRadius: '4px',
    height: '95px',
}))
const ModalHeader = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
}))
const InputsBlock = styled('div')(() => ({
    height: '302px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '16px',
}))
const GlobalText = styled('h1')(() => ({
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
}))
const AddFotoFilialText = styled('span')(() => ({
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 600,
}))
const AddFotoText = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))
const BorderDashed = styled('div')(() => ({
    border: '1px dashed gray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 66px',
    backgroundColor: 'white',
}))
const AddNewImgText = styled('label')(() => ({
    color: '#00315D',
    borderBottom: '1.5px solid #00315D',
    fontSize: '16px',
    cursor: 'pointer',
}))
const AddNewImgButtonAndText = styled('div')(() => ({
    padding: '18px 16px',
    border: '1px solid',
    backgroundColor: '#F4F4F4',
}))
const AddNewImgDiv = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '251px',
    marginBottom: '24px',
}))

