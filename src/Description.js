import * as React from 'react'
import { useState } from 'react'
import { DogImage } from './DogImage'
import './App.css'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const changeImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <div>
      <main>
        <p className="Descript">犬の画像を表示するサイトです</p>
        <div className="app-main">
          <div className="img-area"></div>
          <DogImage urls={dogUrl} isLoggedIn="デフォルト"/>
          <button onClick={changeImage}>更新</button>
        </div>
      </main>
    </div>
  )
}
