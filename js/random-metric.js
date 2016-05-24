angular.module("exponeaApp")

  /**
   * Shows a random number. Very useful metric.
   */
  .directive("randomMetric", function randomMetric($interval) {
    return {
      restrict: "E",
      templateUrl: "directives/random-metric.html",
      scope: {},
      replace: true,
      link: function randomMetricLink(scope) {
        scope.setRandomValue = function setRandomValue() {
          scope.value = Math.floor(Math.random() * 100000);
        };
        scope.setRandomValue();

        $interval(scope.setRandomValue, 3000);
      }
    };
  });
