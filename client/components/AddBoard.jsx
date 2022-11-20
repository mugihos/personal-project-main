import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddBoard() {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    board_title: '',
    mood: '',
    colour: '',
    story: '',
  })
  const navigate = useNavigate()

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
    // const { name, value } = event.target
    // setInput((newBoardInfo) => {
    //   return {}
    // })
  }

  function handleAdd(event) {
    event.preventDefault()
    dispatch(submitBoard(newBoard))
    setInput({
      board_title: '',
      mood: '',
      colour: '',
      story: '',
    })
    navigate('/')
  }

  return (
    <div>
      <h3>Add new mood board</h3>
      <img
        className="addboard-img"
        src="/images/film2.jpg"
        alt="film negative zoom"
      />
      <ul>
        <form className="add-board-form">
          <li className="form-row">
            <label htmlFor="board-title">Title</label>
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
              name="movie_data"
              onChange={handleChange}
              className="add-board-input"
            />
          </li>
        </form>
      </ul>
      <button className="button-23" onClick={handleAdd}>
        Add board
      </button>
    </div>
  )
}

export default AddBoard
