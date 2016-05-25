describe("notifications", function() {

  it("shows a red bell by default", function() {
    expect(this.notifications.element(by.css(".fa-bell")).isDisplayed()).toBe(true);
    expect(this.notifications.element(by.css(".fa-bell-o")).isDisplayed()).toBe(false);
  });

  describe("after being clicked", function() {
    it("shows a default bell", function() {
      expect(this.notifications.element(by.css(".fa-bell")).isDisplayed()).toBe(false);
      expect(this.notifications.element(by.css(".fa-bell-o")).isDisplayed()).toBe(true);
    });

    beforeEach(function() {
      this.notifications.element(by.css(".fa-bell")).click();
    });
  });

  beforeEach(function() {
    browser.get("/");

    this.notifications = element(by.css(".notifications-icon"));
  });

});
