/**
 * Base Controller
 * @namespace Controllers
 */
(() => {

    'use strict';

    angular
        .module('app')
        .controller('BaseController', function () {

            this.getForm = getForm;

            ////

            /**
             * Method extend existing angular form
             * In case when form is undefined, return form with one method isNotExist()
             * @param form
             * @returns {*}
             */
            function getForm(form) {
                let isExist = !!form;
                if (!isExist) form = {};

                form.isNotExist = function () {
                    return !isExist;
                };

                if (isExist) {
                    form.unSubmit = function () {
                        form.$submitted = false;
                    };

                    form.reload = function () {
                        form.$submitted = false;
                        form.$setUntouched();
                        form.$setPristine();
                        form.$setDirty();
                    };
                }

                return form;
            }
        });
})();
