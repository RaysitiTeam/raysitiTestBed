// Template Controller
(function(){
    angular.module('raysiti')
    .controller('PortfolioDetailsController', PortfolioDetailsController);
    PortfolioDetailsController.$inject = ['$scope','PortfolioDetailsService'];
    //PortfolioDetailsController
    function PortfolioDetailsController($scope,PortfolioDetailsService){
        var vm = $scope;
        vm.hello = "Case Study: Logo Design";

        vm.hello = PortfolioDetailsService.getHelloWorld();

    }//end:PortfolioDetailsController
}());//iife