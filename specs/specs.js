describe('triangle', function() {
  it("Is equilateral if all sides of a triangle are equal", function() {
    triangle("5, 5, 5").should.eql("equilateral");
  });
});