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
        scope.value = 0;
        scope.graphData = {
          labels: [1, 2, 3, 4, 5, 6, 7],
          series: [[]]
        };
        for (var i = 0; i < 7; i++) {
          var value = Math.floor(Math.random() * (scope.goal || 5000) / 7);
          scope.graphData.series[0].push(value);
          scope.value += value;
        }
        scope.change = scope.graphData.series[0][6] / scope.graphData.series[0][0] - 1;
        scope.change *= 100;

        scope.abs = function abs(value) {
          return Math.abs(value);
        };
      }
    };
  });
