(() => {

    'use strict';

    let initInjector = angular.injector(['ng', 'bootstrap']);
    let $http = initInjector.get('$http');
    let $window = initInjector.get('$window');
    let UserService = initInjector.get('UserService');

    let authorizationToken = $window.localStorage.getItem('token');
    if (!authorizationToken) {
        return $window.location.href = '/';
    }

    let request = {
        method: 'GET',
        url: '/api/user',
        headers: {
            'Authorization': authorizationToken
        }
    };

    let responseSuccess = (res) => {
        if (res.data.success) {
            $window.localStorage.setItem('currentUser', JSON.stringify(res.data.data));

            let isSuperAdmin = UserService.isSuperAdmin;
            if (!isSuperAdmin(res.data.data.authorities)) {
                $window.location.hash = '#/';
                $window.location.pathname = '/app/';
                return;
            }

            angular.element(document).ready(function () {
                angular.bootstrap(document, ['admin']);
            });
        }
    };

    let responseError = (err) => {
        $window.location.href = '/#/notification/' + err.statusText;
    };

    $http(request).then(responseSuccess, responseError);
})();
