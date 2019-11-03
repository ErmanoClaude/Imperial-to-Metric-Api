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
    console.log(match)
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
      case 'gal': return initNum * galToL;
      case 'L': return initNum / galToL;
      case 'lbs': return initNum * lbsToKg;
      case 'kg': return initNum / lbsToKg;
      case 'mi': return initNum * miToKm;
      case 'km': return initNum / miToKm;
    }
    
  
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result =`${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    //"56 pounds converts to 25.40115 kilograms"
    return result;
  };
  
}

module.exports = ConvertHandler;