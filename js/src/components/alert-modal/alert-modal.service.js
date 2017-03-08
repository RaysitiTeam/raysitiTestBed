(function(){
  angular.module('raysiti')
    .factory('AlertModalService', function ($modal) {
      var service = {};
      service.confirm = function (title, message) {
        var modalInstance = $modal.open({
          animation: true,
          size: 'sm',
          templateUrl: 'app/components/alert-modal/alert-modal.html',
          controller: 'AlertModalController',
          resolve: {
            title: function () {
              return title;
            },
            message: function () {
              return message;
            }
          }
        });
        return modalInstance.result;
      };
      return service;
    });//end:AlertModalService

}());//iife
