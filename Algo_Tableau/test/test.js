import assert from "assert";
import {min} from "../js/app.js"
import {medium} from "../js/app.js"
import {string} from "../js/app.js"
import {pairFilter} from "../js/app.js"
import {concordance} from "../js/app.js"

describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
  });
  
//  A. Int of array ==> Minimum
describe('min', function(){
  it('should return 1', function(){
      assert.equal(min([1,2,3]), 1)
  })
  it('should return -9', function(){
    assert.equal(min([5,-3,-9,8]), -9)
  })
  it('should return undefined', function(){
    assert.equal(min([]), undefined)
  })
})

// B. Array (of int) ==> Medium

describe('medium', function(){
  it('should return 11', function(){
      assert.equal(medium([1, 2, 3, 4, 5]), 3)
  })
  it('should return -9', function(){
    assert.equal(medium([-1, -2, -3, -4, -5]), -3)
  })
  it('should return NaN', function(){
    assert.equal(medium([]), NaN)
  })
})

//  C. Array (de int) ==> Without Strings
describe('string', function(){
  it('should return array withtout string', function(){
      assert.equal(string(["word1", 7, "word2", 8]), string[7, 8])
  })
  it('should return array without string', function(){
    assert.equal(string([5, -3, -9, 8, "word1", "word2"]), string[5, -3, -9, 8])
  })
  it('should return undefined', function(){
    assert.equal(string([]), undefined)
  })
})

// D. Array of int) ==> return 2 arrays: 1 pair array and 1 impair array
describe ('pairFilter', function(){
  it('should return pair int array', function(){
    assert.equal(pairFilter[1, 2, 3, 4, 5, 6], pairFilter[2, 4, 6])
  })
  it('should return impair int array', function(){
    assert.equal(pairFilter[1, 2, 3, 4, 5, 6], pairFilter[1, 3, 5])
  })
  it('should return undefined', function(){
    assert.equal(pairFilter([]), undefined)
  })
})

// E. 2 Arrays (of int) ==> 1 array of int that are in 2 arrays
describe ('concordance', function(){
  it('should return new Array has int that are present in the 2 arrays', function(){
    assert.equal(concordance([11, 12, 13, 14, 15], [11, 13, 18, 15, 41, 27]), [11, 13, 15])
  })
  it('should return new Array has int that are present in the 2 arrays', function(){
    assert.equal(concordance([-11, -12, -13, -14, -15], [-11, -13, -18, -15, -41, -27]), [-11, -13, -15])
  })
  it('should return new Array has int that are present in the 2 arrays', function(){
    assert.equal(concordance([11, -12, 13, -14, 15], [11, -13, 18, 15, 41]), [11, 15])
  })
  it('should return undefined caused array(s) are empty or string is in', function(){
    assert.equal(concordance([], ["word1"]), undefined)
  })
})

