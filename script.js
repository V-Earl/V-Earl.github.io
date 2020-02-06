// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0131f1be0242b370802c164725f0b64b

// Your API key is 0131f1be0242b370802c164725f0b64b


  // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
//     var title = "space+jam";
//     var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0131f1be0242b370802c164725f0b64b";

// var movie = "Mr. Nobody";
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

var city = "Dallas";
var country = "USA";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=imperial&APPID=0131f1be0242b370802c164725f0b64b";



$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
console.log(response);

// used to display current city and local time
var today = new Date()
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();
var mainCity = $(".display-4").text(response.name + " " + month + "/" + day + "/" + year);

// used to get main stats of current selected city
var temp = $(".temp").text('Temperature: ' + response.main.temp + '\xB0F');
var humidity = $(".humid").text('Humidity: ' + response.main.humidity + '%');
var wind = $(".wind").text('Wind Speed: ' + response.wind.speed + ' MPH');

// dates for 5- Day Forecast
// var date = $(".card-title1").text(month + "/" + day + "/" + year)

// loop for 5-Day forecast dates

var eachDay = $(".card-title")

for(var i = day; i < eachDay; i++) {
// container holding forecast
var forecastDiv = $(".forecast");

// creates each day

eachDay.text(i);

console.log(eachDay);
}
});

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&mode=xml&units=imperial&APPID=0131f1be0242b370802c164725f0b64b


// 5- Day Forecast

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&units=imperial&APPID=0131f1be0242b370802c164725f0b64b";

$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    // console.log(response);
    
    // // var date = $(".card-title1").text(response.list[0].dt_txt);

    // $(".card-title1").text(response.list[0].weather[0].icon);
    // console.log(response.list[0].weather[0].icon);

    // console.log(response.list[0].dt_txt);
    // console.log(month + "/" + day + "/" + year);

    // $(".image1").html('src', response.list[0].weather[0].icon);

    $(".card-title").text(response.list[0].dt_txt);
    $(".Temperature").text('Temp: ' + response.list[0].main.temp + '\xB0F');
    $(".Humidity").text('Humidity: ' + response.list[0].main.humidity + '%');

    $(".card-title2").text(response.list[8].dt_txt);
    $(".Temperature2").text('Temp: ' + response.list[8].main.temp + '\xB0F');
    $(".Humidity2").text('Humidity: ' + response.list[8].main.humidity + '%');

    $(".card-title3").text(response.list[16].dt_txt);
    $(".Temperature3").text('Temp: ' + response.list[16].main.temp + '\xB0F');
    $(".Humidity3").text('Humidity: ' + response.list[16].main.humidity + '%');

    $(".card-title4").text(response.list[24].dt_txt);
    $(".Temperature4").text('Temp: ' + response.list[24].main.temp + '\xB0F');
    $(".Humidity4").text('Humidity: ' + response.list[24].main.humidity + '%');

    $(".card-title5").text(response.list[32].dt_txt);
    $(".Temperature5").text('Temp: ' + response.list[32].main.temp + '\xB0F');
    $(".Humidity5").text('Humidity: ' + response.list[32].main.humidity + '%');

    });