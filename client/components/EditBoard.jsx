import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { editBoardData } from '../actions'
import SearchMovie from './SearchMovie'

function EditBoard() {
  const params = useParams()
  const id = Number(params.id)
  const allBoards = useSelector((state) => state.boards)
  const singleBoard = allBoards.find((board) => id === board.id)
  if (!singleBoard) {
    return <div></div>
  }

  // -- edit process --
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [newInfo, setNewInfo] = useState({
    board_title: '',
    mood: '',
    colour: '',
    story: '',
  })

  function handleChange(event) {
    setNewInfo({
      ...newInfo,
      [event.target.name]: event.target.value,
    })
  }

  function handleUpdate(event) {
    event.preventDefault()
    dispatch(editBoardData(id, newInfo))
    setNewInfo({
      board_title: '',
      mood: '',
      colour: '',
      story: '',
    })
    navigate(`/board/${id}`)
  }

  return (
    <>
      <div>
        <img
          className="img-single"
          src={singleBoard.movie_image}
          alt={singleBoard.movie_title}
        />
      </div>
      <div>
        <ul>
          <form className="add-board-form">
            <li className="form-row">
              <label htmlFor="board-title">Board title</label>
              <input
                type="text"
                name="board_title"
                id="board_title"
                onChange={handleChange}
                className="add-board-input"
              />
            </li>
            <li className="form-row">
              <label htmlFor="mood">Mood</label>
              <input
                type="text"
                name="mood"
                onChange={handleChange}
                className="add-board-input"
              />
            </li>
            <li className="form-row">
              <label htmlFor="story">Comment</label>
              <input
                type="text"
                name="story"
                onChange={handleChange}
                className="add-board-input"
              />
            </li>
            <li className="form-row">
              <label htmlFor="colour">Colour</label>
              <input
                type="text"
                name="colour"
                onChange={handleChange}
                className="add-board-input"
              />
            </li>
            <li className="form-row">
              <label htmlFor="movie">Movie selected</label>
              <input
                type="text"
                name="movie_info"
                onChange={handleChange}
                className="add-board-input"
              />
            </li>
          </form>
        </ul>
        <SearchMovie />
        <button className="button-23" onClick={handleUpdate}>
          Save board
        </button>
      </div>
    </>
  )
}

export default EditBoard
