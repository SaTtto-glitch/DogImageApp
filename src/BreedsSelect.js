// DO NOT DELETE
import React from 'react'

export const BreedsSelect = props => {
  const keyList = Object.keys(props.breeds)
  const breedList = keyList.map(breed => (
    <option key={breed} value={breed}>
      {breed}
    </option>
  ))


  return (
    <select value={props.selects} onChange={props.change}>
      {breedList}
    </select>
    
  )
}
