app.controller('MainController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  var movieSearch = $routeParams.movieSearch;
    $http.get('http://www.omdbapi.com/?s='+movieSearch).then(function(data){
      $scope.movieData = data.data['Search'];
      console.log($scope.movieData);
    });
}])
