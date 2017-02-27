(function(){
    angular.module('raysiti')
        .factory('PortfolioCreateService',PortfolioCreateService);
    PortfolioCreateService.$inject = ['$http','createPortfolioEndPoint','uploadFileEndPoint'];
    function PortfolioCreateService($http,createPortfolioEndPoint,uploadFileEndPoint){
        return{
            updatePortfolio:updatePortfolio,
            uploadFiletoServer:uploadFiletoServer
        };//end:return
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

        function uploadFiletoServer(file){
	            var fd = new FormData();
	            fd.append('file', file);
	            var promise = $http.post(uploadFileEndPoint.url, fd, {
	                    // transformRequest: angular.identity,
	                    headers: {
	                        'Content-Type': uploadFileEndPoint.contentType
	                    }
	                })
	                .success(function(data, status, headers, config) {
	                    return data;
	                })
	                .error(function(data, status, headers, config) {
	                    console.error('Error updating the service: PortfolioCreateService:uploadFiletoServer', data);
	                });
	            return promise;
        }//end:uploadFiletoServer
    }//end:PortfolioCreateService
}());//iife
