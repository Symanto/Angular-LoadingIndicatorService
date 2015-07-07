# Angular-LoadingIndicatorService
## Installation
###Bower
The easiest way to install the HttpService is by including the bower package to your solution
```shell
bower install symanto-angular-loadingindicatorservice --save
```

## Configuration
The HttpService comes fully configured and runnable out of the box. The only thing you need to do is adding the LoadingIndicatorService to your root modules dependencies:
```javascript
angular.module("Application.Root", [
    "Symanto.LoadingIndicatorService"
]);
```
The LoadingIndicatorService is designed to operate in the background and updates the visibility property by itsself whenever needed. Therefore the best way to use it is bindig this variable to the visibility of the UI element that you want to show whenever the application is busy. To do so, we recommend the following steps:

####1. Resolve the indicatorVisibleStatus in your root state####
```javascript
$stateProvider.state('root', {
    controller: "RootController",
    templateUrl: "rootlayout.html",
    resolve: {
        loadingIndicatorState: function (LoadingIndicatorService) {
            return LoadingIndicatorService.getCurrentState();
        }
    }
})
```
#####2. Prepare the $scope inside your root controller
```javascript
angular.module("Root").controller("RootController", function ($scope, loadingIndicatorState) {
   $scope.loader = loadingIndicatorState;
});
```
#####3. Bind the visibility to your loading UI element
```html
<div ng-include="'loading_indicator.html'" ng-show="loader.visible"></div>
```

## Usage
Now you are ready to use the LoadingIndictator. Whenever you are performing an operation that needs a bit longer and you want to show the loading indicator UI-Element just call ```LoadingIndicator.startOperation();```. As soon as your operation has finished call ```LoadingIndicator.finishOperation();``` to tell the service, that you don't need the loading indicator anymore. Don't wonder if the UI element does not hide immediately! That just means, that other sources are still running and not every operation has been finished yet.

### Symanto Angular HttpService
If you use the [Symanto Angular HttpService][1], you can configure it sothat it automatically calls the loading indicator start and finish methods for you, sothat you don't need to call them before and after every http request by yourself.

[1]: https://github.com/Symanto/Angular-HttpService
