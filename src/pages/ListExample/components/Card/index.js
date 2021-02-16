import React from 'react'

import './styles.sass'

const Card = ({ data }) => {
  return (
    <div className='card'>
      <h3>{data.text}</h3>
    </div>
  )
}

export default Card