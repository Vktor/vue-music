import vueMusicService from './vue-music.js'
const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  // vueMusicService.defaults({mode: 'no-cors'})
  return vueMusicService.get('/search', {
    params: {q, type}
  })
    .then((res) => res.data)
}

trackService.getById = function (id) {
  return vueMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}
export default trackService
