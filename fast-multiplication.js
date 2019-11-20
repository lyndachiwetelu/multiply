
//JS 

function karatsuba(numberOne, numberTwo) {
var lengthOfNumberOne = numberOne.toString().length;
var lengthOfNumberTwo = numberTwo.toString().length;
if lengthOfNumberOne == 1 || lengthOfNumberTwo == 1 {
return numberOne * numberTwo;
} else {
var num = Math.max(lengthOfNumberOne, lengthOfNumberTwo);
var half_num = num / 2;
var a = numberOne / 10 ** half_num;
var b = numberOne % 10 ** half_num;
var c = numberTwo / 10 ** half_num;
var d = numberTwo % 10 ** half_num;

var ac = karatsuba (a, c);
var bd = karatsuba (b, d);
//ad_plus_bc = karatsuba(a + b, c +d) - ac - bd;
var product = ac * 10 ** (2 * half_num) + bd;
return product;
}

}


var product = karatsuba(34784849, 473883883);

