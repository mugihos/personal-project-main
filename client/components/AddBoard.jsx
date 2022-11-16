import React, { useState } from 'react'

function AddBoard() {
  //local useState to handle input
  const [input, setInput] = useState('')

  //display option retrived from the api call and list them

  function handleChange() {
    setInput(input)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setInput(event.target.value)
  }

  //submit this again as a whole form
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieSearch">Choose a movie</label>
        <input
          type="text"
          id="movieSearch"
          name="movie"
          value={input}
          onChange={handleChange}
        />
        <button className="button-52">search</button>
      </form>
    </>
  )
}

export default AddBoard
