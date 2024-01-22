import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { styled, css } from '@mui/system'
import { Modal as BaseModal } from '@mui/base/Modal'
import addFotoIcon from '../../assets/icon/addFoto.svg'
import Input from '../UI/Input'
import cancelIcon from '../../assets/icon/cancel.svg'
import Button from './UI/Button'
import { weekAddNewFilial } from '../../utils/constants/'

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
    const checkedHandler = (id) => {
        setIsCheckboxChecked((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
    return (
        <div>
            <ModalUnstyled
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: StyledBackdrop }}
            >
                <ModalContent sx={{ width: 487 }}>
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
                        />
                        <Input
                            label="Адрес"
                            placeholder="Адрес нового филиала"
                        />
                        <Input
                            label="Номер телефона"
                            placeholder="Введите номер телефона"
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
                            {weekAddNewFilial.map((el) => (
                    <div style={{ width: '100%' }}>
                        <WeekWorksGraphicks key={el.id}>
                                <DayInTheWeek>{el.day}</DayInTheWeek>
                                <GraphicksWorkCheckBox
                                    type="checkbox"
                                    checked={isCheckboxChecked[el.id]}
                                    onChange={() =>
                                        checkedHandler(el.id)
                                    }
                                />
                                <GraphicksWorkInputDiv>
                                    <GraphicksWorkInput
                                        htmlFor={el.id}
                                        type="time"
                                        disabled={!isCheckboxChecked[el.id]}
                                    />
                                    <span>-</span>
                                    <GraphicksWorkInput
                                        type="time"
                                        htmlFor={el.id}
                                        disabled={!isCheckboxChecked[el.id]}
                                    />
                                </GraphicksWorkInputDiv>
                        </WeekWorksGraphicks>
                    </div>
                            ))}

                    <ModalButtonDiv>
                        <Button background='white' border='1px solid'>Отмена</Button>
                        <Button color="white" >Сохранить</Button>
                    </ModalButtonDiv>
                </ModalContent>
            </ModalUnstyled>
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
const GraphicksWorkInputDiv = styled('div')(() => ({
    width:'199px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
}))
const GraphicksWorkCheckBox = styled('input')(() => ({
    width:'22px',
    height:'22px',
    borderRadius:'4px'
}))
const GraphicksWorkInput = styled('input')(() => ({
    width: '85px',
    height:'36px',
    overflow:"hidden"
}))
const DayInTheWeek = styled('span')(() => ({
    width: '125px',
    fontSize:'20px',
    fontStyle:'normal',
    fontWeight:'600',
}))
const WeekWorksGraphicks = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
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

const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props
    return (
        <div
            className={clsx({ 'base-Backdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    )
})

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
}

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
}

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
}

const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
`

const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
`

const ModalContent = styled('div')(
    ({ theme }) => css`
        font-family: 'Nunito Sans';
        font-weight: 500;
        width: 551px;
        text-align: start;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8px;
        overflow: hidden;
        background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border-radius: 8px;
        border: 1px solid
            ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0 4px 12px
            ${theme.palette.mode === 'dark'
                ? 'rgb(0 0 0 / 0.5)'
                : 'rgb(0 0 0 / 0.2)'};
        padding: 24px;
        color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

        & .modal-title {
            margin: 0;
            line-height: 1.5rem;
            margin-bottom: 8px;
        }

        & .modal-description {
            margin: 0;
            line-height: 1.5rem;
            font-weight: 400;
            color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
            margin-bottom: 4px;
        }
    `,
)

const TriggerButton = styled('button')(
    ({ theme }) => css`
        font-family: 'Nunito Sans';
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.5;
        padding: 8px 16px;
        border-radius: 8px;
        transition: all 150ms ease;
        cursor: pointer;
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid
            ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

        &:hover {
            background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
            border-color: ${theme.palette.mode === 'dark'
                ? grey[600]
                : grey[300]};
        }

        &:active {
            background: ${theme.palette.mode === 'dark'
                ? grey[700]
                : grey[100]};
        }

        &:focus-visible {
            box-shadow: 0 0 0 4px
                ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
            outline: none;
        }
    `,
)
