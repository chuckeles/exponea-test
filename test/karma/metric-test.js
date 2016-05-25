describe("metric", function() {

  it("compiles", function() {
    expect(this.element.html()).toBeDefined();
  });

  it("has the supplied title", function() {
    expect(this.element.html()).toMatch(this.title);
  });

  beforeEach(function() {
    this.title = "Cool Testing Metrics";
  });

  beforeEach(module("exponeaApp"));
  beforeEach(module("directives/metric.html"));

  beforeEach(inject(function($compile, $rootScope) {
    this.element = $compile("<metric title='" + this.title + "'></metric>")($rootScope);
    $rootScope.$digest();
  }));

});
