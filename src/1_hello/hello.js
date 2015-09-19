/**
 * Created by yang on 2015/9/19.
 */
//var hello = require('../../build/Release/hello');
var hello = require('bindings')('hello');

console.log(hello.hello());