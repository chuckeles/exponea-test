describe("sideMenu", function() {

  it("compiles", function() {
    expect(this.element.html()).toBeDefined();
  });

  it("has a hamburger icon", function() {
    expect(this.element.find("i").hasClass("fa-bars")).toBe(true);
  });

  it("has a link that does nothing", function() {
    expect(this.element.find("a").attr("href")).toBe("#");
  });

  beforeEach(module("exponeaApp"));
  beforeEach(module("directives/side-menu.html"));

  beforeEach(inject(function($compile, $rootScope) {
    this.element = $compile("<side-menu></side-menu>")($rootScope);
    $rootScope.$digest();
  }));

});
