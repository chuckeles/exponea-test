angular.module("exponeaApp")

  /**
   * Shows the path to the current URL separated by "/" - breadcrumbs.
   */
  .directive("breadcrumbs", function breadcrumbs() {
    return {
      restrict: "E",
      templateUrl: "directives/breadcrumbs.html",
      scope: {
        active: "="
      },
      link: function breadcrumbsLink(scope) {
        // This could be retrieved from the router.
        scope.path = [
          "Dashboards"
        ];
        scope.active = "User Activity";
      }
    };
  });
