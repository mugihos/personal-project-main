import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

// --- import components ---
import SearchMovie from './SearchMovie'
import Footer from './Footer'
import MovieList from './MovieList'
import Header from './Header'
import Nav from './Nav'
import WaitIndicator from './Waiting'
import AddBoard from './AddBoard'
import EditBoard from './EditBoard'
import Home from './Home'
import Profile from './Profile'
// import ViewBoards from './ViewBoards'

function App() {
  return (
    <div className="body">
      <Header />
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addboardform" element={<AddBoard />} />
          <Route path="/editboard/:id" element={<EditBoard />} />
          <Route path="/profile" element={<Profile />} />
          {/* <SearchMovie>
          <WaitIndicator />
        </SearchMovie>
        <MovieList /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
