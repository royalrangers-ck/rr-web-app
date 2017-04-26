(function () {

    'use strict';

    angular
        .module('app')
        .service('UploadUserLogoService', UploadUserLogoService);

    UploadUserLogoService.$inject = ['$http', '$log', 'TokenService', '$rootScope'];
    function UploadUserLogoService($http, $log, TokenService, $rootScope) {

        this.uploadImage = uploadImage;

        ////

        /**
         * @description For correct uploading we must send FormData object
         * With 'transformRequest: angular.identity' prevents Angular to do anything on our data (like serializing it).
         * By setting ‘Content-Type’: undefined, the browser sets the Content-Type to multipart/form-data for us
         * and fills in the correct boundary.
         * Manually setting ‘Content-Type’: multipart/form-data will fail to fill in the boundary parameter of the request
         * All this for correct request typing and uploading
         * @param formdata
         * @param callback
         */
        function uploadImage(formdata, callback) {
            let userToken = TokenService.get();

            let request = {
                method: 'POST',
                url: '/api/user/avatar',
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined,
                    'Autorization': userToken
                },
                data: formdata
            };

            let goodResponse = function successCallback(response) {
                $log.debug('Good,we are uploaded image ', response);
                $rootScope.avatarUrl = response.data.data.avatarUrl;
                let res = response.data;
                if (callback && typeof callback === 'function') {
                    callback(res);
                }

            };

            let badResponse = function errorCallback(response) {
                $log.debug('Bad, some problems ', response);
                if (callback && typeof callback === 'function') {
                    callback(response);
                }
            };


            $http(request).then(goodResponse, badResponse);
        }
    }

})();