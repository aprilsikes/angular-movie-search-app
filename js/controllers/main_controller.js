app.controller('MainController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  var movieSearch = $routeParams.movieSearch;
  // $scope.getMovies = function (movieSearch) {
    $http.get('http://www.omdbapi.com/?s='+movieSearch).then(function(data){
      $scope.movieData = data.data['Search'];
      console.log($scope.movieData);
      // return;
    });
  // }
}])
