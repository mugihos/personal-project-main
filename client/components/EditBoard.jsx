import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { editBoardData } from '../actions'
import SearchMovie from './SearchMovie'

function EditBoard() {
  const params = useParams()
  const id = Number(params.id)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const allBoards = useSelector((state) => state.boards)
  console.log(allBoards)

  const singleBoard = allBoards?.find((board) => id === board.id)

  // -- edit process --
  const [newInfo, setNewInfo] = useState({
    id: '',
    board_title: '',
    mood: '',
    colour: '',
    story: '',
  })

  useEffect(() => {
    setNewInfo({
      id: singleBoard?.id || '',
      board_title: singleBoard?.board_title || '',
      mood: singleBoard?.mood || '',
      colour: singleBoard?.colour || '',
      story: singleBoard?.story || '',
    })
  }, [allBoards])

  function handleChange(event) {
    setNewInfo({
      ...newInfo,
      [event.target.name]: event.target.value,
    })
  }

  function handleUpdate(event) {
    event.preventDefault()
    dispatch(editBoardData(id, newInfo))
    navigate(`/board/${id}`)
  }

  if (!singleBoard) {
    return <div></div>
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
                value={newInfo.board_title}
              />
            </li>
            <li className="form-row">
              <label htmlFor="mood">Mood</label>
              <input
                type="text"
                name="mood"
                onChange={handleChange}
                className="add-board-input"
                value={newInfo.mood}
              />
            </li>
            <li className="form-row">
              <label htmlFor="story">Comment</label>
              <input
                type="text"
                name="story"
                onChange={handleChange}
                className="add-board-input"
                value={newInfo.story}
              />
            </li>
            <li className="form-row">
              <label htmlFor="colour">Colour</label>
              <input
                type="text"
                name="colour"
                onChange={handleChange}
                className="add-board-input"
                value={newInfo.colour}
              />
            </li>
            <li className="form-row">
              <label htmlFor="movie">Movie selected</label>
              <input
                type="text"
                name="movie_info"
                onChange={handleChange}
                className="add-board-input"
                value={newInfo.movie_info}
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
