(function(){
    angular.module('raysiti')
    .factory('PortfolioListService',PortfolioListService);
    PortfolioListService.$inject = ['$http'];
    function PortfolioListService($http){
        return {
            getAllListItems:getAllListItems
        };//end:return
        function getAllListItems(){
            var myArray = ['One','Two', 'Three'];
            return myArray;
        }//end:getAllListItems
    }//end:PortfolioListService
}());//iife