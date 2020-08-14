import React, {useState,useEffect} from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'
import styled, { keyframes }  from 'styled-components'

const StyledButtons = styled.button`
  padding: 1%;  
  border-radius: 15px;
`

const App = () => {
  const [characterId, setCharacterId] = useState(1)
  const [characterDetails, setCharacterDetails] = useState('')
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const characterGetId = id =>{
  setCharacterId(id)
}

const characterChange = (next) =>{
  if(next ==='next'){
  return setCharacterId(characterId + 1)
  }
  if(next ==='previous'){
  return setCharacterId(characterId - 1)
  }
}
const reset = () => {
  if(characterId < 1){
    return setCharacterId(1)
  }
  if(characterId > 19){
    return setCharacterId(1)
  }
}
useEffect(() => {
  axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(dets => {
        setCharacterDetails(dets.data)
        // console.log(dets.data)
    })
    .catch(error => { 
        console.log(error) 
    })
},[characterId])

// console.log(characters)
  return (
    <div className="App">
      < Character  characterDetails={characterDetails} characterId={characterId} characterChange={characterChange}/>
      <div>
        <StyledButtons onClick={()=>characterChange('previous')||reset()}>Previous Character</StyledButtons>
        <StyledButtons onClick={()=>characterChange('next')||reset()}>Next Character</StyledButtons>
      </div>
    </div>
  );
}

export default App;
