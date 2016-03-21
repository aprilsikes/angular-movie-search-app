app.controller('ShowController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

  var id = $routeParams.id;
  console.log(id);
  $http.get('http://www.omdbapi.com/?i='+id).then(function(data){
    console.log(data);
    $scope.movie = data.data;
    console.log($scope.movie);
  });
}])
