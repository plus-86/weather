export const formattedTime = (localTime) => {
  let hour = new Date(localTime).getHours()
  if (hour < 10) {
    hour = '0' + hour
  }
  let minute = new Date(localTime).getMinutes()
  if (minute < 10) {
    minute = '0' + minute
  }
  let day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
    new Date(localTime)
  )
  let month = new Date(localTime).getMonth() + 1
  let date = new Date(localTime).getDate()
  let year = new Date(localTime).getFullYear()

  let time =
    hour + ':' + minute + '-' + day + ' ' + month + '.' + date + ' ' + year
  return time
}

export const chooseImg = (res) => {
  let code = res.current.condition.code
  let is_day = res.current.is_day
  let clear = code === 1000
  let cloudy =
    code === 1003 ||
    code === 1006 ||
    code === 1009 ||
    code === 1030 ||
    code === 1087 ||
    code === 1135 ||
    code === 1273 ||
    code === 1276 ||
    code === 1279 ||
    code === 1282
  let rainy =
    code === 1063 ||
    code === 1069 ||
    code === 1072 ||
    code === 1150 ||
    code === 1153 ||
    code === 1180 ||
    code === 1183 ||
    code === 1186 ||
    code === 1189 ||
    code === 1192 ||
    code === 1195 ||
    code === 1204 ||
    code === 1207 ||
    code === 1240 ||
    code === 1243 ||
    code === 1246 ||
    code === 1249 ||
    code === 1252

  if (is_day === 1) {
    // is day
    if (clear) {
      res.imgUrl = 'day-clear'
    } else if (cloudy) {
      res.imgUrl = 'day-cloudy'
    } else if (rainy) {
      res.imgUrl = 'day-rainy'
    } else {
      res.imgUrl = 'day-snowy'
    }
  } else {
    // is night
    if (clear) {
      res.imgUrl = 'night-clear'
    } else if (cloudy) {
      res.imgUrl = 'night-cloudy'
    } else if (rainy) {
      res.imgUrl = 'night-rainy'
    } else {
      res.imgUrl = 'night-snowy'
    }
  }
}
