angular.module("exponeaApp")

  /**
   * Main user menu. It could contain links to settings, profile, logout, etc.
   */
  .directive("userMenu", function userMenu() {
    return {
      restrict: "E",
      templateUrl: "directives/user-menu.html"
    };
  });
