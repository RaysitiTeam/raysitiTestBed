(function(){
    //Setting up routes
    angular.module('raysiti')
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        //Default navigation to the home state
        $urlRouterProvider.otherwise('/items');
        //
        $stateProvider
        .state('portfolio',{
            url:'/details',
            templateUrl:'js/src/portfolio/details/portfolio-details.html',
            controller:'PortfolioDetailsController'            
        })
        .state('portfolio-list',{
            url:'/items',
            templateUrl:'js/src/portfolio/list/listItems.html',
            controller:'PortfolioListController'            
        })
        .state('portfolio-update',{
            url:'/new',
            templateUrl:'js/src/portfolio/create/newPortfolio.html',
            controller:'PortfolioCreateController'            
        });
    }]);//end:config
}());//iife