// This is a file copied by your subgenerator
/**
 * 默认的产品首页和默认的跳转规则
 */
define([
        '../states'
        , '../../cons/simpleCons'
        , '../../controllers/biz/supportController'
    ],
    function (stateModule, cons) {
        stateModule.config(
            ['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    $stateProvider
                        .state(cons.state.main + '.support', {
                            url: "/support",
                            templateProvider: function ($templateCache) {
                                return $templateCache.get('app/' + cons.main_path + 'container.html');
                            }
                        })
                        .state(cons.state.main + '.support.opencities', {
                            url: "/opencities/list.html",
                            templateProvider: function ($templateCache) {
                                return '<div hjm-grid modid="supportsCitiesList" config="config" columns="columns"></div>';
                            }
                        })
                        .state(cons.state.main + '.support.opencitiesadd', {
                            url: "/opencities/add.html",
                            controller: 'supports.opencitiesController',
                            templateProvider: function ($templateCache) {
                                return $templateCache.get('app/' + cons.biz_path + 'support/opencities.html');
                            }
                        })
                        .state(cons.state.main + '.support.version', {
                            url: "/version.html",
                            controller: 'supports.versionController',
                            templateProvider: function ($templateCache) {
                                return $templateCache.get('app/' + cons.biz_path + 'support/version.html');
                            }
                        })
                        .state(cons.state.main + '.support.upgrade', {
                            url: "/upgrade.html",
                            templateProvider: function ($templateCache) {
                                return '<div hjm-grid modid="supportUpgradeList" config="config" columns="columns"></div>';
                            }
                        })
                        .state(cons.state.main + '.support.upgradesAdd', {
                            url: "/upgradesAdd.html",
                            controller: 'supports.upgradesUpdateController',
                            templateProvider: function ($templateCache) {
                                return $templateCache.get('app/' + cons.biz_path + 'support/upgradesAdd.html');
                            }
                        })
                        .state(cons.state.main + '.support.upgradesUpdate', {
                            url: "/upgradesUpdate.html/:id",
                            controller: 'supports.upgradesUpdateController',
                            templateProvider: function ($templateCache) {
                                return $templateCache.get('app/' + cons.biz_path + 'support/upgradesAdd.html');
                            }
                        })
                }
            ])
        ;
    })
