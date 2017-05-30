"use strict";

let key = require("./keyGetter"),
	dataKey = key.getKey(),
	apiKey = dataKey.apiKey,
	databaseURL = dataKey.databaseURL;


function getWeather(zip) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${databaseURL}${apiKey}/conditions/q/${zip}.json`
        }).done(function(data) {
            console.log(data);
            resolve(data.current_observation);
        });
    });
}
//THREE DAY URL
// http://api.wunderground.com/api/0cfea0d7ef6ff0ff/forecast/q/CA/San_Francisco.json
function getThreeDayWeather(zip) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${databaseURL}${apiKey}/forecast/q/${zip}.json`
        }).done(function(data) {
            console.log(data);
            resolve(data.forecast.txt_forecast);
        });
    });
}
//10 DAY URL
// http://api.wunderground.com/api/0cfea0d7ef6ff0ff/forecast10day/q/CA/San_Francisco.json
function getTenDayWeather(zip) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${databaseURL}${apiKey}/forecast10day/q/${zip}.json`
        }).done(function(data) {
            console.log(data);
            resolve(data.forecast.txt_forecast);
        });
    });
}

module.exports = {getWeather, getThreeDayWeather, getTenDayWeather};
