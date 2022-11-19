import React from 'react'
import SearchMovie from './SearchMovie'
import Footer from './Footer'
import MovieList from './MovieList'
import Header from './Header'
import Nav from './Nav'
// import ViewBoards from './ViewBoards'

function App() {
  return (
    <>
      <div className="container">
        {/* <h1>Fullstack Boilerplate - with Fruits!</h1> */}
        <Header />
        <Nav />
        <SearchMovie />
        {/* <MovieList /> */}
        <Footer />
      </div>
    </>
  )
}

export default App
