let getcurrent = document.querySelector('#getcurrent')
let yourweather = document.querySelector('#yourweather')
let inputcurrent = document.querySelector('#inputcurrent')
let image1 = document.querySelector('#image1')

yourweather.style.display = 'none'

getcurrent.addEventListener('click', fetchdata)

function fetchdata(e) {
  e.preventDefault()
  fetch(
    'https://api.weatherbit.io/v2.0/current?&city=' +
      inputcurrent.value +
      '&key=7f824d08f1f04c4aac866499d0b05822'
  )
    .then((responsei) => responsei.json())
    .then((resulti) => {
      yourweather.innerHTML = ''

      yourweather.innerHTML += `<img src="${
        'https://www.weatherbit.io/static/img/icons/' +
        resulti.data[0].weather.icon +
        '.png'
      }" />`

      yourweather.innerHTML += '\n' + resulti.data[0].city_name + '\n\n'
      yourweather.innerHTML +=
        resulti.data[0].temp +
        '°celsius\nWind ' +
        resulti.data[0].wind_spd +
        'm/s \nSun goes up ' +
        resulti.data[0].sunrise +
        '\nSun goes down ' +
        resulti.data[0].sunset +
        '\n\n'
      console.log(yourweather)

      yourweather.style.display = 'inline-block'
    })
}

// WEBSTORAGEFUNKTION
let latest = document.querySelector('#latest')
let city = localStorage.getItem('city')

if (city === null) {
  latest.innerHTML = '\n' + 'Latest search'
} else {
  latest.innerHTML += city
}

getcurrent.addEventListener('click', history)

function history() {
  localStorage.setItem('city', inputcurrent.value)
  if (localStorage.getItem('city')) {
    city = localStorage.getItem('city')
    latest = document.querySelector('#latest')
    latest.innerHTML += '\n' + city
  }
}

let removecity = document.querySelector('#removecity')

removecity.addEventListener('click', function () {
  localStorage.removeItem('city')
  latest.textContent = 'Latest search'
})

console.log(city)

// RANDOM FÄRG

let getrandomnumber = (maxnum) => {
  return Math.floor(Math.random() * maxnum)
}

let getrandomcolor = () => {
  const h = getrandomnumber(360)
  return `hsl(${h}deg, 100%, 90%)`
}

let setbackgroundcolor = () => {
  let randomcolor = getrandomcolor()
  document.querySelector('#yourweather').style.backgroundColor = randomcolor
}
setbackgroundcolor()

setInterval(() => {
  setbackgroundcolor()
}, 1500)
