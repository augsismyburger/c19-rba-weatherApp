"use strict";

let db = require('./database'),
    DOM = require('./domWriter');
// Innitial get Weather
$(document).on('click', '#getWeatherBtn', function(event) {
    let zip = $('#zipInput').val();
    db.getWeather(zip).then(function(weatherObj) {
        DOM.writeWeather(weatherObj);
    });
});
// If Enter Keppress
$(document).on('keypress', '#zipInput', function(event) {
    if (event.keyCode == 13) {
        $('#getWeatherBtn').trigger('click');
    }
});
// Three Day Weather Button
$(document).on('click', '#threeDayForcast', function(event) {
    let zip = $('#zipInput').val();
    db.getThreeDayWeather(zip).then(function(weatherObj) {
        DOM.writeForecast(weatherObj);
    });
});
// Ten Day Weather Button
$(document).on('click', '#tenDayForcast', function(event) {
    let zip = $('#zipInput').val();
    db.getTenDayWeather(zip).then(function(weatherObj) {
        DOM.writeForecast(weatherObj);
    });
});