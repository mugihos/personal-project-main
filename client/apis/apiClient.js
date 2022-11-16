import request from 'superagent'

const rootUrl = '/api/v1'

// export function getFruits() {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }
rootUrl
export function getMovieData(movie) {
  return request.get(`${rootUrl}/search/movies/${movie}`).then((response) => {
    console.log(response)
    response.body
  })
}
