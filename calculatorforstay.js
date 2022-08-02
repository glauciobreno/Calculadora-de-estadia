// pegar dia e hora de entrada
const DayHourIn = "26/05/2022 10:00:05"

//pegar dia e hora de saida
const DayHourOut = "26/07/2022 22:25:25"

function convertDateHourToMs(dateHour) {
  const [date, hours] = dateHour.split(' ')
  const [day, month, year] = date.split('/')
  const [hour, minutes, seconds] = hours.split(':')

//console.log(day, month, year, hour, minutes, seconds)

  const newDate = new Date(year, month -1, day, hour, minutes, seconds)
return (newDate.getTime())

}
/* mostra no console a conversão de entrada e saida em mls da função convertDateHourToMs
//console.log(convertDateHourToMs(DayHourIn))
//console.log(convertDateHourToMs(DayHourOut))*/
//converte o tempo de estadia em segundos
const stayedTimeInSeconds = (convertDateHourToMs(DayHourOut) - convertDateHourToMs(DayHourIn)) / 1000
//console.log(stayedTimeInSeconds)
// converte o tempo de estadia em minutos
const stayedTimeInHours = stayedTimeInSeconds / 3600
//console.log(stayedTimeInHours)

const dayInSeconds = 24 * 60 * 60
const hourInSeconds = 60 * 60
const minutesInSeconds = 60


const days = Math.floor(stayedTimeInSeconds / dayInSeconds)
const hours = Math.floor(stayedTimeInSeconds / hourInSeconds) % 24
const minutes = Math.floor(stayedTimeInSeconds / minutesInSeconds) % 60
const seconds = stayedTimeInSeconds % 60

console.log(days, hours, minutes, seconds)
//fim