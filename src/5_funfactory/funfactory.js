/**
 * Created by yang on 2015/9/19.
 */
var addon = require('../../build/Release/funfactory');

var fn = addon();
console.log(fn()); // 'hello world'