(() => {

    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = [];
    function config() {
        console.log('app is configured...');
    }
})();
