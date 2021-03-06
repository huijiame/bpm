// This is a file copied by your subgenerator
define([
    './../controllers'
    , '../../cons/simpleCons'
], function (mod, con) {
    mod.controller('web.updateController', updateController)

    updateController.$injector = ['$scope', '$http', '$rootScope', '$uibModal', '$state', '$stateParams', 'widget', '$filter', '$timeout'];
    function updateController($scope, $http, $rootScope, $uibModal, $state, $stateParams, widget, comfunc, $filter, $timeout) {
        $scope.param = {};
        $timeout(function () {
            $scope.param = {url: con.wx_domain+'/'};
        }, 0);

        $scope.$watch('param', function (val) {
            if(!$scope.param.url){
                return false;
            }
            if ($scope.param.url.indexOf('#!') > -1) {
                widget.msgToast('推广网址不能有 #! 等符号');
                $scope.param.full_url = ' ';
                return false;
            }
            if (!!val.url && !!val.utm_source) {
                val.utm_source = val.utm_source.replace(/_/g,'');
                var tmp = val.url.indexOf('?') > 0 ? '&' : '?';
                $scope.param.full_url = encodeURI(val.url + tmp +
                    'utm_source=' + val.utm_source +
                    '&utm_medium=' + (val.utm_medium || '') +
                    '&utm_campaign=' + (val.utm_campaign || ''));
            } else {
                $scope.param.full_url = ' ';
            }
        }, true);
        $scope.submit = function (status) {
            if ($scope.param.url.indexOf('#!') > -1 || $scope.param.full_url&&$scope.param.full_url.indexOf('#!') > -1) {
                widget.msgToast('推广网址不能有 #! 等符号');
                return false;
            }
            widget.ajaxRequest({
                url: '/markets/urls',
                method: 'POST',
                scope: $scope,
                data: $scope.param,
                success: function (json) {
                    widget.msgToast('保存成功！');
                    // $state.go(con.state.main + '.web.list');
                }
            })
        }
    };
});
