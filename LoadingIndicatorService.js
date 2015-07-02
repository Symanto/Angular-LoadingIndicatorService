var root = angular.module("Symanto.Loading");
root.service("LoadingIndicatorService", function () {
    var loadingIndicatorService = {
        "indicatorVisibleStatus": {
            "visible": false
        },
        "hideLoadingIndicator": function () {
            angular.extend(this.indicatorVisibleStatus, {
                "visible": false
            });
        },
        "showLoadingIndicator": function () {
            angular.extend(this.indicatorVisibleStatus, {
                "visible": true
            });
        },
        "getCurrentState": function () {
            return this.indicatorVisibleStatus;
        }
    };

    return loadingIndicatorService;
});