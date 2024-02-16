import Checkbox from '@mui/joy/Checkbox';
import React, { useState } from 'react'
import styled from 'styled-components';
import Button from './Button';
import Radio from '@mui/joy/Radio';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import RadioGroup from '@mui/joy/RadioGroup';


 




const ModalWithCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
    };
    
  
    return (
      <DivFrame>
        <ButtonMinus onClick={decrement}><SpanButton>-</SpanButton></ButtonMinus>
        <PFRame>{count}</PFRame>
        <ButtonPlus onClick={increment}><SpanButton>+</SpanButton></ButtonPlus>
        <Button color='white' background='#FF8B5B'>Добавить</Button>
      </DivFrame>
    );
  };
  

export const CoffeeCardBarista = () => {
    const [modalOpen, setModalOpen] = useState(false);


    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    
    }


  return (
    <div >
      <button  onClick={openModal} >click</button>

      {modalOpen && (
        <div
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        <CoffeeCardOption    
          onClose={closeModal}

        />
        
        </div>
      )}
    </div>
  );

}


const CoffeeCardOption = ({ decrement, increment, onClose,selectedValue, setSelectedValue, handleChange }) => {
    return (
        <UiDIvSTyled>
            <UiCLocebtnStyled onClick={onClose}>&#10006;</UiCLocebtnStyled>
            <UiH1Styled>Выберите опции</UiH1Styled>
        
            <UipStyled>Молоко</UipStyled>
            <UiCowStyled >
                <FormControl>
                    <RadioGroup>
                    <RadioGroupStyled defaultValue="medium" name="radio-buttons-group" sx={{display: 'flex'}}>
                      <div>
                      <Radio value="small" 
                        label="коровье" 
                        size="md"     
                        sx={{ ml: 0 }}
                        color="warning"
                        
                        />
                        <P1>+0 c</P1>
                        <HrLine />
                      </div>
                   <Radio1>
                   <Radio 
                        value="medium" 
                        label="овсянное " 
                        size="md" 
                        sx={{ mr: -6 }}
                        color="warning" 
                        /> 
                        <P2>+0 c</P2>
                        <HrLine />
                   </Radio1>
                     <div>
                     <Radio 
                        value="large" 
                        label="соевое " 
                        size="md" 
                        color='warning'
                        /> 
                        <P1>+0 c</P1>
                        
                     </div>
                    </RadioGroupStyled>
                </RadioGroup>
                 
                </FormControl>
            
            </UiCowStyled>
                <HrStyled3 />
                <UipStyled>Сиропы</UipStyled>
                <UiDIvSTyled2>
                    <Label htmlFor="">
                        <CheckboxStylde  
                            variant="solid" 
                            size="lg" 
                            sx={{border: '2px solid #B0B0B0',}}
                        />
                        <UiSpanStyled2>Клубничный</UiSpanStyled2> <P>+30 c</P>
                    </Label>
                    <Label2 htmlFor="">
                        <CheckboxStylde  
                            variant="solid" 
                            size="lg" 
                            sx={{border: '2px solid #B0B0B0',}}
                        />
                        <UiSpanStyled2>Карамельный</UiSpanStyled2> <P>+50 c</P>
                    </Label2>
                </UiDIvSTyled2>
                <UiHrStyled2>
                    <HrLine2 />
                    <HrTwoLine2 />
                </UiHrStyled2>
                <DivItog>
                    <h3>Итого:</h3>
                    <h3>190 сом</h3>
                </DivItog>
                
                <ModalWithCounter />
        </UiDIvSTyled>
    )
}

const RadioGroupStyled = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontSize: '20px',
    width: '88%',
    fontWeight: '600'
}))

const P = styled.p`
    color: #B0B0B0;
    font-family: Nunito;
    
`
const Radio1 = styled.div `
    margin-left: 16px;
    
`

const P1 = styled.p`
    color: #B0B0B0;
    font-family: Nunito;
    margin-left: 99px;
    margin-top: -18px;
    font-size: 20px;
`
const P2 = styled.p`
    color: #B0B0B0;
    font-family: Nunito;
    margin-left: 108px;
    margin-top: -22px;
    font-size: 20px;

`

const UiH1Styled = styled.h1`
    font-family: Nunito;
    margin-top: -23px;
`
const CheckboxStylde = styled(Checkbox)(() => ({
    fontSize: '30px',


  '.css-6d8pwk-JoyCheckbox-checkbox':{
    background: '#F5F5F5',
    
    

    ':checked':{
        background: 'none',  
        
        
    }
  },
  '.css-6d8pwk-JoyCheckbox-checkbox:checked':{
    background: '#F5F5F5',
    
    
  },
  '.css-n82b39-JoyCheckbox-checkbox ':{
    color: 'orange',
    background: '#F5F5F5', 
    borderRadius: '0px'
    
  },
  '.css-6d8pwk-JoyCheckbox-checkbox:hover ':{
     background: '#F5F5F5',
     borderRadius: '0px',
     border: '1px solid orange',

  },
  '.css-n82b39-JoyCheckbox-checkbox:hover':{
    background: '#F5F5F5',
    border: '1px solid orange'
  },

}))

const UiCLocebtnStyled = styled.button`
    width: 32px;
    height: 32px;
    background: white;
    margin-left: 520px;
    border: 2px;
    background: white;
    font-size: 23px;
`

const UiDIvSTyled = styled.div`
    width: 550px;
    height: 548px;
    margin-top: 3px;
    border-radius: 30px;
    background: white;
    padding: 20px;
`
const UipStyled = styled.p`
    height: 21px;
    margin-top: 40px;
    font-family: Nunito;
    font-size: 20px;
    font-weight: 600;
    color: #B0B0B0;

`

const UiCowStyled = styled.div`  
    display: flex;
    flex-wrap: wrap;
`

const HrLine = styled.hr`
    margin-left: 32px;
    flex-grow: 1; 
    width: 200px;
`

const HrStyled3 = styled.hr`
    width: 203px;
    margin-right: 312px;
    margin-top: -13px;
`
const UiDIvSTyled2 = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    font-weight: 600;
    margin: 20px -130px;
    margin-right: -80px;
`
const Label = styled.label`             
    display: flex;
    align-items: center;
    margin-right: 278px;
`

const Label2 = styled.label`
    position: absolute;
    display: flex;
    align-items: center;
    margin-left: 290px;
`


const UiSpanStyled2 = styled.span`
    font-family: Nunito;
    padding: 10px;
`

const UiHrStyled2 = styled.div`
    display: flex;
    margin-top: -27px;
`
const HrLine2 = styled.hr`
    margin-left: 32px;
    flex-grow: 1; 
`

const HrTwoLine2 = styled.hr`
    margin-left: 42px;
    flex-grow: 1; 
`
const DivItog = styled.div`
    display: flex;
    font-family: Nunito;

`
const ButtonPlus = styled.button`
    width: 64px;
    height: 64px;
    border-radius: 50px;
    background: #FF8B5B;
    color: white;
    border: 0px;
`
const ButtonMinus = styled.button`
    width: 64px;
    height: 64px;
    border-radius: 50px;
    background: #CCCCCC;
    border: 0px;
`
const SpanButton = styled.span`
    font-size: 37px;
    font-family: Nunito;
   
`

const PFRame = styled.p`
    font-size: 37px;
    font-family: Nunito;
    margin-top: 7px;
`


const DivFrame = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    
`

