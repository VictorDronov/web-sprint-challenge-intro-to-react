// Write your Character component here
import React, {useState,useEffect} from 'react'
import styled, { keyframes }  from 'styled-components'


const StyledPage = styled.div`
    img{
        width: 25%;
    }
    h1{
        padding-top: ${props => props.theme.paddingTop};
        color: ${props => props.theme.secondaryColor}
    }
`
const StyledInnerDiv = styled.div`
    h1{
        padding: 2%;
       }
    p{
        font-size: 1.5rem;
        color: Darkblue;
    }:
`

export default function Character (props) {
const { characterChange,characterDetails } = props

    return(
        <StyledPage>
            <h1>Character: {characterDetails.name}</h1>
            <StyledInnerDiv>
                <h1> Character Details</h1>
                <p>Status: {characterDetails.status}</p>
                <p>Species: {characterDetails.species}</p>
                <p>Gender: {characterDetails.gender}</p>
                <img src={characterDetails.image} />
            </StyledInnerDiv>
        </StyledPage>
    );
}
