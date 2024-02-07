import React from 'react'
import styled from 'styled-components'

function Button(props) {
    return (
        <UiButtonStyled
            style={props}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </UiButtonStyled>
    )
}

export default Button

const UiButtonStyled = styled.button`
    border-color: ${(props) => props.borderColor || '0px'};
    border: ${(props) => props.border || '0px solid'};
    background-color: ${(props) => props.background || '#00315D'};
    border-radius: ${(props) => props.borderRadius || '6px'};
    padding: ${(props) => props.padding || '16px 70px'};
    color: ${(props) => props.color || '#fff'};
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Nunito Sans';
`
