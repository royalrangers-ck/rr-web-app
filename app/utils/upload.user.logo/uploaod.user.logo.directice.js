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
                image: "=", /* as userLogo: '=userLogo',  used for setting setting url for image */
                formData: "="   /* as file: '=formData', used for setting data in controller */
            },
            link: function (scope, element, attributes) { /* Function called when we run first time directive */
                element.bind("change", function (changeEvent) { /* changeEvent - Jquery object, contain all information about event*/
                    const fileSize = ((changeEvent.target.files[0].size / 1024) / 1024).toFixed(4); // MB
                    if (fileSize >= 10) {
                        growl.error('File size greater than 10 MB.');
                        return;
                    }

                    /* FormData - special native API */
                    let formData = new FormData();
                    /* FileReader - special native API */
                    let reader = new FileReader();

                    formData.append('file', changeEvent.target.files[0]);
                    /* Adding in form image file with key 'file'*/
                    reader.readAsDataURL(changeEvent.target.files[0]);
                    /* Reading image url for present image in modal window*/

                    reader.onload = function (loadEvent) {
                        /* Onload - event handler in FileReader (active when files successful upload)*/
                        scope.$apply(function () {              /* Update scope*/
                            scope.formData = formData;
                            scope.image = loadEvent.target.result;
                        });
                    };
                });
            }
        }
    }

})();