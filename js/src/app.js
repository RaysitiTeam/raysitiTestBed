(function() {
    //Module declaration - raysiti
    angular.module('raysiti', [
        //angular dependencies
        'ngAnimate',
        'ngSanitize',
        //third party dependencies
        'ui.router',
        'ui.bootstrap',
        'ui.grid',
        'ui.select',
    ]);

    angular.module('raysiti').run(['$rootScope',
        function init($rootScope) {
            $rootScope.appName = "RAYSITI: 3D Animation | 2D Animation | Architectural Walktroughs | Website Design | Logo Design | Brochure Design | Video Production | Animated Videos | Branding Solutions";
        }
    ]); //end:run

    //Defining all XHR Requests URLS, HeaderType
    angular.module('raysiti')
        .constant('listPortfolioEndPoint', {
            'url': 'server/api/listPortfolio.php',
            'httpTimeout': 5000,
            'contentType': 'application/json'
        }); //end:listPortfolioEndPoint

    angular.module('raysiti')
        .constant('createPortfolioEndPoint', {
            'url': 'server/api/createPortfolio.php',
            'httpTimeout': 5000,
            'contentType': 'application/json'
        }); //end:createPortfolioEndPoint

    angular.module('raysiti')
        .constant('uploadFileEndPoint', {
            'url': 'server/api/fileupload.php',
            'httpTimeout': 5000,
            'contentType': undefined
        }); //end:uploadFileEndPoint

    angular.module('raysiti')
        .constant('editPortfolioEndPoint', {
            'url': 'server/api/editPortfolio.php',
            'httpTimeout': 5000,
            'contentType': 'application/json'
        }); //end:editPortfolioEndPoint

    angular.module('raysiti')
        .constant('delPortfolioEndPoint', {
            'url': 'server/api/deletePortfolio.php',
            'httpTimeout': 5000,
            'contentType': 'application/json'
        }); //end:delPortfolioEndPoint

    angular.module('raysiti')
        .constant('detailsPortfolioEndPoint', {
            'url': 'server/api/detailsPortfolio.php',
            'httpTimeout': 5000,
            'contentType': 'application/json'
        }); //end:detailsPortfolioEndPoint

    //NOTE: - PAJ - Custom filters for ui multiselect
    angular.module('raysiti').filter('propsFilter', function() {
        return function(items, props) {
            var out = [];

            if (angular.isArray(items)) {
                var keys = Object.keys(props);

                items.forEach(function(item) {
                    var itemMatches = false;

                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        };
    });//end:filter

}()); //iife
