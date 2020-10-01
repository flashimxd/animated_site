import React, { useState } from 'react'

const useWalk = (maxSteps) => {
  const [ position, setPosition ] = useState({ x: 0, y: 0 })
  const [ step, setSep ] = useState(0)
  const [ dir, setDir ] = useState(0)
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3
  }

  const stepSize = 16

  const modifier = {
    down: { x:0 , y: stepSize },
    left: { x: -stepSize, y: 0} ,
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize}
  }

  const walk = dir => {
    setDir(prevDir => {
      if(prevDir === directions[dir]) move(dir)
      return directions[dir]
    })
    setSep(prevStep => prevStep < maxSteps - 1 ? prevStep + 1 : 0 )
  }

  const move = dir => {
    setPosition(prevPosition => ({
      x: prevPosition.x + modifier[dir].x,
      y: prevPosition.y + modifier[dir].y
    }))
  }

  return {
    walk,
    dir,
    step,
    position
  }
}


export default useWalk