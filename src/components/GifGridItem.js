import React from 'react'
import 'animate.css'

const GifGridItem = ( { id, title, url} ) => {

  return (
    <div className='card animate__zoomIn animate__animated'>
      <img src={ url} alt={title} />
      <p> { title } </p>
    </div>
  )
}

export default GifGridItem