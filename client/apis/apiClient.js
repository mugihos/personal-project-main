import request from 'superagent'

const rootUrl = '/api/v1'

// --- external API ---
//get list of movies that matches the searched keyword
export function getMovieData(movieTitle) {
  return request.get(`${rootUrl}/movies/${movieTitle}`).then((response) => {
    console.log(response.body.results)
    return response.body.results
  })
}

// --- board api ---
// GET all baords
export function getAllBoards() {
  return request.get(`${rootUrl}/board`).then((res) => {
    return res.body
  })
}

// ADD(POST) new board
export function addBoard(newBoard) {
  return request
    .post(`${rootUrl}/board/add`)
    .send(newBoard)
    .then((res) => {
      return res.body
    })
}

// UPDATE editing the baord
export function editBoard(id, newInfo) {
  return request
    .patch(`${rootUrl}/board/${id}/edit`)
    .send(newInfo)
    .then((res) => {
      return res.body
    })
}

// DELETE existing board
export function deleteBoardById(id) {
  return request.delete(`${rootUrl}/board/${id}/delete`).then((res) => {
    return res.body
  })
}

// --- userProfile api ---
// GET user profile
export function getUserInfo(id) {
  return request.get(`${rootUrl}/profile/${id}`).then((res) => {
    console.log(res.body)
    return res.body
  })
}
