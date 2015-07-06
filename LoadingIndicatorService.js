angular.module("Symanto.LoadingIndicator", ["ui.router"]);

var loading = angular.module("Symanto.LoadingIndicator");

loading.service("LoadingIndicatorService", function () {

    var running = 0;
    var indicatorVisibleStatus = {
        "visible": false
    };

    /**
     * Starts an operation and shows the loading indicator if it was hidden
     */
    var startOperation = function() {
        // Increase the  number of running operations
        running ++;

        // Start the loading indicator only at the first one
        if (running > 0) {
            angular.extend(this.indicatorVisibleStatus, { "visible": true });
        }
    };

    /**
     * Finishes an operation and decides afterwards if the loading indicator is to hide
     */
    var finishOperation = function() {
        // When an operation is finished, it should be removed from the running sources
        running--;

        // Hide the loading indicator, if it was the last one.
        if (running == 0) {
            angular.extend(this.indicatorVisibleStatus, { "visible": false });
        }
    };

    /**
     * Gets the current loading indicator status
     * @returns {indicatorVisibleStatus}
     */
    var getCurrentState = function() {
        return this.indicatorVisibleStatus;
    };

    return {
        "startOperation": startOperation,
        "finishOperation": finishOperation,
        "getCurrentState": getCurrentState
    };
});