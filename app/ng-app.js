var app = angular.module('app', []);

app.controller('main', function($scope)
{
  $scope.toDos = []
  $scope.addtoDos = function(object)
  {
    $scope.toDos.push(object)
  }
  $scope.deletetoDos = function(index)
  {
    $scope.toDos.splice(index, 1)
  }
})
