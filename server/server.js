const path = require('path')
const express = require('express')
const server = express()

const userProfile = require('./routes/userProfile')
const boardDetail = require('./routes/boardDetail')
const externalApis = require('./externalApis')

// --- accessing public file ---
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// --- database stuff ---
server.use('/api/v1/profile', userProfile)
server.use('/api/v1/board', boardDetail)

// --- external api stuff ---
server.use('/api/v1/movies', externalApis)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
