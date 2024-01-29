import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Modal from "../UI/Modal.jsx"
import Input from '../UI/Input.jsx'
import Select from "../UI/Select.jsx"
import AddFotoIcon from '../../assets/icon/CloudArrowUp.svg'
import { Margin } from '@mui/icons-material';

const CreateMenuModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [selectedPhoto, setSelectedPhoto] = useState(null)

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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Открыть модель
      </Button>

      <Modal open={open} handleClose={handleClose} borderRadius='30px'>

    <div style={{ display: "flex", justifyContent: "space-between" }}>
    <h3 style={{ margin: 0, padding: 0 }}>Редактирование</h3>
    <IconButton onClick={handleClose} style={{ margin: 0, padding: 0, marginTop:"-9px" }}>
      <CloseIcon />
    </IconButton>
    </div>
    <h4>Добавьте фотографию к позиции</h4>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"34px"}}>          
       {(selectedPhoto && ( 
                <img src={selectedPhoto} style={{ width:"30%", height:"30%" }} alt="Выбранное фото" /> 
            )) || <img src={AddFotoIcon} style={{ width:"95px", height:"95px" }} />} 
            <div style={{ paddingTop:"8px" }}> 
                <span> 
                    Перетащите изображение для изменения 
                </span> 
                <div style={{textAlign:'center'}}> 
                    или{' '}
                    <label htmlFor="file-input">обзор</label>
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
      
      <div><Input width="100%"  label={"Наименование"} /></div>
      <div style={{ display: "flex", justifyContent: "space-between", gap:"31px" }}>
        <Select width="100%" htmlFor="category" />
        <Input width="100%" label={"Стоимость"} />
      </div>

      <h4>Состав блюда и граммовка</h4>
      <div style={{ display:"flex", justifyContent:"space-between", gap:"32px" }}>
        <Input label={"Наименование"} />
        <Input label={"Кол-во (в гр, мл, л, кг)"} />
      </div>
      </Modal>
    </div>
  );
};

export default CreateMenuModal;









// export const CreateMenuModal = ({open, handleClose}) => {

//     const [open, setOpen] = useState(false)
//     const handleOpen = () => {
//       setOpen(!open)
//     };

//     const [selectedPhoto, setSelectedPhoto] = useState(null)
    
  

 
//   const handleFileChange = (event) => { 
//       const file = event.target.files[0] 
//       if (file) { 
//           const reader = new FileReader() 
//           reader.onloadend = () => { 
//               setSelectedPhoto(reader.result) 
//               setPhotos([...photos, selectedPhoto]) 
//               setSelectedPhoto(null) 
//           } 
//           reader.readAsDataURL(file) 
//       } 
//   }

//   return (
//     <Modal open={open} handleClose={handleClose} borderRadius='10px'>
//     <div style={{ display: "flex", justifyContent: "space-between" }}>
//       <h3>Редактирование</h3>
//     </div>
//     <button onClick={handleOpen}>create</button>
//     <div> 
//             {(selectedPhoto && ( 
//                 <img src={selectedPhoto} style={{height:'90px'}} alt="Выбранное фото" /> 
//             )) || <img src={AddFotoIcon} />} 
//             <div> 
//                 <span> 
//                     Перетащите изображение для изменения 
//                 </span> 
//                 <span> 
//                     или{''}
//                     <label htmlFor="file-input">обзор</label> 
//                     <input 
//                         style={{ display: 'none' }} 
//                         onChange={handleFileChange} 
//                         id="file-input" 
//                         type="file" 
//                     /> 
//                 </span> 
//             </div> 
//         </div>

      {/* <h4>Наименование, категория и стоимость</h4>
      <div style={{ display: "flex", flexWrap:'wrap' }}>
      <Input width="100%" label={"Наименование"} />
      <Select label={"Категория"} />
      <Input label={"Стоимость"} />
      </div>

      <h4>Состав блюда и граммовка</h4>
      <div style={{ display:"flex", flex:"wrap" }}>
        <Input label={"Наименование"} />
        <Input label={"Кол-во (в гр, мл, л, кг)"} />
      </div> */}
//       </Modal>
//   )
// }

