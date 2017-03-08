(function(){
    angular.module('raysiti')
    .controller('PortfolioCreateController',PortfolioCreateController);
    PortfolioCreateController.$inject = ['$scope','PortfolioCreateService'];
    function PortfolioCreateController($scope,PortfolioCreateService){
        var vm = $scope;
        vm.inputFileObj = {};
        vm.statusMesage ='';
        vm.fileResultDiv = {
          'showFileResult' : false,
          'warning' : false,
          'message':''
        };
        vm.inputForm = {
          name:'',
          category:'',
          client:'',
          description:'',
          files:'',
          video:''
        };

        vm.updatePortfolio = function(inputObj){
            var updatePortfolioService = PortfolioCreateService.updatePortfolio(inputObj);
            updatePortfolioService.then(function(response){
                console.log('Response from service is: ', response);
            });//end:then
        };//end:updatePortfolio

        vm.uploadFile = function(inputfile){
          vm.fileResultDiv = {
            'showFileResult' : false,
            'warning' : false,
            'message':''
          };
          console.log('Upload File to be is', inputfile);
          // console.log('File type is ',typeof(inputfile));

          //FIXME: PAJ - Calling PHP Service - fileupload.php
          var uploadFileService = PortfolioCreateService.uploadFiletoServer(inputfile);
          uploadFileService.then(function(response){
            if(response.hasOwnProperty('data')){
              var dataObj = response.data;
              if(dataObj.hasOwnProperty('status')){
                if(dataObj.status == 'success'){
                    vm.fileResultDiv.showFileResult = true;
                    vm.fileResultDiv.warning = false;
                    vm.fileResultDiv.message = dataObj.message + " (" + dataObj.path + ")";
                }else{
                  vm.fileResultDiv.showFileResult = true;
                  vm.fileResultDiv.warning = true;
                  vm.fileResultDiv.message = response.data.message;
                }
              }else{ console.error ('Error - response.data does not have a status ppty', response.data); }
            }else{ console.error('Error -  response does not have data ppty', response); }//endif:if response has response.data
          });//end:then
        };//uploadFile()
    }//end:PortfolioCreateController
}());//iife
