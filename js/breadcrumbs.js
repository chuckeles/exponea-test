angular.module("exponeaApp")

  .directive("breadcrumbs", function breadcrumbs() {
    return {
      restrict: "E",
      templateUrl: "directives/breadcrumbs.html",
      scope: {},
      link: function breadcrumbsLink(scope) {
        // This could be retrieved from the router.
        scope.path = [
          "Dashboards"
        ];
        scope.active = "User Activity";
      }
    };
  });
