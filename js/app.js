var app = angular.module('april', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/:movieSearch', {
        templateUrl: 'partials/show_all.html',
        controller: 'MainController'
      })
      .when('/:id/show', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
});
