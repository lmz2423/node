/**
 * Created by creditease on 2015/8/26.
 */
var regTest = /q[^u]/;
var stringTest = 'Iraq';
var stringTestOne = 'Iraq ';
var result = regTest.test(stringTest);
console.log(result);
result = regTest.test(stringTestOne);
console.log(result);