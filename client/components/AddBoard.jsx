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
    console.log(event.target.name)
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
      <form className="add-board-form">
        <input
          type="text"
          name="board_title"
          id="board_title"
          onChange={handleChange}
        />
        <input type="text" name="mood" onChange={handleChange} />
        <input type="text" name="story" onChange={handleChange} />
        <input type="text" name="colour" onChange={handleChange} />
        <input type="text" name="movie_data" onChange={handleChange} />
        <button onClick={handleAdd}>Add board</button>
      </form>
    </div>
  )
}

export default AddBoard
