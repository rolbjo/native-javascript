// QUERYPARAMETRAR MED FETCH, GETANROP MED FETCH:VG UPPGIFT

let jadå = prompt("vilken stad?");
let jarå = prompt("måste vara minst x antal människor");
fetch(
  "https://avancera.app/cities/?" +
    new URLSearchParams({
      name: jadå,
      minPopulation: jarå,
    })
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    console.log(resulti);
  });

// EN QUERYPARAMETER

jadå = prompt("vilken stad?");

fetch("https://avancera.app/cities/?name=" + jadå)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    console.log(resulti);
  });

// POST MED FETCH TILL EN SERVER. VARIABLER MED PARSEÌNT, SOM GÖR OM STRÄNG TILL NUMBER.

let staden = prompt("staden");
let befolkningen = parseInt(prompt("Befolkning", "0"));
fetch("https://avancera.app/cities/", {
  body: JSON.stringify({ name: staden, population: befolkningen }),
  headers: {
    "content-type": "application/json",
  },
  method: "POST",
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  });

// FUNKAR INTE

let idi = prompt("ditt id");
let namn = prompt("namn");
let befolkningen = parseInt(prompt("Befolkning", "0"));
if (namn !== null && befolkning !== null) {
  fetch("https://avancera.app/cities/" + idi, {
    body: JSON.stringify({ name: namn, population: befolkningen }),
    headers: {
      "content-type": "application/json",
    },
    method: "PATCH",
  }).then((response) => {
    console.log(response);
  });
}

if (namn === null || namn === "") {
  fetch("https://avancera.app/cities/" + idi, {
    body: JSON.stringify({ population: befolkningen }),
    headers: {
      "content-type": "application/json",
    },
    method: "PATCH",
  }).then((response) => {
    console.log(response);
  });
}
if (befolkningen === null || befolkningen === "") {
  fetch("https://avancera.app/cities/" + idi, {
    body: JSON.stringify({ name: namn }),
    headers: {
      "content-type": "application/json",
    },
    method: "PATCH",
  }).then((response) => {
    console.log(response);
  });
}
// aafoghseglaoeiFFFFFFFFFFWIFJWOEEEEEEEEFOEF
let hej = document.querySelector("ol");
hej.setAttribute("type", "i");

// nästa uppgift
document.querySelectorAll("li")[2].style.color = "#c00";

// COOL UPPGIFT

let lista = document.querySelectorAll("li");

for (let n = 0; n < lista.length; n++) {
  lista[n].innerHTML += '<span class="credits">100 credits</span>';
}

// GÖRA NYA ELEMENTS OCH TEXT I JAVASCRIPT

let text = document.createTextNode("Hello World!");

let element = document.createElement("h1");

document.body.appendChild(element);
element.appendChild(text);

// LÄGGA TILL EN li MED TEXT, FRÅN JS TILL HTML MED NODES

let element = document.createElement("li");
let list = document.querySelector("ol");
let text = document.createTextNode("jadå");
element.appendChild(text);
list.appendChild(element);

console.log(element);

// REMOVECHILD

let hej = document.querySelectorAll("li")[1];
let jadå = document.querySelector("ol");
jadå.removeChild(hej);
console.log(hej);

// INSERT BEFORE

let innan = document.querySelectorAll("li")[2];
let daddy = document.querySelector("ol");
let nya = document.createElement("li");
nya.textContent = "Göran";
daddy.insertBefore(nya, innan);
console.log(nya);

// MINSKA ELLER ÖKA ETT TAL MED VARJE KLICK
let värde = document.querySelector("#value");
värde.textContent = 1;
let öka = document.querySelector("#increase");
let minska = document.querySelector("#decrease");
minska.addEventListener("click", () => {
  värde.textContent = Number(värde.textContent) - 1;
});
öka.addEventListener("click", () => {
  värde.textContent = Number(värde.textContent) + 1;
});

// UTÖKAD MINSKA/ÖKA TAL

let värde = document.querySelector("#value");
värde.textContent = 1;
let öka = document.querySelector("#increase");
let minska = document.querySelector("#decrease");
minska.disabled = true;

minska.addEventListener("click", () => {
  värde.textContent = Number(värde.textContent) - 1;
  if (värde.textContent <= 1) {
    minska.disabled = true;
  }
  if (värde.textContent > 1) {
    minska.disabled = false;
  }
});

öka.addEventListener("click", () => {
  värde.textContent = Number(värde.textContent) + 1;
  if (värde.textContent <= 1) {
    minska.disabled = true;
  }
  if (värde.textContent > 1) {
    minska.disabled = false;
  }
});

// HUR FUNKAR DET MED PARAMETERN?

function clicky(any) {
  console.log(any.clientX); // Koordinat
}

addEventListener("click", clicky);

// BRA KOD FRÅN LIVEKODNING VIDEON DEL 1

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
  .then((respond) => respond.json())
  .then((result) => {
    let drinkArray = result.drinks;
    let firstdrinkname = drinkArray[0].strDrink;
    let drinkpicture = drinkArray[0].strDrinkThumb;

    console.log(result.drinks);
    console.log(firstdrinkname);
    let image = document.querySelector("#image");
    let rubrik = document.querySelector("#rubrik");
    console.log(rubrik);
    console.log(image);

    rubrik.textContent = firstdrinkname;

    image.setAttribute("alt", firstdrinkname);
    image.setAttribute("src", drinkpicture);
  });

// GRISEN

let s1 = gris("o");
let s2 = gris("@");

function gris(tryne) {
  console.log("chicki");
  return "^.   .^\n ( " + tryne + " )";
}
document.body.textContent = s1 + "\n\n" + s2;

UPPGIFT-TANGENTKOD, LOGGAR TANGENTENS NAMN DÅ DEN TRYCKS PÅ. NOTERA ATT DET ÄR GLOBALT OCH ATT KEYDOWN LÄGGS IN I PARAMETERN.

function clicky(any) {
  console.log(any.key);
}

addEventListener("keydown", clicky);

// LOGGAR BARA DE TANGENTER SOM TRYCKS NED NÄR SHIFT ÄR AKTIVT. SHIFT SKA INTE LOGGAS

function clicky(any) {
  if (any.shiftKey === true && any.key !== "Shift") {
    console.log(any.key);
  }
}

addEventListener("keydown", clicky);

// UTÖKAD ++ ÖKA/MINSKA TAL. HAR GJORT SAMMA EFFEKT MED UPP/NERÅT PIL SOM MED KLICK PÅ ÖKA OCH MINSKA. @@@@ VIKTIGA ATT LÖRA FRÅN @@@@

let värde = document.querySelector("#value");
värde.textContent = 1;
let öka = document.querySelector("#increase");
let minska = document.querySelector("#decrease");
minska.disabled = true;

minska.addEventListener("click", () => {
  värde.textContent = Number(värde.textContent) - 1;
  if (värde.textContent <= 1) {
    minska.disabled = true;
  }
  if (värde.textContent > 1) {
    minska.disabled = false;
  }
});

öka.addEventListener("click", () => {
  värde.textContent = Number(värde.textContent) + 1;
  if (värde.textContent <= 1) {
    minska.disabled = true;
  }
  if (värde.textContent > 1) {
    minska.disabled = false;
  }
});

function clicky(any) {
  if (any.key === "ArrowDown" && värde.textContent > 1) {
    värde.textContent = Number(värde.textContent) - 1;
    if (värde.textContent <= 1) {
      minska.disabled = true;
    }
    if (värde.textContent > 1) {
      minska.disabled = false;
    }
  }
  if (any.key === "ArrowUp") {
    värde.textContent = Number(värde.textContent) + 1;
    if (värde.textContent <= 1) {
      minska.disabled = true;
    }
    if (värde.textContent > 1) {
      minska.disabled = false;
    }
  }
}

addEventListener("keydown", clicky);

// VIKTIGT!@@@@@@ GÅR ATT SKRIVA PARAMETER SOM BLIR EVENTET TILL VÄNSTER@@@@@ :D :D TACK PONTUS/JOHAN

addEventListener("keydown", (g) => {
  if (g.shiftKey === true && g.key !== "Shift") {
    console.log(g);
  }
});


// SÅ LÅNGT JAG KOM INNAN RÄTT LÖSNING UNDER

// TÄNK PÅ VAD SOM MÅSTE FINNAS I FUNKTIONEN FÖR ATT DET SKA FUNKA

let S = X;

document.querySelector("#name").setAttribute("value", X);



document.querySelector("#send").addEventListener("click", () => {

  let p = document.querySelector("#greeting");
  p.textContent = "Hej " + X + " !";
});

// LÖSNING ÅTKOMST TILL FORMULÄRVÄRDEN, UPPGIFT 2

document.querySelector("#send").addEventListener("click", () => {
  let X = document.querySelector("#name").value;
  let p = document.querySelector("#greeting");
  p.textContent = "Hej " + X + "!";
});


// LÖSNINGEN UPPGIFT 3 FORMULÄRVÄRDEN

let p = document.querySelector("#greeting");
p.textContent = "Hej " + "X" + "!";

let knapp = document.querySelector("#send");

let Y = document.querySelector("#name");

knapp.disabled = true;
document.querySelector("#errors").style.display = "block";

knapp.addEventListener("click", () => {
  let X = document.querySelector("#name").value;

  let p = document.querySelector("#greeting");
  p.textContent = "Hej " + X + "!";
});

Y.addEventListener("input", () => {
  let X = document.querySelector("#name").value;

  if (X !== "") {
    knapp.disabled = false;
    document.querySelector("#errors").style.display = "none";
  }
  if (X === "") {
    knapp.disabled = true;
    document.querySelector("#errors").style.display = block;
  }
});

// REFLEKTERA ÖVER VARIABELN Y:S INNEHÅLL OCH VARFÖR DEN FUNGERAR SOM TARGET MEN VARIABELN X INTE GÖR DET

// KOM OCKSÅ IHÅG ATT SETATTRIBUTE MED EN STYLE FÖLJT AV AV VÄRDEN, ERSÄTTER DEM EXISTERANDE VÄRDENA I HTML. (setAttribute("style", "display"))
// .style.display=någonting    ERSÄTTER INTE UTAN LÄGGER TILL


// VARFÖR BLIR DET SOM DET BLIR?

let p = document.querySelector("#greeting");
p.textContent = "Hej " + "X" + "!";

let knapp = document.querySelector("#send");

let Y = document.querySelector("#name");

let box = document.querySelector("#consent");

knapp.disabled = true;
document.querySelector("#errors").style.display = "block";

knapp.addEventListener("click", () => {
  let X = document.querySelector("#name").value;

  let p = document.querySelector("#greeting");
  p.textContent = "Hej " + X + "!";
});

Y.addEventListener("input", () => {
  let X = document.querySelector("#name").value;

  let box = document.querySelector("#consent");
  let första = document.querySelectorAll("li")[0];
  let andra = document.querySelectorAll("li")[1];

  if (X !== "" && box.checked === true) {
    knapp.disabled = false;
    document.querySelector("#errors").style.display = "none";
  }
  if (box.checked === false && X === "") {
    knapp.disabled = true;
    document.querySelector("#errors").style.display = "block";
  }
});

// LÖSNING SOM FUNKAR UPPGIFT 4

let p = document.querySelector("#greeting");
p.textContent = "Hej " + "X" + "!";

let knapp = document.querySelector("#send");

let Y = document.querySelector("#name");

let errors = document.querySelector("#errors");

let första = document.querySelector("#name-error");

let andra = document.querySelector("#consent-error");

let box = document.querySelector("#consent");

knapp.disabled = true;
document.querySelector("#errors").style.display = "block";

knapp.addEventListener("click", () => {
  let X = document.querySelector("#name").value;

  let p = document.querySelector("#greeting");
  p.textContent = "Hej " + X + "!";
});

Y.addEventListener("input", magi);

box.addEventListener("input", magi);

function magi() {
  let X = document.querySelector("#name").value;

  let box = document.querySelector("#consent");

  if (X !== "" && box.checked === true) {
    knapp.disabled = false;
    errors.style.display = "none";
  } else {
    knapp.disabled = true;
    errors.style.display = "block";
  }

  if (box.checked === true) {
    andra.style.display = "none";
  } else {
    andra.style.display = "list-item";
  }

  if (Y.value === "") {
    första.style.display = "block";
  } else {
    första.style.display = "none";
  }
}

// TÄNK PÅ VAD SOM ÄR TARGET
// LÖS ETT MOMENT I TAGET. DET BEHÖVER INTE SE "RÄTT" UT TILL EN BÖRJAN, BARA MAN TAR DET STEGVIS. MÅNGA BÄCKAR SMÅ.

@@@@@@@@@@@@@@@VIKTIGT@@@@@@@@@@@@@@@

// FUNDERA PÅ NÄR DU GÖR IF SATSER OM DU KAN LÄGGA TILL EN 'ELSE' FÖR ATT INTE BEHÖVA SKRIVA EN MASSA IF:S.

// TÄNK PÅ GRUNDEN I UPPGIFTEN: VARJE GÅNG ETT EVENT HÄNDER PÅ EN VISS PLATS SÅ SKA NÅGONTING HÄNDA (VAD SOM SKA HÄNDA BESTÄMMER JAG MED EN FUNKTION).





// LÖSNING PÅ VG UPPGIFT

let p = document.querySelector("#greeting");
p.textContent = "Hej " + "X" + "!";

let knapp = document.querySelector("#send");

let Y = document.querySelector("#name");

let errors = document.querySelector("#errors");

let första = document.querySelector("#name-error");

let andra = document.querySelector("#consent-error");

let box = document.querySelector("#consent");

let form = document.querySelector("#form");

knapp.disabled = true;
document.querySelector("#errors").style.display = "block";

form.addEventListener("submit", (hej) => {
  let X = document.querySelector("#name").value;

  let p = document.querySelector("#greeting");
  p.textContent = "Hej " + X + "!";
  hej.preventDefault();
});

Y.addEventListener("input", magi);

box.addEventListener("input", magi);

function magi() {
  let X = document.querySelector("#name").value;

  let box = document.querySelector("#consent");

  if (X !== "" && box.checked === true) {
    knapp.disabled = false;
    errors.style.display = "none";
  } else {
    knapp.disabled = true;
    errors.style.display = "block";
  }

  if (box.checked === true) {
    andra.style.display = "none";
  } else {
    andra.style.display = "list-item";
  }

  if (Y.value === "") {
    första.style.display = "block";
  } else {
    första.style.display = "none";
  }
}


// WEBSTORAGE FJÄRDE UPPGIFTEN

sessionStorage.setItem("users", JSON.stringify([{ name: "Alice" }]));

let hej = sessionStorage.getItem("users");
console.log(hej);

console.log(sessionStorage.getItem("users"));

// UPPGIFT 5, HÄMTA MED FETCH OCH SPARA SEDAN I LOKAL STORAGE

fetch("https://avancera.app/cities/")
  .then((response) => response.json())
  .then((result) => {
    localStorage.setItem("cities", JSON.stringify(result));
  });
console.log(JSON.parse(localStorage.getItem("cities")));
