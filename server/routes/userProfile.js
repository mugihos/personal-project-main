const express = require('express')
const router = express.Router()
const db = require('../db/db.js')

// --- routes to get/send data to profile db

// router.get('/', (req, res) => {
//   db.getFruits()
//     .then((results) => {
//       res.json({ fruits: results.map((fruit) => fruit.name) })
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

module.exports = router
