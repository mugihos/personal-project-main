import React from 'react'

function AddBoard() {
  //local useState to handle input
  //display option retrived from the api call and list them

  function handleChange() {}

  function handleSubmit() {}

  //submit this again as a whole form
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieSearch">Choose a movie</label>
        <input
          type="text"
          id="movieSearch"
          name="movie"
          onChange={handleChange}
        />
        <button className="button-52">search</button>
      </form>
    </>
  )
}

export default AddBoard
