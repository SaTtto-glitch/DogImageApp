import * as React from 'react'

export const DogImage = props => {
  const urls = props.urls
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <img src={urls} />
  } else {
    if (urls === null) {
      return <p>Loading...</p>
    } else {
      return (
        <div className="BreedsSelectdisc">
          {urls.map(url => {
            return (
              <li key={url}>
                <img src={url} />
              </li>
            )
          })}
        </div>
      )
    }
  }
}
