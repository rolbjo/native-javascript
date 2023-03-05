let capitalId = [];
let capitalName = [];
let capitalPopulation = [];

fetch("https://avancera.app/cities/")
  .then((response) => response.json())
  .then((result) => {
    for (i = 0; i < result.length; i++) {
      capitalId.push(result[i].id);
      capitalName.push(result[i].name);
      capitalPopulation.push(result[i].population);
    }
    console.log(capitalId[4]);
  });

// VISA ALLA STÄDER
function showallcities() {
  console.log(capitalId);
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((result) => {
      container = document.querySelector("#capital-container");
      container.textContent = "";
      for (i = 0; i < result.length; i++) {
        addName = result[i].name;
        addCapital = result[i].population;

        container.textContent += addName + ", " + addCapital + " ";
      }
    });
}
document.querySelector("#showcities").addEventListener("click", showallcities);
// ÄNDRA EN STAD

let inputId;
let inputCity;
let inputPopulation;

let getcities = document.querySelector("#getcities");
// testa att använda queryselectorall och se om detta funkar, om IntersectionObserver, varför?
let radiobtns = document.getElementsByClassName("radioo");
// Är denna för tidig?
let getedit = document.querySelector("#getedit");

// Funktion för att lägga till radioknappar i HTML, samt loop för att skapa eventlistener på radioknapparna så att den knapp/stad jag valt får sitt id skickat till en variabel (inputId).
function getRadioButtons() {
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((result) => {
      // Testa att gör denna till en funktion
      capitalId = [];
      capitalName = [];
      capitalPopulation = [];
      for (i = 0; i < result.length; i++) {
        capitalId.push(result[i].id);
        capitalName.push(result[i].name);
        capitalPopulation.push(result[i].population);
      }
      getedit.textContent = "";
      for (h = 0; h < result.length; h++) {
        addName = result[h].name;
        addCapital = result[h].population;
        getedit.innerHTML += `  <label><input
              class="radioo"
              name="city"
              type="radio"
              value=${addName}
            />
            ${addName}
            </label>
          `;
      }
      console.log(result.length);
      console.log("1: " + radiobtns.length);

      for (k = 0; k < radiobtns.length; k++) {
        radiobtns[k].addEventListener("click", () => {
          for (j = 0; j < radiobtns.length; j++) {
            if (radiobtns[j].checked === true) {
              inputId = capitalId[j];
              // konsoll logs
              console.log("id: " + capitalId[j]);
              console.log(radiobtns[j].checked);
              console.log(capitalId);
              console.log(capitalName);
            }
          }
        });
      }
    });
}

getcities.addEventListener("click", getRadioButtons);

// console.log("1: " + radiobtns.length);

// for (k = 0; k < radiobtns.length; k++) {
//   radiobtns[k].addEventListener("click", () => {
//     for (j = 0; j < radiobtns.length; j++) {
//       if (radiobtns[j].checked === true) {
//         console.log("id: " + capitalId[j]);
//         inputId = capitalId[j];
//       }
//     }
//   });
// }

document.querySelector("#city").addEventListener("input", () => {
  inputCity = document.querySelector("#city").value;
  console.log(inputCity);
});

document.querySelector("#citizens").addEventListener("input", () => {
  inputPopulation = document.querySelector("#citizens").value;
  inputPopulation = Number(inputPopulation);
  console.log(inputPopulation);
});

document.querySelector("#change-city").addEventListener("click", () => {
  for (k = 0; k < radiobtns.length; k++) {
    // radiobtns[k].addEventListener("click", () => {
    for (j = 0; j < radiobtns.length; j++) {
      if (radiobtns[j].checked === true) {
        inputId = capitalId[j];
        console.log("id: " + capitalId[j]);
        console.log(radiobtns[j].checked);
      }
    }
    // });
  }
  console.log(inputId);
  fetch("https://avancera.app/cities/" + inputId, {
    body: JSON.stringify({
      id: inputId,
      name: inputCity,
      population: inputPopulation,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  }).then((response) => {
    showallcities();
    delcities();
    getRadioButtons();
  });
});

// DELETE

let radiobtns1 = document.getElementsByClassName("radioo1");
let getcities2 = document.querySelector("#getcities2");
let deletecities = document.querySelector("#deletecities");

function delcities() {
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((result) => {
      getdelete.textContent = "";
      for (h = 0; h < result.length; h++) {
        addName = result[h].name;
        addCapital = result[h].population;
        getdelete.innerHTML += `  <label><input
              class="radioo1"
              name="city"
              type="radio"
              value=${addName}
            />
            ${addName}
            </label>
          `;
      }
      console.log(result.length);
      console.log("1: " + radiobtns.length);

      for (k = 0; k < radiobtns1.length; k++) {
        radiobtns1[k].addEventListener("click", () => {
          for (j = 0; j < radiobtns1.length; j++) {
            if (radiobtns1[j].checked === true) {
              inputId = capitalId[j];
              console.log("id: " + capitalId[j]);
              console.log(radiobtns1[j].checked);
            }
          }
        });
      }
    });
}

getcities2.addEventListener("click", delcities);

console.log(radiobtns1);
document.querySelector("#deletecities").addEventListener("click", () => {
  for (k = 0; k < radiobtns1.length; k++) {
    //radiobtns1[k].addEventListener("click", () => {
    for (j = 0; j < radiobtns1.length; j++) {
      if (radiobtns1[j].checked === true) {
        inputId = capitalId[j];
        console.log("name: " + radiobtns1[j].value);
        console.log("id: " + capitalId[j]);
        console.log(radiobtns1[j].checked);
      }
    }
    // });
  }
  fetch("https://avancera.app/cities/" + inputId, {
    method: "DELETE",
  }).then((response) => {
    console.log(response);
    getRadioButtons();
    showallcities();
    delcities();
  });
});

// ADD

let addcity = document.querySelector("#add-a-city");

addcity.addEventListener("click", fetchdata2);

function fetchdata2() {
  let cityname = document.querySelector("#cityname").value;
  let citypop = Number(document.querySelector("#citypop").value);

  fetch("https://avancera.app/cities/", {
    body: JSON.stringify({ name: cityname, population: citypop }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then((responsei) => responsei.json())
    .then((resulti) => {
      for (h = 0; h < resulti.length; h++) {
        addName = resulti[h].name;

        console.log(addName);
        console.log(cityname);
      }
      console.log(resulti);
      showallcities();
      getRadioButtons();
      delcities();
    });
}
