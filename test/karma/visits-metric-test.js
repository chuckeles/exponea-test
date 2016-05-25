describe("visits-metric", function() {

  it("compiles", function() {
    expect(this.element.html()).toBeDefined();
  });

  it("has the supplied title", function() {
    expect(this.element.html()).toMatch(this.title);
  });

  beforeEach(function() {
    this.title = "Visits What Metrics";
  });

  beforeEach(module("exponeaApp"));
  beforeEach(module("directives/visits-metric.html"));

  beforeEach(inject(function($compile, $rootScope) {
    this.element = $compile("<visits-metric title='" + this.title + "'></visits-metric>")($rootScope);
    $rootScope.$digest();
  }));

});
