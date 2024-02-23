console.log("working");
    var btn = document.querySelector(".input-field button");



    // function execution on firing eventlistner
 btn.addEventListener("click" ,()=>{
    const input = document.querySelector(".input-field input").value;
const value = input.toUpperCase();
console.log(value);
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=800937523595e1ccfc18152e8a5aca3b&units=metric`;
const getdata = async()=>{
    const response = await fetch(URL);
    const data = await response.json();
    console.log(response);
    const author = data;
    // var temperature = data[main];
     console.log(data);
const Name = data.name;
const main = data.main;
const country = data.sys.country;
const temperature = data.main.temp;
const humidity = data.main.humidity;
const windSpeed = data.wind.speed;
console.log(windSpeed);

// Setting the information 

const cityName = document.querySelector(".city-name");
cityName.innerHTML = "City Name:  " + Name;
const countryName = document.querySelector(".country");
countryName.innerHTML = "Country:  "+country;
const temp = document.querySelector(".temperature");
temp.innerHTML = "Temperature in Celcius:  " + temperature + "°C";
const humid= document.querySelector(".humidity ");
humid.innerHTML = "Humidity:  " + humidity;
const wind = document.querySelector(".wind");
wind.innerHTML = "wind Speed  " + windSpeed  + "Km/s"


document.querySelector(".information").style.display = "block";
document.querySelector(".information ").style. visibility = "visible"
document.querySelector(".container").style.height = "650px"
footer.innerHTML = "Weather Of " + value ;
}
getdata();



 })



