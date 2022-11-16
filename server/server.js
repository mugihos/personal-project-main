const path = require('path')
const express = require('express')
const request = require('superagent')
const server = express()

// const userProfile = require('./routes/userProfile')
// const boardDetail = require('./routes/boardDetail')

// --- api key stuff ---
require('dotenv').config()
const apiKey = process.env.IMDB_KEY

// --- accessing public file ---
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// --- database stuff ---
// server.use('/api/v1/profile', userProfile)
// server.use('/api/v1/board', boardDetail)

// --- external movie API ---
server.get('/api/v1/search/movies', (req, res) => {
  const title = req.query.title
  request
    .get(`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${title}`)
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.log(err)
      res.send('err')
    })
})
// --- external colour API ---

// --- external book API ---

// --- external music API ---

module.exports = server
