"use strict";

let Handlebars = require("hbsfy/runtime"),
    weatherTemplate = require('../templates/weather.hbs'),
    forecastTemplate = require('../templates/forecast.hbs');

function writeWeather(weatherObj) {
    $('#weatherContent').html(weatherTemplate(weatherObj));
}

function writeForecast(weatherObj) {
    console.log('three day ob', weatherObj);
    $('#forecastContent').html(forecastTemplate(weatherObj));
}

module.exports = {writeWeather, writeForecast};



