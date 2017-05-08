(() => {

    'use strict';

    let authorizationToken = window.localStorage.getItem('token');
    if (!authorizationToken) {
        window.location.href = '/';
    }

    let initInjector = angular.injector(["ng"]);
    let $http = initInjector.get("$http");

    let request = {
        method: 'GET',
        url: '/api/user',
        headers: {
            'Authorization': authorizationToken
        }
    };

    let responseSuccess = (res) => {
        if (res.data.success) {

            // Save currentUser to browser localStorage
            window.localStorage.setItem('currentUser', JSON.stringify(res.data.data));

            angular.element(document).ready(function () {
                angular.bootstrap(document, ['app']);
            });
        }
    };

    let responseError = (err) => {
        window.location.href = '/#/notification/' + err.statusText;
    };

    $http(request).then(responseSuccess, responseError);
})();
