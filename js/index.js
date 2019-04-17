$(document).ready(function () {

    // store api key
    var API_KEY = `365965329e04dae84ad862086074cc19`;

    // set units
    var UNITS = `metric`;

    // add click function to weather btn
    $('.weather-btn').click((event) => {

        // prevent page from refreshing
        event.preventDefault();

        // store user input into CITY var
        var CITY = $('.city-input').val();

        // log city
        console.log(CITY);

        // set up api url
        var API = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}` + `&appid=${API_KEY}&units=${UNITS}`;

        // fetch api url
        fetch(API)
            // when we get response from server
            .then(response => {
                // return respon as json
                return response.json();
            })
            .then(data => {

                // log the data
                console.log(data);

                // get weather icon
                var iconcode = data.weather[0].icon;

                // set up weather icon url
                var iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;

                // add src link to weather icon img tag
                $('.weather-icon').attr('src', iconurl);

                // set temperatures
                $('.current-temp').text('Current Temp: ' + data.main.temp + " ℃");
                $('.max-temp').text('Today\'s Max: ' + data.main.temp_max + " ℃");
                $('.min-temp').text('Today\'s Min: ' + data.main.temp_min + " ℃");

                // set message
                $('.message').text(data.weather[0].description);

            });
    });

});