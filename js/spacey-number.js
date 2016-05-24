angular.module("exponeaApp")

  .filter("spaceyNumber", function spaceyNumber(numberFilter) {
    return function spaceyNumberFilter(input) {
      return numberFilter(input).replace(",", " ");
    };
  });
