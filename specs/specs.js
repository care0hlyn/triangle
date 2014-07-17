describe("triangle", function() {
  it("All sides of a triangle are equal", function() {
    triangle(5, 5, 5).should.equal("equilateral");
  });
  it("If two sides of a triangle are equal", function() {
  	triangle(5, 7, 5).should.equal("isoceles");
  });
  it("If no sides are equal", function() {
  	triangle(6, 5, 9).should.equal("scalene");
  });
  it("If one side is at least as long as the other two sides combined", function() {
  	triangle(2, 2, 8).should.equal("Not a triangle");
  });
});
