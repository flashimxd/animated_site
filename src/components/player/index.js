
import React from 'react'
import Actor from '../actor'
import useKeyPress from '../../hooks/use-key-press'
import useWalk from '../../hooks/use-walk'

const Player = ({ skin }) => {
  const { dir, step, walk, position } = useWalk(3)
  const data = { w: 32, h:32 }

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase())

    e.preventDefault()
  })

  return (
    <Actor 
      sprite={`/assets/images/${skin}.png`} 
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  )
}

export default Player
