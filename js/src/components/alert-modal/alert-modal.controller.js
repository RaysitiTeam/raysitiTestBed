(function(){
  angular.module('raysiti')
  .controller('AlertModalController', function ($scope, $state, title, message, $modalInstance) {
    $scope.message = message;
    $scope.title = title;

    $scope.onConfirm = function () {
      $state.go('login');
      $modalInstance.close();
    };
  });//end:AlertModalController
}());//iife
