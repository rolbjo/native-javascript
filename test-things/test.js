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

document.querySelector("#showcities").addEventListener("click", () => {
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
});

// ÄNDRA EN STAD

let inputId;
let inputCity;
let inputPopulation;

let getcities = document.querySelector("#getcities");
let radiobtns = document.querySelectorAll(".radioo");
console.log(radiobtns);
let getedit = document.querySelector("#getedit");

getcities.addEventListener("click", () => {
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((result) => {
      getedit.textContent = "";
      for (i = 0; i < result.length; i++) {
        addName = result[i].name;
        addCapital = result[i].population;
        getedit.innerHTML += `   <input
              class="radioo"
              name="city"
              type="radio"
              value=${addName}
            />
            ${addName}
          `;
        console.log(radiobtns.length);
      }
    });
});

for (i = 0; i < getedit.length; i++) {
  radiobtns[i].addEventListener("click", () => {
    for (j = 0; j < radiobtns.length; j++) {
      if (radiobtns[j].checked === true) {
        inputId = capitalId[j];
      }
    }
  });
}

document.querySelector("#city").addEventListener("input", () => {
  inputCity = document.querySelector("#city").value;
});

document.querySelector("#citizens").addEventListener("input", () => {
  inputPopulation = document.querySelector("#citizens").value;
  inputPopulation = Number(inputPopulation);
});

document.querySelector("#change-city").addEventListener("click", () => {
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
  }).then((response) => {});
});

// DELETE

let radiobtns1 = document.querySelectorAll(".radioo1");

for (i = 0; i < radiobtns1.length; i++) {
  radiobtns1[i].addEventListener("click", () => {
    for (j = 0; j < radiobtns1.length; j++) {
      if (radiobtns1[j].checked === true) {
        inputId = capitalId[j];
      }
    }
  });
}
console.log(radiobtns1);
document.querySelector("#deletecities").addEventListener("click", () => {
  fetch("https://avancera.app/cities/" + inputId, {
    method: "DELETE",
  }).then((response) => {
    console.log(response);
  });
});

// ADD

let addcity = document.querySelector("#add-a-city");

addcity.addEventListener("click", fetchdata2);

function fetchdata2(e) {
  e.preventDefault();
  let cityname = document.querySelector("#cityname").value;
  let citypop = Number(document.querySelector("#citypop").value);
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
