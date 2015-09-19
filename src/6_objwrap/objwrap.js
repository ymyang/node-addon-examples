/**
 * Created by yang on 2015/9/19.
 */
//var addon = require('../../build/Release/objwrap');
var addon = require('bindings')('objwrap');

var obj = new addon.MyObject(10);
console.log( obj.plusOne() ); // 11
console.log( obj.plusOne() ); // 12
console.log( obj.plusOne() ); // 13