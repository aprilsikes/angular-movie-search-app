app.controller('MainController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

  $scope.movieData;

  $scope.getMovies = function (movieTitle) {
    $http.get('http://www.omdbapi.com/?s='+movieTitle).then(function(data){
      console.log(data);
      var s = $routeParams.s
      $scope.movieData = data.data.results;
      return;
    });
  }
}])
