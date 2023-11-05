let getcurrent = document.querySelector('#getcurrent')
let upcomingweather = document.querySelector('#upcomingweather')
let inputcurrent = document.querySelector('#inputcurrent')

getcurrent.addEventListener('click', fetchdata)

function fetchdata(e) {
  e.preventDefault()

  fetch(
    'https://api.weatherbit.io/v2.0/forecast/daily?&city=' +
      inputcurrent.value +
      '&key=7f824d08f1f04c4aac866499d0b05822'
  )
    .then((responsei) => responsei.json())
    .then((resulti) => {
      const ctx = document.getElementById('myChart').getContext('2d')

      let data = [],
        labels = []

      for (let n = 0; n < 7; n++) {
        data.push(resulti.data[n].temp)
        labels.push(resulti.data[n].valid_date)
      }
      let resetchart = document.querySelector('#resetchart')

      resetchart.addEventListener('click', () => {
        myChart.destroy()
      })

      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: '° celsius in ' + resulti.city_name + ' this week',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: 'lightyellow',
                callback: function (value) {
                  return value + ' °C'
                },
              },
              grid: { color: 'lightyellow' },
            },
            x: {
              ticks: {
                color: 'lightyellow',
              },
              grid: { color: 'lightyellow' },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: 'lightyellow',
              },
            },
          },
        },
      })
    })

  fetch(
    'https://api.weatherbit.io/v2.0/forecast/daily?&city=' +
      inputcurrent.value +
      '&key=7f824d08f1f04c4aac866499d0b05822'
  )
    .then((responsei) => responsei.json())
    .then((resulti) => {
      const ctx = document.getElementById('myChart2').getContext('2d')

      let data = [],
        labels = []

      for (let n = 0; n < 7; n++) {
        data.push(resulti.data[n].wind_spd)
        labels.push(resulti.data[n].valid_date)
      }
      let resetchart = document.querySelector('#resetchart')

      resetchart.addEventListener('click', () => {
        myChart.destroy()
      })

      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                'average m/s windspeed in ' + resulti.city_name + ' this week',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: 'lightyellow',
                callback: function (value) {
                  return value + ' m/s'
                },
              },
              grid: { color: 'lightyellow' },
            },
            x: {
              ticks: {
                color: 'lightyellow',
              },
              grid: { color: 'lightyellow' },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: 'lightyellow',
              },
            },
          },
        },
      })
    })
}
