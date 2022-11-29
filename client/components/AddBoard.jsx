import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SearchMovie from './SearchMovie'
import { submitBoard } from '../actions'
import { useAuth0 } from '@auth0/auth0-react'
// import ColorPicker from './Colour'

function AddBoard() {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [token, setToken] = useState('')
  useEffect(() => {
    async function getToken() {
      const currentToken = await getAccessTokenSilently()
      setToken(currentToken)
    }
    getToken()
  }, [])
  // basic form info input
  const [input, setInput] = useState({
    board_title: '',
    mood: '',
    story: '',
    status: '', //select between publish, draft, private
  })
  // movie state passed to SearchMovie component
  const [movie, setMovie] = useState({})

  // color state passed to Colour component
  // const [colour, setColour] = useState({})

  // add movie search result to movie state
  function addMovieToBoard(newMovie) {
    setMovie(newMovie)
  }

  // add selected colour to colour state
  // function addColour(newColour) {
  //   setColour({ colour: newColour.hexString })
  // }
  // handle input values
  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
      ...movie,
      // colour: colour,
    })
  }

  function handleAdd(event) {
    event.preventDefault()
    dispatch(submitBoard(input))
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
          <SearchMovie selectedMovie={addMovieToBoard} />
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
            <textarea
              type="text"
              name="story"
              onChange={handleChange}
              className="add-board-input"
            />
          </li>
          <li className="form-row">
            <label htmlFor="colour">Colour</label>
            {/* <ColorPicker chooseColour={addColour} color={colour.colour} /> */}
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
