import React, { useState } from 'react'
import '../App.css'

const Likes = () => {
  let [totalLikes, setTotalLikes] = useState(0)

  const incrementTotalLikes = () => {
    setTotalLikes(totalLikes + 1)
  }

  return <button onClick={incrementTotalLikes}>{totalLikes}</button>
}

export default Likes