/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.allUnits = ['gal','L','lbs','kg','mi','km']
  this.getNum = function(input) {
    var result;
    input = input.replace(/\s/g, "");
    var match = input.match(/(\w*?)([a-zA-z]+$)/);
    if(input && match == null){
      result = 'invalid number'
    } else if(!input){
      result = 'invalid number'
    } else if( isNaN(Number(match[1])) ){
      result = 'invalid number';
    } else {
      result = Number(match[1]);
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var unit = input.match(/[a-zA-Z]+$/)
    if(!input){
      result = ''
    } else if(unit == null){
      result = 'no unit'
    } else if(unit){
      var matchedUnit;
      result = unit[0]
      matchedUnit = this.allUnits.filter((item)=> result.toUpperCase() === item.toUpperCase());
      
    }
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
var input = '23 gal';
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
