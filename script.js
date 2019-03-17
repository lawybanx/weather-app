var city = document.querySelector("#input");
var img = document.querySelector("#icon");
var bckGrg = document.querySelector(".weather-container"),
    _temp = document.querySelector("#temp"),
    weatherName = document.querySelector("#weather"),
    humidity = document.querySelector("#humidity");
bckGrg.style.display = "none";
var btn = document.querySelector("#inputBtn");
btn.addEventListener('click', function () {
  bckGrg.style.display = "none";
  axios.get(
    "http://api.openweathermap.org/data/2.5/weather?q="+ 
    city.value +
    "&units=metric&APPID=d8b3c5f369fe527086fad1b9cbcdc7f0")
    .then(function (response) {
      console.log(response.data);
      var weather = response.data.weather,
          main = response.data.main,
      icon = "https://openweathermap.org/img/w/"+ weather[0].icon +".png";
      img.setAttribute("src", icon);
      bckGrg.style.display = "block";
      _temp.innerHTML = "Temp: " + Math.round(main.temp) + "°C";
      weatherName.innerHTML = "Description: " + weather[0].main;
      humidity.innerHTML = "Humidity: " + main.humidity + "%"; 
    })
    
    .catch(function (error) {
      var _error = document.querySelector("#error");
      _error.innerHTML = error;
      city.addEventListener('focus', function(){
        _error.innerHTML = "";
      });
      // console.log(error);
    });
  });
