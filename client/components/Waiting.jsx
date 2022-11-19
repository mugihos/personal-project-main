import React from 'react'
import { useSelector } from 'react-redux'

function WaitIndicator() {
  const showIndicator = useSelector((state) => state.waiting)

  return showIndicator ? (
    <h3>Please wait to load</h3>
  ) : // <img className="wait-indicator" src="#" />
  null
}

export default WaitIndicator
