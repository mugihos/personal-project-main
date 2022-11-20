import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

function SingleBoard() {
  const params = useParams()
  const id = Number(params.id)
  const allBoards = useSelector((state) => state.boards)

  const singleBoard = allBoards.find((board) => id === board.id)
  if (!singleBoard) {
    return <div></div>
  }
  return (
    <div>
      {singleBoard && (
        <div>
          <h1>{singleBoard.board_title}</h1>
          <img
            className="img-single"
            src={singleBoard.movie_image}
            alt={singleBoard.movie_title}
          />
          <h4>{singleBoard.story}</h4>
        </div>
      )}
    </div>
  )
}

export default SingleBoard
