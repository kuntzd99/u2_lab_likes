import React, { useState } from 'react'
import '../App.css'
import LikeTotal from './LikeTotal'

const Likes = () => {
  let [totalLikes, setTotalLikes] = useState(0)

  const incrementTotalLikes = () => {
    setTotalLikes(totalLikes + 1)
  }

  const decrementTotalLikes = () => {
    if (totalLikes > 0) {
      setTotalLikes(totalLikes - 1)
    }
  }

  return (
  <div className='likeDiv'>
    <LikeTotal totalLikes={totalLikes} />
    <button onClick={incrementTotalLikes}>+</button>
    <button onClick = {decrementTotalLikes}>-</button>
  </div>
    )
}

export default Likes