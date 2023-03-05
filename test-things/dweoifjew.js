let exempel = document.querySelector("#väderexempel");

console.log(exempel.textContent);

jadå = prompt("vilken stad?");

fetch(
  "https://api.weatherbit.io/v2.0/current?&city=" +
    jadå +
    "&key=385b85d8358c485ea777f92bb544a61a"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    exempel.textContent =
      jadå +
      " " +
      resulti.data[0].temp +
      "°celsius" +
      "and the sun goes up" +
      resulti.data[0].sunrise;
  });

let exempel = document.querySelector("#väderexempel");

console.log(exempel.textContent);

jadå = prompt("vilken stad?");

fetch(
  " https://api.weatherbit.io/v2.0/forecast/daily?&city=gothenburg&key=385b85d8358c485ea777f92bb544a61a"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    exempel.textContent =
      jadå +
      " " +
      resulti.data[0].temp +
      "°celsius" +
      "and the sun goes up" +
      resulti.data[0].sunrise;
    console.log(resulti.data[n]);
  });

let getcurrent = document.querySelector("#getcurrent");
let yourweather = document.querySelector("#yourweather");
let inputcurrent = document.querySelector("#inputcurrent");

getcurrent.addEventListener("click", fetchdata);
function fetchdata() {
  fetch(
    "https://api.weatherbit.io/v2.0/current?&city=" +
      inputcurrent.value +
      "&key=385b85d8358c485ea777f92bb544a61a"
  )
    .then((responsei) => responsei.json())
    .then((resulti) => {
      yourweather.textContent +=
        "\n\n" +
        resulti.data[0].temp +
        "°celsius\nWind " +
        resulti.data[0].wind_spd +
        "m/s \nsun goes up " +
        resulti.data[0].sunrise +
        "\nSun goes down " +
        resulti.data[0].sunset;
    });
}
console.log(inputcurrent.value);

// FUNKAR COOLT

let city = localStorage.getItem("city");
latest.innerHTML += city;

getcurrent.addEventListener("click", history);

function history() {
  localStorage.setItem("city", inputcurrent.value);
  if (localStorage.getItem("city")) {
    let city = localStorage.getItem("city");
    let latest = document.querySelector("#latest");
    latest.innerHTML += "\n" + city;
  } else {
    latest.textContent = "No history";
  }
}

let removecity = document.querySelector("#removecity");

removecity.addEventListener("click", function () {
  localStorage.removeItem("city");
  latest.textContent = "No history";
});

console.log(city);

// senaste

let city = localStorage.getItem("city");

getcurrent.addEventListener("click", history);

function history() {
  localStorage.setItem("city", inputcurrent.value);

  let city = localStorage.getItem("city");
  let latest = document.querySelector("#latest");
  if (city) {
    latest.innerHTML += "\n" + city;
  } else {
    latest.innerHTML += "\n" + "";
  }
}

let removecity = document.querySelector("#removecity");

removecity.addEventListener("click", function () {
  localStorage.removeItem("city");
  latest.innerHTML = "Latest search" + "\n";
});

console.log(city);
//  UPCOMING WEATHER

let getcurrent = document.querySelector("#getcurrent");
let upcomingweather = document.querySelector("#upcomingweather");
let inputcurrent = document.querySelector("#inputcurrent");

getcurrent.addEventListener("click", fetchdata);

function fetchdata(e) {
  e.preventDefault();
  for (let n = 0; n < 7; n++) {
    fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?&city=" +
        inputcurrent.value +
        "&key=385b85d8358c485ea777f92bb544a61a"
    )
      .then((responsei) => responsei.json())
      .then((resulti) => {
        upcomingweather.textContent +=
          resulti.city_name +
          "\n" +
          resulti.data[n].valid_date +
          "\n\n" +
          resulti.data[n].temp +
          "°celsius\nWind " +
          resulti.data[n].wind_spd +
          "m/s \nClouds " +
          resulti.data[n].clouds +
          "%" +
          "\n\n";

        const ctx = document.getElementById("myChart").getContext("2d");

        let data = [],
          labels = [];

        for (let n = 0; n < 7; n++) {
          data.push(resulti.data[n].temp);
          labels.push(resulti.data[n].valid_date);
        }
        console.log(data);
        const myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "# of Votes",
                data: data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      });
  }
}

// SGAOIRGMA

let showcity1 = document.querySelector("#showcity1");
let showcity2 = document.querySelector("#showcity2");
let viewcity = document.querySelector("#viewcity");
showcity2.addEventListener("click", fetchdata);
function fetchdata(e) {
  e.preventDefault();
  let viewcity = document.querySelector("#viewcity");
  fetch("https://avancera.app/cities/")
    .then((responsei) => responsei.json())
    .then((resulti) => {
      for (let n = 0; n < resulti.length; n++) {
        viewcity.innerHTML +=
          resulti[n].name + ", " + resulti[n].population + "\n";
      }
      console.log(resulti);
    });
}
let addcity1 = document.querySelector("#addcity1");
let addcity2 = document.querySelector("#addcity2");
let addcity3 = document.querySelector("#addcity3");
addcity3.addEventListener("click", fetchdata2);
function fetchdata2(e) {
  let cityname = addcity1.value;
  let citypop = Number(addcity2.value);
  console.log(typeof citypop);
  e.preventDefault();
  fetch("https://avancera.app/cities/", {
    body: JSON.stringify({ name: cityname, population: citypop }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then((responsei) => responsei.json())
    .then((resulti) => {
      console.log(resulti);
    });
}

// TREDJE

let editcity1 = document.querySelector("#editcity1");
let editcity2 = document.querySelector("#editcity2");
let editcity3 = document.querySelector("#editcity3");
let editcity4 = document.querySelector("#editcity4");
let cityname = editcity1.value;
let citypop = Number(editcity2.value);
let cityid = editcity3.value;
let vieweditcity = document.querySelector("#vieweditcity");

editcity4.addEventListener("click", fetchdata3);
function fetchdata3(e) {
  e.preventDefault();
  fetch("https://avancera.app/cities/")
    .then((responsei) => responsei.json())
    .then((resulti) => {
      for (let n = 0; n < resulti.length; n++) {
        vieweditcity.innerHTML += resulti[n].id + "\n";
      }
    });
}

// MITT FÖRSÖK

let showcity1 = document.querySelector("#showcity1");
let showcity2 = document.querySelector("#showcity2");
let viewcity = document.querySelector("#viewcity");
showcity2.addEventListener("click", fetchdata);
function fetchdata(e) {
  e.preventDefault();
  let viewcity = document.querySelector("#viewcity");
  fetch("https://avancera.app/cities/")
    .then((responsei) => responsei.json())
    .then((resulti) => {
      for (let n = 0; n < resulti.length; n++) {
        viewcity.innerHTML +=
          resulti[n].name + ", " + resulti[n].population + "\n";
      }
      console.log(resulti);
    });
}
let addcity1 = document.querySelector("#addcity1");
let addcity2 = document.querySelector("#addcity2");
let addcity3 = document.querySelector("#addcity3");
addcity3.addEventListener("click", fetchdata2);
function fetchdata2(e) {
  let cityname = addcity1.value;
  let citypop = Number(addcity2.value);
  console.log(typeof citypop);
  e.preventDefault();
  fetch("https://avancera.app/cities/", {
    body: JSON.stringify({ name: cityname, population: citypop }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then((responsei) => responsei.json())
    .then((resulti) => {
      console.log(resulti);
    });
}
let editcity1 = document.querySelector("#editcity1");
let editcity2 = document.querySelector("#editcity2");
let editcity3 = document.querySelector("#editcity3");
let editcity4 = document.querySelector("#editcity4");
let cityname = editcity1.value;
let citypop = Number(editcity2.value);
let cityid = editcity3.value;
editcity4.addEventListener("click", fetchdata3);
function fetchdata3(e) {
  e.preventDefault();
  fetch("https://avancera.app/cities/")
    .then((responsei) => responsei.json())
    .then((resulti) => {
      for (let n = 0; n < resulti.length; n++) {
        vieweditcity.innerHTML += resulti[n].id + "\n";
      }
      fetch("https://avancera.app/cities/" + cityid, {
        body: JSON.stringify({
          id: cityid,
          name: cityname,
          population: citypop,
        }),
        headers: { "Content-Type": "application/json" },
        method: "PUT",
      })
        .then((responsei) => responsei.json())
        .then((resulti) => {
          for (let n = 0; n < resulti.length; n++) {
            vieweditcity.innerHTML += resulti[n].id + "\n";
          }
          console.log(resulti);
        });
    });
}

// Min version den riktiga

let editcity1 = document.querySelector("#editcity1");
let editcity2 = document.querySelector("#editcity2");
let editcity3 = document.querySelector("#editcity3");
let editcity4 = document.querySelector("#editcity4");
let cityname1 = editcity1.value;
let citypop1 = Number(editcity2.value);
let cityid1 = editcity3.value;
let vieweditcity = document.querySelector("#vieweditcity");
editcity4.addEventListener("click", fetchdata3);
function fetchdata3(e) {
  e.preventDefault();
  // första fetchen
  fetch("https://avancera.app/cities/")
    .then((responsei) => responsei.json())
    .then((resulti) => {
      for (let n = 0; n < resulti.length; n++) {
        vieweditcity.innerHTML += resulti[n].id + "\n";
      }
      // andra fetchen
      fetch("https://avancera.app/cities/" + cityid1, {
        body: JSON.stringify({
          id: cityid1,
          name: cityname1,
          population: citypop1,
        }),
        headers: { "Content-Type": "application/json" },
        method: "PUT",
      }).then((resulti) => {});
    });
}

// HTML RIKTIGA

<div id="editdiv">
  <label for="editcity1">
    edit cityname
    <input id="editcity1" type="text" />
  </label>
  <label for="editcity2">
    edit population
    <input id="editcity2" type="text" />
  </label>
  <label for="editcity3">
    City id
    <input id="editcity3" type="text" />
  </label>
  <input id="editcity4" type="button" value="edit city" />
</div>;
