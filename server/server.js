const path = require('path')
const express = require('express')
const server = express()

// const userProfile = require('./routes/userProfile')
// const boardDetail = require('./routes/boardDetail')
const apis = require('./apis')

// --- accessing public file ---
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// --- database stuff ---
// server.use('/api/v1/profile', userProfile)
// server.use('/api/v1/board', boardDetail)

// --- api stuff ---
server.use('/api/v1/movies', apis)

module.exports = server
