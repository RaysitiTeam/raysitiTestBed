(function () {
    angular.module('raysiti')
        .controller('PortfolioListController', PortfolioListController);
    PortfolioListController.$inject = ['$scope', 'PortfolioListService'];
    function PortfolioListController($scope, PortfolioListService) {
        var vm = $scope;
        vm.allListItems = [];
        vm.portFolioListOptions = {            
            enableSorting: true,
            columnDefs: [
                { name: 'Portfolio', field: 'name' },
                { name: 'Category', field: 'category' },
                { name: 'Client', field: 'client' }
            ],
        };
        var getAllListItemsService = PortfolioListService.getAllListItems(); //get from Service
        getAllListItemsService
            .then(function onSuccess(response) {
                // Handle success
                var data = response.data;
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
                //NOTE: assigning data to ui-table 
                vm.portFolioListOptions.data.push(data);
                console.log('Table object is: ', data);
            }).catch(function onError(response) {
                // Handle error
                var data = response.data;
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
                console.error('Error retrieving service-getAllListItems', status);
            });
            // $scope.$apply();

    }//end:PortfolioListController
}());//iife