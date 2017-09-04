(function () {
    'use strict';

    angular
        .module('admin')
        .directive('imgUpload', imgUpload);

    function imgUpload(NotificationService) {
        return {
            strict: 'A',
            scope: {
                image: "=",
            },
            link: function (scope, element) {
                element.bind("change", function (changeEvent) {
                    const fileSize = ((changeEvent.target.files[0].size / 1024) / 1024).toFixed(4);
                    if (fileSize >= 1) {
                        NotificationService.error('File size greater than 1 MB.');
                        return;
                    }

                    let reader = new FileReader();
                    reader.readAsDataURL(changeEvent.target.files[0]);
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.image = loadEvent.target.result;
                        });
                    };
                });
            }
        }
    }

})();