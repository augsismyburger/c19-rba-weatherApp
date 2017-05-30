"use strict";

let ap = require("./keyGetter"),
    apiData = ap.getFBKey();

var config = {
  apiKey: apiData.apiKey,
  databaseURL: apiData.databaseURL
};