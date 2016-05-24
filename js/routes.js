angular.module("exponeaApp")

  /**
   * Configure the router.
   */
  .config(function routeConfig($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider

      .when("/", {
        templateUrl: "partials/dashboard.html"
      });
  });
