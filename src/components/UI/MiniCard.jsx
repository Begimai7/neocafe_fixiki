import { styled } from '@mui/material';
import React from 'react';
import { miniCardButtons } from '../../utils/constants';

const MiniCard = ({  }) => {
  return (
    <MiniCardContainer>
      {
        miniCardButtons.map((el) => (
          <button onClick={() => handleOpenCard()}>
            <img src={el.icon}/>
            <p style={{marginLeft: "30px"}}>{el.name}</p>
          </button>
        ))
      }
    </MiniCardContainer>
  );
};

export default MiniCard;

const MiniCardContainer = styled('div')(() => ({
  maxWidth: "fit-content",
  position: 'absolute',
  borderRadius: '4px',
  border: '1px solid gray',
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  backgroundColor: '#fff',
  width: '50px',
  padding: '0',
  margin: '0',
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px 0 4px',
    borderRadius: '4px',
    overFlow: 'hidden',
    fontSize: '16px',
    fontWeight: '400',
    border: 'none',
    letterSpacing: '0em',
    textAlign: 'left',
    img: {
      paddingRight: '10px',
    },
  },
}))