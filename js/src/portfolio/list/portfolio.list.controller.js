(function() {
    angular.module('raysiti')
        .controller('PortfolioListController', PortfolioListController);
    PortfolioListController.$inject = ['$scope', 'PortfolioListService', 'uiGridConstants'];

    function PortfolioListController($scope, PortfolioListService, uiGridConstants) {
        var vm = $scope;
        vm.allListItems = [];
        //Toggle Filter input box using a button
        $scope.toggleFiltering = function() {
            $scope.portFolioListOptions.enableFiltering = !$scope.portFolioListOptions.enableFiltering;
            $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
        }; //end:toggleFiltering

        // Enable filtering using ui grid
        $scope.highlightFilteredHeader = function(row, rowRenderIndex, col, colRenderIndex) {
            if (col.filters[0].term) {
                return 'header-filtered';
            } else {
                return '';
            }
        }; //end:highlightFilteredHeader

        vm.portFolioListOptions = {
            enableSorting: true,
            onRegisterApi: function(gridApi) {
                $scope.gridApi = gridApi;
            },
            enableFiltering: false,
            data: 'allListItems',
            enableColumnMenus: false,
            columnDefs: [{
                displayName: 'Portfolio',
                field: 'name',
                width: 200,
                headerCellClass: $scope.highlightFilteredHeader
            }, {
                displayName: 'Category',
                field: 'category',
                width: 200
            }, {
                displayName: 'Client',
                field: 'client',
                width: 200
            }, {
                displayName: 'Created on',
                field: 'created',
                width: 100
            }, {
                displayName: 'Description',
                field: 'description',
                width: 553,
                enableSorting: false
            }, {
                name: 'Edit',
                cellTemplate: '<button class="btn btn-xs btn-warning center-align">Edit</button>',
                width: 50,
                enableSorting: false,
                enableFiltering: false
            }, {
                name: 'Delete',
                cellTemplate: '<button class="btn btn-xs btn-danger center-align">Delete</button>',
                width: 100,
                enableSorting: false,
                enableFiltering: false
            }]
        };
        var getAllListItemsService = PortfolioListService.getAllListItems(); //get from Service
        getAllListItemsService
            .then(function(response) {
                // Handle success
                var data = response.data;
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
                //NOTE: assigning data to ui-table
                vm.allListItems = data;
                console.log('Table object is: ', data);
            }); //end:then

    } //end:PortfolioListController
}()); //iife
