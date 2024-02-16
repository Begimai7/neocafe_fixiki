import styled from '@emotion/styled';
import { weekAddNewFilial } from '../../utils/constants/'
import React from 'react'

export default function WorkingHours() {
    const [isCheckboxChecked, setIsCheckboxChecked] = React.useState({
        1: false, 
        2: false, 
        3: false,
        4: false, 
        5: false, 
        6: false,
        7: false
      });

    const checkedHandler = (id) => {
        setIsCheckboxChecked((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
  return (
    <div>

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
    </div>
  )
}

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
const GraphicksWorkCheckBox = styled('input')(() => ({
    width:'22px',
    height:'22px',
    borderRadius:'4px'
}))

const GraphicksWorkInputDiv = styled('div')(() => ({
    width:'199px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
}))


const WeekWorksGraphicks = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop:'16px'
}))