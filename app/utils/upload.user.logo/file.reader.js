(function () {
    'use strict';

    angular
        .module('app')
        .directive('fileread', FileRead);

    FileRead.$inject = ['growl'];
    function FileRead(growl) {
        return {
            scope: {
                fileread: "=",
                filename: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    console.log('changeEvent');
                    var fileSize = ((changeEvent.target.files[0].size / 1024) / 1024).toFixed(4); // MB
                    if (fileSize >= 10) {
                        growl.error('File size greater than 10 MB.');
                        return;
                    }

                    var reader = new FileReader();

                    reader.onload = function (loadEvent) {
                        console.log('loadEvent');
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                            scope.filename = changeEvent.target.files[0].name;
                        });
                    };

                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }
})();