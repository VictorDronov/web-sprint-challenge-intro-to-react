// Write your Character component here
import React, {useState,useEffect} from 'react'
import styled from 'styled-components'


export default function Character (props) {
const { characterChange,characterDetails } = props

    return(
        <div>
            {
            <h1>Character: {characterDetails.name}</h1>
            }   
            <div>
                <h1> Character Details</h1>
                <p>Status: {characterDetails.status}</p>
                <p>Species: {characterDetails.species}</p>
                <p>Gender: {characterDetails.gender}</p>
                <img src={characterDetails.image} />
            </div>
        </div>
    );
}
