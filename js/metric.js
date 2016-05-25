angular.module("exponeaApp")

  /**
   * Shows a metric specified by the inputs.
   */
  .directive("metric", function metric() {
    return {
      restrict: "E",
      templateUrl: "directives/metric.html",
      scope: {
        title: "@",
        goal: "@"
      },
      replace: true,
      link: function metricLink(scope) {
        scope.value = Math.floor(Math.random() * (scope.goal || 5000));
      }
    };
  });
