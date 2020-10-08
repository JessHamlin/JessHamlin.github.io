describe("isEmpty", function() {

  it("Identify non-empty string", function() {
    expect(isEmpty("test")).toEqual(false);
  });

  it("Identify empty string", function() {
    expect(isEmpty("")).toEqual(true);
  });

  it("Evaluate undefined as an empty string", function() {
    var x;
    expect(isEmpty(x)).toEqual(true);
  });

});
