(($) => {

    'use strict';

    $(document).ready(() => {
        let authorizationToken = window.localStorage.getItem('token');
        if (!authorizationToken) {
            window.location.href = '/';
        }

        let request = {
            method: 'GET',
            url: '/api/user',
            headers: {
                'Authorization': authorizationToken
            }
        };

        let responseSuccess = (res) => {
            if (res.success) {

                // Save currentUser to localStorage
                window.localStorage.setItem('currentUser', JSON.stringify(res.data));

                // Start angular application
                angular.element(function () {
                    angular.bootstrap(document, ['app']);
                });
            }
        };

        let responseError = (err) => {
            console.log(err)
        };

        $.ajax(request).done(responseSuccess).fail(responseError);
    })
})(jQuery);
