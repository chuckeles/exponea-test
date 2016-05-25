describe("notifications", function() {

  it("compiles", function() {
    expect(this.element.html()).toBeDefined();
  });

  it("has 2 bell icons", function() {
    expect(this.element.find("i").length).toBe(2);
  });

  beforeEach(module("exponeaApp"));
  beforeEach(module("directives/notifications.html"));

  beforeEach(inject(function($compile, $rootScope) {
    this.element = $compile("<notifications></notifications>")($rootScope);
    $rootScope.$digest();
  }));

});
