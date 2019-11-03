/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      console.log('initUnit: '+initUnit)
      console.log('returnNum: '+ returnNum)
      console.log('returnUnit: '+ returnUnit)
      
      if(returnNum =='error'){
        if(!input){
          res.json({error:'invalid number and unit'});
        } else if((initUnit == 'no unit' || initUnit =='invalid unit') &&  initNum=='invalid number'){
          console.log("for some reason we are here and i dont' know why")
          res.json({error:'invalid number and unit'});
        } else if( initUnit == 'invalid unit'){
          res.json({error:'invalid unit'})
        } else if(initUnit == 'no unit'){
          res.json({error:'no unit'})
        } else if(initUnit == 'invalid unit'){
          res.json({eorr:'invalid unit'})
        } else if(initNum =='invalid number'){
          res.json({eorr:'invalid number'})
        }
      } else {
        res.json({
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: toString
          })
      }
    });
    
};
