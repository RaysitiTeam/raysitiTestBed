// Template Service
(function(){
    angular.module('raysiti')
    .factory('PortfolioDetailsService',PortfolioDetailsService);
    PortfolioDetailsService.$inject = ['$http'];
    //PortfolioDetailsService
    function PortfolioDetailsService($http){
        return{
            getHelloWorld:getHelloWorld
        };
        function getHelloWorld(){
            return "Hello from Service";
        }
    }//end:PortfolioDetailsService
}());//iife