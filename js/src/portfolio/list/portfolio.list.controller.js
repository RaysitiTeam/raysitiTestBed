(function () {
    angular.module('raysiti')
        .controller('PortfolioListController', PortfolioListController);
    PortfolioListController.$inject = ['$scope', 'PortfolioListService'];
    function PortfolioListController($scope, PortfolioListService) {
        var vm = $scope;
        vm.allListItems = [];
        vm.allListItems = PortfolioListService.getAllListItems(); //get from Service
        vm.portfolioList = [
            {
                "name": "Ninnu Project",
                "category": "Logo",
                "description": "This is a simple Description"
            },
            {
                "name": "Ninnu Project",
                "category": "Logo",
                "description": "This is a simple Description"
            },
            {
                "name": "Ninnu Project",
                "category": "Logo",
                "description": "This is a simple Description"
            },
            {
                "name": "Ninnu Project",
                "category": "Logo",
                "description": "This is a simple Description"
            }
        ];
    }//end:PortfolioListController
}());//iife