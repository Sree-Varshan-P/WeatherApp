let weather = {
    apiKey: "644b4486cbc46fe0fa4ecf4ae0d2aba2",
    fetchWeather: function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=644b4486cbc46fe0fa4ecf4ae0d2aba2")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
       const {name} = data;
       const {icon,description} = data.weather[0];
       const{temp,humidity} = data.main;
       const{speed} = data.wind;
       console.log(name,icon,description,temp,humidity,speed)
       document.querySelector(".city").innerText = "Weather in "+name;
      // document.querySelector(".icon").src = "https://api.openweathermap.org/img/wn/"+icon+"01n@2x.png"
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp +" °F";
      document.querySelector(".humidity").innerText = "Humidity: "+ humidity + " %";
      document.querySelector(".wind").innerText = "Wind Speed: "+ speed + " kmph";
    },
    
};

