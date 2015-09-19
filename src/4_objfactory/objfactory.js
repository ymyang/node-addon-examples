/**
 * Created by yang on 2015/9/19.
 */
//var addon = require('../../build/Release/objfactory');
var addon = require('bindings')('objfactory');

var obj1 = addon('hello');
var obj2 = addon('world');
console.log(obj1.msg+' '+obj2.msg); // 'hello world'