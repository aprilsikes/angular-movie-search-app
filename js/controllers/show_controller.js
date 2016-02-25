app.controller('ShowController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

  $scope.movie = [];

  $scope.showMovie = function ({{movie.imdbID}}) {
    $http.get('http://www.omdbapi.com/?i='+$routeParams.id).then(function(data){
      $scope.movie = data;
      console.log($scope.movie);
      return;
    });
  }
}])
