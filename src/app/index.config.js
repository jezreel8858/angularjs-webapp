/**
 * Created by Jezreel Lau on 17/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(config);

    /** @ngInject */
    function config($translateProvider){
        // Put your common app configurations here

        // angular-translate configuration
        // $translateProvider.useLoader('$translatePartialLoader', {
        //     urlTemplate: '{part}/i18n/{lang}.json'
        // });
        $translateProvider.preferredLanguage('pt-br');
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }
})(angular);