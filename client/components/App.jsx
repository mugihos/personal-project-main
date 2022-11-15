import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import ViewBoards from './ViewBoards'

function App() {
  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        {/* <Header />
        <Nav />
        <ViewBoards />
        <Footer /> */}
      </div>
    </>
  )
}

export default App
