// Write your Character component here
import React from 'react'
import styled, { keyframes }  from 'styled-components'
const kf = keyframes`
100% {
  opacity: 1;
  transform: scale(1.02)
}
`
const StyledPage = styled.div`
    img{
        opacity: 0.5;
        animation: ${kf} 0.5s ease-in-out forwards;
        width: 25%;
        border: 1px solid #d2d2d2;
        box-shadow: 0px 1px 6px -2px #807f7f;
        border-radius: 8px;
        margin-top: 16px;
        padding: 16px;
        backGround-color: lightgrey;
    }
    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        margin: 0 auto;
        padding: 0.5%;
        width: 25%;
        margin-top: 3%;
    }
`
const Styledh1 = styled.h1`
    background-color: lightGrey;
    box-shadow: 0px 2px 2px lightgrey;
`
const StyledInnerDiv = styled.div`
    p{
        font-size: 1.5rem;
        color: Darkblue;
    }:
`

export default function Character (props) {
const { characterChange,characterDetails } = props

    return(
        <StyledPage>
            <Styledh1>Character: {characterDetails.name}</Styledh1>
            <StyledInnerDiv>
                <Styledh1> Character Details</Styledh1>
                <p>Status: {characterDetails.status}</p>
                <p>Species: {characterDetails.species}</p>
                <p>Gender: {characterDetails.gender}</p>
                <img src={characterDetails.image} />
            </StyledInnerDiv>
        </StyledPage>
    );
}
