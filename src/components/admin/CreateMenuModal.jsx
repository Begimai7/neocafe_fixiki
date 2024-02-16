import React from 'react'
import { useState } from 'react'
import { IconButton, Menu, MenuItem, styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddPhotoIcon from '../../assets/icon/CloudArrowUp.svg'
import Plus from '../../assets/icon/Plus.svg'

import Modal from '../UI/Modal.jsx'
import Input from '../UI/Input.jsx'
import Select from '../UI/Select.jsx'
import Button from '../UI/Button.jsx'
// import MiniCard from '../UI/MiniCard.jsx'
import { miniCardButtons } from '../../utils/constants.js';

const ITEM_HEIGHT = 48;

const CreateMenuModal = ({openModal, handleCloseModal}) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  // const [openMiniCard, setOpenMiniCard] = useState(false)
  const [inputs, setInputs] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const height = window.innerHeight;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddInput = () => {
    setInputs(prevInputs => {
      const newInputs = [...prevInputs, inputValue];
      setInputValue('');
      return newInputs;
    });
  };


  const handleSaveHandler = () => {};
  const handleCopyHandler = () => {};
  

  const handleDeleteInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const changeHandler = (id) => {
    if (id == '1'){
      onclick=(() => handleCopyHandler()); 
    } else if (id == '2'){
      onclick=(() => handleDeleteInput()); 
    }
  };



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
    <div onClose={handleCloseModal} style={{width:'30%'}}>
      <Modal open={openModal} borderRadius="30px" border="none">
      <ModalContent height={height}>
<div>
<div style={{ display: "flex", justifyContent: "space-between" }}>
    <h3 style={{ margin: 0, padding: 0 }}>Редактирование</h3>
    <IconButton onClick={handleCloseModal} style={{ margin: 0, padding: 0, marginTop:"-9px" }}>
      <CloseIcon />
    </IconButton>
    </div>
    <h4>Добавьте фотографию к позиции</h4>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"34px", width:"100%"}}>          
       { (selectedPhoto && ( 
                <img src={selectedPhoto} style={{width:"95px", height:"95px"}} />
            )) || <label style={{cursor:"pointer"}} htmlFor="file-input"><img src={AddPhotoIcon} /></label>} 
            <div style={{ paddingTop:"8px"}}> 
                <span>
                    Перетащите изображение для изменения 
                </span> 
                <div style={{textAlign:'center'}}> 
                    или{' '}
                    <label style={{ textDecoration: "underline", color: '#00315D', cursor:"pointer" }} htmlFor="file-input">обзор</label>
                    <input
                        style={{ display: 'none' }}
                        onChange={handleFileChange} 
                        id="file-input" 
                        type="file" 
                    /> 
                </div> 
            </div> 
        </div>

      <h4>Наименование, категория и стоимость</h4>
      
      <div style={{ marginTop:"16px" }}>
        <Input width="100%" label={"Наименование"}
        placeholder={"Введите название новой позиции"} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop:"16px", borderRadius:"4px", gap:"0 32px" }}>
        <Select labelText={"Категория"} />
        <label><Input width="100%" label={"Стоимость"} placeholder={"Введите стоимость"} /></label>
      </div>

  <div>
  <h4>Состав блюда и граммовка</h4>
      <QualityBlock>
        {inputs.map((input, index) => (
          <div key={index}>
            <div style={{ display:"flex", position:"relative", margin:'15px' }}>
              <Input label={"Наименование"} value={input} placeholder={"Например: Молоко"} />
              <Input label={"Кол-во (в гр, мл, л, кг)"} value={input} placeholder={"Кол-во"} />

              <IconButton style={{ position:'absolute', right: '-33px', top: '33px'}}
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onClose={handleClose}
                >
                <MoreVertIcon />
              </IconButton>
          </div>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuItem={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {miniCardButtons.map((option) => (
          <MenuItemBorderBottom>
            <MenuItemStyled key={option.id} id={'btn' + option.id} selected={option.id == 'id'} onClick={() => changeHandler(option.id)}>
              <img src={option.icon} />
              {option.name}
            </MenuItemStyled>
          </MenuItemBorderBottom>
        ))}
      </Menu>
  </div>
        ))}
      </QualityBlock>
  </div>

    <Button
    onClick={handleAddInput}
    margin='25px 0px 45px 0px'
    display='flex'
    color="white"
    fontSize='18px'
    padding="16px 38px"
    >Добавить еще <img style={{paddingLeft:"10px"}} src={Plus} />
    </Button>

      <div style={{ display:"flex", justifyContent:"space-between", gap:"0 32px" }}>
        <Button width='100%' border="1px solid #00315D" background="white" onClick={handleCloseModal}>Отмена</Button>
        <Button width='100%' color="white" onClick={handleSaveHandler}>Сохранить</Button>
      </div> 
  </div>
      </ModalContent>
        
      </Modal>     
      </div>
  );
};

export default CreateMenuModal;

const ModalContent = styled('div')(( height ) => ({
  height: `${(height * 80) / 100}px `,
  overflow: 'scroll',
  overflow: "hidden",
  fontFamily: 'Nunito Sans',
  '&::-webkit-scrollbar': {
      display: 'transparent',
  },
}))

const MenuItemBorderBottom = styled('div')(() => ({
  // border:'1px solid rgb(128, 128, 128, 0.7)',
  "& #btn1": {
   borderBottom:'1px solid rgb(128, 128, 128, 0.7)',
},

'.css-6hp17o-MuiList-root-MuiMenu-list': {
  // paddingTop: '0px',
  // paddingBottom: '0px',
  border: '1px solid grey',
},
}))

const MenuItemStyled = styled(MenuItem)(() => ({
  '&:hover': {
    backgroundColor: 'rgb(128, 128, 128, 0.3)',
  },
  
}))

const QualityBlock = styled('div')(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxHeight: "180px",
  margin: '-12px',
  fontFamily: 'Nunito Sans',
  overflow: "hidden",
  overflowY: "scroll",
  boxSizing: 'border-box',
  width: "100%",
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  
  
  div:{
    display: "flex",
    gap: "10px 32px",
    justifyContent: 'space-between',
  }, 
}))
