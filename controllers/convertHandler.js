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
    var match = input.match(/(.*?)([a-zA-z]+$)/);
    try{
       var divisionCount = (input.match(/\//g) || []).length
       if(divisionCount > 1){
         console.log('19')
         return 'invalid number'
       }
    } catch {
      console.log('we expect to be here')
    }
   
    try {
      result = eval(match[1]);
      if(result != undefined){
        return this.round_to_precision(result);
      }
    } catch {
      //empty dont need to do anything if try don't work
    }
    if(input ==''){
      result = 'invalid number'
      console.log('35')
    } else if(!isNaN(Number(input))){
      result = input;
      console.log('37')
    } else if(input || match == null){
      result = 'invalid number'
      console.log('41')
    } else if(!input){
      result = 'invalid number'
      console.log('44')
    } else if( isNaN(Number(match[1])) ){
      result = 'invalid number';
      console.log('47')
    } else {
      result = Number(match[1]);
    }
    if(result == 0){
      return 1;
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
      var matchedUnit = [];
      result = unit[0]
      matchedUnit = this.allUnits.filter((item)=> result.toUpperCase() === item.toUpperCase());
      if(matchedUnit.length == 0 ){
        result = 'invalid unit'
      } else {
        result = matchedUnit[0];
      }
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    var indexOf;
    if(initUnit == 'no unit'){
      return 'no unit'
    } else if( initUnit == 'invalid unit'){
      return 'invalid unit'
    }

    indexOf = this.allUnits.indexOf(initUnit);
    if(indexOf % 2 == 1 ) {
      return this.allUnits[indexOf - 1]
    } else {
      return this.allUnits[indexOf + 1]
    }
  };

  this.spellOutUnit = function(unit) {
    var result;
    var longUnit = ['gallons','liters','pounds','kilograms','miles','kilometers'];
    
    return longUnit[this.allUnits.indexOf(unit)];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(initNum =='invalid number' || initUnit == 'no unit' || initUnit == 'invalid unit'){
      return 'error'
    }
    switch(initUnit){
      case 'gal': return this.round_to_precision(initNum * galToL);
      case 'L': return this.round_to_precision(initNum / galToL);
      case 'lbs': return this.round_to_precision(initNum * lbsToKg);
      case 'kg': return this.round_to_precision(initNum / lbsToKg);
      case 'mi': return this.round_to_precision(initNum * miToKm);
      case 'km': return this.round_to_precision(initNum / miToKm);
    }
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result =`${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    //"56 pounds converts to 25.40115 kilograms"
    return result;
  };
  this.round_to_precision = function (x) {
    if(x % 1 != 0 && x!=undefined){
      var count = x.toString().split(".")[1].length;
      if(count>5){
        return x.toFixed(5)
      } else return x
    } else return x
  }
  
}

module.exports = ConvertHandler;