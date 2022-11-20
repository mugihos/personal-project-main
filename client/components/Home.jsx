import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const displayBoards = useSelector((state) => state.boards)
  return (
    <div className="home-body">
      <h3>This is the home page</h3>
      <div className="container">
        {displayBoards?.map((board) => {
          return (
            <div key={board.id} className="box">
              <h4>{board.board_title}</h4>
              <img
                src={board.movie_image}
                alt={board.movie_title}
                className="board-img"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Home
