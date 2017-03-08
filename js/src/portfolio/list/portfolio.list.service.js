(function () {
    angular.module('raysiti')
        .factory('PortfolioListService', PortfolioListService);
    PortfolioListService.$inject = ['$http','listPortfolioEndPoint'];
    function PortfolioListService($http,listPortfolioEndPoint) {
        return {
            getAllListItems: getAllListItems
        };//end:return
        function getAllListItems() {
            var promise = $http.get(listPortfolioEndPoint.url)
                .success(function(data,status,headers,config){
                   return data;
                }).error(function(data,status,headers,config){
                    console.error('Error retrieving service - PortfolioListService.getAllListItems', data);
                });
            //NOTE: New to Angular 1.6.x                        
            return promise;
    }//end:getAllListItems
}//end:PortfolioListService
}());//iife