const express = require('express')
const request = require('superagent')
const server = express()
const dotenv = require('dotenv')
dotenv.config()

// --- api key stuff ---
require('dotenv').config()
const apiKey = process.env.IMDB_KEY

// --- external movie API ---
server.get('/:title', (req, res) => {
  const title = req.params.title
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

// -- trying TMDB since testing limi ---
// server.get('/:title', (req, res) => {
//   const title = req.params.title
//   request.get(``)
// })

// --- external colour API ---

// --- external book API ---

// --- external music API ---
module.exports = server
