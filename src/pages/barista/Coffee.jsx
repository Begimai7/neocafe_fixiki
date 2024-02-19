import React from 'react'
import { Box, styled } from '@mui/material'
import { baristaCoffee } from '../../utils/constants'

export const Coffee = ({ openChangeHandler }) => {
    return (
        <div>
            <DivStyled>
                {baristaCoffee.map((el) => (
                    <Styldiv type="submit" onClick={openChangeHandler}>
                        <Img style={{ width: '150px' }} src={el.img} />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}
                        >
                            <p style={{ margin: 0 }}>{el.name}</p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    alignItems: 'end',
                                }}
                            >
                                <p style={{ margin: 0 }}>{el.prise}</p>
                                <IconButton onClick={openChangeHandler}>
                                    <img src={el.iconButton} alt="" />
                                </IconButton>
                            </div>
                        </div>
                    </Styldiv>
                ))}
            </DivStyled>
        </div>
    )
}

const Styldiv = styled('div')({
    marginLeft: '15px',
    maxWidth: '350px',
    minWidth: '320px',
    height: '136px',
    width: '320px',
    borderRadius: '15px',
    display: 'flex',
    padding: '16px 20px',
    gap: '16px',
    backgroundColor: 'gray',
    boxSizing: 'border-box',
})

const IconButton = styled('button')({
    backgroundColor: '#FF8B5B',
    borderRadius: '50px',
    width: '38px',
    height: '38px',
})

const DivStyled = styled('div')({
    display: 'flex',
})

const Img = styled('img')({
    width: '90px',
})

const SideDiv = styled('div')({
    display: 'flex',
    width: '100vw',
    height: '200px',
    justifyContent: 'space-around',
    alignItems: 'center',
})
