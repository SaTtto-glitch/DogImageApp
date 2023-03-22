// DO NOT DELETE
import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'
import { DogImage } from './DogImage'
import './App.css'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState('akita')
  const [selectedBreed, setSelectedBreed] = useState('akita')
  const [dogImageList, setdogImageList] = useState(null)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message)
      })
  }, [])

  const handleChange = function (event) {
    setSelectedBreed(event.target.value)
  }

  
  
  const clickChange = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(response => response.json())
      .then(data => {
        setdogImageList(data.message)
      })
  }

  return (
    <main>
      <div className="BreedsSelectdisc">
        <div className="seachform">
          <p className="breedslist">Breeds List</p>
          <BreedsSelect
            breeds={breeds}
            selects={selectedBreed}
            change={handleChange}
          />
          <button onClick={clickChange}>表示</button>
        </div>
        <DogImage urls={dogImageList} />

      </div>
    </main>
  )
}
