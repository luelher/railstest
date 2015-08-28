


var railstest = angular.module('railstest', ['ui.router', 'ngFileUpload']);


railstest.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'PrincipalController'
    });

  $stateProvider
    .state('fibonacci', {
      url: '/fibonacci',
      templateUrl: '/fibonacci.html',
      controller: 'FibonacciController'
    });


  $stateProvider
    .state('palindrome', {
      url: '/palindrome',
      templateUrl: '/palindrome.html',
      controller: 'PalindromeController'
    });

  $stateProvider
    .state('unos', {
      url: '/unos',
      templateUrl: '/unos.html',
      controller: 'UnosController'
    });


  $urlRouterProvider.otherwise('home');
}])





railstest.controller('PrincipalController', ['$scope', function($scope){

  $scope.test = 'Hello world!';

}]);

railstest.controller('FibonacciController', ['$scope', 'Upload', function($scope, Upload){

  $scope.test = 'Test Fibonacci!';
  $scope.data = {};
  $scope.error = "";

  $scope.clickFibonacci = function(){
      if ($scope.archivo && !$scope.archivo.$error) {
        $scope.upload($scope.archivo);
      }else{
        $scope.error = "Debe seleccionar un archivo .txt";
        console.log("No se ejecutó: "+JSON.stringify($scope.archivo))
      }
  };


  // upload on file select or drop
  $scope.upload = function (file) {
      Upload.upload({
          url: '/respuestas/fibonacci',
          file: file
      }).progress(function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
      }).success(function (data, status, headers, config) {
          $scope.data = data.data;
          console.log('file ' + config.file.name + 'uploaded. Response: ' + data.data);
      }).error(function (data, status, headers, config) {
          $scope.error = "Debe seleccionar un archivo .txt";
          console.log('error status: ' + status);
      })
  };


}]);


railstest.controller('PalindromeController', ['$scope', '$http', function($scope, $http){

  $scope.data = {};

  $scope.clickPalindrome = function() {
    return $http.post('/respuestas/palindrome').success(function(data){
      $scope.data = data.data;
    });
  }

}]);


railstest.controller('UnosController', ['$scope', '$http', function($scope, $http){

  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

  $scope.data = {};
  $scope.numero = "";
  $scope.error = "";

  $scope.clickUnos = function() {
    if($scope.numero!="" && isInt($scope.numero)){
      return $http.post('/respuestas/unos', "numero="+$scope.numero).success(function(data){

        $scope.data = data.data;
      });
    }else{
      $scope.error = "Debe ingresar un numero entero";
    }
  }

  function isInt(n) {
   return n % 1 === 0;
  }


}]);