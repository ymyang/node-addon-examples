/**
 * Created by yang on 2015/9/19.
 */
//var addon = require('../../build/Release/callbacks');
var addon = require('bindings')('callbacks');

addon(function(msg){
    console.log(msg); // 'hello world'
});