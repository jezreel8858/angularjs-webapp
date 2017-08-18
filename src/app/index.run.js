/**
 * Created by Jezreel Lau on 17/08/2017.
 */
(function (angular) {
    'use strict';
    angular.module('app')
        .run(appRun);

    /** @ngInject */
    function appRun($rootScope, $timeout, $state) {

        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function (){
            $rootScope.loadingProgress = true;
        });

        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function (){
            $timeout(function (){
                $rootScope.loadingProgress = false;
            });
        });

        $rootScope.state = $state;
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });
    }
})(angular);