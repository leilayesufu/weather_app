const unit = document.querySelector(".unitsign").innerHTML
const unitbtn = document.querySelector(".unitsign")


//set the date
const date = new Date().toDateString()
document.querySelector('.datee').innerHTML = date;


//get current weather from api
function getcurrentweather(city){

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city 
         +"&units=metric&appid=" + this.apiKey 
        )
        .then((response)=>response.json())
        .then((todaydata)=> 
        this.displayWeather(todaydata)
        )
    }
    
//display current weather
function weathertoday(todaydata){
    const { name } = todaydata;
    const {country} = todaydata.sys;
    const { speed } = todaydata.wind;
    let {temp, humidity, pressure} = todaydata.main;
    const {icon, description} = todaydata.weather[0];
    document.querySelector(".cityname").innerHTML = name +" ," +country
    document.querySelector(".wind").innerHTML = "Wind: " + speed + "m/s"
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%"
        document.querySelector(".pressure").innerHTML = "Pressure: " + pressure +"hPa"
        document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".description").innerHTML = description
         document.querySelector(".spantemp").innerHTML= temp 
        document.querySelector("#remove").classList.remove("loading")
        
}

let weather= {
    "apiKey": "e1bc1b61d865e5fde2987fd8aacecfad",
    fetchWeather: getcurrentweather,
    displayWeather: function(todaydata){
        weathertoday(todaydata)
    },
    search: function(){
        this.fetchWeather(document.querySelector(".inputsearch").value)
       

    }
    }


//function to change to fahrenheit
function tempconversion(unit, arg){
    
    let tempbutton = document.querySelector(".spantemp") 
    let tempc = Math.round(temp)
    let tempf = Math.round(temp* (9/5)+32)
    if(unit === "°C"){
       tempbutton.innerHTML = tempc
    }else{
        tempbutton.innerHTML = tempf
    }
}



    //eventlisteners
    const searchbutton =document.querySelector("#buttong")
   searchbutton.addEventListener("click", function(e){
    document.querySelector(".checkbox").checked = false
    unitbtn.innerHTML = "°C"
    weather.search()
    e.preventDefault()
    document.querySelector(".inputsearch").value = ""
   })
   
   document.querySelector(".inputsearch").addEventListener("keyup", function(e){
    if(e.key =="Enter"){
        document.querySelector(".checkbox").checked = false
        unitbtn.innerHTML = "°C"
        weather.search()
    }
   })


document.querySelector(".checkbox").addEventListener("change", function(e){
    const temp = document.querySelector(".spantemp").innerHTML
    let tempbutton = document.querySelector(".spantemp") 
    let tempc = ((temp-32)*5/9).toFixed(2)
    let tempf = (temp* (9/5)+32).toFixed(2)
    if(unitbtn.innerHTML === "°F"){
        unitbtn.innerHTML = "°C"
        tempbutton.innerHTML = tempc
        
    }else{
        unitbtn.innerHTML = "°F"
        tempbutton.innerHTML = tempf
        
    }
})

weather.fetchWeather("Lagos");
