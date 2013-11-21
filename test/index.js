var path = require("../index")
  , expect = require("expect.js")

describe("a bunch of paths", function() {
  it("should normalize absolute paths", function() {
    expect(path.normalize("/ohHey/../derp")).to.be("/derp")
    expect(path.normalize("/ohHey//derp")).to.be("/ohHey/derp")
    expect(path.normalize("/../../ohHey//derp")).to.be("/ohHey/derp")
    expect(path.normalize("/../../ohHey/../derp")).to.be("/derp")
    expect(path.normalize("/../.././ohHey/../derp")).to.be("/derp")
  }) 
  it("should normalize relative paths", function() {
    expect(path.normalize("../../ohHey/../derp")).to.be("../../derp")
    expect(path.normalize("../../ohHey/../../..//../herp")).to.be("../../../../../herp")
    expect(path.normalize("../../ohHey/../derp")).to.be("../../derp")
  }) 
})
describe("paths that need to be resolved", function() {
  it("should resolve them", function() {
    expect(path.resolve("/an/absolute/path/", "../")).to.be("/an/absolute")
    expect(path.resolve("/an/absolute/path", "../", "..")).to.be("/an")
    expect(path.resolve("/an/absolute/path", "../", "..", "..")).to.be("/")
    expect(path.resolve("/an/absolute/path", "../", "..", "../hey/dude")).to.be("/hey/dude")
  })
})
