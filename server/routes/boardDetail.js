const express = require('express')
const router = express.Router()
const db = require('../db/db.js')

// --- routes to get/send data to board detail from db

// GET /api/v1/boards --- all of boards

router.get('/', (req, res) => {
  db.getAllBoards()
    .then((boards) => {
      res.json(boards)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/vi/board/:boardId --- individual board view
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getBoardById(id)
    .then((board) => {
      res.json(board)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/v1/board/status
router.get('/:status', (req, res) => {
  const status = req.params.status
  db.getBoardByStatus(status)
    .then((boards) => {
      res.json(boards)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// UPDATE /api/v1/board/:boardId/edit
router.patch('/:id/edit', (req, res) => {
  const id = req.params.id
  const newBoardInfo = req.body
  db.editBoard(id, newBoardInfo)
    .then(() => {
      return db.getBoardById(id)
    })
    .then((board) => {
      res.json(board)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// DELETE /api/v1/board/:boardId/delete
router.delete('/:id/delete', (req, res) => {
  const id = req.params.id
  db.deleteBoardById(id)
    .then(() => {
      return db.getAllBoards()
    })
    .then((boards) => {
      res.json(boards)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
