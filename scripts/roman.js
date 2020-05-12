/*
A Roman Numeral Convertor
Written By
Stuart Peel
AD 2020
*/

function convertToRoman(num) {

    const roman = {
      // Roman_Numeral: Decimal | key: "value", pairs
  // We improvised on the Big number characters!
      "M.":1000000, "D.":500000,
      "C.":100000, "L.":50000, "X.":10000,
      "V.":5000, "MV.":4000, "M":1000,
      "CM":900, "D":500, "CD":400, "C":100,
      "XC":90, "L":50, "XL":40, "X":10,
      "IX":9, "V":5, "IV":4, "I":1
    };
  
    let res = [];
  
    for ( let i in roman ) {
      if (roman.hasOwnProperty(i)) { // *2
        while ( num >= roman[i]) {
          //console.log(num, roman[i]);
          res += i;
          num -= roman[i];
          //console.log(res);
        }
      }
    };
    //console.log(res);
    return res;
  };
  
  // convertToRoman(99999999);
  
  /* ****** Notes on convertToRoman() ****** 
  (*1)We use a for loop to iterate over the
  roman object and check that we are working with a property of the object itself. We then
  check to see if num is >= than the first
  value of the object. If it is, we subtract
  that value from num and add the current key value (X, IX, V etc) to the result and
  continue doing so until it is smaller. Then we move on to the next value, subtract that and work our way to the last value of the object.
  (*2)
  We use object.hasOwnProperty() to ensure that the property is specific to this class and 
  not one inherited from the base class. 
  ***** End Note on convertToRoman() */

/* **** Function to grab the data from the html page **** */
// callRoman() parses the string input to an int and calls converToRoman()
function callRoman() {
    const num = document.getElementById("inputBox").value;
    const a = parseInt(num);
    document.getElementById("outputOne").innerHTML = `${a}`;
    document.getElementById("outputTwo").innerHTML = `${convertToRoman(a)}`;
}