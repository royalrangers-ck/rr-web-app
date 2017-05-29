(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationController', RegistrationController);

    function RegistrationController(countriesResponse, ranksResponse, Ranks, growl, $routeSegment, $location, RegistrationService) {
        const vm = this;

        vm.data = {};
        vm.availableOptions = [];
        vm.countries = [];
        vm.regions = [];
        vm.cities = [];
        vm.platoons = [];
        vm.sections = [];
        vm.ranks = [];

        vm.submit = submit;
        vm.getRegions = getRegions;
        vm.getCities = getCities;
        vm.getPlatoons = getPlatoons;
        vm.getSections = getSections;
        vm.getRanks = getRanks;

        activate();

        ////

        function activate() {
            if (countriesResponse.success) {
                vm.countries = countriesResponse.data;
            }

            if (ranksResponse.success) {
                vm.ranks = ranksResponse.data.reduce(function (ranks, rank) {
                    ranks.push({
                        value: rank,
                        name: Ranks[rank]
                    });
                    return ranks;
                }, []);
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
                authorityName: vm.data.authorityName,
                countryId: vm.data.country.id,
                regionId: vm.data.region.id,
                cityId: vm.data.city.id,
                platoonId: vm.data.platoon.id,
                sectionId: vm.data.section.id,
                userRank: vm.data.rank
            };

            RegistrationService.register(req, afterSave)
        }

        function getRegions(id) {
            if (id) {
                RegistrationService.region({countryId: id}).$promise.then((res) => {
                    if (res.success) {
                        vm.regions = res.data;
                    }
                })
            }
        }

        function getCities(id) {
            if (id) {
                RegistrationService.city({regionId: id}).$promise.then((res) => {
                    if (res.success) {
                        vm.cities = res.data;
                    }
                })
            }
        }

        function getPlatoons(id) {
            if (id) {
                RegistrationService.platoon({cityId: id}).$promise.then((res) => {
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
