angular.module("exponeaApp")

  /**
   * Shows visits from a particular source.
   */
  .directive("visitsMetric", function visitsMetric() {
    return {
      restrict: "E",
      templateUrl: "directives/visits-metric.html",
      scope: {
        title: "@",
        goal: "@"
      },
      replace: true,
      link: function visitsMetricLink(scope) {
        scope.value = Math.floor(Math.random() * (scope.goal || 5000));
        scope.change = Math.random() * 100 - 50;
      }
    };
  });
