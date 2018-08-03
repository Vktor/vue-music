import vueMusicService from './vueMusicService'
const trackService = {}

return trackService.search = function (q) {
    const type = 'track'
    vueMusicService.get('/search', {
        params: {q, type}
    })
    .then((res)=> res.data)
}

export default trackService