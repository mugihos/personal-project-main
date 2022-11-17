import request from 'superagent'

const rootUrl = '/api/v1'

//get list of movies that matches the searched keyword
export function getMovieData(movieTitle) {
  return request.get(`${rootUrl}/movies/${movieTitle}`).then((response) => {
    // console.log(response.body.results)
    return response.body.results
  })
}
