"use strict";

let Handlebars = require("hbsfy/runtime"),
    weatherTemplate = require('../templates/weather.hbs'),
    forecastTemplate = require('../templates/forecast.hbs');

function writeWeather(weatherObj) {
    $('#weatherContent').html(weatherTemplate(weatherObj));
}

function writeForecast(weatherObj) {
    console.log('three day ob', weatherObj);
    var d = new Date();
    let j = 0;
    for (let i = 0; i < weatherObj.forecastday.length; i++) {

        weatherObj.forecastday[i].date = d.getDate() + j;
        if (i % 2) {
            j++;
        }
    }
    $('#forecastContent').html(forecastTemplate(weatherObj));
}

module.exports = {writeWeather, writeForecast};



