(function () {
    'use strict';

    angular
        .module('app')
        .directive('uploadUserLogo', uploadUserLogo);

    uploadUserLogo.$inject = ['growl'];
    function uploadUserLogo(growl) {
        return {
            strict: 'A', /* Binding using attribut */
            scope: {
                image: "=" /* as userLogo: '=userLogo' */
            },
            link: function (scope, element, attributes) { /* Function called when we run first time directive */
                element.bind("change", function (changeEvent) { /* changeEvent - Jquery object, contain all information about event*/
                    const fileSize = ((changeEvent.target.files[0].size / 1024) / 1024).toFixed(4); // MB
                    if (fileSize >= 10) {
                        growl.error('File size greater than 10 MB.');
                        return;
                    }

                    /* FileReader - special native API for downloading files*/
                    const uploader = new FileReader();

                    /* Uploading file  */
                    uploader.readAsDataURL(changeEvent.target.files[0]);

                    uploader.onload = function (loadEvent) {      /* Onload - event handler in FileReader (active when files successful upload)*/
                        scope.$apply(function () {              /* Update scope*/
                            scope.image = loadEvent.target.result;
                        });
                    };
                });
            }
        }
    }

})();