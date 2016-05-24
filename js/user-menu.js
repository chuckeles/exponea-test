angular.module("exponeaApp")

  .directive("userMenu", function userMenu() {
    return {
      restrict: "E",
      templateUrl: "directives/user-menu.html"
    };
  });
