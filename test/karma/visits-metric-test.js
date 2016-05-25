describe("visits-metric", function() {

  it("compiles", function() {
    expect(this.element.html()).toBeDefined();
  });

  it("has the supplied title", function() {
    expect(this.element.html()).toMatch(this.title);
  });

  describe("with a goal", function() {

    it("shows a progress bar", function() {
      expect(this.element.html()).toMatch("Goal");
      expect(this.element.find("progress").html()).toBeDefined();
      expect(this.element.html()).toMatch(/[0-9]+%/);
    });

    beforeEach(function() {
      this.goal = 12345;
    });

    beforeEach(inject(function($compile, $rootScope) {
      this.element = $compile("<metric title='" + this.title + "' goal='" + this.goal + "'></metric>")($rootScope);
      $rootScope.$digest();
    }));

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
