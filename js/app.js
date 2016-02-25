var app = angular.module('april', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/searchResults', {
        templateUrl: 'index.html',
        controller: 'MainController'
      })
      .when('/:id/show', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
});
