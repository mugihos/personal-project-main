import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { removeBoard } from '../actions'

function SingleBoard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const id = Number(params.id)
  const allBoards = useSelector((state) => state.boards)

  const singleBoard = allBoards.find((board) => id === board.id)
  if (!singleBoard) {
    return <div></div>
  }

  function handleDelete(event) {
    event.preventDefault()
    dispatch(removeBoard(id))
    navigate('/')
  }

  function handleUpdate() {}

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
          <button className="button-23" onClick={handleUpdate}>
            Edit board
          </button>
          <button className="button-23" onClick={handleDelete}>
            Delete board
          </button>
        </div>
      )}
    </div>
  )
}

export default SingleBoard
