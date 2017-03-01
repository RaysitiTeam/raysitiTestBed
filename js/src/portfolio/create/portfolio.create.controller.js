(function(){
    angular.module('raysiti')
    .controller('PortfolioCreateController',PortfolioCreateController);
    PortfolioCreateController.$inject = ['$scope','PortfolioCreateService'];
    function PortfolioCreateController($scope,PortfolioCreateService){
        var vm = $scope;
        vm.inputFileObj = {};
        vm.statusMesage ='';
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
          console.log('Upload File to be is', inputfile);
          console.log('File type is ',typeof(inputfile));
          
          //FIXME: PAJ - Calling PHP Service - fileupload.php
          var uploadFileService = PortfolioCreateService.uploadFiletoServer(inputfile);
          uploadFileService.then(function(response){
            console.log('Response from uploadFile service is: ', response);
          });//end:then
        };//uploadFile()
    }//end:PortfolioCreateController
}());//iife
