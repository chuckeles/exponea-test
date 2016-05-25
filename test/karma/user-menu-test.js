describe("userMenu", function() {

  it("compiles", function() {
    expect(this.element.html()).toBeDefined();
  });

  it("has a caret icon", function() {
    expect(this.element.find("i").hasClass("fa-caret-down")).toBe(true);
  });

  it("has a link that does nothing", function() {
    expect(this.element.find("a").attr("href")).toBe("#");
  });

  it("has my name", function() {
    expect(this.element.text()).toMatch(/Martin/);
  });

  beforeEach(module("exponeaApp"));
  beforeEach(module("directives/user-menu.html"));

  beforeEach(inject(function($compile, $rootScope) {
    this.element = $compile("<user-menu></user-menu>")($rootScope);
    $rootScope.$digest();
  }));

});
