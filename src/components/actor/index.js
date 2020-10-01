
import React from 'react'
import Sprite from '../sprites'

const Actor = ({ sprite, data, step = 0, dir = 0, position={ x: 0, y: 0 } }) => {
  const { h, w } = data
  return (
    <Sprite
      position={position}
      image={sprite} 
      data={{ 
        x: step * w, 
        y: dir * h, 
        w, 
        h
      }}
      />
  )
  }

export default Actor