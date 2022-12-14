const connection = require('./connection')

// --- user table ---
//GET user profile data
function getProfileInfo(id, db = connection) {
  return db('users').select().where({ id }).first()
}

//UPATE user profile data
function editProfileInfo(newProfileInfo, db = connection) {
  return db('users').update(newProfileInfo)
}

//DELETE user profile data
function deleteProfileInfo(id, db = connection) {
  return db('users').del()
}

//add new board id to profile data ????????
// this may be possible with the join table?
// function getUserBoard(newBoardId, db = connection) {
//   return db('users').insert()
// }

// --- board table ---
//GET all board data
function getAllBoards(db = connection) {
  return db('board').select()
}

//GET board by id
function getBoardById(id, db = connection) {
  return db('board').where({ id }).select().first()
}

// //GET board by status
// function getBoardByStatus(status, db = connection) {
//   return db('board').where({ status }).select()
// }

//POST new board
function addNewBoard(newBoardInfo, db = connection) {
  return db('board').insert(newBoardInfo)
}

//UPDATE board
function editBoard(id, updatedBoardInfo, db = connection) {
  return db('board').where({ id }).update(updatedBoardInfo)
}

//DELETE board
function deleteBoardById(id, db = connection) {
  return db('board').where({ id }).del()
}

//JOIN table to get all boards associated with the user

module.exports = {
  getProfileInfo,
  // getUserBoard,
  editProfileInfo,
  deleteProfileInfo,
  getAllBoards,
  getBoardById,
  // getBoardByStatus,
  addNewBoard,
  editBoard,
  deleteBoardById,
}
