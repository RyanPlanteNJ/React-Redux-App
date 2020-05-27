import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
    color: #667F8D;
`

const StyledButtonName = styled.h4`
    color: #FFF;
    font-size: 1rem;
`

export default function RicknMortyForm(props) {
   
    return (
        <StyledButton onClick={props.fetchRicknMorty}>
            <StyledButtonName>Fetch Characters</StyledButtonName>
        </StyledButton>
    )
}