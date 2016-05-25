angular.module("exponeaApp")

  .directive("chartist", function chartist($log) {
    return {
      restrict: "E",
      scope: {
        type: "@",
        data: "="
      },
      link: function chartistLink(scope, element) {
        element.addClass("ct-chart ct-perfect-fourth");
        var type = scope.type.charAt(0).toUpperCase() + scope.type.slice(1);

        scope.$watch("data", function() {
          new Chartist[type](element[0], scope.data, {
            axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              offset: 0
            },
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 10,
              left: 0
            }
          });
        });
      }
    };
  });
