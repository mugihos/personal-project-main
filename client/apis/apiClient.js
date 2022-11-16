import request from 'superagent'

const rootUrl = '/api/v1'

export function getMovieData(movieTitle) {
  return request.get(`${rootUrl}/movies/${movieTitle}`).then((response) => {
    // console.log(response.body.results)
    response.body.results
  })
}
