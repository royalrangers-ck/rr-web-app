(() => {

    'use strict';

    angular
        .module('app')
        .factory('UploadUserLogoFactory', UploadUserLogoFactory);

    UploadUserLogoFactory.$inject = ['$log', '$http', 'TokenService', '$rootScope'];
    function UploadUserLogoFactory($log, $http, TokenService, $rootScope) {

        let userToken = TokenService.get();

        /*
         * For correct uploading we must send FormData object
         * With 'transformRequest: angular.identity' prevents Angular to do anything on our data (like serializing it).
         * By setting ‘Content-Type’: undefined, the browser sets the Content-Type to multipart/form-data for us
         * and fills in the correct boundary.
         * Manually setting ‘Content-Type’: multipart/form-data will fail to fill in the boundary parameter of the request
         * All this for correct request typing and uploading
         * */
        return {
            uploadImage: function (formdata) {
                $http({
                    method: 'POST',
                    url: '/api/user/avatar',
                    transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined,
                        'Autorization': userToken
                    },
                    data: formdata
                }).then(function successCallback(response) {
                    $log.debug('Good,we are uploaded image', response);
                    $rootScope.avatarUrl = response.data.data.avatarUrl;
                }, function errorCallback(response) {
                    $log.debug('Bad, some problems', response)
                });
            }
        }
    }

})();
