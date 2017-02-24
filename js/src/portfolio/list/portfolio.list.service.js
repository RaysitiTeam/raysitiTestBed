(function(){
    angular.module('raysiti')
    .factory('PortfolioListService',PortfolioListService);
    PortfolioListService.$inject = ['$http'];
    function PortfolioListService($http){
        return {
            getAllListItems:getAllListItems
        };//end:return
        function getAllListItems(){
            var promise = $http.get('server/api/listPortfolio.php')
                .success(function(data,status,headers,config){
                    return data;
                }).error(function(data,status,headers,config){
                    console.error('Error getting response - getAllListItems',data);
                });//end:success/error
            return promise;
        }//end:getAllListItems
    }//end:PortfolioListService
}());//iife