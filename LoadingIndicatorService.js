angular.module("Symanto.LoadingIndicator", ["ui.router"]);

var loading = angular.module("Symanto.LoadingIndicator");

loading.service("LoadingIndicatorService", function () {

    var running = 0;
    var indicatorVisibleStatus = {
        "visible": false
    };

    // Count the number of running oprations
    // Start the loading indicator only at the first one
    var startOperation = function() {
        running ++;

        if (running > 0) {
            angular.extend(this.indicatorVisibleStatus, { "visible": true });
        }
    };

    // When an operation is finished, it should be removed from the running sources
    // Hide the loading indicator, if it was the last one.
    var finishOperation = function() {
        running--;

        if (running == 0) {
            angular.extend(this.indicatorVisibleStatus, { "visible": false });
        }
    };

    var getCurrentState = function() {
        return this.indicatorVisibleStatus;
    };

    return {
        "indicatorVisibleStatus": indicatorVisibleStatus,
        "startOperation": startOperation,
        "finishOperation": finishOperation,
        "getCurrentState": getCurrentState
    };
});