let cap1 = document.querySelector("#cap1");
let cap2 = document.querySelector("#cap2");
let cap3 = document.querySelector("#cap3");
let cap4 = document.querySelector("#cap4");
let cap5 = document.querySelector("#cap5");
let cap6 = document.querySelector("#cap6");
let cap7 = document.querySelector("#cap7");
let cap8 = document.querySelector("#cap8");
let cap9 = document.querySelector("#cap9");
let image1 = document.querySelector("#image1");
let image2 = document.querySelector("#image2");
let image3 = document.querySelector("#image3");
let image4 = document.querySelector("#image4");
let image5 = document.querySelector("#image5");
let image6 = document.querySelector("#image6");
let image7 = document.querySelector("#image7");
let image8 = document.querySelector("#image8");
let image9 = document.querySelector("#image9");
let väder = document.querySelector("#väderexempel");

väder.style.display = "none";
fetch(
  "https://api.weatherbit.io/v2.0/current?&city=Stockholm&key=1a4bbca358224c8db5a5969faec48b0c"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    image1.setAttribute(
      "src",
      "https://www.weatherbit.io/static/img/icons/" +
        resulti.data[0].weather.icon +
        ".png"
    );
    cap1.innerHTML +=
      "\n\n" +
      resulti.data[0].temp +
      "°celsius\nWind " +
      resulti.data[0].wind_spd +
      "m/s \nsun goes up " +
      resulti.data[0].sunrise +
      "\nSun goes down " +
      resulti.data[0].sunset;

    console.log(image1);
    console.log(resulti)
  });

fetch(
  "https://api.weatherbit.io/v2.0/current?&city=oslo&key=1a4bbca358224c8db5a5969faec48b0c"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    image2.setAttribute(
      "src",
      "https://www.weatherbit.io/static/img/icons/" +
        resulti.data[0].weather.icon +
        ".png"
    );
    cap2.innerHTML +=
      "\n\n" +
      resulti.data[0].temp +
      "°celsius\nWind " +
      resulti.data[0].wind_spd +
      "m/s \nsun goes up " +
      resulti.data[0].sunrise +
      "\nSun goes down " +
      resulti.data[0].sunset;
    console.log(image2);
  });

fetch(
  "https://api.weatherbit.io/v2.0/current?&city=copenhagen&key=1a4bbca358224c8db5a5969faec48b0c"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    image3.setAttribute(
      "src",
      "https://www.weatherbit.io/static/img/icons/" +
        resulti.data[0].weather.icon +
        ".png"
    );
    image3.setAttribute("alt", resulti.data[0].weather.description);
    cap3.innerHTML +=
      "\n\n" +
      resulti.data[0].temp +
      "°celsius\nWind " +
      resulti.data[0].wind_spd +
      "m/s \nsun goes up " +
      resulti.data[0].sunrise +
      "\nSun goes down " +
      resulti.data[0].sunset;
    console.log(image3);
  });

fetch(
  "https://api.weatherbit.io/v2.0/current?&city=Paris&key=1a4bbca358224c8db5a5969faec48b0c"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    image4.setAttribute(
      "src",
      "https://www.weatherbit.io/static/img/icons/" +
        resulti.data[0].weather.icon +
        ".png"
    );
    cap4.innerHTML +=
      "\n\n" +
      resulti.data[0].temp +
      "°celsius\nWind " +
      resulti.data[0].wind_spd +
      "m/s \nsun goes up " +
      resulti.data[0].sunrise +
      "\nSun goes down " +
      resulti.data[0].sunset;
  });

fetch(
  "https://api.weatherbit.io/v2.0/current?&city=rome&key=1a4bbca358224c8db5a5969faec48b0c"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    image5.setAttribute(
      "src",
      "https://www.weatherbit.io/static/img/icons/" +
        resulti.data[0].weather.icon +
        ".png"
    );
    cap5.innerHTML +=
      "\n\n" +
      resulti.data[0].temp +
      "°celsius\nWind " +
      resulti.data[0].wind_spd +
      "m/s \nsun goes up " +
      resulti.data[0].sunrise +
      "\nSun goes down " +
      resulti.data[0].sunset;
  });

fetch(
  "https://api.weatherbit.io/v2.0/current?&city=london&key=1a4bbca358224c8db5a5969faec48b0c"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    image6.setAttribute(
      "src",
      "https://www.weatherbit.io/static/img/icons/" +
        resulti.data[0].weather.icon +
        ".png"
    );
    cap6.innerHTML +=
      "\n\n" +
      resulti.data[0].temp +
      "°celsius\nWind " +
      resulti.data[0].wind_spd +
      "m/s \nsun goes up " +
      resulti.data[0].sunrise +
      "\nSun goes down " +
      resulti.data[0].sunset;
  });

fetch(
  "https://api.weatherbit.io/v2.0/current?&city=tokyo&key=1a4bbca358224c8db5a5969faec48b0c"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    image7.setAttribute(
      "src",
      "https://www.weatherbit.io/static/img/icons/" +
        resulti.data[0].weather.icon +
        ".png"
    );
    cap7.innerHTML +=
      "\n\n" +
      resulti.data[0].temp +
      "°celsius\nWind " +
      resulti.data[0].wind_spd +
      "m/s \nsun goes up " +
      resulti.data[0].sunrise +
      "\nSun goes down " +
      resulti.data[0].sunset;
  });

fetch(
  "https://api.weatherbit.io/v2.0/current?&city=new delhi&key=1a4bbca358224c8db5a5969faec48b0c"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    image8.setAttribute(
      "src",
      "https://www.weatherbit.io/static/img/icons/" +
        resulti.data[0].weather.icon +
        ".png"
    );
    cap8.innerHTML +=
      "\n\n" +
      resulti.data[0].temp +
      "°celsius\nWind " +
      resulti.data[0].wind_spd +
      "m/s \nsun goes up " +
      resulti.data[0].sunrise +
      "\nSun goes down " +
      resulti.data[0].sunset;
  });

fetch(
  "https://api.weatherbit.io/v2.0/current?&city=moskva&key=1a4bbca358224c8db5a5969faec48b0c"
)
  .then((responsei) => responsei.json())
  .then((resulti) => {
    image9.setAttribute(
      "src",
      "https://www.weatherbit.io/static/img/icons/" +
        resulti.data[0].weather.icon +
        ".png"
    );
    cap9.innerHTML +=
      "\n\n" +
      resulti.data[0].temp +
      "°celsius\nWind " +
      resulti.data[0].wind_spd +
      "m/s \nsun goes up " +
      resulti.data[0].sunrise +
      "\nSun goes down " +
      resulti.data[0].sunset;
    väder.style.display = "grid";
  });
