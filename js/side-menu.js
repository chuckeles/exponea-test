angular.module("exponeaApp")

  /**
   * Side menu icon, there's no actual menu yet.
   */
  .directive("sideMenu", function sideMenu() {
    return {
      restrict: "E",
      templateUrl: "directives/side-menu.html"
    };
  });
