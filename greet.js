'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var emoji = require('node-emoji');
var greetingObj = {};

greetingObj.askName = function() {
  rl.question('Hi, what is your name? ', function(answer) {
    console.log(greetingObj.greet(greetingObj.timeOfDay(), answer));
    greetingObj.response();
  });
};

greetingObj.getInput = function(questionString) {
  rl.question(questionString, function(answer) {
    console.log(answer);
    return answer();
  })
}

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

greetingObj.response = function() {
  rl.question('How are you doing? ', function(answer) {
    var response = 'Cool! Im doing ' + answer + ' too.';
    rl.close();
    console.log(response);
    return response;
  });
};

greetingObj.askName();

module.exports = greetingObj;
