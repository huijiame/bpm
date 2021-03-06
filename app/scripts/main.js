// (function () {
require.config({
    baseUrl: "scripts/",
    //skipDataMain: true,
    paths: {
        "jquery": "../vendor/jquery/jquery.min",
        //"domready":"../vendor/requirejs-domready/domReady",
        "angular": "../vendor/angular/angular.min",
        // "highcharts" : "../vendor/highcharts/highcharts",
        "ui.router": "../vendor/angular-ui-router/release/angular-ui-router.min",
        //"ui.select2":"../vendor/angular-ui-select2/src/select2",
        "ng.ueditor": "../vendor/angular-ueditor/dist/angular-ueditor.min",
        // "ZeroClipboard": "../vendor/zeroclipboard/ZeroClipboard",
        "angular-file-upload": "../vendor/angular-file-upload/angular-file-upload.min",
        "bindonce": "../vendor/angular-bindonce/bindonce.min",
        "ab-base64": "../vendor/angular-utf8-base64/angular-utf8-base64.min",
        //"snap":  "../vendor/Snap.svg/dist/snap.svg-min",
        //"me-pageloading":  "../vendor/me-pageloading/me-pageloading",
        "ui.bootstrap": "../vendor/angular-bootstrap/ui-bootstrap-tpls.min",
        // "angular-async-loader": "../vendor/angular-async-loader/src/angular-async-loader",
        //"ui.bootstrap":"../vendor/bootstrap/ui-bootstrap-tpls.min",
        // "twitter": "../vendor/bootstrap/bootstrap.min",
        //"highcharts":"../vendor/highcharts/highcharts",
        //"app": "./app",
        // "ngSanitize": "../vendor/angular-sanitize/angular-sanitize.min",
        // "ngCsv": "../vendor/ng-csv/build/ng-csv",
        "perfect-scrollbar": "../vendor/perfect-scrollbar/min/perfect-scrollbar.min",
        // "perfectScrollbarjquery": "../vendor/perfect-scrollbar/js/perfect-scrollbar",
        "perfect_scrollbar": "../vendor/angular-perfect-scrollbar/src/angular-perfect-scrollbar",
        "angular-loading-bar": "../vendor/angular-loading-bar/build/loading-bar.min",
        "progressButton": "../vendor/angular-progress-button/dist/progress-button.min",
        "angular-animate": "../vendor/angular-animate/angular-animate.min",
        "angular-truncate": "../vendor/angular-truncate/src/truncate",
        "angucomplete-alt": "../vendor/angucomplete-alt/dist/angucomplete-alt.min", // 订单的修改收货地址  使用
        "angular-aria": "../vendor/angular-aria/angular-aria.min", //
        "angular-mocks": "../vendor/angular-mocks/angular-mocks", // mocks 数据 为令军需要的功能
        "dndLists": "../vendor/angular-drag-and-drop-lists/angular-drag-and-drop-lists.min", //
        "app-tpl": "./app-tpl",
        "ng.simditor": "../vendor/ng.simditor/src/ng-simditor", // 自定义了
        "simple-module": "../vendor/simple-module/lib/module",
        "hotkeys": "../vendor/simple-hotkeys/lib/hotkeys",
        "simditor": "../vendor/simditor/lib/simditor",
        "simple-uploader": "../vendor/simple-uploader/lib/uploader",
    },
    shim: {
        // "jquery": {exports: "jquery"},
        // "twitter": {deps: ["jquery"]},
        "angular": {
            exports: "angular",
            deps: ["jquery"]
        },
        // "ZeroClipboard": {deps: ["angular"]},
        "dndLists": {deps: ["angular"]},
        "angular-animate": {deps: ["angular"]},
        "angucomplete-alt": {deps: ["angular"]},
        "angular-aria": {deps: ["angular"]},
        "angular-mocks": {deps: ["angular"]}, // angular-mocks
        "angular-truncate": {deps: ["angular"]},
        "ui.bootstrap": {deps: ["angular"]},
        "app-tpl": {deps: ["angular"]},
        "ng.simditor": {deps: ["angular", "simple-module", "hotkeys", "simditor", "simple-uploader"]},
        // "perfect-scrollbar": {exports: "perfect-scrollbar"},
        "perfect_scrollbar": {deps: ["angular", "perfect-scrollbar"]},
        "angular-loading-bar": {deps: ["angular"]},
        // "ladda": {exports: ["ladda"]},
        // "spin": {exports: ["spin"]},
        "progressButton": {deps: ["angular"]},
        //"highcharts": {deps: ["jquery"]},
        "angular-file-upload": {deps: ["angular"]},
        // "angular-async-loader": {deps: ["angular"]},
        "bindonce": {deps: ["angular"]},
        "ab-base64": {deps: ["angular"]},
        //"ui.select2": { deps: ["angular"]},
        "ng.ueditor": {deps: ["angular"]},
        "ui.router": {deps: ["angular"]},
        // "ngSanitize": {deps: ["angular"]},// 使用csv
        // "ngCsv": {deps: ["angular"]}, // 使用csv 到处excle 表格
    },
});
// require(["bootstrap"]); //  这里不能直接加载 因为要先加载玩main.min.js才能执行 否则会找不到对应的模块文件
// })();