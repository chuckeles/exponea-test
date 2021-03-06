describe("breadcrumbs", function() {

  it("compiles", function() {
    expect(this.element.html()).toBeDefined();
  });

  it("contains Dashboard", function() {
    expect(this.element.html()).toMatch("Dashboard");
  });

  it("contains the active path", function() {
    expect(this.element.html()).toMatch(this.active);
  });

  beforeEach(module("exponeaApp"));
  beforeEach(module("directives/breadcrumbs.html"));

  beforeEach(inject(function($compile, $rootScope) {
    this.element = $compile("<breadcrumbs active='active'></breadcrumbs>")($rootScope);
    $rootScope.$digest();
    this.active = $rootScope.active;
  }));

});
