// FÖRSTA
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
// ANDRA

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

// FJÄRDE

let deletecity1 = document.querySelector("#deletecity1");
let deletecity2 = document.querySelector("#deletecity2");
let deleteid = deletecity1.value;
let viewdeletecity = document.querySelector("#viewdeletecity");
deletecity2.addEventListener("click", fetchdata4);

function fetchdata4(e) {
  e.preventDefault();
  // första fetchen
  fetch("https://avancera.app/cities/")
    .then((responsei) => responsei.json())
    .then((resulti) => {
      for (let n = 0; n < resulti.length; n++) {
        viewdeletecity.innerHTML += resulti[n].id + "\n";
        console.log(resulti);
      }
      // andra fetchen
      fetch("https://avancera.app/cities/" + deleteid, {
        method: "DELETE",
      }).then((resulti) => {
        for (let n = 0; n < resulti.length; n++) {
          vieweditcity.innerHTML += resulti[n].id + "\n";
        }
        console.log(resulti);
      });
    });
}
