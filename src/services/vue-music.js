import trae from 'trae'
import configService from './config'

constvueMusicService = trae.create({
    baseUrl: configService.apiUrl
})

export default vueMusicService