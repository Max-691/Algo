import assert from "assert";
import {min} from "../js/app.js"

describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
  });
  

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

// Medium

describe('medium', function(){
  it('should return 11', function(){
      assert.equal(min([1, 2, 3, 4, 5]), 11)
  })
  it('should return -9', function(){
    assert.equal(min([-1, -2, -3, 4, -5]), -11)
  })
  it('should return undefined', function(){
    assert.equal(min([]), undefined)
  })
})

// Return array without string

describe('string', function(){
  it('should return array withtout string', function(){
      assert.equal(min(["word1", 7, "word2", 8]), string[7, 8])
  })
  it('should return -9', function(){
    assert.equal(min([5,-3,-9,8]), -9)
  })
  it('should return undifined', function(){
    assert.equal(min([]), undefined)
  })
})