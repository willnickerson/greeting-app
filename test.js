'use strict';
var assert = require('assert');
var greetingObj = require('./greet');
var emoji = require('node-emoji');


describe('greeting', function() {
  it('greets with name in the evening', function() {
    var greeting = greetingObj.greet(23, 'tester');
    assert.equal(greeting, 'Goodevening, tester ' + emoji.get('full_moon_with_face'));
  });
  it('greets with no name in the morning', function() {
    var greeting = greetingObj.greet(5);
    assert.equal(greeting, 'Goodmorning, nameless human ' + emoji.get('sun_with_face'));
  });
});
