import request from 'superagent'

// const rootUrl = '/api/v1'

export function getMovieData(movie) {
  return request.get(`/api/v1/search/movies/${movie}`).then((response) => {
    console.log(response.body)
    response.body
  })
}
