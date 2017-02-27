/**
 * Created by avj2352 on 2/25/2017.
 */
angular.module('raysiti')
    .directive('fileDirective', ['$parse',fileDirective]);/*enddirective:fileDirective*/
function fileDirective($parse){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {            
            element.bind('change', function(){
                scope.$apply(function(){
                    scope.inputFileObj = element[0].files[0];
                });
            });
        }
    };
}////end-directive:fileDirective
