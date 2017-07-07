(function () {
    'use strict';

    angular
        .module('app')
        .directive('uploadUserLogo', uploadUserLogo);

    function uploadUserLogo(NotificationService) {
        return {
            strict: 'A', /* Binding using attribut */
            scope: {
                image: "=", /* as userLogo: '=userLogo',  used for setting setting url for image */
            },
            link: function (scope, element, attributes) { /* Function called when we run first time directive */
                element.bind("change", function (changeEvent) { /* changeEvent - Jquery object, contain all information about event*/
                    const fileSize = ((changeEvent.target.files[0].size / 1024) / 1024).toFixed(4); // MB
                    if (fileSize >= 1) {
                        NotificationService.error('File size greater than 1 MB.');
                        return;
                    }

                    /* FileReader - special native API */
                    let reader = new FileReader();

                    reader.readAsDataURL(changeEvent.target.files[0]);
                    /* Reading image url for present image in modal window*/

                    reader.onload = function (loadEvent) {
                        /* Onload - event handler in FileReader (active when files successful upload)*/
                        scope.$apply(function () {              /* Update scope*/
                            scope.image = loadEvent.target.result;
                        });
                    };
                });
            }
        }
    }

})();