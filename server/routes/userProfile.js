const express = require('express')
const router = express.Router()
const db = require('../db/db.js')
const checkJwt = require('../auth0')
const { off } = require('superagent')

// --- routes to get/send data to profile db
//not too sure how to add new profile? sign-up situation? Auth0?

// GET /api/v1/profile/
router.get('/', checkJwt, (req, res) => {
  const auth0_id = req.auth?.sub

  if (!auth0_id) {
    res.send(null)
  } else {
    db.getProfileInfo(auth0_id)
      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
      })
  }
})
router.get('/:id', checkJwt, (req, res) => {
  // const auth0_id = req.auth?.sub

  // if(!auth0_id) {
  //   res.send(null)
  // } else {}
  const id = req.params.id
  db.getProfileInfo(id)
    .then((profileInfo) => {
      res.json(profileInfo)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// UPDATE /api/v1/profile/edit
router.patch('/edit', checkJwt, (req, res) => {
  const newProfileInfo = req.body
  db.editProfileInfo(newProfileInfo)
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

// DELETE /api/v1/profile/delete
router.delete('/', checkJwt, (req, res) => {
  db.deleteProfileInfo()
    .then(() => {
      return console.log('delete successful')
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
