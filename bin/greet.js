#!/usr/bin/env node
var greet = require('../index.js')
var parsedArgv = require('minimist')(process.argv.slice(2))


console.log(greet(parsedArgv._, parsedArgv.drunk))