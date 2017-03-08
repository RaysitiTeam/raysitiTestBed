(function () {
    angular.module('raysiti')
        .controller('PortfolioListController', PortfolioListController);
    PortfolioListController.$inject = ['$scope', 'PortfolioListService'];
    function PortfolioListController($scope, PortfolioListService) {
        var vm = $scope;
        vm.allListItems = [];
        vm.portFolioListOptions = {            
            enableSorting: true,
            data:'allListItems',
            enableColumnMenus:false,
            columnDefs: [
                { displayName: 'Portfolio', field: 'name', width:200 },
                { displayName: 'Category', field: 'category', width:200 },
                { displayName: 'Client', field: 'client', width:200 },
                { displayName: 'Created on', field: 'created', width:100},
                { displayName: 'Description', field: 'description', width:350, enableSorting:false},
                {
                    name:'Edit',
                    cellTemplate:'<button class="btn btn-xs btn-warning center-align">Edit</button>',
                    width:50,
                    enableSorting:false
                },
                {
                    name:'Delete',
                    cellTemplate:'<button class="btn btn-xs btn-danger center-align">Delete</button>',
                    width:100,
                    enableSorting:false
                }
            ]
        };
        var getAllListItemsService = PortfolioListService.getAllListItems(); //get from Service
        getAllListItemsService
            .then(function (response) {
                // Handle success
                var data = response.data;
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
                //NOTE: assigning data to ui-table 
                vm.allListItems = data;
                console.log('Table object is: ', data);
            });//end:then

    }//end:PortfolioListController
}());//iife