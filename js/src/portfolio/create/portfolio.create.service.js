(function(){
    angular.module('raysiti')
        .factory('PortfolioCreateService',PortfolioCreateService);
    PortfolioCreateService.$inject = ['$http','createPortfolioEndPoint'];
    function PortfolioCreateService($http,createPortfolioEndPoint){
        return{
            updatePortfolio:updatePortfolio
        }
        function updatePortfolio(inputObj){
            var promise = $http({
                method:'POST',
                url:createPortfolioEndPoint.url,
                data:{
                    name:inputObj.name,
                    category:inputObj.category,
                    client:inputObj.client,
                    description:inputObj.description,
                    files:inputObj.files,
                    video:inputObj.video
                }
            })//end:$http
                .success(function(data,status,headers,config){
                    return data;
                })
                .error(function(data,status,headers,config){
                    console.error('Error updating the service: PortfolioCreateService:updatePortfolio', data);
                });//end:success/error
            return promise;
        }//end:updatePortfolio
    };//end:PortfolioCreateService
}());//iife