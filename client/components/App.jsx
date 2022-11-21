import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchBoards } from '../actions'

// --- import components ---
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import AddBoard from './AddBoard'
import EditBoard from './EditBoard'
import Home from './Home'
import Profile from './Profile'
import SingleBoard from './SingleBoard'
import AllBoards from './AllBoards'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBoards())
  }, [])

  return (
    <div className="body">
      <Header />
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addboardform" element={<AddBoard />} />
          <Route path="/board/:id/edit" element={<EditBoard />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/board/:id" element={<SingleBoard />} />
          <Route path="/boards" element={<AllBoards />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
