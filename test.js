var expect = require("chai").expect
var indexOfArraySequence = require("./index")

describe("indexOfArraySequence", function(){
  it("returns the correct index if it's found", function(){
    quoteArray = ["canary", "in", "a", "coal", "mine"]
    sourceArray = ["Do", "you", "think", "it's", "a", "canary", "in", "a", "coal", "mine", "or", "not?"]
    expect(indexOfArraySequence(quoteArray, sourceArray)).to.equal(5)
  })
  it("returns -1 if the sequence is not found", function(){
    quoteArray = ["canary", "in", "the", "coal", "mine"]
    sourceArray = ["Do", "you", "think", "it's", "a", "canary", "in", "a", "coal", "mine", "or", "not?"]
    expect(indexOfArraySequence(quoteArray, sourceArray)).to.equal(-1)
  })
})
