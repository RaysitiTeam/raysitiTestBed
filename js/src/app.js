(function(){
    //Module declaration - raysiti
    angular.module('raysiti',[
        //angular dependencies
        'ngAnimate',
        //third party dependencies
        'ui.router',
        'ui.grid'
    ]);

    angular.module('raysiti').run(['$rootScope',    
    function init($rootScope){
        $rootScope.appName = "RAYSITI: 3D Animation | 2D Animation | Architectural Walktroughs | Website Design | Logo Design | Brochure Design | Video Production | Animated Videos | Branding Solutions";
    }]);//end:run

}());//iife