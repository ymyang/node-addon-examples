/**
 * Created by yang on 2015/9/19.
 */
var addon = require('../../build/Release/passingwraped');

var obj1 = addon.createObject(10);
var obj2 = addon.createObject(20);
var result = addon.add(obj1, obj2);

console.log(result); // 30