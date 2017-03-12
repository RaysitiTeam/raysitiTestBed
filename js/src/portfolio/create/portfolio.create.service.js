(function() {
    angular.module('raysiti')
        .factory('PortfolioCreateService', PortfolioCreateService);
    PortfolioCreateService.$inject = ['$http', 'createPortfolioEndPoint', 'uploadFileEndPoint'];

    function PortfolioCreateService($http, createPortfolioEndPoint, uploadFileEndPoint) {
        return {
            createPortfolio: createPortfolio,
            uploadFiletoServer: uploadFiletoServer,
            getRelativePath:getRelativePath,
            getRecordDetailsService:getRecordDetailsService,
            stringToArray:stringToArray
        }; //end:return
        function createPortfolio(inputObj) {
            var promise = $http({
                    method: 'POST',
                    url: createPortfolioEndPoint.url,
                    data: {
                        name: inputObj.name,
                        category: inputObj.category,
                        client: inputObj.client,
                        description: inputObj.description,
                        startDate: inputObj.startDate,
                        files: inputObj.files,
                        video: inputObj.video
                    }
                }) //end:$http
                .success(function(data, status, headers, config) {
                    return data;
                })
                .error(function(data, status, headers, config) {
                    console.error('Error updating the service: PortfolioCreateService:updatePortfolio', data);
                }); //end:success/error
            return promise;
        } //end:updatePortfolio

        function uploadFiletoServer(file) {
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
        } //end:uploadFiletoServer

        function getRelativePath(pathString) {
            var text = pathString.substr(pathString.indexOf('img'));
            return text; //Get the string after ../../
        }//end:getRelativePath

        function getRecordDetailsService(inputObj){
          var promise = $http({
                  method: 'POST',
                  url: createPortfolioEndPoint.url,
                  data: {
                      name: inputObj.name,
                      category: inputObj.category,
                      client: inputObj.client,
                      description: inputObj.description,
                      files: inputObj.files,
                      video: inputObj.video
                  }
              }) //end:$http
              .success(function(data, status, headers, config) {
                  return data;
              })
              .error(function(data, status, headers, config) {
                  console.error('Error updating the service: PortfolioCreateService:updatePortfolio', data);
              }); //end:success/error
          return promise;
        }//end:getRecordDetailsService

        function stringToArray(inputString){
          var arrayResponse = [];
          if(typeof(inputString) == 'string'){
            if(inputString.indexOf(',') > -1){
              arrayResponse = inputString.split(',');
            }else{
              arrayResponse.push(inputString);
            }
          }else{
            console.error('InputString is not a string');
          }//endif:inputString is string.
          return arrayResponse;
        }//end:stringToArray

    } //end:PortfolioCreateService
}()); //iife
