(function(){
    //Setting up routes
    angular.module('raysiti')
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        //Default navigation to the home state
        $urlRouterProvider.otherwise('/items');
        //ui-sref="portfolio-edit({name: 'Pramod', client:'Ananth', category:'Logo'})"
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
        })
        .state('portfolio-edit',{
            url:'/edit',
            templateUrl:'js/src/portfolio/edit/editPortfolio.html',
            controller:'PortfolioEditController',
            params: {
              id:null,
    					name: null,
              client:null,
              category:null,
              description:null,
              files:null,
              video:null,
    				}
        });
    }]);//end:config
}());//iife
