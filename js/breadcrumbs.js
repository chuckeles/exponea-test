angular.module("exponeaApp")

  .directive("breadcrumbs", function breadcrumbs() {
    return {
      restrict: "E",
      templateUrl: "directives/breadcrumbs.html"
    };
  });
