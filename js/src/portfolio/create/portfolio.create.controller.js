(function(){
    angular.module('raysiti')
    .controller('PortfolioCreateController',PortfolioCreateController);
    PortfolioCreateController.$inject = ['$scope','PortfolioCreateService'];
    function PortfolioCreateController($scope,PortfolioCreateService){
        var vm = $scope;
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
    }//end:PortfolioCreateController
}());//iife