(function () {
    angular.module('raysiti')
        .factory('PortfolioListService', PortfolioListService);
    PortfolioListService.$inject = ['$http','listPortfolioEndPoint','delPortfolioEndPoint'];
    function PortfolioListService($http,listPortfolioEndPoint,delPortfolioEndPoint) {
        return {
            getAllListItems: getAllListItems,
            deletePortfolioRecord:deletePortfolioRecord
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

    function deletePortfolioRecord(inputObj){
      var promise = $http({
              method: 'POST',
              url: delPortfolioEndPoint.url,
              data: {
                  name: inputObj.name,
                  category: inputObj.category,
                  client: inputObj.client
              }
          }) //end:$http
          .success(function(data, status, headers, config) {
              return data;
          })
          .error(function(data, status, headers, config) {
              console.error('Error delete the service: PortfolioListService:deletePortfolioRecord', data);
          }); //end:success/error
      return promise;
    }//end:deletePortfolioRecord
}//end:PortfolioListService
}());//iife
