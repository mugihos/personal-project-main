import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const displayBoards = useSelector((state) => state.boards)

  return (
    <div className="home-body">
      <h3>Connecting all the things you love in one board</h3>
      <div className="container">
        {displayBoards?.map((board) => {
          return (
            <div key={board.id} className="box">
              <h4>{board.board_title}</h4>
              <Link to={`/board/${board.id}`}>
                <img
                  src={board.movie_image}
                  alt={board.movie_title}
                  className="board-img"
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Home
