/**
 * Created by yang on 2015/9/19.
 */
//var add = require('../../build/Release/args');
var add = require('bindings')('args');

console.log( 'This should be eight:', add.add(3,5) );