import React, { useEffect } from "react";
import NationalParks from "../components/NationalParks";
import { useDispatch, useSelector } from 'react-redux'

import {getCharacters} from "../redux/actions"


function MainContainer() {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.user.characters)
 
  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return (
    <div>
      <NationalParks  />
      {characters.map(char => <p>{char.name}</p>)}
      <h1>THANKS FOR VOTING</h1>
    </div>
  );
}

export default MainContainer;
