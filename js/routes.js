angular.module("exponeaApp")

  /**
   * Configure the router.
   */
  .config(function routeConfig($routeProvider) {
    $routeProvider

      .when("/", {
        templateUrl: "partials/dashboard.html"
      })
  });
