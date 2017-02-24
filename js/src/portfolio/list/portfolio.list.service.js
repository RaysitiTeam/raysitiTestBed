(function () {
    angular.module('raysiti')
        .factory('PortfolioListService', PortfolioListService);
    PortfolioListService.$inject = ['$http'];
    function PortfolioListService($http) {
        return {
            getAllListItems: getAllListItems
        };//end:return
        function getAllListItems() {
            var promise = $http.get("server/api/listPortfolio.php");
            //NOTE: New to Angular 1.6.x                        
            return promise;
    }//end:getAllListItems
}//end:PortfolioListService
}());//iife