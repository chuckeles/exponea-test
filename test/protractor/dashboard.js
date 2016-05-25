describe("dashboard", function() {

  it("shows 4 cards", function() {
    expect(element.all(by.css(".card")).count()).toBe(4);
  });

  it("shows 4 metrics", function() {
    expect(element.all(by.css(".metric-value")).count()).toBe(4);
  });

  it("shows 2 charts", function() {
    expect(element.all(by.css(".ct-chart")).count()).toBe(2);
  });

  beforeEach(function() {
    browser.get("/");
  });

});
