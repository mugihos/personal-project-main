import React from 'react'
import SearchMovie from './SearchMovie'
import Footer from './Footer'
import MovieList from './MovieList'
import Header from './Header'
import Nav from './Nav'
import WaitIndicator from './Waiting'
// import ViewBoards from './ViewBoards'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Nav />
        <SearchMovie>
          <WaitIndicator />
        </SearchMovie>
        <MovieList />
        <Footer />
      </div>
    </>
  )
}

export default App
