'use strict';
var emoji = require('node-emoji');
var greetingObj = {};

greetingObj.greet = function(hour, name) {
  name = name || 'nameless human';
  var greeting;
  var icon;
  if(hour < 12) {
    greeting = 'Goodmorning,';
    icon = emoji.get('sun_with_face');
  } else {
    greeting = 'Goodevening,';
    icon = emoji.get('full_moon_with_face');
  }
  var combined = greeting + ' ' + name + ' ' + icon;
  return combined;
};

greetingObj.timeOfDay = function()  {
  var date = new Date;
  var hours = date.getHours();
  return hours;
};

console.log(greetingObj.greet(greetingObj.timeOfDay(), process.argv[2]));

module.exports = greetingObj;
