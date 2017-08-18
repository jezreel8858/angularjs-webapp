/**
 * Created by Jezreel Lau on 17/08/2017.
 */
(function (angular)
{
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, $mdIconProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        // Inject $cookies
        var $cookies;

        angular.injector(['ngCookies']).invoke([
            '$cookies', function (_$cookies){
                $cookies = _$cookies;
            }
        ]);

        var layoutStyle = $cookies.get('layoutStyle') || 'verticalNavigation';

        var layouts = {
            verticalNavigation  : {
                main        : 'app/core/layouts/layout.html',
                toolbar     : 'app/core/layouts/toolbar.html',
                navigationLeft  : 'app/core/layouts/navigation.left.html',
                navigationRight  : 'app/core/layouts/navigation.right.html',
                content     : 'app/core/layouts/content.html'
            }
        };
        // END - Layout Style Switcher

        // State definitions
        $stateProvider
            .state('main', {
                url: '/',
                views   : {
                    'main@'         : {
                        templateUrl: layouts[layoutStyle].main
                    },
                    'toolbar@main'   : {
                        templateUrl: layouts[layoutStyle].toolbar,
                        controller : 'MainController',
                        controllerAs: 'vm'
                    },
                    'navigationLeft@main'   : {
                        templateUrl: layouts[layoutStyle].navigationLeft,
                        controller : 'MainController',
                        controllerAs: 'vm'
                    },
                    'navigationRight@main'   : {
                        templateUrl: layouts[layoutStyle].navigationRight,
                        controller : 'MainController',
                        controllerAs: 'vm'
                    },
                    'content@main': {
                        templateUrl: layouts[layoutStyle].content,
                        controller : 'MainController',
                        controllerAs: 'vm'
                    }
                }
            });

        $mdThemingProvider
            .theme('default')
            .primaryPalette('grey', {
                'default': '600'
            })
            .accentPalette('teal', {
                'default': '500'
            })
            .warnPalette('defaultPrimary');

        $mdThemingProvider.theme('dark', 'default')
            .primaryPalette('defaultPrimary')
            .dark();

        $mdThemingProvider.theme('grey', 'default')
            .primaryPalette('grey');

        $mdThemingProvider.theme('custom', 'default')
            .primaryPalette('defaultPrimary', {
                'hue-1': '50'
            });

        $mdThemingProvider.definePalette('defaultPrimary', {
            '50': '#FFFFFF',
            '100': 'rgb(255, 198, 197)',
            '200': '#E75753',
            '300': '#E75753',
            '400': '#E75753',
            '500': '#E75753',
            '600': '#E75753',
            '700': '#E75753',
            '800': '#E75753',
            '900': '#E75753',
            'A100': '#E75753',
            'A200': '#E75753',
            'A400': '#E75753',
            'A700': '#E75753'
        });

        $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
    }

})(angular);