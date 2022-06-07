import instance from './request'

export const getcurrentWeather = (params) =>
  instance.get('/current.json', { params })
