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
    border: ${(props) => props.borderColor};
    background-color: ${(props) => props.background || ''};
    border-radius: ${(props) => props.borderRadius || '0px'};
    padding: ${(props) => props.padding || '16px 70px'};
    color: ${(props) => props.color || '#00315D'};
    align-items: center;
`
