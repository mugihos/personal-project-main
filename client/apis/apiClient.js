import request from 'superagent'

const rootUrl = '/api/v1'

// --- external API ---
//get list of movies that matches the searched keyword
export function getMovieData(movieTitle) {
  return request.get(`${rootUrl}/movies/${movieTitle}`).then((response) => {
    return response.body.Search
  })
}

// --- board api ---
// GET all baords (that are public, can view without logging in)
export function getAllBoards() {
  return request
    .get(`${rootUrl}/board`)
    .then((res) => {
      return res.body
    })
    .catch(logError)
}

// ADD(POST) new board
export function addBoard(newBoard, token) {
  return request
    .post(`${rootUrl}/board/add`)
    .set('Authorization', `Bearer ${token}`)
    .send(newBoard)
    .then((res) => {
      return res.body
    })
    .catch(logError)
}

// UPDATE editing the baord
export function editBoard(id, newInfo, token) {
  return request
    .patch(`${rootUrl}/board/${id}/edit`)
    .set('Authorization', `Bearer ${token}`)
    .send(newInfo)
    .then((res) => {
      return res.body
    })
    .catch(logError)
}

// DELETE existing board
export function deleteBoardById(id, token) {
  return request
    .delete(`${rootUrl}/board/${id}/delete`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body
    })
    .catch(logError)
}

// --- userProfile api ---
// GET user profile
export function getUserInfo(id) {
  return request.get(`${rootUrl}/profile/${id}`).then((res) => {
    console.log(res.body)
    return res.body
  })
}

// user error
function logError(err) {
  if (err.response.text === 'Username taken') {
    throw new Error('Username already taken - please choose another one')
  } else if (err.message === 'Forbidden') {
    ;('Only logged in user can perform this action')
  } else {
    console.error('Error consuming API', err.message)
    throw err
  }
}
