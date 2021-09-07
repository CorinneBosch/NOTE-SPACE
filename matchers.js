// Branch out and add your matchers here
(function () {
  var describe_tag = '';

  function describe(description, callback) {
    describe_tag = description;
    callback();
  }

  function it(description, callback) {
    try {
      callback();
    } catch (error) {
      console.log(
        `${describe_tag || ''}: ${description} failed with error: ${
          error.message
        }`
      );
    }
  }

  function expect(actual) {
    return {
      toContain: function (expected) {
        check = actual.includes(expected);
        if (check === true) {
          console.log(`${expected} exists in array`);
        } else {
          throw new Error(`${expected} does not exist in array`);
        }
      },
      toEqual: function (expected) {
        if (actual === expected) {
          console.log('.');
        } else {
          throw new Error(`expected ${actual} to equal ${expected}`);
        }
      },
      notToEqual: function (expected) {
        if (actual !== expected) {
          console.log('.');
        } else {
          throw new Error(`expected ${actual} to equal ${expected}`);
        }
      },
      toHaveSize: function (expected) {
        if (actual.length === expected) {
          console.log('.');
        } else {
          throw new Error(`expected ${actual} to equal ${expected}`);
        }
      },
    };
  }

  describe('Note', () => {
    it('checks if value is in array', () => {
      expect([1, 3, 7]).toContain(3);
    });
  });
})();
// check 'actual' is in the array by iterating to find the value
// return message if value is found
// return message if value is not found
