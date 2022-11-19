import request from 'superagent'

const rootUrl = '/api/v1/'
const boardRootUrl = '/api/v1/board/'
const userRootUrl = '/api/v1/profile/'

// --- external API ---
//get list of movies that matches the searched keyword
export function getMovieData(movieTitle) {
  return request.get(`${rootUrl}/movies/${movieTitle}`).then((response) => {
    // console.log(response.body.results)
    return response.body.results
  })
}

// --- board api ---
//GET all baords
export function getAllBoards() {
  return request.get(boardRootUrl).then((res) => {
    return res.body
  })
}

//GET board by ID
export function getBoardById(id) {
  return request.get(`${boardRootUrl}${id}`).then((res) => {
    return res.body
  })
}

//GET board by status
export function getBoardByStatus(status) {
  return request.get(`${boardRootUrl}${status}`).then((res) => {
    return res.body
  })
}

//UPDATE editing the baord
export function editBoard(id, newInfo) {
  return request
    .patch(`${boardRootUrl}${id}`)
    .send(newInfo)
    .then((res) => {
      return res.body
    })
}

//DELETE existing board
export function deleteBoardById(id) {
  return request.delete(`${boardRootUrl}${id}`).then((res) => {
    return res.body
  })
}

// --- userProfile api ---
