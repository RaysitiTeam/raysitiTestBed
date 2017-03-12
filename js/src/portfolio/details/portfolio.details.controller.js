// Template Controller
(function(){
    angular.module('raysiti')
    .controller('PortfolioDetailsController', PortfolioDetailsController);
    PortfolioDetailsController.$inject = ['$scope','PortfolioDetailsService','$stateParams','$state','AlertModalService'];
    //PortfolioDetailsController
    function PortfolioDetailsController($scope,PortfolioDetailsService,$stateParams,$state,AlertModalService){
        var vm = $scope;
        vm.description ='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        if($stateParams.name){
          vm.name = $stateParams.name;
          vm.client = $stateParams.client;
          vm.description = $stateParams.description;
          vm.video = $stateParams.video;
        }else{
          AlertModalService.confirm('No Data', 'Unable to Fetch Data')
          .then(function(){
            $state.go('portfolio-list');
          });
        }//endif:$stateParams

    }//end:PortfolioDetailsController
}());//iife
