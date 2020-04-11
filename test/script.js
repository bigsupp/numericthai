const Chance = require('chance')
const chance = new Chance()

process.env.DEBUG = 'numericthai'

const value = chance.floating({
  min: 0,
  max: 1000000,
  fixed: 2
})

const test = require('../index')
const text = test(value)

console.log('input value: ', value);
console.log('output text: ', text);