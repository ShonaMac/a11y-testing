var assert = require('assert');
var myModule = require('./MyModule.js');
describe('MyModule Library functions tests', function(){
    var additionArray = [{a:23,b:34,addition:57,subtraction:-11},{a:5,b:1,addition:6,subtraction:4},{a:31,b:10,addition:41,subtraction:21}];
    it('Testing Add function from MyModule', function(){
            additionArray.forEach(function(arrayItem){
            var resultOfAddition = myModule.Add(arrayItem.a,arrayItem.b); 
            assert.equal(resultOfAddition, arrayItem.addition, 'result of addition should be '+arrayItem.addition);
        });
    });
    it('Testing Subtract function from MyModule', function(){
        additionArray.forEach(function(arrayItem){
        var resultOfAddition = myModule.Subtract(arrayItem.a,arrayItem.b); 
        assert.equal(resultOfAddition, arrayItem.subtraction, 'result of subtraction should be '+arrayItem.subtraction);
    });
});
});
