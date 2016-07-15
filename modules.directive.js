/**
 * Created by Gauri on 7/14/16.
 */

'use strict';

angular.module('dailyDealsApp')
    .directive('ddTopModule',['$window', function($window){
        return {
            restrict: 'A',
            link: function($scope, $el){
                var changeHeight = function(rightModuleHeight, width){
                    var leftModule = $el.children().first().find('.top-left-module');

                    if(leftModule){
                        if(rightModuleHeight){
                            leftModule.css({'max-height': rightModuleHeight});
                        } else {
                            leftModule.css({'display': 'none'});
                        }
                    }
                };

                $scope.$watchCollection(function() {
                    var stp = $window.stp;
                    return {
                        rightModuleHeight : $el.children('#rightModules') ? $el.children('#rightModules').height() : 0,
                        width: stp && stp.global ? stp.global.viewport : 0
                    };
                },function(obj) {
                    if(obj && obj.rightModuleHeight){
                        changeHeight(obj.rightModuleHeight, obj.width);
                    }
                });
            }
        };
    }]);