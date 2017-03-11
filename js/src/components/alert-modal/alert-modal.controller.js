(function(){
  angular.module('raysiti')
  .controller('AlertModalController', function ($scope, $state, title, message, $modalInstance) {
    $scope.message = message;
    $scope.title = title;

    $scope.onConfirm = function () {
      $modalInstance.close();
    };
  });//end:AlertModalController
}());//iife
