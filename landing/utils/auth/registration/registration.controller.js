(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['countries', 'ranks', 'Ranks', 'growl', '$routeSegment', '$location', 'RegistrationService'];
    function RegistrationController(countries, ranks, Ranks, growl, $routeSegment, $location, RegistrationService) {
        const vm = this;

        vm.data = {};
        vm.availableOptions = [];
        vm.countries = [];
        vm.cities = [];
        vm.groups = [];
        vm.platoons = [];
        vm.sections = [];
        vm.ranks = [];

        vm.submit = submit;
        vm.getCities = getCities;
        vm.getGroups = getGroups;
        vm.getPlatoons = getPlatoons;
        vm.getSections = getSections;
        vm.getRanks = getRanks;

        activate();

        ////

        function activate() {
            if (countries && countries.$promise) {
                countries.$promise.then((res) => {
                    if (res.success) {
                        vm.countries = res.data;
                    }
                })
            }

            if (ranks && ranks.$promise) {
                ranks.$promise.then((res) => {
                    if (res.success) {
                        vm.ranks = res.data.reduce(function (ranks, rank) {
                            ranks.push({
                                value: rank,
                                name: Ranks[rank]
                            });
                            return ranks;
                        }, []);
                    }
                });
            }
        }

        function submit() {
            if (!vm.form || vm.form.$invalid) {
                return vm.form.$submitted = false;
            }

            let afterSave = function (res) {
                if (res.success) {
                    growl.success(res.data.message);
                    $location.path('/login');
                } else {
                    growl.info(res.data.message);
                }

                vm.form.$submitted = false;
            };

            let req = {
                email: vm.data.email,
                password: vm.data.password,
                firstName: vm.data.firstName,
                lastName: vm.data.lastName,
                gender: vm.data.gender,
                telephoneNumber: vm.data.telephoneNumber,
                birthDate: vm.data.birthDate,
                status: vm.data.status,
                countryId: vm.data.country.id,
                cityId: vm.data.city.id,
                groupId: vm.data.group.id,
                platoonId: vm.data.platoon.id,
                sectionId: vm.data.section.id,
                userRank: vm.data.rank
            };

            RegistrationService.register(req, afterSave)
        }

        function getCities(id) {
            if (id) {
                RegistrationService.city({countryId: id}).$promise.then((res) => {
                    if (res.success) {
                        vm.cities = res.data;
                    }
                })
            }
        }

        function getGroups(id) {
            if (id) {
                RegistrationService.group({cityId: id}).$promise.then((res) => {
                    if (res.success) {
                        vm.groups = res.data;
                    }
                })
            }
        }

        function getPlatoons(id) {
            if (id) {
                RegistrationService.platoon({groupId: id}).$promise.then((res) => {
                    if (res.success) {
                        vm.platoons = res.data;
                    }
                })
            }
        }

        function getSections(id) {
            if (id) {
                RegistrationService.section({platoonId: id}).$promise.then((res) => {
                    if (res.success) {
                        vm.sections = res.data;
                    }
                })
            }
        }

        function getRanks () {
            RegistrationService.ranks().$promise.then((res) => {
                if (res.success) {
                    vm.ranks = res.data;
                }
            });
        }
    }
})();
