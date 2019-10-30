/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
var result;
var input = '';
var regex =  /(^\d+)(\w+)/;
var anotherRegrex = /([a-z]+$)/
var holder = input.match(regex);
console.log(holder);
if(input=''){
  result = {error:"invalid number and unit"}
} else if(holder = null){
  result = {error:'invalid number'}
} else if(/^[a-zA-Z]+/.test(input)) {
  result = {error:"invalid number"}
}

console.log('we3334d'.match(/^[a-zA-Z]+/))
