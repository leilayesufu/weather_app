//set the date
const date = new Date().toDateString()
document.querySelector('.datee').innerHTML = date;

//function to fetch weather
const remove = document.querySelector("#remove");
function getweather(city){

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city 
         +"&units=metric&appid=" + this.apiKey 
        )
        .then((response)=>response.json())
        .then((data)=> this.displayWeather(data))
    }


let weather= {
    "apiKey": "fc2de03faf824f775816d3dd5f1ff4b8",
    fetchWeather: getweather,
    displayWeather: function(data){
        const { name } = data;
        const {country} = data.sys;
         const {icon, description} = data.weather[0];
        const {temp, humidity, pressure} = data.main;
        const { speed } = data.wind;
        document.querySelector(".cityname").innerHTML = name +" ," +country
        document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".description").innerHTML = description
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%"
        document.querySelector(".pressure").innerHTML = "Pressure: " + pressure +"Pa"
        document.querySelector(".wind").innerHTML = "Wind: " + speed + "km/hr"
        document.querySelector(".spantemp").innerHTML= temp 
        document.querySelector(".temptoday").innerHTML= temp + "°C"
        document.querySelector(".humiditytoday").innerHTML = humidity + "%"
        document.querySelector('.icontoday').src="https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector("#remove").classList.remove("loading") 
    
    },
    
    
    search: function(){
        this.fetchWeather(document.querySelector(".inputsearch").value)

    }
    }
    const searchbutton =document.querySelector("#buttong")
   searchbutton.addEventListener("click", function(e){
    weather.search()
    e.preventDefault()
    document.querySelector(".inputsearch").value = ""
   })
   
   document.querySelector(".inputsearch").addEventListener("keyup", function(e){
    if(e.key =="Enter"){
        weather.search()
    }
   })

   
   weather.fetchWeather("Lagos");