// Branch out and add your matchers here

function expect(actual) {
  return {
    toContain: function(expected) {
      check = actual.includes(expected);
      if (check === true) {
        console.log(`${expected} exists in ${actual}`);
      } else {
        throw new Error(`${expected} does not exist in ${actual}`)
      } 
    }  
  }
}


  // check 'actual' is in the array by iterating to find the value
  // return message if value is found
  // return message if value is not found