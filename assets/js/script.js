// User search empty array
let searchHistory = [];
let previousCity = "";

let cityWeather = function(city) {
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=07224a58cc8eb8d71afe08b081bf3b96&units=imperial'

    fetch(apiUrl)
    .then(function(response) {
        if(response.ok) { 
            response.json().then(function(data) {
                displayWeather(data);
            })
        } else {
            alert('Error: ' + response.statusText);
        }
    })

    .catch(function(error){
        alert('Unable to connect to OpenWeather');
    })
}

